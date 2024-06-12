# G-Naira Interface

Welcome to the G-Naira (gNGN) Interface project! This project provides a user-friendly interface for interacting with the G-Naira smart contracts using Next.js and ethers.js. With this interface, you can mint, burn, and blacklist addresses for the G-Naira token, all from the comfort of your web browser. Let's dive in!

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Usage](#usage)
  - [Mint Tokens](#mint-tokens)
  - [Burn Tokens](#burn-tokens)
  - [Blacklist Address](#blacklist-address)
- [Contributing](#contributing)
- [License](#license)

## Introduction
G-Naira (gNGN) is a blockchain-based token implemented on the Ethereum network. This project consists of two main components:

1. **GNaira Smart Contract**: Manages the G-Naira token with minting, burning, and blacklisting functionalities.
2. **Multi-Signature Wallet**: Ensures secure approval and execution of critical operations.

This repository provides a Next.js frontend to interact with these contracts, making it easy to manage your G-Naira tokens.

## Features
- **Mint Tokens**: Create new gNGN tokens and assign them to an address.
- **Burn Tokens**: Destroy gNGN tokens from an address.
- **Blacklist Address**: Prevent an address from sending or receiving gNGN tokens.

## Getting Started

### Prerequisites
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v14 or higher)
- [MetaMask](https://metamask.io/) (for interacting with the Ethereum network)

### Installation
1. Clone this repository:
   \`\`\`bash
   git clone https://github.com/AlPascal1010/gnaira-interface.git
   cd gnaira-interface
   \`\`\`

2. Install the necessary dependencies:
   \`\`\`bash
   npm install
   \`\`\`

### Running the Application
1. Start the Next.js development server:
   \`\`\`bash
   npm run dev
   \`\`\`

2. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Mint Tokens
1. Open the G-Naira Interface in your browser.
2. In the "Mint Tokens" section, enter the recipient's address and the amount of gNGN tokens to mint.
3. Click the "Mint" button and confirm the transaction in MetaMask.

### Burn Tokens
1. Open the G-Naira Interface in your browser.
2. In the "Burn Tokens" section, enter the address and the amount of gNGN tokens to burn.
3. Click the "Burn" button and confirm the transaction in MetaMask.

### Blacklist Address
1. Open the G-Naira Interface in your browser.
2. In the "Blacklist Address" section, enter the address to blacklist.
3. Click the "Blacklist" button and confirm the transaction in MetaMask.

## Contributing
Contributions are welcome! If you have any ideas, suggestions, or improvements, feel free to open an issue or submit a pull request.

---

[GNaira etherscan link) (https://sepolia.etherscan.io/address/0xe99fd05990b56bed58f76dd9b099f808d77f9db2)
[MultiSigWallet etherscan link] (https://sepolia.etherscan.io/address/0xe99fd05990b56bed58f76dd9b099f808d77f9db2)