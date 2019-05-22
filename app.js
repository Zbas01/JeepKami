var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors = require('cors')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'frontend-root')));

//CORS
/* var whitelist = ['*'];
var corsOptions = {
	origin: function (origin, callback) {
		if (whitelist.indexOf(origin) !== -1 || whitelist.indexOf('*')) {
			callback(null, true)
		} else {
			console.log(origin);
			callback(new Error('Not allowed by CORS'))
		}
	}
};
app.use(cors(corsOptions)); */

//Unica ruta
app.use('/', require('./routes/index'));

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	res.status(403).end();
});

module.exports = app;