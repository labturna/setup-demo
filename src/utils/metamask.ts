import { ethers } from 'ethers';

export const connectWallet = async (): Promise<string | null> => {
    if ((window as any).ethereum) {
        try {
            const accounts = await (window as any).ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];

            const provider = new ethers.BrowserProvider((window as any).ethereum);
            const signer = provider.getSigner();

            console.log('Provider:', provider);
            console.log('Signer:', signer);

            return account;
        } catch (error) {
            console.error('Connection error:', error);
            return null;
        }
    } else {
        alert('MetaMask not found.');
        return null;
    }
};
