async function main() {
    const NFTMarket = await ethers.getContractFactory("NFTMarket");
    const nftMarket = await NFTMarket.deploy();
    console.log("Contract Deployed to Address:", nftMarket.address);
  }
  main()
    .then(() => process.exit(0))
    .catch(error => {
      console.error(error);
      process.exit(1);
    });