# BlockFeed

BlockFeed is a decentralized social media, video-sharing app that allows users to create, watch, like, comment, buy and share videos shot on mobile devices or webcams. The video will be minted as NFT and posted, and can be bought by another user. Users are also rewarded with 0.025 of our VID token each time they post a video.

# 🛠 Technology Stack & Tools

- Solidity (Writing Smart Contract)
- Javascript (NextJs & Unit Testing)
- Ethers JS (Blockchain Interaction)
- Hardhat (Smart Contract Development Framework)
- Livepeer (Video storage && player)
- Web3.storage - IPFS (NFT File Storage)
- Polygon Mumbai (Blockchain network)

# ⛓ Blockchain Protocol used

- ERC-20 standard
- ERC-721 standard

# ⚙ Requirements For Initial Setup
- Install NodeJS, should work with any node version below 18.12.1
- Install Hardhat in your terminal. You can check to see if you have hardhat by running `npx hardhat`. To install hardhat, run `npm install --save-dev hardhat`.

# 🚀 Quick Start

📄 Clone or fork BlockFeed:

```
https://github.com/Shyenn-THS/BlockFeed.git
```
💿 Install all dependencies:

```
$ cd BlockFeed
$ npm install
```

# 🎗 Add enviroment varibles

Rename the file `env.local.example` to `env.local`

Add all the required enviroment varibles in the file

```
NEXT_PUBLIC_SANITY_TOKEN = //Your Sanity.io API Token
NEXT_PUBLIC_GOOGLE_API_TOKEN= //Your Google Auth Client ID  
NEXT_PUBLIC_BASE_URL= http://localhost:3000
NEXT_PUBLIC_CONTRACT_ADDRESS= //Your Deployed Contract Address
NEXT_PUBLIC_API_KEY = //Your Livepeer API Key
NEXT_PUBLIC_INFURA_FILECOIN_PROJECT_ID= //Your Infura Filecoin Project ID
NEXT_PUBLIC_INFURA_FILECOIN_PROJECT_SECRET= //Your Infura Filecoin Project Secret
```

# 🚴‍♂️ Run your App:

```
npm run dev
```

- Note :- This app was deploy to Polygon Mumbai testnet, so you need to connect your Metamask wallet to  Polygon Mumbai testnet before you can Interact with the app.

# 📄 interacting with the Smart-contract

Rename the file `env.example` to `env`

Add all the required enviroment varibles in the file

```
API_KEY =     //PolygonScan API_KEY
PrivateKey =  // Metamask PrivateKey
ProjectID =   // Quick Node RPC Endpoint
```

# 🛠 Test the Smart-contract:

```
npx hardhat test
```

# 🎗 Compile the Smart-contract:

```
npx hardhat compile
```
# 🔗 Deploy the Smart-contract:

```
npx hardhat run --network mumbai scripts/deploy.js
```

# 📄 Smart-contract address

```
0x994b2e3BB8aff320FA6bA4f94f1F83A54f221bc0
```

# 📄 VID token Smart-contract address

```
0x68C803ffFA4f6cfd41A56bE81b2f7F7FCdC1F236
```

# 📜 Mumbai Testnet Explorer

```
https://mumbai.polygonscan.com/address/0x994b2e3BB8aff320FA6bA4f94f1F83A54f221bc0
```
