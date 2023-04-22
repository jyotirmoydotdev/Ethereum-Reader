// eslint-disable-next-line 
import {Etherscan} from "./Context/Ethers";
import React,{useState, useContext, useEffect} from 'react'
import { ethers } from "ethers";
import ReactDOM from "react-dom";
import { Link,useLocation, useNavigate } from "react-router-dom";
import { formatUnits } from "ethers/lib/utils";
import NavBar2 from "./Component/NavBar2";
import Search from "./Component/Search";

const Home = () => {
  let navigate = useNavigate();
  const AccountAddress = (addressM) => {
    navigate(`/account?${addressM}`);
    addressM="";
  };

  const convertToEthers=(amount)=>{
    const ETH= ethers.utils.formatUnits(amount,"ether");
    return ETH;
  }

  const { data, 
    currentBlock, 
    topTenBlock, 
    yourBlockTxn, 
    transaction, 
    gasPrice,
    TnxDetails
  } = useContext(Etherscan);
  const [isLoading, setIsLoading] = useState(true);
  //console.log(TnxDetails);

  useEffect(() => {
    if (topTenBlock &&  yourBlockTxn && transaction && gasPrice && TnxDetails) {
      setIsLoading(false);
    }
  }, [topTenBlock, yourBlockTxn, transaction, gasPrice, TnxDetails]);
    return(
      <div className="">        
        {!isLoading ? (
        <div className="scrollbar-hide grid bg-gray-100 dark:bg-gray-700 grid-cols-1  sm:grid-cols-2 gap-3 p-1 " style={{height: "45rem"}}>
          <div className=" bg-white dark:bg-gray-800 shadow-md  dark:shadow-slate-500 flex flex-col overflow-auto rounded-xl gap-2 p-3 m-2 mt-0">
            <h3 className="text-xl sm:text-2xl uppercase flex flex-row justify-between items-center shadow-sm text-blue-400 p-2 rounded-md font-bold">
              <Link to='/'>
              Latest Block
              </Link>
              <Link className="text-sm" to='/'>
              Reload
              </Link>

            </h3>
            <div className="overflow-auto scrollbar-hide flex flex-col text-xs sm:text-sm gap-3">
            {yourBlockTxn.map((el,i)=>(
              <Link to={{pathname:'/block', search:`?${el.number}`}} key={i+1}>
              <div className="bg-white dark:bg-gray-800 dark:text-white dark:hover:bg-gray-600 hover:bg-slate-100 rounded-md p-2 grid lg:grid-cols-3 sm:grid-cols-2 shadow-sm" >
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-1 ">
                  <div className="flex flex-row  gap-1">
                    <p className="font-bold">Block</p>
                    <Link to={{pathname:"/block",search:`?${el.number}`}} className='text-blue-400 hover:text-blue-500'>{el.number}</Link>
                  </div>
                  <p className="flex flex-row gap-1">
                     Total Txns
                    <div className="text-blue-400 hover:text-blue-500">
                    {el.transactions.length}
                    </div>
                    </p>
                </div>
                <div className="">
                  <div className="Miner">
                    <div className="flex sm:flex-col flex-row gap-1">
                      <p>Miner Address</p>
                        <div className="overflow-auto text-blue-400 hover:text-blue-500">
                        <Link to={{pathname:"/account",search:`?${el.miner}`}}>
                          {el.miner.slice(0,8)}...{el.miner.slice(-8,-1)}{el.miner.slice(-1)}
                        </Link>
                        </div>
                    </div>
                  </div>
                </div>
                <div className="w-fit flex flex-col flex-wrap">
                  <div className="">
                  Block Reward
                  </div>
                  <div className="bg-blue-400 px-2 text-white p-1 rounded-md flex-row gap-1  flex">
                    <div className="">
                      {convertToEthers(el.baseFeePerGas)} 
                    </div>
                    <div className="">
                      ETH
                    </div>
                  </div>
                </div>
              </div>
              </Link>
            ))}
            <div className="p-2 w-full text-center bg-gray-100 dark:bg-gray-700 dark:text-white font-bold dark:hover:bg-gray-600 rounded-md ">All Latest Block</div>
            </div>
          </div>
          <div className="  bg-white dark:bg-gray-800 shadow-md  dark:shadow-slate-500 flex flex-col text-sm overflow-y-auto rounded-xl gap-2 p-3 m-2 mt-0">
              <div className="text-xl sm:text-2xl uppercase flex flex-row  shadow-sm  justify-between items-center text-blue-400 p-2 rounded-md font-bold">
                <Link to='/'>
                Latest Transaction
                </Link>
                <Link to='/' className="text-sm">
                Reload
                </Link>
                </div>
              <div className="overflow-y-auto overflow-x-hidden sm:text-sm text-xs scrollbar-hide flex flex-col gap-3">
                {TnxDetails.map((el,i)=>(
                  <Link to={{pathname:'/transaction', search:`?${el.hash}`}} key={i+1}>
                  <div className="bg-white dark:bg-gray-800 dark:text-white  items-center hover:bg-slate-100 rounded-md dark:hover:bg-gray-600 p-2 shadow-sm grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-2  gap-2" key={i+1}>
                    <div className="flex flex-col ">
                      <div className="flex flex-row gap-1 p-1 pl-0">
                        TXN Hash 
                        <div className="text-blue-400 hover:text-blue-500">
                          <Link to={{pathname:"/block",search:`?${el.blockNumber}`}}>
                            {el.blockNumber}
                          </Link>
                        </div>
                      </div>
                      <div className="text-blue-400 hover:text-blue-600"> 
                        <Link to={{pathname:"/transaction",search:`?${el.hash}`}}>
                          {el.hash.slice(0,16)}...
                        </Link>
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row gap-1 p-1 pl-0">
                        <div className="">
                        From 
                        </div>
                        <div className=" text-blue-400 hover:text-blue-500">
                          <Link to={{pathname:"/account",search:`?${el.from}`}}>
                            {el.from.slice(0,8)}...{el.from.slice(-8,-1)}{el.from.slice(-1)}
                          </Link>
                        </div>
                      </div>
                      <div className="flex flex-row gap-1">
                        <div className="">
                          To
                        </div>
                        <div className=" text-blue-400 hover:text-blue-500">
                          <Link to={{pathname:"/account",search:`?${el.to}`}}>
                            {el.to.slice(0,8)}...{el.to.slice(-10,-1)}{el.to.slice(-1)}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="w-fit flex flex-col col-span-2 sm:col-span-1">
                      <div className="">
                    Transaction Value
                      </div>
                      <div className="bg-blue-400 p-1 px-2  rounded-md text-white">
                        {convertToEthers(el.value).slice(0.4)} ETH
                      </div>
                    </div>
                  </div>
                  </Link>
                ))}
                <div className="p-2 w-full text-center dark:bg-gray-700 dark:text-white font-bold dark:hover:bg-gray-600 rounded-md bg-gray-100">All Latest Transaction</div>
              </div>
          </div>
        </div>):
      (
          <div className="grid bg-gray-100 dark:bg-gray-700 grid-cols-1  sm:grid-cols-2 gap-3 p-1 " style={{height: "45rem"}}>
          <div className=" shadow-sm bg-white dark:bg-gray-800 dark:shadow-gray-500 flex flex-col overflow-auto rounded-xl gap-2 p-3 m-2 mt-0">
            <h3 className="text-xl sm:text-2xl uppercase flex flex-row  shadow-sm text-blue-400 p-2 rounded-md font-bold">Latest Block</h3>
            <div className="overflow-auto grid justify-items-center grid-cols-1 h-full items-center gap-3">
              <span className="relative flex justify-center h-12 w-12">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-12 w-12 bg-sky-500"></span>
              </span>
            </div>
          </div>
          <div className=" shadow-sm bg-white dark:bg-gray-800 dark:shadow-gray-500 flex flex-col overflow-auto rounded-xl gap-2 p-3 m-2 mt-0">
            <div className="text-xl sm:text-2xl uppercase flex flex-row  shadow-sm text-blue-400 p-2 rounded-md font-bold">Latest Transaction</div>
            <div className="overflow-auto grid justify-items-center grid-cols-1 h-full items-center gap-3">
            <span className="relative flex justify-center h-12 w-12">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-12 w-12 bg-sky-500"></span>
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
    );
};
 
export default Home;