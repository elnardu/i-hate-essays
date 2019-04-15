const morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = require('express')(),
    server = require('http').Server(app),
    io = require('socket.io')(server);

require('dotenv').config();

const handleSocketIoConnection = require('./socket_io_handlers'); 

app.set('secret', process.env.SECRET);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan());

// Allow CORS
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

io.on('connection', handleSocketIoConnection);

// Backend API routes
// const apiRouter = require('./src/server/routes/api.js');
// app.use('/api', apiRouter);

// Frontend endpoints
// app.use(express.static(__dirname + "/dist"));
// app.use('/', express.static(__dirname + "/dist"));
// // Catch all for frontend routes
// app.all('/*', function(req, res) {
// 	res.sendFile(path.join(__dirname, '/dist', '/index.html'));
// });

const PORT = process.env.PORT;
server.listen(PORT);
console.log("Started on port " + PORT);

// //  Connection to MongoDB
// const DATABASE = process.env.MONGODB_URI;


// mongoose.Promise = global.Promise;
// mongoose.connect(DATABASE, { useNewUrlParser: true })
// 	.then(res => {
// 		console.log(chalk.green('Connected to MongoDB: ' + DATABASE));
// 	}).catch(err => {
// 		console.log(chalk.red('Error connecting to MongoDB: ' + err));
// 	}
// );
