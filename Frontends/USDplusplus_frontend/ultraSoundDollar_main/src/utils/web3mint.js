import contractABI from '../contracts/airdropABI.json';
import { ethers } from 'ethers';
import { isMetaMaskInstalled, ethereum, targetNetworkId } from '../config';

import sound from '../assets/audio/coins.wav'

import dABI from '../contracts/Degenesysabi.json';

import v2abi from '../contracts/v2abi.json';



function play() {
    new Audio(sound).play()
}


export const publicMint = async (mint_amount) => {

    if(
        await window.ethereum.request({
        method: 'eth_chainId',
      }) === ethers.utils.hexValue(targetNetworkId))
      {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x38531eBDA4a7b56B3B5f11b79dcA7600Bc23Dd06";
        const nftContract = new ethers.Contract(contractAddress, dABI, signer);
        let txnHash = await nftContract.publicMint(mint_amount, {
            gasLimit: "285000",
            value: ethers.utils.parseEther((0.001 * mint_amount).toString())
        })
        play();

        return txnHash
    }
    
}

export const claimMultipleProjects = async (inputYayo,inputLongnecks,inputShnoises) => {

    if(
        await window.ethereum.request({
        method: 'eth_chainId',
      }) === ethers.utils.hexValue(targetNetworkId))
      {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x6D4cBA43cd7e7e12D52447480107e64a26bF6693";
        const nftContract = new ethers.Contract(contractAddress, contractABI, signer);

        const processInput = (input) => input ? input.split(',').filter(i => i.trim() !== "").map(Number) : [];

        const yayoArray = processInput(inputYayo);
        const necksArray = processInput(inputLongnecks);
        const shnoisesArray = processInput(inputShnoises);

      
        let txnHash = await nftContract.claimMultipleProjects(yayoArray, necksArray, shnoisesArray, {
            gasLimit: "500000",
        })
        play();

        return txnHash
    }
    
}

export const claimDGEN = async (inputDgens) => {

    if(
        await window.ethereum.request({
        method: 'eth_chainId',
      }) === ethers.utils.hexValue(targetNetworkId))
      {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x6D4cBA43cd7e7e12D52447480107e64a26bF6693";
        const nftContract = new ethers.Contract(contractAddress, contractABI, signer);
        
        const processInput = (input) => input.split(',').map(Number);

        const dgenArray = processInput(inputDgens);
        
        let txnHash = await nftContract.claimDGEN(dgenArray, {


            gasLimit: "500000",
        })
        play();

        return txnHash
    }
    
}

export const claimTokens = async () => {

    if(
        await window.ethereum.request({
        method: 'eth_chainId',
      }) === ethers.utils.hexValue(targetNetworkId))
      {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0x6D4cBA43cd7e7e12D52447480107e64a26bF6693";
        const nftContract = new ethers.Contract(contractAddress, contractABI, signer);
        let txnHash = await nftContract.claimTokens( {
            gasLimit: "285000",
        })
        play();

        return txnHash
    }
    
}

export const totalSupply = async () => {
    const provider = new ethers.providers.JsonRpcProvider("https://canto.slingshot.finance");
    const contractAddress = "0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1";
    const tokenContract = new ethers.Contract(contractAddress, v2abi, provider);

    let totalToken = await tokenContract.totalSupply();

    return totalToken;
}

export const plusSupply = async () => {
    let totalToken;
    if(window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contractAddress = "0xda26D56e2Ef68605e9CB0C9e0e9e5a9867Acb199";
        const tokenContract = new ethers.Contract(contractAddress, v2abi, signer);

        // get current connected account from ethereum object
        const account = window.ethereum.selectedAddress;

        if(account) {
            totalToken = await tokenContract.balanceOf(account);
        } else {
            throw new Error("No account is connected");
        }
    } else {
        throw new Error("Ethereum object doesn't exist");
    }

    return totalToken /10**18;
}

export const PlusPlusSupply = async () => {
    let totalToken;
    if(window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const contractAddress = "0x445c3d1aeE75AbB9aa01304F89DD4D2EAB6fEEC1"; 
      const tokenContract = new ethers.Contract(contractAddress, v2abi, signer);

      const account = window.ethereum.selectedAddress;
  
      if(account) {
        totalToken = await tokenContract.balanceOf(account);
      } else {
        throw new Error("No account is connected");
      }
    } else {
      throw new Error("Ethereum object doesn't exist");
    }
  
    return totalToken /10**18;
  }
  

