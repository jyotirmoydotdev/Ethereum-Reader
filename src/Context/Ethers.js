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

            const previousBlock= getCurrentBlock -5;

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
            //     //console.log(singleBlockData
            // });

            // Promise.all(blockNumbers.map(fetchBlockDetails))
            // .then((blocks) => {
            //   // Insert the fetched block details into the blockDetails array
            //   blockDetails.push(...blocks);
            //   console.log('All block details:', blockDetails);
            // })
            // .catch((error) => {
            //   console.error(error);
            // });

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

            const getgasPrice= await provider.getGasPrice();
            const gasPrice= ethers.utils.formatEther(getgasPrice);
            setgasPrice(gasPrice);
        } catch (error) {
            console.log(error);
        }
    }
    const fetchData = async () => {
        try {
          const currentBlock = await provider.getBlockNumber();
          const blockTransaction = await provider.getBlock(currentBlock);
          settransaction(blockTransaction.transactions);
        } catch (error) {
          console.log(error);
        }
      };
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
            fetchData,
        }}>
            {children}
        </Etherscan.Provider>
    )
}