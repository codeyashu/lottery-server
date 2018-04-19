// Create local instance of deployed contract 

import web3 from './web3';

// Copy contract interface (ABI) and contract address from
// deployed lottery contract and paste in here

const address = ' ';

const abi = [];

// Use address and abi to create local contract instance using web3 library
// This local copy acts as abstraction of deployed contract

export default new web3.eth.Contract(abi, address);
