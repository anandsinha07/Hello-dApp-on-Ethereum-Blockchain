const Migrations = artifacts.require("Migrations");
const HelloContract = artifacts.require("HelloContract.sol");
var Web3 = require('web3');
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

module.exports = function(deployer) {
    
  web3.personal.unlockAccount(web3.eth.accounts[0], "passphrase");    
  deployer.deploy(Migrations);    
  deployer.deploy(HelloContract);
    
};
