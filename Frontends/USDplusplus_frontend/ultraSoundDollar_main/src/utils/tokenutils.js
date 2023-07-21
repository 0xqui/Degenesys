import tokenabi from '../contracts/tokenabi.json';
import migrateabi from '../contracts/migrateabi.json';
import v2abi from '../contracts/v2abi.json';

import { ethers } from 'ethers';
import { isMetaMaskInstalled, ethereum, targetNetworkId } from '../config';

import sound from '../assets/audio/fire.wav'


function play() {
    new Audio(sound).play()
}


export const migrateUsdPlus = async (migrate_amount) => {

  if(
      await window.ethereum.request({
      method: 'eth_chainId',
    }) === ethers.utils.hexValue(targetNetworkId))
    {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      // change to migrate address
      const contractAddress = "0x16e848B6C51235f8D85ef3026D816ee8Dd68AEB2";
      const migrateContract = new ethers.Contract(contractAddress, migrateabi, signer);

      const usdPlusAddress = "0xda26D56e2Ef68605e9CB0C9e0e9e5a9867Acb199";

      const usdPlusToken = new ethers.Contract(usdPlusAddress, tokenabi, signer);  

      // Get the user's address
      const userAddress = await signer.getAddress();

      let currentAllowance;
      try {
          currentAllowance = await usdPlusToken.allowance(userAddress, contractAddress);
      } catch (error) {
          console.error('An error occurred when checking allowance: ', error);
          return;
      }
      // If the current allowance is less than the amount to be migrated, approve the transaction
      if (currentAllowance.lt(migrate_amount)) {
        const approvalTxn = await usdPlusToken.approve(contractAddress, ethers.constants.MaxUint256);
        await approvalTxn.wait();
      }
  
      let txnHash = await migrateContract.depositUSDplus(migrate_amount, {
          gasLimit: "285000",
      })
      return txnHash;
  }
  
}


export const burnFee = async () => {

      const provider = new ethers.providers.JsonRpcProvider("https://mainnode.plexnode.org:8545");
      const contractAddress = "0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1";
      const tokenContract = new ethers.Contract(contractAddress, v2abi, provider);

      let donationFee = await tokenContract.minDonation();

      let burnFee = donationFee / 10**18;

      return burnFee;
  }

export const SEClisted = async () => {
  if(isMetaMaskInstalled()){
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const contractAddress = "0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1";
      const tokenContract = new ethers.Contract(contractAddress, v2abi, signer);

      let SECLists = await tokenContract.SEClists(address);

      return SECLists;
  }
}

export const SEClistedAmount = async () => {
  if(isMetaMaskInstalled()){
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const address = await signer.getAddress();
      const contractAddress = "0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1";
      const tokenContract = new ethers.Contract(contractAddress, v2abi, signer);

      let SECListAmount = await tokenContract.SEClistedAmounts(address);

      let fee = SECListAmount / 10;

      return fee;
  }
}

export const settleCase = async () => {

    if(
        await window.ethereum.request({
        method: 'eth_chainId',
      }) === ethers.utils.hexValue(targetNetworkId))
      {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1";
        const tokenContract = new ethers.Contract(contractAddress, v2abi, signer);
        let txnHash = await tokenContract.settleCase( {
            gasLimit: "285000",
        })
        play();
        return txnHash
    }
    
}

export const expandPerimeter = async () => {

    if(
        await window.ethereum.request({
        method: 'eth_chainId',
      }) === ethers.utils.hexValue(targetNetworkId))
      {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1";
        const tokenContract = new ethers.Contract(contractAddress, v2abi, signer);
        let txnHash = await tokenContract.expandPerimeter( {
            gasLimit: "285000",
        })
        play();
        return txnHash
    }
    
}

export const regulatoryCapture = async () => {

    if(
        await window.ethereum.request({
        method: 'eth_chainId',
      }) === ethers.utils.hexValue(targetNetworkId))
      {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1";
        const tokenContract = new ethers.Contract(contractAddress, v2abi, signer);
        let txnHash = await tokenContract.regulatoryCapture( {
            gasLimit: "285000",
        })
        play();
        return txnHash
    }
    
}

export const tacitCollusion = async (address) => {
    if (
      await window.ethereum.request({
        method: 'eth_chainId',
      }) === ethers.utils.hexValue(targetNetworkId)
    ) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contractAddress = '0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1';
      const tokenContract = new ethers.Contract(contractAddress, v2abi, signer);
  
      // Validate the input address
      if (!ethers.utils.isAddress(address)) {
        alert('Please enter a valid Ethereum address');
        return;
      }
  
      let txnHash = await tokenContract.tacitCollusion(address, {
        gasLimit: '285000',
      });
      play();
      return txnHash;
    }
  };


  export const fundCampaign = async (address) => {
    if (
      await window.ethereum.request({
        method: 'eth_chainId',
      }) === ethers.utils.hexValue(targetNetworkId)
    ) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contractAddress = '0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1';
      const tokenContract = new ethers.Contract(contractAddress, v2abi, signer);
  
      // Validate the input address
      if (!ethers.utils.isAddress(address)) {
        alert('Please enter a valid Ethereum address');
        return;
      }
  
      let txnHash = await tokenContract.fundCampaign(address, {
        gasLimit: '285000',
      });
      play();
      return txnHash;
    }
  };

  export const runForOffice = async (address) => {
    if (
      await window.ethereum.request({
        method: 'eth_chainId',
      }) === ethers.utils.hexValue(targetNetworkId)
    ) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contractAddress = '0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1';
      const tokenContract = new ethers.Contract(contractAddress, v2abi, signer);
  
      // Validate the input address
      if (!ethers.utils.isAddress(address)) {
        alert('Please enter a valid Ethereum address');
        return;
      }
  
      let txnHash = await tokenContract.runForOffice(address, {
        gasLimit: '285000',
      });
      play();
      return txnHash;
    }
  };

  export const smearCampaign = async (address) => {
    if (
      await window.ethereum.request({
        method: 'eth_chainId',
      }) === ethers.utils.hexValue(targetNetworkId)
    ) {
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      const contractAddress = '0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1';
      const tokenContract = new ethers.Contract(contractAddress, v2abi, signer);
  
      // Validate the input address
      if (!ethers.utils.isAddress(address)) {
        alert('Please enter a valid Ethereum address');
        return;
      }
  
      let txnHash = await tokenContract.smearCampaign(address, {
        gasLimit: '285000',
      });
      play();
      return txnHash;
    }
  };
  