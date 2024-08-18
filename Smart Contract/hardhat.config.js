// https://eth-mainnet.g.alchemy.com/v2/eaYX3IA62Za4yZm6vEECpKaNAIRG7fXB

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/eaYX3IA62Za4yZm6vEECpKaNAIRG7fXB',
      accounts: ['23cce467d2f139a482f6640ee7f0b53c824c5215d13e7c0e62cd7948f994b2cb'],
    },
  },
};