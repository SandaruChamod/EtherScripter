const EtherScripter = artifacts.require("EtherScripter");

module.exports = function (deployer) {
  deployer.deploy(EtherScripter);
};
