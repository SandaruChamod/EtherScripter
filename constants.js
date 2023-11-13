const htmlResponse = `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EtherScripter</title>
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
            position: relative;
        }

        #logo-container {
            position: absolute;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            text-align: center;
            padding-bottom: 20rem;
        }

        #logo {
            width: 100px; /* Adjust the width as needed */
            height: auto; /* Maintain aspect ratio */
            display: block;
            margin: 0 auto;
        }

        #app-name {
            color: #fff; /* White text color for app name */
            margin-top: 5px;
            font-size: 18px;
        }

        h1 {
            color: #61dafb; /* Blue heading color */
            margin-top: 100px; /* Adjusted margin */
            margin-bottom: 16px;
        }

        p {
            color: #fff; /* White paragraph color */
            font-size: 18px;
        }

        input {
            width: 20rem;
        }

        input,
        button {
            padding: 10px; /* Adjusted padding for both input and button */
            margin-bottom: 16px;
            border-radius: 5px;
            border: 1px solid #61dafb; /* Blue border color */
            box-sizing: border-box; /* Ensures padding is included in the total height */
        }

        button {
            background-color: transparent;
            color: #fff; /* White button text color */
            font-size: 16px;
            cursor: pointer;
        }

        #instructions {
            margin-top: 30px; /* Added margin to separate instructions from the form */
            color: whitesmoke; /* Whitesmoke text color for instructions */
            text-align: left; /* Left-align instructions */
        }

        #instructions ol {
            list-style-position: inside; /* Place list markers inside the list items */
            padding-left: 0; /* Remove default left padding for ordered list */
        }

        #welcome-banner {
            padding-top: 2rem;
        }
    </style>
</head>

<body>
    <div class="container">
        <div id="logo-container">
            <!-- Add the logo on top -->
            <img src="https://i.ibb.co/m9P1sB8/icosahedron-1.png" alt="Logo" id="logo">
        </div>

        <h1 id="welcome-banner">Welcome to Your EtherScripter App</h1>
        <p>Get ready to build something amazing!</p>
        <input type="text" id="userAddress" placeholder="Enter Address">
        <button id="testContractButton">Test Contract</button>
        <div id="instructions">
            <p><strong>To test your smart contract, please follow the instructions below:</strong></p>
            <ol>
                <li>Download Ganache, a private development blockchain, by visiting <a
                        href="https://trufflesuite.com/ganache" target="_blank">https://trufflesuite.com/ganache</a>.</li>
                <li>Open Ganache and start a new workspace by pointing to your truffle-config.js file in the root
                    directory.</li>
                <li>Compile the smart contract using 'truffle compile'.</li>
                <li>Deploy the smart contract using 'truffle migrate'.</li>
                <li>Go to the 'Accounts' tab in Ganache, copy one of the development addresses, and paste it into the
                    address input.</li>
                <li>Once you press the 'Test Contract' button, you will see that the count value of the smart contract
                    will increase.</li>
                <li>Done and dusted!</li>
            </ol>
        </div>
    </div>

    <script>
        // Add an event listener to the button
        document.getElementById('testContractButton').addEventListener('click', async function () {
            try {
                // Get user-entered address
                const userAddress = document.getElementById('userAddress').value;

                // Check if user has provided an address
                if (!userAddress) {
                    alert('Please enter an address before testing the contract.');
                    return;
                }

                // Make a fetch request to the API endpoint with user's address
                const response = await fetch('http://localhost:4000/api/v1/etherScripter/test/' + userAddress);
                console.log("Success! Check count property of your smart contract!")

                // Check if the response is successful (status code 200)
                if (response.ok) {
                    // Parse the response JSON if applicable
                    const result = await response.json();
                } else {
                    console.error('Error:', response.statusText);
                }
            } catch (error) {
                console.error('Error:', error.message);
            }
        });
    </script>
</body>

</html>
`;

module.exports = { htmlResponse };
