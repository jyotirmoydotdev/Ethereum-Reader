// eslint-disable-next-line 
import {Etherscan} from "./Context/Ethers";
import React,{useState, useContext, useEffect} from 'react'
import { ethers } from "ethers";
import ReactDOM from "react-dom";
import { Link, useNavigate } from "react-router-dom";
import { formatUnits } from "ethers/lib/utils";

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
  console.log(TnxDetails);

  useEffect(() => {
    if (topTenBlock &&  yourBlockTxn && transaction && gasPrice && TnxDetails) {
      setIsLoading(false);
    }
  }, [topTenBlock, yourBlockTxn, transaction, gasPrice, TnxDetails]);
    return(
      <div className="">
        {!isLoading ? (
        <div className="grid  grid-cols-1  sm:grid-cols-2 gap-3 p-1 " style={{height: "40rem"}}>
          <div className=" white border border-gray-300 flex flex-col overflow-auto rounded-xl gap-2 p-3 m-2 mt-0">
            <h3 className="text-2xl uppercase flex flex-row justify-between items-center shadow-sm text-blue-400 p-2 rounded-md font-bold">
              <Link to='/'>
              Latest Block
              </Link>
              <Link className="text-sm" to='/'>
              Reload
              </Link>

            </h3>

            <div className="overflow-auto flex flex-col text-sm gap-3">
            {yourBlockTxn.map((el,i)=>(
              <Link to='/block'>
              <div className="bg-white hover:bg-slate-100 rounded-md p-2 grid lg:grid-cols-3 sm:grid-cols-2 shadow-sm" key={i+1}>
                <div className="grid grid-cols-2 sm:grid-cols-1 gap-1 ">
                  <div className="flex flex-row  gap-1">
                    <p className="font-bold">Block</p>
                    <Link to='/' className='text-blue-400 hover:text-blue-500'>{el.number}</Link>
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
                          <Link to='/account'>
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
            </div>
          </div>
        <div className="white border border-gray-300 flex flex-col text-sm overflow-y-auto rounded-xl gap-2 p-3 m-2 mt-0">
            <div className="text-2xl uppercase flex flex-row  shadow-sm  justify-between items-center text-blue-400 p-2 rounded-md font-bold">
              <Link to='/'>
              Latest Transaction
              </Link>
              <Link to='/' className="text-sm">
              Reload
              </Link>
              </div>
            <div className="overflow-auto flex flex-col gap-3">
              {TnxDetails.map((el,i)=>(
                <div className="bg-white items-center hover:bg-slate-100   p-2 shadow-sm grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2" key={i+1}>
                  <div className="flex flex-col ">
                    <div className="flex flex-row gap-1 p-1 pl-0">TXN Hash <div className="text-blue-400 hover:text-blue-500">{el.blockNumber}</div></div>
                    <div className="text-blue-400 hover:text-blue-600">
                      <Link to='/'>
                    {el.blockHash.slice(0,16)}...
                    </Link>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row gap-1 p-1 pl-0">
                      <div className="">
                      From 
                      </div>
                      <div className=" text-blue-400 hover:text-blue-500">
                        {el.from.slice(0,8)}...{el.from.slice(-8,-1)}{el.from.slice(-1)}
                      </div>
                    </div>
                    <div className="flex flex-row gap-1">
                      <div className="">
                        To
                      </div>
                      <div className=" text-blue-400 hover:text-blue-500">
                      {el.to.slice(0,8)}...{el.to.slice(-10,-1)}{el.to.slice(-1)}
                      </div>
                    </div>
                  </div>
                  <div className="w-fit flex flex-col">
                    <div className="">
                  Transaction Value
                    </div>
                    <div className="bg-blue-400 p-1 px-2  rounded-md text-white">
                      {convertToEthers(el.value).slice(0.4)} ETH
                    </div>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>):
      (
          <div className="grid  grid-cols-1  sm:grid-cols-2 gap-3 p-1 " style={{height: "40rem"}}>
          <div className=" white border border-gray-300 flex flex-col overflow-auto rounded-xl gap-2 p-3 m-2 mt-0">
            <h3 className="text-2xl uppercase flex flex-row  shadow-sm text-blue-400 p-2 rounded-md font-bold">Latest Block</h3>
            <div className="overflow-auto grid justify-items-center grid-cols-1 h-full items-center gap-3">
              <span className="relative flex justify-center h-12 w-12">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-12 w-12 bg-sky-500"></span>
              </span>
            </div>
          </div>
          <div className="white border border-gray-300 flex flex-col overflow-auto rounded-xl gap-2 p-3 m-2 mt-0">
            <div className="text-2xl uppercase flex flex-row  shadow-sm text-blue-400 p-2 rounded-md font-bold">Latest Transaction</div>
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