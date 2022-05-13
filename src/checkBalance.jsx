import { useState } from 'react';
import { ethers } from 'ethers';

function WalletBalance() {

    const [balance, setBalance] = useState();

    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    };

    return (
      <div className="card">
        <div className="card-body">
          <button onClick={() => getBalance()}>Show My Balance</button>
          <h5 className="card-title">CCN Balance: {balance*2000}</h5>
        </div>
      </div>
    );
  };

  export default WalletBalance;
