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
    const [TnxDetails, setTnxDetails] = useState([]);

    const accountDetails=async()=>{
        try {
            const getCurrentBlock= await provider.getBlockNumber();
            setcurrentBlock(getCurrentBlock);



            const blockTransaction=await provider.getBlock(getCurrentBlock);

            const TransTemp=[];
            for(let i=0;i<20;i++){
                TransTemp.push(blockTransaction.transactions[i]);
            }
            settransaction(TransTemp);
            

            // Add Trsnsaction Details
            const TransTempDetails=[];
            const FetchTrans=async(TnxHash)=>{
                const tx=await provider.getTransaction(TnxHash);
                console.log(tx);
                return tx;

            }
            TransTemp.map(async(el)=>{
                const SingleTnx=await FetchTrans(el);
                TransTempDetails.push(SingleTnx);
            })
            setTnxDetails(TransTempDetails)
            

            const previousBlock= getCurrentBlock -10;

            const listTenBlock=[];

            for(let i=getCurrentBlock;i>previousBlock;i--){
                listTenBlock.push([i]);
            }
            
            const getBlockDetails=listTenBlock.flat();
            settopTenBlock(getBlockDetails);

            const temp=[];

            // getBlockDetails.map(async(el)=>{
            //     const singleBlockData=await provider.getBlock(el);
            //     temp.push(singleBlockData);
            // });
            // setyourBlockTxn(temp)

            async function fetchBlockDetails(blockNumber) {
                try {
                  const block = await provider.getBlock(blockNumber);
                  return block;
                } catch (error) {
                  console.error(error);
                }
            }

            Promise.all(getBlockDetails.map(fetchBlockDetails))
              .then((blocks) => { 
                temp.push(...blocks);
              })
              .catch((error) => {
                console.error(error);
            });

            if (temp){
                setyourBlockTxn(temp);
            }
            console.log(temp);

            const getgasPrice= await provider.getGasPrice();
            const gasPrice= ethers.utils.formatEther(getgasPrice);
            setgasPrice(gasPrice);
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
            TnxDetails
        }}>
            {children}
        </Etherscan.Provider>
    )
}