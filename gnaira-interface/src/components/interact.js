import React, { useEffect, useState } from 'react';
import { ethers } from 'ethers';
import GNairaABI from '../lib/GNairaABI.json';
import MultiSigWalletABI from '../lib/MultiSigWalletABI.json';
import { GNAIRA_ADDRESS, MULTISIGWALLET_ADDRESS } from '../lib/contracts';
import './Interact.css';

const Interact = () => {
  const [provider, setProvider] = useState(null);
  const [signer, setSigner] = useState(null);
  const [gNairaContract, setGNairaContract] = useState(null);
  const [multiSigWalletContract, setMultiSigWalletContract] = useState(null);
  const [mintTo, setMintTo] = useState('');
  const [mintAmount, setMintAmount] = useState('');
  const [burnAmount, setBurnAmount] = useState('');
  const [blacklistAddress, setBlacklistAddress] = useState('');
  const [submitTo, setSubmitTo] = useState('');
  const [submitValue, setSubmitValue] = useState('');
  const [submitData, setSubmitData] = useState('');

  useEffect(() => {
    const initializeProvider = async () => {
      if (window.ethereum) {
        try {
          const provider = new ethers.providers.Web3Provider(window.ethereum);
          setProvider(provider);

          const signer = provider.getSigner();
          setSigner(signer);

          const gNairaContract = new ethers.Contract(GNAIRA_ADDRESS, GNairaABI, signer);
          setGNairaContract(gNairaContract);

          const multiSigWalletContract = new ethers.Contract(MULTISIGWALLET_ADDRESS, MultiSigWalletABI, signer);
          setMultiSigWalletContract(multiSigWalletContract);
        } catch (error) {
          console.error('Error initializing provider:', error);
        }
      } else {
        console.error('No Ethereum wallet detected');
      }
    };

    initializeProvider();
  }, []);

  const handleMint = async () => {
    if (!gNairaContract) return;

    try {
      const tx = await gNairaContract.mint(mintTo, ethers.utils.parseUnits(mintAmount, 18));
      await tx.wait();
      console.log('Minted:', tx);
    } catch (error) {
      console.error('Error minting:', error);
    }
  };

  const handleBurn = async () => {
    if (!gNairaContract) return;

    try {
      const tx = await gNairaContract.burn(ethers.utils.parseUnits(burnAmount, 18));
      await tx.wait();
      console.log('Burned:', tx);
    } catch (error) {
      console.error('Error burning:', error);
    }
  };

  const handleBlacklist = async () => {
    if (!gNairaContract) return;

    try {
      const tx = await gNairaContract.blacklist(blacklistAddress);
      await tx.wait();
      console.log('Blacklisted:', tx);
    } catch (error) {
      console.error('Error blacklisting:', error);
    }
  };

  const handleSubmitTransaction = async () => {
    if (!multiSigWalletContract) return;

    try {
      const tx = await multiSigWalletContract.submitTransaction(submitTo, ethers.utils.parseUnits(submitValue, 18), submitData);
      await tx.wait();
      console.log('Transaction submitted:', tx);
    } catch (error) {
      console.error('Error submitting transaction:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="title">GNaira and MultiSig Wallet Interface</h1>
      <div className="section">
        <h2 className="section-title">GNaira Actions</h2>
        <div className="input-group">
          <label>Mint To:</label>
          <input type="text" value={mintTo} onChange={(e) => setMintTo(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Amount:</label>
          <input type="text" value={mintAmount} onChange={(e) => setMintAmount(e.target.value)} />
        </div>
        <button className="action-button" onClick={handleMint}>Mint</button>

        <div className="input-group">
          <label>Burn Amount:</label>
          <input type="text" value={burnAmount} onChange={(e) => setBurnAmount(e.target.value)} />
        </div>
        <button className="action-button" onClick={handleBurn}>Burn</button>

        <div className="input-group">
          <label>Blacklist Address:</label>
          <input type="text" value={blacklistAddress} onChange={(e) => setBlacklistAddress(e.target.value)} />
        </div>
        <button className="action-button" onClick={handleBlacklist}>Blacklist</button>
      </div>
      <div className="section">
        <h2 className="section-title">MultiSig Wallet Actions</h2>
        <div className="input-group">
          <label>To:</label>
          <input type="text" value={submitTo} onChange={(e) => setSubmitTo(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Value:</label>
          <input type="text" value={submitValue} onChange={(e) => setSubmitValue(e.target.value)} />
        </div>
        <div className="input-group">
          <label>Data:</label>
          <input type="text" value={submitData} onChange={(e) => setSubmitData(e.target.value)} />
        </div>
        <button className="action-button" onClick={handleSubmitTransaction}>Submit Transaction</button>
      </div>
    </div>
  );
};

export default Interact;
