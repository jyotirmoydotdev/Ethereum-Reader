const {ethers}= require ("ethers");
const {infuraID} = require ("./InfuraID.js");

const Infura_ID=infuraID;
const provider=new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/"+Infura_ID);
const address="0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf";
const main =async()=>{
       const balance=await provider.getBalance(address);
       const balanceETH=ethers.utils.formatEther(balance);
       const tt=[];
       tt[0]=balanceETH;
       module.exports={tt};
}
main();