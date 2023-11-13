var Web3 = require('web3');
const { loadContract } = require('../load-contracts');

/**
 * Init web3 provider
 */
const provider = new Web3.providers.HttpProvider(
	process.env.RPC_SERVER_ENDPOINT
);

/**
 * Init web3
 */
let web3 = new Web3(provider);

/**
 * Load contract
 */
let contract = null;
(async () => {
	contract = await loadContract('EtherScripter', provider);
})();

/**
 * Responsible for making request to update count on network.
 * @param {*} data
 * @returns
 */
const incrementCount = async (address) => {
	const user = await contract.addCount({
		from: address,
	});
	return user;
};

module.exports = {
	incrementCount,
};
