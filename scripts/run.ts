const hre = require("hardhat");

const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory("MyEpicGame");
  const gameContract = await gameContractFactory.deploy(
    ["ADA Cardano", "Shiba", "Solana"],
    [
      "https://cdn4.iconfinder.com/data/icons/crypto-currency-and-coin-2/256/cardano_ada-512.png",
      "https://cryptologos.cc/logos/shiba-inu-shib-logo.png",
      "https://seeklogo.com/images/S/solana-sol-logo-12828AD23D-seeklogo.com.png",
    ],
    [300, 100, 200],
    [100, 50, 25]
  );
  await gameContract.deployed();
  console.log("Contract deployed in address:", gameContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
