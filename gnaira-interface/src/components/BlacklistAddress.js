import { useState } from "react";
import { getGNairaContract } from "../lib/contracts";

export default function BlacklistAddress() {
  const [address, setAddress] = useState("");

  const handleBlacklist = async () => {
    try {
      const contract = await getGNairaContract();
      const tx = await contract.blacklist(address);
      await tx.wait();
      alert("Address blacklisted successfully!");
    } catch (error) {
      console.error(error);
      alert("Blacklisting failed!");
    }
  };

  return (
    <div>
      <h3>Blacklist Address</h3>
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleBlacklist}>Blacklist</button>
    </div>
  );
}
