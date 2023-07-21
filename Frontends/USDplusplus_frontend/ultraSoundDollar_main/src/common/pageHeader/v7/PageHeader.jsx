import { useAccount, useConnect, useDisconnect } from 'wagmi'

import PageHeaderStyleWrapper from './PageHeader.style';

import { ethers
 } from 'ethers';
import { claimMultipleProjects } from '../../../utils/web3mint';
import { claimDGEN } from '../../../utils/web3mint';
import { claimTokens } from '../../../utils/web3mint';
import { refreshData } from '../../../utils/web3mint';



import { burnFee } from '../../../utils/tokenutils';

import { settleCase } from '../../../utils/tokenutils';
import { tacitCollusion } from '../../../utils/tokenutils';

import { regulatoryCapture } from '../../../utils/tokenutils';
import { fundCampaign } from '../../../utils/tokenutils';
import { runForOffice } from '../../../utils/tokenutils';

import { expandPerimeter } from '../../../utils/tokenutils';
import { smearCampaign } from '../../../utils/tokenutils';

import { SEClisted } from '../../../utils/tokenutils';

import { SEClistedAmount } from '../../../utils/tokenutils';

import React, { useEffect, useState } from 'react';

import logo from "../../../assets/images/USDpluslogo.webp";

import { totalSupply } from '../../../utils/web3mint';


