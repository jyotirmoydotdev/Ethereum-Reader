import React, {useState, useEffect, useContext}from 'react';
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { ethers } from 'ethers';

const NavBar=()=> {
  const [UserAccount, setUserAccount] = useState('');
  const [Balance, setBalance] = useState(0);
  const [count, setcount] = useState('');
  const [openModel, setopenModel] = useState(false);
  const [price, setprice] = useState([]);
  const [EtherSupply, setEtherSupply] = useState('0');
  const [Eth2Stack, setEth2Stack] = useState('0');
  const [updatedPriceDate, setupdatedPriceDate] = useState('');
  const [Ether2, setEther2] = useState([]);
  const Ether_APIkey=process.env.REACT_APP_ETHER_API_KEY;
  //console.log(process.env.REACT_APP_ETHER_API_KEY)

  const getEth2=async()=>{
    try{
      axios.get('https://api.etherscan.io/api?module=stats&action=ethsupply2&apikey='+Ether_APIkey)
      .then((response)=>{
        console.log(response);
        setEther2(response.data.result);
        setEtherSupply(response.data.result.EthSupply);
        setEth2Stack(response.data.result.Eth2Staking);
      })
    }catch(error){
      console.log(error);
    }
  }

  // Open Model Box
  const openUserInfo=()=>{
    if (openModel){
      setopenModel(false);
    }else{
      setopenModel(true);
    }
  }
  // Price and Eth Supply
  const getEtherPrice=async()=>{
    try{
      axios.get('https://api.etherscan.io/api?module=stats&action=ethprice&apikey='+Ether_APIkey)
      .then((response)=>{
        setprice(response.data.result);
        const timestamp= Number(response.data.result.ethusd_timestamp);
        const date= new Date(timestamp);
        setupdatedPriceDate(date.getHours() + ":" + date.getMinutes()+":"+date.getSeconds());

      })
    }catch(error){
      console.log(error);
    }
  };
  const getAccountBalance=async()=>{
    try {
      axios.get(`https://api.etherscan.io/api?module=account&action=balance&address=${UserAccount}&tag=latest&apikey=${Ether_APIkey}`)
      .then((response)=>{
        //console.log('https://api.etherscan.io/api?module=account&action=balance&address='+UserAccount+'&tag=latest&apikey='+Ether_APIkey)
        setBalance(response.data.result);
      })
    } catch (error) {
      console.log(error);
    }
  };

  // Connect Metamask
  const checkIfAccountExist=async()=>{
    try {
      if(!window.ethereum) return console.log("Please install MetaMask");
      const accounts= await window.ethereum.request({method:"eth_accounts",});
      if (accounts.length){
        setUserAccount(accounts[0]);
      }
      else{
        setUserAccount(accounts);
      }
    } catch (error) {
     console.log(error);
    }
  };

  // Connect Wallet
  const connectWallet=async()=>{
    try {
      if(!window.ethereum) return alert("Please install MetaMask");
      const accounts= await window.ethereum.request({method:"eth_requestAccounts",});
      if (accounts.length){
        setUserAccount(accounts[0]);
      }else{
        console.log("Sorry you dont have account")
      }
      window.location.reload();
    } catch (error) {
      console.log("something went wrong");
    }
  }
  const disconnectWallet=async()=>{
    try {
      setUserAccount('');
    } catch (error) {
      console.log(error)
    }
  }
  const ConvertToEther=(value)=>{
    const ETH=ethers.utils.formatEther(value);
    const ETHf= ethers.utils.commify( ETH )
    return ETHf;
  }
  console.log(ConvertToEther("1000000000000000000"));
  useEffect(() => {
    checkIfAccountExist()
    getEtherPrice()
    getEth2()
    getAccountBalance()
  }, []); 

  return (
    <div>
      <div className=" p-3 bg-gray-800 text-white">
        <div className="container flex flex-row items-center justify-around">
          <div className="">
            <Link to="/">
              <p className=' text-xl sm:text-3xl'>🐬 ETHEREM READER</p>
            </Link>
          </div>
          {/*//left*/}
          <div className="relative  text-sm bg-blue-500 sm:p-3 p-1 sm:rounded-xl rounded-md hover:bg-blue-600 ">
            {UserAccount.length?(
                <div className="">
                  <button onClick={()=>openUserInfo()}>
                    Acc: {UserAccount.slice(0,5)}...{UserAccount.slice(-5,-1)}{UserAccount.slice(-1)}
                  </button>
                  <div className="">
                    {openModel?(
                      <div className="absolute right-0 text-xs z-10 bg-white shadow-md border text-black p-3 rounded-xl mt-6 ">
                        <button className='flex flex-col' onClick={()=>openUserInfo()}>
                          <p  className='block  px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left border-b-2 border-zinc-100 '>Account {UserAccount}</p> 
                          <p className='block sm:hidden px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left border-b-2 border-zinc-100 '>Account {UserAccount.slice(0,5)}...{UserAccount.slice(-5,-1)}{UserAccount.slice(-1)}</p> 
                          <p className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left border-b-2 border-zinc-100'>Balance: {Balance} ETH</p>
                          <p className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left '>Total Transaction:  count ETH</p>
                          <button onClick={()=>disconnectWallet()} className='bg-red-500 p-2 mt-1 ml-3 text-sm rounded-lg text-white hover:bg-red-400'>DISCONNECT</button>
                        </button>
                      </div>
                    ):("")}
                  </div>
                </div>
              ):(
                <button onClick={()=>connectWallet()}>
                  Connect Wallet
                </button>
              )
            } 
          </div>
        </div>
      </div>
      {/* Ether price and ether supply*/}
      <div className="grid text-sm sm:text-base grid-cols-1  sm:grid-cols-3">
        <div className="bg-blue-500 sm:p-4 p-2 flex flex-col text-white  ">
          <div className="text-lg sm:text-2xl font-bold px-2"> PRICE</div>
          <div className="flex flex-wrap flex-row text-black gap-2 p-2">
            <div className="p-2 bg-white rounded-md flex flex-row gap-1 shadow-md"> 
              <div className="font-bold">
                USD
              </div>
              <div className="">
                {price.ethusd}
              </div>
            </div>
            <div className="p-2 bg-white rounded-md flex flex-row gap-1 shadow-md">
              <div className="font-bold">
                BTC 
              </div>
              <div className="">
                {price.ethbtc}
              </div>
              </div>
          </div>
        </div>
        <div className="bg-blue-500 sm:p-4 p-2 flex flex-col text-white   ">
          <div className="text-lg sm:text-2xl font-bold px-2">ETHER Stats</div>
            <div className="p-1 overflow-x-auto">Total Supply: {ConvertToEther(EtherSupply)} ETH</div>
            <div className="p-1 overflow-x-auto">ETH For Stack: {ConvertToEther(Eth2Stack)} ETH</div>
        </div>
        <div className="bg-blue-500 sm:p-4 p-2 pb-4 ">
          <div className="text-lg sm:text-2xl font-bold text-white pb-1 px-2">ERC Tokens</div>
          <div className="flex flex-row gap-2 flex-wrap">
            <div className="p-2 bg-white rounded-md shadow-md font-bold px-3 hover:bg-slate-800 hover:text-white">TXN</div>
            <div className="p-2 bg-white rounded-md shadow-md font-bold px-3 hover:bg-slate-800 hover:text-white">ERC 20</div>
            <div className="p-2 bg-white rounded-md shadow-md font-bold px-3 hover:bg-slate-800 hover:text-white">ERC 721</div>
            <div className="p-2 bg-white rounded-md shadow-md font-bold px-3 hover:bg-slate-800 hover:text-white">ERC 1155</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar