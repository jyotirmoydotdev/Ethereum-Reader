import React, {useState, useEffect, useContext}from 'react';
import { Link } from 'react-router-dom';
import axios, { Axios } from 'axios';
import { ethers } from 'ethers';
import Switcher from '../Switch';
import NavBar2 from './NavBar2';
import Head from './Head';
import {Etherscan} from "../Context/Ethers";


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

  const ConvertToEther=(value)=>{
    const ETH=ethers.utils.formatEther(value);
    const ETHfs=Number(ETH);
    const ETHfsp=Math.floor(ETHfs)
    const ETHf= ethers.utils.commify( ETHfsp );
    return ETHf;
  }
  const { data, 
    currentBlock, 
    topTenBlock, 
    yourBlockTxn, 
    transaction, 
    gasPrice,
    TnxDetails
  } = useContext(Etherscan);
  
  useEffect(() => {
    checkIfAccountExist()
    getEtherPrice()
    getEth2()
    getAccountBalance()
  }, []); 

  return (
    <div > 
      {/* Ether price and ether supply*/}
      <div className="grid justify-items-stretch p-2 pb-0 sm:pb-2   grid-cols-1">
        <div className="flex flex-row flex-wrap">
        <div className="  sm:p-2 p-1 text-black dark:text-white  grow">
          <div className="grid shadow-md dark:shadow-gray-700 bg-white dark:bg-gray-800 p-1 w-full text-sm sm:text-base grid-rows-1 h-full rounded-lg justify-start   ">
            <div className="flex items-center flex-row">
            <div className="text-md  sm:text-2xl font-bold px-2 "> PRICE</div>
            <div className="flex flex-wrap  flex-col text-white gap-2 p-1 sm:p-2">
              <div className="p-1 sm:p-2 bg-blue-400 text-xs sm:text-sm rounded-md flex flex-row gap-1 shadow-md"> 
                <div className="font-bold">
                  USD
                </div>
                <div className="">
                  {price.ethusd}
                </div>
                <div className="overflow-visible grid  grid-cols-1 h-full px-1 items-center gap-3">
                  <span className="relative flex items-center justify-center h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full  bg-white opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                  </span>
                </div>
              </div> 
            </div>
            </div>
          </div>
        </div>
        <div className=" sm:p-2 p-1  flex flex-col text-black  dark:text-white grow ">
          <Link to="stats">
            <div className="bg-white dark:bg-gray-800 hover:shadow-inner dark:shadow-gray-700 shadow-md p-1 h-full rounded-lg ">
              <div className="text-sm sm:text-2xl font-bold px-2 ">STATS</div>
              <div className="p-1 px-2 text-xs sm:text-sm flex flex-row gap-1 overflow-x-auto"><p className='font-medium'>TOTAL SUPPLY :</p> {ConvertToEther(EtherSupply)} ETH</div>
            </div>
          </Link>
        </div>
        <div className=" sm:p-2 p-1  flex flex-col text-black  dark:text-white grow ">
          <Link to="stats">
            <div className="bg-white dark:bg-gray-800 hover:shadow-inner dark:shadow-gray-700 shadow-md p-1 h-full rounded-lg ">
              <div className="text-sm sm:text-2xl font-bold px-2 ">Last Block</div>
              <div className="p-1 px-2 text-xs sm:text-sm flex flex-row gap-1 overflow-x-auto"><p className='font-medium'>Block :</p> {currentBlock}</div>
            </div>
          </Link>
        </div>
        {/*
          <div className="sm:p-2 p-1 grid grid-cols-1 sm:col-span-2 lg:col-span-1 items-center ">
          <NavBar2/>
        </div>
  */}
        </div>
      </div>
    </div>
  )
}

export default NavBar