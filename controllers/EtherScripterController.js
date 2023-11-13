var express = require('express');
require('dotenv').config();
var router = express.Router();

router.get('/', async function (req, res) {
	try {
		const htmlResponse = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Your EtherScripter App</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 100vh;
                    margin: 0;
                    background-color: #282c34; /* Dark background color */
                    color: #61dafb; /* Blue text color */
                }

                .container {
                    text-align: center;
                }

                h1 {
                    color: #61dafb; /* Blue heading color */
                    margin-bottom: 16px;
                }

                p {
                    color: #fff; /* White paragraph color */
                    font-size: 18px;
                }

                button {
                    background-color: #61dafb; /* Blue button color */
                    color: #fff; /* White button text color */
                    padding: 10px 20px;
                    font-size: 16px;
                    cursor: pointer;
                    border: none;
                    border-radius: 5px;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Welcome to Your EtherScripter App</h1>
                <p>Get ready to build something amazing!</p>
            </div>
        </body>
        </html>
        `;
		res.status(200).send(htmlResponse);
	} catch (err) {
		res.status(500).send('Internal server error!');
	}
});

module.exports = router;
