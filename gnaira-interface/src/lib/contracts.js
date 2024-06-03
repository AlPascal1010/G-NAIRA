import { ethers } from "ethers";


const GNAIRA_ADDRESS = "0xe99fd05990b56bed58f76dd9b099f808d77f9db2";
const MULTISIGWALLET_ADDRESS = "no gas fee currently";

// Replace these with your ABI files
import GNairaABI from "./GNairaABI.json";
import MultiSigWalletABI from "./MultiSigWalletABI.json";

// Function to get a contract instance
function getContract(address, ABI, signer) {
  return new ethers.Contract(address, ABI, signer);
}

// Function to get a signer
async function getSigner() {
  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    return provider.getSigner();
  } else {
    console.error("MetaMask is not installed");
  }
}

// Function to get GNaira contract
export async function getGNairaContract() {
  const signer = await getSigner();
  return getContract(GNAIRA_ADDRESS, GNairaABI, signer);
}

// Function to get MultiSigWallet contract
export async function getMultiSigWalletContract() {
  const signer = await getSigner();
  return getContract(MULTISIGWALLET_ADDRESS, MultiSigWalletABI, signer);
}
