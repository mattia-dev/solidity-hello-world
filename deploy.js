// interface = ABI code
// provider = use infura to access test newtorks or main network
// Web3 = web3 constructor
// web3 = web3 instance of, generated passing the provider to the web3 constructor

const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'dance popular hand section figure useless deliver fine project leg canal scissors',
    'https://rinkeby.infura.io/v3/bdfcc9232f1f483395a1295d904709ca'
);
const web3 = new Web3(provider); // instance ready: we have unlocked an account and specified the network it needs to connect to via Infura

const deploy = async() => {
    const accounts = await web3.eth.getAccounts(); // get the list of account unlocked through our wallet provider

    console.log('Attempting to deploy from account ', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface)) // result = instance of our contract
        .deploy({ data: bytecode, arguments: ['Hi there!'] }) // object containing bytecode and the initial arguments we want to pass to the contract (listed in an array)
        .send({ gas: '1000000', gasPrice: '5000000000', from: accounts[0] });

        console.log('Contract deployed to ', result.options.address) // we need somehow on which account the contract has been deployed
};
deploy();

// contract address: 0x278B7dCdF59c79b277202E86dEcb8477889400a4