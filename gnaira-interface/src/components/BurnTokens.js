import { useState } from "react";
import { ethers } from "ethers";
import { getGNairaContract } from "../lib/contracts";

export default function BurnTokens() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const handleBurn = async () => {
    try {
      const contract = await getGNairaContract();
      const tx = await contract.burn(address, ethers.utils.parseUnits(amount, 18));
      await tx.wait();
      alert("Tokens burned successfully!");
    } catch (error) {
      console.error(error);
      alert("Burning failed!");
    }
  };

  return (
    <div>
      <h3>Burn Tokens</h3>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <input
        type="text"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={handleBurn}>Burn</button>
    </div>
  );
}
