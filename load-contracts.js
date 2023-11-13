const fs = require('fs');
const contract = require('@truffle/contract');

const loadContract = async (name, provider) => {
	let rawdata = fs.readFileSync(`./public/contracts/${name}.json`);
	let contractJSON = JSON.parse(rawdata);

    const _contract = contract(contractJSON);
    _contract.setProvider(provider);
    
    let deployedContract = null;
    try {
        deployedContract = await _contract.deployed();
    } catch {
        console.error('You are connected to the wrong network');
    }

    return deployedContract;
};

module.exports = { loadContract };
