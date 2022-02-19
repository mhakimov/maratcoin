const {Blockchain, Transaction} = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');


const myKey = 
ec.keyFromPrivate('b19fc4629f8b6c362594a3da0dba38eace7f82d0a3a354cdf640165d1c64ef0c');
const myWalletAddress = myKey.getPublic('hex');



let maratCoin = new Blockchain();
const tx1 = new Transaction(myWalletAddress, 'public key goes here', -10);
tx1.signTransaction(myKey);
maratCoin.addTransaction(tx1);
console.log("starting miner...");
maratCoin.minePendingTransactions(myWalletAddress);
console.log("Marats balance is: ", maratCoin.getBalanceOfAddress(myWalletAddress));
console.log("Is blockchain valid: " + maratCoin.isChainValid());

maratCoin.chain[1].transactions[1].amount = 1000;
console.log("Is blockchain valid: " + maratCoin.isChainValid());

//maratCoin.createTransaction(new Transaction("addr1", "addr2", 100));
//maratCoin.createTransaction(new Transaction("addr2", "addr1", 70));
// console.log("starting miner...");
// maratCoin.minePendingTransactions("marat address");
// console.log("Marats balance is: ", maratCoin.getBalanceOfAddress("marat address"));

// console.log("starting miner...");
// maratCoin.minePendingTransactions("marat address");
// console.log("Marats balance is: ", maratCoin.getBalanceOfAddress("marat address"));



// console.log("mining...")
// maratCoin.addBlock(
//     new Block(1, "07/02/2022", {amount:4})
// )
// console.log("mining...")
// maratCoin.addBlock(
//     new Block(2, "08/02/2022", {amount:84})
// )

// console.log(JSON.stringify(maratCoin, null, 4))
// console.log("Is blockchain valid: " + maratCoin.isChainValid());

// maratCoin.chain[1].data = {amount: 599};
// maratCoin.chain[1].hash = maratCoin.chain[1].calculateHash();
// console.log("Is blockchain valid: " + maratCoin.isChainValid());
