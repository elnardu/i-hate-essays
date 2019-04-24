const axios = require('axios');

const User = require('./models/User'),
  Doc = require('./models/Doc');

const prediction_service_endpoint = process.env.PREDICTION_SERVICE_ENDPOINT;

var available_predictors = [];
axios.get(prediction_service_endpoint + '/api/list_predictors').then((res) => {
  available_predictors = res.data;
}).catch((err) => {
  console.warn("Failed to get available_predictors. Make sure that your PREDICTION_SERVICE_ENDPOINT is correct");
});

function load_new_predictions(change, prediction_ready_cb) {
  for (var predictor of available_predictors) {
    axios.post(prediction_service_endpoint + '/api/predict', {
      'predictor': predictor,
      'text': change.text,
      'cursor': change.cursor
    }).then((res) => {
      if (res.data) {
        let processed_predictions = [];
        for (var prediction of res.data) {
          if (!prediction) continue;

          processed_predictions.push({
            'text': prediction,
            'predictor': predictor
          })
        }
        prediction_ready_cb(processed_predictions);
      }
    });
  }
}

module.exports = function (socket) {
  console.log('New connection');

  console.log(socket.handshake.session);
  if (!socket.handshake.session.passport || !socket.handshake.session.passport.user) {
    socket.disconnect();
    console.log('No auth. Disconnecting')
    return;
  }

  let current_user;

  User.findById(socket.handshake.session.passport.user).then((user) => {
    current_user = user;
  }).catch((err) => {
    console.error(err);
    socket.disconnect();
  });

  let current_document;

  socket.on('set_current_document', (doc_id) => {
    // TODO: validate document owner

    Doc.findById(doc_id).then((doc) => {
      current_document = doc;
      socket.emit('update_text', doc.text);
      console.log(doc)
    })
  })

  var currentChange = null;
  socket.on('text_change', (change) => {
    let new_predictions = [];
    currentChange = change;

    console.log(change);
    load_new_predictions(change, (predictions) => {
      console.log(predictions)
      if (currentChange == change) {
        new_predictions = new_predictions.concat(predictions);
        socket.emit('update_predictions', new_predictions);
      }
    });

    current_document.text = change.text;
    current_document.save();
  })
} 