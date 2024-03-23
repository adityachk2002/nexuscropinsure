import { Button } from "@mui/material";
import styles from "./dashboard.module.css";
import { ethers } from 'ethers';

async function connectToSepolia() {
  try {
    // Replace with your Infura project ID for Sepolia
    const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/ea92e882feb843b8af908aa07fa9e86a');
    console.log('Connected to Sepolia testnet');
    return provider; // Return the provider for usage in other functions
  } catch (error) {
    console.error('Error connecting to Sepolia testnet:', error);
    return null; // Handle provider initialization errors (optional)
  }
}

// Call the connectToSepolia function and handle the returned promise
connectToSepolia()
  .then((provider) => {
    if (provider) {
      // Use the provider here for contract interactions
      const contract = new ethers.Contract(contractAddress, contractABI, provider);
      // ... your contract interaction logic using `contract` instance
    } else {
      // Handle errors during provider initialization (optional)
      console.error('Failed to connect to Sepolia testnet');
    }
  })
  .catch((error) => {
    console.error('Unexpected error:', error);
  });


// Call the connectToSepolia function in a suitable lifecycle method
// or a function that gets called before contract interaction
//connectToSepolia();

//const provider = new ethers.providers.JsonRpcProvider('https://sepolia.infura.io/v3/'); // Replace with your Infura project ID for Sepolia
const contractABI = [{
  "_format": "hh-sol-artifact-1",
  "contractName": "Nexus",
  "sourceName": "contracts/Nexus.sol",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "address payable",
          "name": "userAddress",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "payoutAmount",
          "type": "uint256"
        }
      ],
      "name": "claimPayout",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "enum Nexus.Plan",
          "name": "chosenPlan",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "acresInsured",
          "type": "uint256"
        }
      ],
      "name": "purchasePlan",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506106bf806100206000396000f3fe6080604052600436106100295760003560e01c80631a2fcc8b1461002e57806351a5a0a814610057575b600080fd5b34801561003a57600080fd5b50610055600480360381019061005091906102eb565b610073565b005b610071600480360381019061006c9190610350565b610101565b005b600081116100b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100ad90610413565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156100fc573d6000803e3d6000fd5b505050565b60003411610144576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161013b906104a5565b60405180910390fd5b60008111610187576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017e90610537565b60405180910390fd5b600080600281111561019c5761019b610557565b5b8360028111156101af576101ae610557565b5b146101f057600160028111156101c8576101c7610557565b5b8360028111156101db576101da610557565b5b146101e8576101906101eb565b60c85b6101f3565b60645b61ffff1690506000828261020791906105b5565b90508034101561024c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024390610669565b60405180910390fd5b50505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061028282610257565b9050919050565b61029281610277565b811461029d57600080fd5b50565b6000813590506102af81610289565b92915050565b6000819050919050565b6102c8816102b5565b81146102d357600080fd5b50565b6000813590506102e5816102bf565b92915050565b6000806040838503121561030257610301610252565b5b6000610310858286016102a0565b9250506020610321858286016102d6565b9150509250929050565b6003811061033857600080fd5b50565b60008135905061034a8161032b565b92915050565b6000806040838503121561036757610366610252565b5b60006103758582860161033b565b9250506020610386858286016102d6565b9150509250929050565b600082825260208201905092915050565b7f5061796f757420616d6f756e74206d757374206265206772656174657220746860008201527f616e207a65726f2e000000000000000000000000000000000000000000000000602082015250565b60006103fd602883610390565b9150610408826103a1565b604082019050919050565b6000602082019050818103600083015261042c816103f0565b9050919050565b7f5061796d656e7420616d6f756e74206d7573742062652067726561746572207460008201527f68616e207a65726f2e0000000000000000000000000000000000000000000000602082015250565b600061048f602983610390565b915061049a82610433565b604082019050919050565b600060208201905081810360008301526104be81610482565b9050919050565b7f4e756d626572206f6620616372657320696e7375726564206d7573742062652060008201527f67726561746572207468616e207a65726f2e0000000000000000000000000000602082015250565b6000610521603283610390565b915061052c826104c5565b604082019050919050565b6000602082019050818103600083015261055081610514565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006105c0826102b5565b91506105cb836102b5565b92508282026105d9816102b5565b915082820484148315176105f0576105ef610586565b5b5092915050565b7f496e73756666696369656e74207061796d656e7420666f722063686f73656e2060008201527f706c616e20616e6420616372656167652e000000000000000000000000000000602082015250565b6000610653603183610390565b915061065e826105f7565b604082019050919050565b6000602082019050818103600083015261068281610646565b905091905056fea26469706673582212202a2078c6c6c3bd7e54194fd2fe75412f5846c42eaa9733c8605e90ed8aacab3664736f6c63430008180033",
  "deployedBytecode": "0x6080604052600436106100295760003560e01c80631a2fcc8b1461002e57806351a5a0a814610057575b600080fd5b34801561003a57600080fd5b50610055600480360381019061005091906102eb565b610073565b005b610071600480360381019061006c9190610350565b610101565b005b600081116100b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100ad90610413565b60405180910390fd5b8173ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f193505050501580156100fc573d6000803e3d6000fd5b505050565b60003411610144576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161013b906104a5565b60405180910390fd5b60008111610187576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161017e90610537565b60405180910390fd5b600080600281111561019c5761019b610557565b5b8360028111156101af576101ae610557565b5b146101f057600160028111156101c8576101c7610557565b5b8360028111156101db576101da610557565b5b146101e8576101906101eb565b60c85b6101f3565b60645b61ffff1690506000828261020791906105b5565b90508034101561024c576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024390610669565b60405180910390fd5b50505050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061028282610257565b9050919050565b61029281610277565b811461029d57600080fd5b50565b6000813590506102af81610289565b92915050565b6000819050919050565b6102c8816102b5565b81146102d357600080fd5b50565b6000813590506102e5816102bf565b92915050565b6000806040838503121561030257610301610252565b5b6000610310858286016102a0565b9250506020610321858286016102d6565b9150509250929050565b6003811061033857600080fd5b50565b60008135905061034a8161032b565b92915050565b6000806040838503121561036757610366610252565b5b60006103758582860161033b565b9250506020610386858286016102d6565b9150509250929050565b600082825260208201905092915050565b7f5061796f757420616d6f756e74206d757374206265206772656174657220746860008201527f616e207a65726f2e000000000000000000000000000000000000000000000000602082015250565b60006103fd602883610390565b9150610408826103a1565b604082019050919050565b6000602082019050818103600083015261042c816103f0565b9050919050565b7f5061796d656e7420616d6f756e74206d7573742062652067726561746572207460008201527f68616e207a65726f2e0000000000000000000000000000000000000000000000602082015250565b600061048f602983610390565b915061049a82610433565b604082019050919050565b600060208201905081810360008301526104be81610482565b9050919050565b7f4e756d626572206f6620616372657320696e7375726564206d7573742062652060008201527f67726561746572207468616e207a65726f2e0000000000000000000000000000602082015250565b6000610521603283610390565b915061052c826104c5565b604082019050919050565b6000602082019050818103600083015261055081610514565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006105c0826102b5565b91506105cb836102b5565b92508282026105d9816102b5565b915082820484148315176105f0576105ef610586565b5b5092915050565b7f496e73756666696369656e74207061796d656e7420666f722063686f73656e2060008201527f706c616e20616e6420616372656167652e000000000000000000000000000000602082015250565b6000610653603183610390565b915061065e826105f7565b604082019050919050565b6000602082019050818103600083015261068281610646565b905091905056fea26469706673582212202a2078c6c6c3bd7e54194fd2fe75412f5846c42eaa9733c8605e90ed8aacab3664736f6c63430008180033",
  "linkReferences": {},
  "deployedLinkReferences": {}
}]; // Replace with your actual ABI
const contractAddress = '0xa6811D700bf6C51173e5FDd32E6321d19BAB1Eea';

