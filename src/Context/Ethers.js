import React,{useState, useEffect, Children} from "react";
import {ethers} from "ethers";

const apiKey=process.env.REACT_APP_INFURA_ID;
const provider=new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/"+apiKey);

export const Etherscan= React.createContext();

export const EtherProvider=({children})=>{
    const data='hi';
    const tenBlockWithDetails=[];
    const [yourBlockTxn, setyourBlockTxn] = useState(tenBlockWithDetails);
    const [currentBlock, setcurrentBlock] = useState([]);
    const [topTenBlock, settopTenBlock] = useState([]);
    const [transaction, settransaction] = useState([]);
    const [gasPrice, setgasPrice] = useState('');

    const accountDetails=async()=>{
        try {
            const getCurrentBlock= await provider.getBlockNumber();
            setcurrentBlock(getCurrentBlock);

            const blockTransaction=await provider.getBlock(getCurrentBlock);
            settransaction(blockTransaction.transactions);

            const previousBlock= await getCurrentBlock -5;

            const listTenBlock=[];

            for(let i=getCurrentBlock;i>previousBlock;i--){
                listTenBlock.push([i]);
            }
            

            const getBlockDetails=listTenBlock.flat();
            settopTenBlock(getBlockDetails);

            // Here is the problem
            getBlockDetails.map(async(el)=>{
                const singleBlockData=await provider.getBlock(el);
                tenBlockWithDetails.push(singleBlockData);
                //console.log(singleBlockData)
            });

            const getgasPrice= await provider.getGasPrice();
            const gasPrice= ethers.utils.formatEther(getgasPrice);
            setgasPrice(gasPrice);
            console.log(currentBlock)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        accountDetails();
    }, []);
    return(
        <Etherscan.Provider value={{
            data, 
            currentBlock, 
            topTenBlock, 
            yourBlockTxn, 
            transaction, 
            gasPrice, 
            provider,
        }}>
            {children}
        </Etherscan.Provider>
    )
}