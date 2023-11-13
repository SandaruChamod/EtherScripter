var express = require('express');
require('dotenv').config();
var router = express.Router();

const EtherScripterService = require('../services/EtherScripterService');
const { htmlResponse } = require('../constants');

router.get('/', async function (req, res) {
	try {
		res.status(200).send(htmlResponse);
	} catch (err) {
		res.status(500).send('Internal server error!');
	}
});

router.get('/test/:address', async function (req, res) {
	try {
		const address = req.params.address;
		await EtherScripterService.incrementCount(address);
		console.log('Success! Check count property of your smart contract!');
	} catch (err) {
		res.status(500).send('Internal server error!');
	}
});

module.exports = router;