// const contract = new ethers.Contract(contractAddress, contractABI, provider);

async function readPackageOptions() {
  try {
    const packageOptions = await contract.getPackageOptions(); // Replace with your function name
    console.log(packageOptions);
  } catch (error) {
    console.error('Error reading package options:', error);
  }
}

async function buyPackage(packageId) {
  try {
    const connectedWallet = await provider.getSigner(); // Assuming a connected wallet
    const transaction = await contract.buyPackage(packageId, {
      from: connectedWallet.address,
    });
    await transaction.wait(); // Wait for transaction confirmation
    console.log('Package purchased!');
  } catch (error) {
    console.error('Error buying package:', error);
  }
}



//


const Dashboard = () => {
  return (
    <div className={styles.dashboard}>
      <section className={styles.frameParent}>
        <div className={styles.usernamesDashboardParent}>
          <h3 className={styles.usernamesDashboard}>User123 Dashboard</h3>
          <div className={styles.frameWrapper}>
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.activePlanWrapper}>
                <div className={styles.activePlan}>Active plan: Basic</div>
              </div>
              <div className={styles.activationDateWrapper}>
                <div className={styles.activationDate}>Activation date: 23/03/2024</div>
              </div>
              <div className={styles.expiryDateWrapper}>
                <div className={styles.expiryDate}>Claim date: 23/03/2025</div>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.creditScoreWrapper}>
                  <div className={styles.creditScore}>Claim period ends: 23/04/2025</div>
                </div>
                <div className={styles.walletBalance}>---------</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.usernamesDataWrapper}>
            <div className={styles.usernamesData}>user123 data</div>
          </div>
          <div className={styles.ne3Parent}>
            <img
              className={styles.ne3Icon}
              loading="lazy"
              alt=""
              src="/ne-2@2x.png"
            />
            <div className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.typeOfCropParent}>
                <div className={styles.typeOfCrop}>Type of crop: Sugarcane</div>
                <div className={styles.nA}>
                  <div className={styles.location}>Location: Delhi</div>
                  <div className={styles.quantity}>Acres: 5</div>
                  <div className={styles.licenseNo}>License No. : 12345 </div>
                </div>
              </div>
              <div className={styles.nA1}>
                <div className={styles.nA2}>
                  <Button
                    className={styles.nA3}
                    disableElevation={true}
                    variant="contained"
                    sx={{
                      textTransform: "none",
                      color: "#000",
                      fontSize: "32",
                      background: "#39f49a",
                      borderRadius: "0px 0px 0px 0px",
                      "&:hover": { background: "#39f49a" },
                      height: 53,
                    }}
                  >
                    UPLOAD Documents
                  </Button>
                  <div className={styles.nA4}>
                    <img
                      className={styles.nAIcon}
                      loading="lazy"
                      alt=""
                      src="/vector1.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.nA5}>
      <Button
  className={styles.nA6}
  disableElevation={true}
  variant="contained"
  sx={{
    textTransform: "none",
    color: "#000",
    fontSize: "40",
    background: "#39f49a",
    borderRadius: "0px 0px 0px 0px",
    "&:hover": { background: "#39f49a" },
    width: 258,
    height: 94,
  }}
  href="https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.24+commit.e11b9ed9.js" // Replace with your external URL
>
  Claim
</Button>

      </div>
    </div>
  );
};

export default Dashboard;
