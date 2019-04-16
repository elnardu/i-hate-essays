const axios = require('axios');

const prediction_service_endpoint = process.env.PREDICTION_SERVICE_ENDPOINT;

var available_predictors = [];
axios.get(prediction_service_endpoint + '/api/list_predictors').then((res) => {
    available_predictors = res.data;
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

    // socket.emit('update_predictions', [
    //     'lol', 'kek'
    // ])

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
    })
} 