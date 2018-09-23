const assert = require('assert');
const ganache = require('ganache-cli');

const Web3 = require('web3');


const web3 = new Web3(ganache.provider());
const {interface, bytecode} = require('../contracts/compile');

let accounts;
let inbox;
beforeEach(async () =>{
    // Get a list of all account
   
   accounts = await web3.eth.getAccounts();
  inbox = await new web3.eth.Contract(JSON.parse(interface))
   .deploy({data: bytecode, arguments: ['hi']})
   .send({from: accounts[0],gas: '1000000'})

   

});
describe('Inbox', ()=>{
    it('deploy a contract',()=>{
        assert.ok(inbox.options.address);
        console.log(inbox.options.address);
        console.log('balance  '  +  (web3.eth.getBalance(accounts[0])));
    });
});