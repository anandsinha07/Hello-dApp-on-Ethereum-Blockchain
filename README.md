# Hello-dApp-on-Ethereum-Blockchain
# Maintained by Anand Sinha @anandsinha07
Build Your First Smart Contract in Solidity and Truffle based on Ethereum Blockchain, a basic 'Hello World' dApp.

#**Before using the application you need to have certain tools and packages installed on your local machine**

1. Install go-ethereum on your machine or Geth. You can refer [this](https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum) for instructions.
2. Install NodeJS on your local machine. You can refer this [this](https://nodejs.org/en/) for further instructions.
3. Install Truffle on your local machine by running **npm install -g truffle**

#**Creating a Private Single Geth Node**

1. Create folder for chain data:
**mkdir datadir**

2. Initialize Blockchain network and create genesis block:

**geth --datadir ./datadir init init.json**

3. Start blockchain network and expose useful RPC APIs:

**geth --datadir ./datadir --networkid 2019 --rpc --rpcport 8545 --rpcaddr 127.0.0.1 --rpccorsdomain "*" --rpcapi "eth,net,web3,personal,miner"**

#**Attaching to Geth IPC**
Open new terminal and enter following commands:-

**geth attach ./datadir/geth.ipc**

->personal.newAccount()   #create password and remember to edit 1_initial_migration.js file accordingly found in migrations folder

->eth.accounts            #view accounts

->miner.start()

#**Deploy Smart Contracts on to Blockchain**

Run the following commands on the new terminal in project root directory:

Compile Smart Contracts **truffle compile**

Migrate Smart Contracts to the Geth Node **truffle migrate**

#**Starting Node Application**
Open new terminal in project root directory:-

Run **npm start** on your terminal. The application should start on port 3000. View the application in your favourite browser using url: *http://127.0.0.1:3000*
