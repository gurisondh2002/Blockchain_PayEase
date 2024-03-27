const hre = require("hardhat");

const main = async () => {
    try {
        const Transactions = await hre.ethers.deployContract("Transactions");
        console.log("Deploying Transactions contract...");
        // const transactions = await Transactions.deploy();
        Transactions.waitForDeployment();
        console.log("Transactions contract deployed to:", Transactions.target);
    } catch (error) {
        console.error("Error deploying Transactions contract:", error);
    }
};

const runMain = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.error("Error running main function:", error);
        process.exit(1);
    }
};

runMain();
