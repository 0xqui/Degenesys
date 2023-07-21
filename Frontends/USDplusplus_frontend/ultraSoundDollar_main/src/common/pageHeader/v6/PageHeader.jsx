import { useAccount, useConnect, useDisconnect } from 'wagmi'

import PageHeaderStyleWrapper from './PageHeader.style';
import { publicMint } from '../../../utils/web3mint';

import { claimMultipleProjects } from '../../../utils/web3mint';
import { claimDGEN } from '../../../utils/web3mint';
import { claimTokens } from '../../../utils/web3mint';
import { refreshData } from '../../../utils/web3mint';

import { migrateUsdPlus } from '../../../utils/tokenutils';

import { plusSupply } from '../../../utils/web3mint';

import { PlusPlusSupply } from '../../../utils/web3mint';

import logo from "../../../assets/images/USDpluslogo.webp";

import React, { useEffect, useState } from 'react';


const PageHeader = () => {
  const { isConnected } = useAccount()
  const [inputNFT, setInputNFT] = useState('');

  const [inputYayo, setInputYayo] = useState('');

  const [inputTokens, setInputTokens] = useState('');

  const [inputLongnecks, setInputLongnecks] = useState('');

  const [inputShnoises, setInputShnoises] = useState('');

  const allInputsEmpty = !inputYayo && !inputLongnecks && !inputShnoises;

  const noDGENs = !inputNFT;

  const noTokens = !inputTokens;

  const [isTransactionProcessing, setIsTransactionProcessing] = useState(false);

  const [shouldRefreshBalances, setShouldRefreshBalances] = useState(false);

  const [currentPlusBalance, setcurrentPlusBalance] = useState(0);

  const migrate = async () => {
    try {
      setIsTransactionProcessing(true);
      
      // Start the migration transaction and wait for it to be mined
      const tx = await migrateUsdPlus(inputTokens);
      
      // tx.wait() returns the transaction receipt
      const receipt = await tx.wait();
      
      // The transaction was successfully mined!
      console.log('Transaction was mined in block', receipt.blockNumber);
      
      setIsTransactionProcessing(false);
      setShouldRefreshBalances(true);
    } catch (error) {
      console.error("Migration error:", error);
      setIsTransactionProcessing(false);
    }
  };
  
  useEffect(() => {
    if (shouldRefreshBalances) {
      // Fetch new balances here
      // ...
      setShouldRefreshBalances(false);
    }
  }, [shouldRefreshBalances]);
  

  const PlusBalance = ({ dependency }) => {


    useEffect(() => {
      const fetchBalance = async () => {
        if(window.ethereum && window.ethereum.selectedAddress && isConnected) {
          const balanceValue = await plusSupply(window.ethereum.selectedAddress);
          setcurrentPlusBalance(balanceValue);
        }
      }

      // Fetch balance when the component is first mounted
      fetchBalance();

      // Ethereum object and MetaMask exist
      if(window.ethereum && window.ethereum.on) {
        // Listen for accountsChanged event
        // With MetaMask this event triggers when the selected account changes
        window.ethereum.on('accountsChanged', fetchBalance);
      }

      // Cleanup function
      return () => {
        if(window.ethereum && window.ethereum.removeListener) {
          // Stop listening for accountsChanged
          window.ethereum.removeListener('accountsChanged', fetchBalance);
        }
      }
    }, [isConnected, dependency]);

    return (
      <div className="burn_fee">
        Current USD+ Balance: <div className='number'>{currentPlusBalance.toLocaleString()}
        <img className="logo" src={logo}></img>
        </div>
      </div>
    );
  };

  const PlusPlusBalance = ({ dependency }) => {
    const [currentPlusPlusBalance, setcurrentPlusPlusBalance] = useState(0);
  
    useEffect(() => {
      const fetchBalance = async () => {
        if(window.ethereum && window.ethereum.selectedAddress && isConnected) {
          const balanceValue = await PlusPlusSupply(window.ethereum.selectedAddress);
          setcurrentPlusPlusBalance(balanceValue);
        }
      }
  
      // Fetch balance when the component is first mounted
      fetchBalance();
  
      // Ethereum object and MetaMask exist
      if(window.ethereum && window.ethereum.on) {
        // Listen for accountsChanged event
        // With MetaMask this event triggers when the selected account changes
        window.ethereum.on('accountsChanged', fetchBalance);
      }
  
      // Cleanup function
      return () => {
        if(window.ethereum && window.ethereum.removeListener) {
          // Stop listening for accountsChanged
          window.ethereum.removeListener('accountsChanged', fetchBalance);
        }
      }
    }, [isConnected, dependency]);
  
    return (
      <div className="burn_fee">
        Current USD++ Balance: <div className='number'>{currentPlusPlusBalance.toLocaleString()}
        <img className="logo" src={logo}></img>
        </div>
      </div>
    );
  };
  


  return (
    <PageHeaderStyleWrapper>
      <div className="container">

            <div className="breadcrumb_area">
              <div className="breadcrumb_menu">
                Ultra-Sound Dollar Airdrop

              </div>
              <h2 className="breadcrumb_title text-uppercase">
                claim now
              </h2>
            </div>


            <div className="claim_box">
              <div className="claim_text">
                Migration from USD+ to USD++
              </div>
              <div className='under_text'>
                The holders of USD+ who were yet to migrate were airdropped USD++.
                <br></br>
                The airdrop for Canto NFTs holder, Degenesys discord members and Alto users has now finished.
              </div>
                  
            </div>

              <div className="claim_box">
                <div className="claim_text">
                  Degenesys holders
                </div>
                <div className='under_text'>
                This is the only airdrop allocation that is still available (6.25% of initial supply is reserved for Degenesys NFT holders). The rest was burned after 30 days as planned. 
                <br></br>
                Mint here: <a href='https://degenesys.xyz'> <div className='website_link'> Degenesys Website</div></a>
                <br></br>
                Please await further information on claim date.
                </div>
                                    {/*
                <button className="menu_btn" onClick={() => !noDGENs && claimDGEN(inputNFT)} aria-label="claim DGEN drop">
                <div className="button_style">DGENDrop</div> 
                </button>
                <div className ="input">
                    <input
                        type="text"
                        placeholder="Enter Degenesys NFT"
                        value={inputNFT}
                        onChange={(e) => setInputNFT(e.target.value)}
                      />
                </div>
                */}
              </div>



        </div>

    </PageHeaderStyleWrapper>
  );
};

export default PageHeader;
