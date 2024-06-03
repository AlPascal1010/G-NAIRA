import MintTokens from "../components/MintTokens";
import BurnTokens from "../components/BurnTokens";
import BlacklistAddress from "../components/BlacklistAddress";

export default function Home() {
  return (
    <div>
      <h1>G-Naira Interface</h1>
      <MintTokens />
      <BurnTokens />
      <BlacklistAddress />
    </div>
  );
}
