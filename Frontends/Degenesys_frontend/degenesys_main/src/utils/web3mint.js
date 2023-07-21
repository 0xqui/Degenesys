import contract from '../contracts/Degenesysabi.json';
import { ethers } from 'ethers';
import { isMetaMaskInstalled, ethereum, targetNetworkId } from '../config';

import sound from '../assets/audio/futuristic-dystopian.mp3'


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
        const contractAddress = "0xd769cfad3d9614A904E1dF036561C130aD4c1EF5";
        const nftContract = new ethers.Contract(contractAddress, contract, signer);
        let txnHash = await nftContract.publicMint(mint_amount, {
            gasLimit: "285000",
            value: ethers.utils.parseEther((0.001 * mint_amount).toString())
        })
        play();

        return txnHash
    }
    
}

export const totalSupply = async () => {
    const provider = new ethers.providers.JsonRpcProvider("https://mainnode.plexnode.org:8545");
    const contractAddress = "0xd769cfad3d9614A904E1dF036561C130aD4c1EF5";
    const nftContract = new ethers.Contract(contractAddress, contract, provider);

    let totalMint = await nftContract.totalSupply();

    return totalMint;
}
