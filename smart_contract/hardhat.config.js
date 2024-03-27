require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.24',
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/K488TbE__EbLTaO_F5IRnVO9a1cuwAmN',
      accounts: ['cb56fc40cfb904056078ecac610e64a97f8e490eab1c28f5bfc662b33f800cad']
    }
  }
};