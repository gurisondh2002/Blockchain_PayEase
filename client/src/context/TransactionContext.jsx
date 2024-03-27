import { createContext, useEffect, useState } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';

export const TransactionContext = createContext();

const { ethereum } = window;

const getEthereumContract = async () => {
    const provider = new ethers.providers.Web3Provider(ethereum); // Change BrowserProvider to Web3Provider
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    console.log({ provider, signer, transactionContract });
    return transactionContract;
}


export const TransactionProvider = ({ children }) => {

    const [connectedAccount, setConnectedAccount] = useState('')
    const [formData, setFormData] = useState({ addressTo: '', amount: '', message: '' });
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    }

    const checkIfWalletIsConnected = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_accounts' });

            if (accounts.length) {
                setConnectedAccount(accounts[0]);
                getAllTransactions();
            } else {
                console.log("No account found");
            }

            console.log(accounts);
        } catch (err) {
            console.log(err);
        }
    }

    const getAllTransactions = async() =>{
        try{
            if (!ethereum) return alert("Please install metamask");
            const transactionContract = await getEthereumContract();

            const availableContracts = await transactionContract.getAllTransactions();

            const structuredTransactions = availableContracts.map((transactions) =>({
                addressTo : transactions.receiver,
                addressFrom : transactions.sender,
                timestamp: new Date(transactions.timestamp.toNumber() * 1000).toLocaleString(),
                message: transactions.message,
                amount: parseInt(transactions.amount._hex)/(10 ** 18)
            }))

            setTransactions(structuredTransactions)

            console.log(availableContracts);
        }catch(err){
            console.log(err);
        }
    }

    const checkIfTransactionExist = async() =>{
        try{
            const trasactionContract = getEthereumContract();
            const transactionCount2 = await trasactionContract.getTransactionCount();
            window.localStorage.setItem("transactionCount", transactionCount2);
        }catch(err){
            console.log(err);
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");

            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });

            console.log(accounts);
            setConnectedAccount(accounts[0]);
        } catch (err) {
            console.log(err)
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert("Please install metamask");

            const { addressTo, amount, message } = formData;
            const transactionContract = await getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
                method: 'eth_sendTransaction',
                params: [{
                    from: connectedAccount,
                    to: addressTo,
                    gas: '0x5208',
                    value: parsedAmount._hex,
                }]
            });

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message);

            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash}`);
            const transactionCount2 = await transactionContract.getTransactionCount();
            const count = typeof transactionCount2.toNumber === 'function' ? transactionCount2.toNumber() : transactionCount2;
            setTransactionCount(count);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        checkIfWalletIsConnected();
        checkIfTransactionExist();
    }, []);


    return (
        <TransactionContext.Provider value={{ connectWallet, connectedAccount, formData, setFormData, handleChange, sendTransaction , transactions, isLoading}}>
            {children}
        </TransactionContext.Provider>
    )
}