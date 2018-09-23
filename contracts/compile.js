const path = require('path');
const fs = require('fs');
const solc = require('solc');

const web3 = require('web3');





const inboxPath = path.resolve(__dirname,'inbox.sol');
const source = fs.readFileSync(inboxPath,'utf8');




// console.log((solc.compile(source,1)).contracts[':Inbox']);
module.exports = solc.compile(source,1).contracts[':Inbox'];
//module.exports = (solc.compile(source,1)).contracts[':Inbox'];
