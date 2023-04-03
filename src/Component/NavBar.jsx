import React, {useState, useEffect, useContext}from 'react';
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { ethers } from 'ethers';
import Switcher from '../Switch';
import NavBar2 from './NavBar2';

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
  
  useEffect(() => {
    checkIfAccountExist()
    getEtherPrice()
    getEth2()
    getAccountBalance()
  }, []); 

  return (
    <div > 
      <div className=" p-3 dark:bg-blue-600 bg-blue-500 grid grid-cols-1 w-full text-white" style={{height: "5rem"}}>
        <div className=" flex flex-row  w-full items-center justify-around">
          <div className="">
            <Link to="/">
              <p className='flex flex-row gap-1 items-center text-lg font-extrabold sm:text-3xl'> 
                <div className=" shadow-xl  hover:shadow-inner sm:p-2 sm:px-3 px-2 p-1 bg-white dark:bg-gray-800 rounded-full  ">
                  🐋
                </div>  
                <div className="flex flex-col sm:flex-row sm:gap-2 gap-0">
                  <div className=""> ETHEREUM </div>
                  <div className=""> READER </div>
                </div> 
              </p>
            </Link>
          </div>

          {/*//left*/}
          <div className="flex flex-row items-center gap-3">
          <Switcher/>
          <div className="relative  text-xs sm:text-sm bg-white dark:bg-gray-800 text-gray-600 dark:text-white sm:p-3 p-1 sm:rounded-xl rounded-md hover:bg-slate-100 dark:hover:bg-gray-700 shadow-md   ">
            {UserAccount.length?(
                <div className="">
                  <button className='' onClick={()=>openUserInfo()}>
                    Acc: {UserAccount.slice(0,4)}...{UserAccount.slice(-4,-1)}{UserAccount.slice(-1)}
                  </button>
                  <div className="">
                    {openModel?(
                      <div className="absolute right-0 text-xs z-10 bg-white dark:bg-gray-800 dark:text-white shadow-md border dark:border-gray-700 text-black p-2 sm:p-3 rounded-xl mt-6 ">
                        <button className='flex flex-col' onClick={()=>openUserInfo()}>
                          <p  className='block  px-2 py-2 dark:text-white text-gray-700 hover:bg-gray-100 w-full text-left dark:hover:bg-gray-700 rounded-sm border-b-2 dark:border-gray-700 border-zinc-100 ' >Account {UserAccount}</p> 
                          <p className='block px-2 py-2   dark:text-white text-gray-700 hover:bg-gray-100 w-full text-left dark:hover:bg-gray-700 rounded-sm border-b-2 dark:border-gray-700 border-zinc-100'>Balance: {Balance} ETH</p>
                          <p className='block px-2 py-2   dark:text-white text-gray-700 hover:bg-gray-100 w-full text-left dark:hover:bg-gray-700 rounded-sm '>Total Transaction:  count ETH</p>
                          <button onClick={()=>disconnectWallet()} className='bg-red-500 p-2 mt-1 ml-2 rounded-lg text-white hover:bg-red-600'>DISCONNECT</button>
                        </button>
                      </div>
                    ):("")}
                  </div>
                </div>
              ):(
                <button className='text-md' onClick={()=>connectWallet()}>
                  Connect Wallet
                </button>
              )
            } 
          </div>
          </div>
        </div>
      </div>
      {/* Ether price and ether supply*/}
      <div className="grid justify-items-stretch p-2 pb-0 sm:pb-2   grid-cols-1  sm:grid-cols-2 lg:grid-cols-3">
        <div className="  sm:p-2 p-1 text-black dark:text-white  ">
          <div className="grid shadow-md dark:shadow-gray-700 bg-white dark:bg-gray-800 p-1 w-full text-sm sm:text-base grid-rows-1 h-full rounded-lg justify-start   ">
            <div className="flex flex-row items-center sm:flex-col">
            <div className="text-md sm:self-start sm:text-2xl font-bold px-2 "> PRICE</div>
            <div className="flex flex-wrap flex-row text-white gap-2 p-1 sm:p-2">
              <div className="p-1 sm:p-2 bg-blue-400 text-xs sm:text-sm rounded-md flex flex-row gap-1 shadow-md"> 
                <div className="font-bold">
                  USD
                </div>
                <div className="">
                  {price.ethusd}
                </div>
                <div className="overflow-visible grid justify-items-center grid-cols-1 h-full px-1 items-center gap-3">
                  <span className="relative flex justify-center h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                </div>
              </div>
              <div className="p-1 sm:p-2 text-xs sm:text-sm bg-blue-400 rounded-md flex flex-row gap-1 shadow-md">
                <div className="font-bold">
                  BTC 
                </div>
                <div className="">
                  {price.ethbtc}
                </div>
                <div className="overflow-visible grid justify-items-center grid-cols-1 h-full px-1 items-center gap-3">
                  <span className="relative flex justify-center h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                </div>
                </div>
            </div>
            </div>
          </div>
        </div>
        <div className=" sm:p-2 p-1  flex flex-col text-black  dark:text-white  ">
          <Link to="stats">
            <div className="bg-white dark:bg-gray-800 hover:shadow-inner dark:shadow-gray-700 shadow-md p-1 h-full rounded-lg ">
              <div className="text-sm sm:text-2xl font-bold px-2 ">STATS</div>
              <div className="p-1 px-2 text-xs sm:text-sm flex flex-row gap-1 overflow-x-auto"><p className='font-medium'>TOTAL SUPPLY :</p> {ConvertToEther(EtherSupply)} ETH</div>
              <div className="p-1 px-2 text-xs sm:text-sm flex flex-row gap-1 overflow-x-auto"><p className='font-medium'>ETH FOR STACK :</p> {ConvertToEther(Eth2Stack)} ETH</div>
            </div>
          </Link>
        </div>
        <div className="sm:p-2 p-1 grid grid-cols-1 sm:col-span-2 lg:col-span-1 items-center">
          <NavBar2/>
        </div>
      </div>
    </div>
  )
}

export default NavBar