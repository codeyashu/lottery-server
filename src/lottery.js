// Create local instance of deployed contract 

import web3 from './web3';

// Copy contract interface (ABI) and contract address from
// deployed lottery contract and paste in here

const address = '0x4EC19CF2bDF45AF840EF3362E160fA2b75487988';

const abi = [
    {
        "constant": true, "inputs": [], "name": "manager", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function"
    },
    {
        "constant": false, "inputs": [], "name": "pickWinner", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function"
    },
    {
        "constant": true, "inputs": [], "name": "getPlayers", "outputs": [{ "name": "", "type": "address[]" }], "payable": false, "stateMutability": "view", "type": "function"
    },
    {
        "constant": false, "inputs": [], "name": "enter", "outputs": [], "payable": true, "stateMutability": "payable", "type": "function"
    },
    {
        "constant": true, "inputs": [{ "name": "", "type": "uint256" }], "name": "players", "outputs": [{ "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function"
    },
    {
        "inputs": [], "payable": false, "stateMutability": "nonpayable", "type": "constructor"
    }
];

// Use address and abi to create local contract instance using web3 library
// This local copy acts as abstraction of deployed contract

export default new web3.eth.Contract(abi, address);
