const morgan = require('morgan'),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  app = require('express')(),
  server = require('http').Server(app),
  io = require('socket.io')(server),
  express = require('express');

const path = require('path');
require('dotenv').config();

const handleSocketIoConnection = require('./socket_io_handlers');

app.set('secret', process.env.SECRET);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan());

if (process.env.NODE_ENV == 'development') {
  // Allow CORS
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
}

//  Connection to MongoDB
const DATABASE = process.env.MONGODB_URI;

mongoose.Promise = global.Promise;


var connectWithRetry = function () {
  mongoose.connect(DATABASE, { useNewUrlParser: true })
    .then(res => {
      console.log('Connected to MongoDB: ' + DATABASE);
    }).catch(err => {
      console.log('Error connecting to MongoDB: ' + err);
      setTimeout(connectWithRetry, 5000);
    });
};
connectWithRetry();

const session = require('express-session'),
  MongoStore = require('connect-mongo')(session),
  sharedsession = require("express-socket.io-session")

const session_middleware = session({
  secret: process.env.SECRET,
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  maxAge: 60000
});

app.use(session_middleware);
io.use(sharedsession(session_middleware));

const passport = require('passport'),
  GitHubStrategy = require('passport-github').Strategy;

const User = require('./models/User');

app.use(passport.initialize());
app.use(passport.session());

passport.use(new GitHubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackURL: process.env.GITHUB_CALLBACK_URL
},
  function (accessToken, refreshToken, profile, cb) {
    console.log(profile);
    User.findOne({ github_id: profile.id }).then((user) => {
      if (!user) {
        let user = new User({
          github_id: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value
        });
        user.save();
        console.log(user);
        cb(null, user);
      } else {
        cb(null, user);
      }
    }).catch((err) => {
      cb(err, null);
    })
  }
));

passport.serializeUser(function (user, done) {
  done(null, user._id.toString());
});

passport.deserializeUser(function (user_id, done) {
  User.findById(user_id, function (err, user) {
    done(err, user);
  });
});

app.get('/auth/github',
  passport.authenticate('github'));

app.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  });

app.get('/auth/me', (req, res) => {
  if (req.user) {
    res.json({
      'name': req.user.name,
      'success': true
    })
  } else {
    res.json({
      'success': false
    })
  }
})

app.get('/auth/logout', (req, res) => {
  req.session.destroy();
  res.redirect('/');
})


function ensureAuth(req, res, next) {
  if (!req.isAuthenticated || !req.isAuthenticated()) {
    res.status(401);
    return res.json({
      'success': false
    });
  }
  next();
}

// Backend API routes
const api_router = require('./routes/api.js');
app.use('/api', ensureAuth, api_router);

// Frontend endpoints
app.use(express.static(__dirname + "/dist"));
app.use('/', express.static(__dirname + "/dist"));
// Catch all for frontend routes
app.all('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist', '/index.html'));
});


const PORT = process.env.PORT;
server.listen(PORT);
console.log("Started on port " + PORT);

io.on('connection', handleSocketIoConnection);

app.get('/', (req, res) => {
  res.json(req.isAuthenticated());
})