'use client'

import React from 'react';
import Interact from '../components/interact';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ color: '#B2B2B2', textAlign: 'center' }}>GNaira Token and MultiSignature Wallet Interface</h1>
      <Interact />
    </div>
  );
};

export default HomePage;
