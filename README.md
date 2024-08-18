
# Dash_Crypto_App
## Project Overview

The DASH Crypto App is a decentralized application (dApp) that enables users to engage in cryptocurrency transactions. The project is built using modern web technologies and blockchain frameworks. The frontend is developed with React and Tailwind CSS, while the backend smart contracts are written in Solidity and deployed on the Ethereum network.

## Screenshots

![Screenshot_Dash](https://github.com/user-attachments/assets/21103fd6-4f88-46e5-a626-9d7853171413)

![App Screenshot](https://github.com/Yash123456789000/Dash_Crypto_App/blob/main/Frontend/images/Screenshot_services.png?raw=true)
## Features

- Real-time Exchange: View and exchange cryptocurrencies in real-time.
![App Screenshot](https://github.com/Yash123456789000/Dash_Crypto_App/blob/main/Frontend/images/Screenshot_exchange.png?raw=true)
- Transaction History: Detailed transaction logs for user activities.
![App Screenshot](https://github.com/Yash123456789000/Dash_Crypto_App/blob/main/Frontend/images/Screenshot_transaction.png?raw=true)
- Responsive Design: A clean, responsive interface built with Tailwind CSS.
- Smart Contracts: Solidity-based smart contracts for handling crypto transactions.
![App Screenshot](https://github.com/Yash123456789000/Dash_Crypto_App/blob/main/Frontend/images/Screenshot_transaction.png?raw=true)

## Installation

### Prerequisites:
- Node.js (v14 or higher)
- npm or Yarn
- Hardhat (for smart contract development)
- MetaMask (for Ethereum wallet integration)

### Important Notice
The project does not include the node_modules directory. You need to install all the necessary dependencies before running the project. Below is the list of modules that need to be installed for both the frontend and smart contract components.

### Frontend Setup

- Clone the repository
```bash
  git clone https://github.com/yourusername/DASH-Crypto-App.git
  cd DASH-Crypto-App/Frontend
```

- Install the required dependencies:
```bash
  npm install react react-dom vite tailwindcss autoprefixer postcss
```
- Create a .env file in the Frontend directory and configure the environment variables as required.
- Start the development server:
```bash
  npm run dev
```
- Open your browser and navigate to http://localhost:3000 to view the app.

### Smart Contract Setup
- Navigate to the Smart Contract directory:
```bash
    cd DASH-Crypto-App/Smart_Contract
```
- Install the necessary dependencies:
```bash
    npm install hardhat ethereum-waffle chai ethers
```
- Compile the smart contracts:
```bash
    npx hardhat compile
```
- Deploy the smart contracts to a local blockchain network:
```bash
    npx hardhat node
    npx hardhat run scripts/deploy.js --network localhost
```
- Connect the deployed smart contract with the frontend by updating the contract address and ABI in the TransactionContext.jsx file.

## Usage
- Once the project is running, you can interact with the dApp by connecting your Ethereum wallet (e.g., MetaMask) and performing cryptocurrency transactions.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.


## Demo

https://66c20decb5731ca3c2cdc142--voluble-daifuku-5daed0.netlify.app/

