require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/EkWKKQU8ZQKqToUzB9LxmlNxDXG-z6Jl',
      accounts: ['0bac540a947e1ee44e947ef952a37ee73d860e7867f52891384d0ef4a84fa53c'],
    },
  },
};