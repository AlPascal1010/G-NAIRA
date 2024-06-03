import { useState } from "react";
import { ethers } from "ethers";
import { getGNairaContract } from "../lib/contracts";

export default function MintTokens() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleMint = async () => {
    try {
      const contract = await getGNairaContract();
      const tx = await contract.mint(address, ethers.utils.parseUnits(amount, 18));
      await tx.wait();
      alert("Tokens minted successfully!");
    } catch (error) {
      console.error(error);
      alert("Minting failed!");
    }
  };

  return (
    <div>
      <h3>Mint Tokens</h3>
      <input
        type="text"
        placeholder="Recipient Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleMint}>Mint</button>
    </div>
  );
}
