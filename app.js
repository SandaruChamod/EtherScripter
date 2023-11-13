var express = require('express');
var app = express();
const cors = require('cors');

app.use(express.json());
app.use(
	cors({
		origin: '*',
	})
);

/**
 * Controllers
 */
var EtherScripterController = require('./controllers/EtherScripterController.js');

/**
 * Define controllers
 */
app.use(`${process.env.API_PREFIX}/etherScripter`, EtherScripterController);

module.exports = app;