const PageHeader = () => {
  const { isConnected } = useAccount()

  const [inputAddress, setInputAddress] = useState('');

  const [SECLists, setSECLists] = useState(false);
  const [SECListAmount, setSECListAmount] = useState(0);

  const [showSECLists, setShowSECLists] = useState(false);
  const [showSECListAmount, setShowSECListAmount] = useState(false);

  const BurnFee = () => {
    const [currentBurnFee, setCurrentBurnFee] = useState(0);
  
    useEffect(() => {
      const fetchBurnFee = async () => {
        const burnFeeValue = await burnFee();
        setCurrentBurnFee(burnFeeValue);
      };
  
      fetchBurnFee();
    }, []);
  
    return (
      <div className="burn_fee">
        Special Exemptions burn fee: <div className='number'>{currentBurnFee.toLocaleString()}
        <img className="logo" src={logo}></img>
        </div>
      </div>
    );
  };



  const OfficeFee = () => {

  
    const currentOfficeFee = 20818100000;
  
    return (
      <div className="burn_fee">
        Run For Office burn fee: <div className='number'>{currentOfficeFee.toLocaleString()}
        <img className="logo" src={logo}></img>
        </div>
      </div>
    );
  };

  const FineAmount = () => {
    const [currentFineAmount, setCurrentFineAmount] = useState(0);
    
    useEffect(() => {
      const fetchFineAmount = async () => {
        const fineAmountValue = await SEClistedAmount() / 10**18;
        setCurrentFineAmount(fineAmountValue);
      };
    
      fetchFineAmount();
    }, []);
    
    return (
      <div className="burn_fee">
        <span className="highlighted">Fine Amount: </span>
        <div className='number'>
          {currentFineAmount}
          <img className="logo" src={logo}></img>
        </div>
      </div>
    );
  };
  

  const SmearFee = () => {
    const [currentSmearFee, setCurrentSmearFee] = useState(0);
  
    useEffect(() => {
      const fetchSmearFee = async () => {
        const burnSmearValue = await burnFee() *2;
        setCurrentSmearFee(burnSmearValue);
      };
  
      fetchSmearFee();
    }, []);
    
  
    return (
      <div className="burn_fee">
        Smear Campaign burn fee: <div className='number'>{currentSmearFee.toLocaleString()}
        <img className="logo" src={logo}></img>
        </div>
      </div>
    );
  };



  const ExpandFee = () => {
    const [currentExpandFee, setCurrentExpandFee] = useState(0);
  
    useEffect(() => {
      const fetchExpandFee = async () => {
        const expandFeeValue = await burnFee() / 10;
        setCurrentExpandFee(expandFeeValue);
      };
  
      fetchExpandFee();
    }, []);
  
    return (
      <div className="expand_fee">
        Expand Perimeter burn fee: 
        <div className='number'>
          {currentExpandFee.toLocaleString()}

          <img className="logo" src={logo}></img>

        </div>
      </div>
    );
  };

  const BurnedSupply = () => {
    const [burnedSupply, setBurnedSupply] = useState(ethers.BigNumber.from("0"));
    const totalFixedSupply = ethers.BigNumber.from("20818100000000000000000000000000"); // 20.8181 trillion with 18 decimals
  
    useEffect(() => {
      const fetchBurnedSupply = async () => {
        const currentTotalSupply = await totalSupply();
        const burnedSupplyValue = totalFixedSupply.sub(currentTotalSupply);
        setBurnedSupply(burnedSupplyValue);
      };
    
      fetchBurnedSupply();
    });
  
    const totalFixedSupplyInBillions = parseFloat(ethers.utils.formatUnits(totalFixedSupply, 18)) / 1e9;
    const burnedSupplyInBillions = parseFloat(ethers.utils.formatUnits(burnedSupply, 18)) / 1e9; // Divide by 10^18, then by 10^9 to convert into billions
    const burnedSupplyPercentage = (burnedSupplyInBillions / totalFixedSupplyInBillions) * 100; // Calculate percentage, convert to normal number  


    return (
      <div className="burned_supply">
         Total Burned Supply:
        <div className='number_alt'><span className='Fire'>
          {burnedSupplyInBillions.toLocaleString()}Bn ( 
          {burnedSupplyPercentage.toFixed(3)}% of Total Supply) </span>

        </div>
      </div>
    );
  };
  
  

  return (
    <PageHeaderStyleWrapper>
      <div className="container">

            <div className="breadcrumb_area">
              <div className="breadcrumb_menu">
                Ultra-Sound Dollar
              </div>
              <h2 className="breadcrumb_title text-uppercase">
                Burn Functions
              </h2>

              <BurnedSupply/>

              <a href='https://tuber.build/address/0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1/contracts#address-tabs'> <span className='contract'>Click Here For Contract</span> </a>

            </div>
            <div className="claim_container">
              <div className="claim_box">
                <div className="claim_text">
                Current SEC Investigation Status
                  </div>
                  <div className='under_text'>
                    Here you can see if your wallet is currently SECListed and will therefore only be able to transfer to the LP pool (sell). 
                    <br></br><br></br>This is because you sold, or transferred over 50% holdings (and this amount was larger than 0.1% of supply)
                    <br></br><br></br>You may pay the fine below to be able to buy again, or purchase exemptions for the same effect.
                  </div>
                    <div className="buttons-container">
                    <div className="buttons-container">
                    <button 
                      className="menu_btn" 
                      onClick={async () => {
                        setSECLists(await SEClisted());
                        setShowSECLists(true); 
                      }} 
                      aria-label="claim canto drop"
                    >
                      <div className="button_style">
                        Is Gary Watching Me?
                      </div> 
                    </button>

                    <button 
                      className="menu_btn" 
                      onClick={async () => {
                        setSECListAmount(await SEClistedAmount());
                        setShowSECListAmount(true);
                      }} 
                      aria-label="claim canto drop"
                    >
                      <div className="button_style">
                        How Much Is My Fine? 
                      </div>
                    </button>
                    </div>


                    </div>
                    {showSECLists && (
                      <div className="SECLists">
                        <span className="highlighted">Current Investigation Status: </span>{SECLists ? "Active" : "They've got nothing."}
                      </div>
                    )}
                    {showSECListAmount && (
                      <div className="SECListAmount">
                        <FineAmount/>
                      </div>
                    )}
                </div>
              </div>
              <div className="claim_box">
                <div className="claim_text">
                Settle Case with the SEC
                  </div>
                  <div className='under_text'>
                    If you have sold over 2,081,810,000 USD+ and this was more than half of your wallet balance in one transaction, your wallet is flagged by the SEC for sale of unregistered securities 
                    <br></br><br></br>You will have to pay 10% of this to the SEC in fines to be able to buy again. Use tacit collusion to settle on another wallet's behalf
                  </div>
                    <div className="buttons-container">
                      <button className="menu_btn" onClick={() => settleCase()} aria-label="claim canto drop">
                        <div className="button_style">
                          Settle Case
                        </div> 
                      </button>

                        <button className="menu_btn" onClick={() => tacitCollusion(inputAddress)} aria-label="claim canto drop">
                          <div className="button_style">
                            Tacit Collusion 
                          </div>
                        </button>
                        <div className ="input">
                          <input
                              type="text"
                              placeholder="Enter address"
                              value={inputAddress}
                              onChange={(e) => setInputAddress(e.target.value)}
                            />
                        </div>

                    </div>
                </div>
              <div className="claim_box">
              <div className="claim_text">
                  Pay for Special Exemptions
                  
                </div>
                <div className='under_text'>
                Work with the regulators to galvanise business moat to grant special exemptions for your wallet, or fund politicians to re-align their interests to grant special exemptions for another wallet. 
                <br></br><br></br>
                Each donation reduces all future donation costs by 1%. 
                <br></br>Wallets with special exemptions do not get flagged by the SEC.<br></br><br></br>
                <div className='highlight'>
                  Run for office to gain diplomatic immunity. Does not autofill your address. Please input below.
                  <br></br><br></br>
                  Wallets with Diplomatic Immunity cannot have special exemptions revoked

                </div>

                <div className='burn_fee'><BurnFee/></div> 
                <div className='burn_fee'><OfficeFee/></div> 
                </div>
                <div className="buttons-container">
                  <button className="menu_btn" onClick={() => regulatoryCapture()} aria-label="claim canto drop">
                    <div className="button_style">
                      Regulatory Capture
                    </div> 
                  </button>
                  <button className="menu_btn" onClick={() => fundCampaign(inputAddress)} aria-label="claim canto drop">
                    <div className="button_style">
                      Fund Campaign
                    </div> 
                  </button>
                  <button className="menu_btn" onClick={() => runForOffice(inputAddress)} aria-label="claim canto drop">
                    <div className="button_style">
                      Run For Office
                    </div> 
                  </button>
                  <div className ="input">
                    <input
                        type="text"
                        placeholder="Enter address"
                        value={inputAddress}
                        onChange={(e) => setInputAddress(e.target.value)}
                      />
                  </div>
                </div> 
              </div>
              
              <div className="claim_box">
                <div className="claim_text">
                  Counter-intelligence                  
                </div>
                <div className='under_text'>
                Spend 10% of the current donation cost to fund an exposé on an offshore finance scandal. With all the extra scrutiny it is now more costly to disguise the donation source. Donation cost is increased by 10% for everyone (up to maximum of 2.1bn). <br></br><br></br>
                Run a smear campaign to remove special exemptions from a wallet. This costs double the current donation cost.
                <div className='burn_fee'><ExpandFee/></div> 
                <div className='burn_fee'><SmearFee/></div>

                </div>
                <div className="buttons-container">
                  <button className="menu_btn" onClick={() => expandPerimeter()} aria-label="claim NFT drop">
                    <div className="button_style">
                      Expand Perimeter
                    </div> 
                  </button>
                  <button className="menu_btn" onClick={() => smearCampaign(inputAddress)} aria-label="claim NFT drop">
                    <div className="button_style">
                      Smear Campaign
                    </div> 
                  </button>
                  <div className ="input">
                    <input
                        type="text"
                        placeholder="Enter address"
                        value={inputAddress}
                        onChange={(e) => setInputAddress(e.target.value)}
                      />
                  </div>
                </div>
              </div>
        </div>

    </PageHeaderStyleWrapper>
  );
};

export default PageHeader;
