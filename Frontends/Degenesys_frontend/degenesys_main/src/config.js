import { ethers } from 'ethers';
export const ethereum = window.ethereum;



// change this to desired network in hex
export const targetNetworkId = 7700// Canto

// check if metamask extension is installed on the browser
export const isMetaMaskInstalled = () =>{
    
    if(ethereum){
        return true;
    }

    return false;
}

// can be removed
export const checkNetwork = async () => {  
  if (window.ethereum) {
      const currentChainId = await window.ethereum.request({
        method: 'eth_chainId',
      });

      // return true if network id is the same
    if (currentChainId === ethers.utils.hexValue(targetNetworkId)) {
        return true;
    }
      // return false is network id is different
    return false;
  }
};



// connect to metakmask wallet
export const connectWallet = async () =>{
    

    if (ethereum) {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainName: 'Polygon Testnet',
            chainId: ethers.utils.hexValue(targetNetworkId),
            nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
            rpcUrls: ['https://rpc.ankr.com/polygon_mumbai']
          }
        ]
      });
    }
      
      

    const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    
    return accounts;

}



// connect to metakmask wallet
export const connectAccount = async () =>{
    
  if (ethereum) {
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [
        {
          chainName: 'Polygon Testnet',
          chainId: ethers.utils.hexValue(targetNetworkId),
          nativeCurrency: { name: 'MATIC', decimals: 18, symbol: 'MATIC' },
          rpcUrls: ['https://rpc.ankr.com/polygon_mumbai']
        }
      ]
    });
  }

    const accounts = await ethereum.request({method: 'eth_accounts'});
    
    return accounts;
}


// disconnect metamask wallet
export const disconnectWallet = () =>{
    localStorage.removeItem('isWalletConnected');
    window.location.reload();
}

// check metamask on disconnect
export const onMetamaskDisconnect = () =>{
    ethereum.on('disconnect', () =>{
        console.log('Disconnected');
    });
}


// check metamask on connected
export const onMetamaskconnect = async () =>{
    const chainId = await getChainId();
    ethereum.on('connect', () =>{
        console.log(chainId);
    });
}

// on chain change
export const onChainChange = () =>{
    ethereum.on('chainChanged', (_chainId) =>{
        return parseInt(_chainId);
    });
}

export const getChainId = async () =>{
    const chainId = await ethereum.request({ method: 'eth_chainId' });

    return parseInt(chainId);
}


export const isWalletConnected = () => {
    if(localStorage.getItem('isWalletConnected') === 'true'){
        return true
    }

    return false;
}

export const connectWalletLocaly = () => {
    localStorage.setItem('isWalletConnected', true);
}

