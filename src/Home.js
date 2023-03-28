import React,{useState, useContext, useEffect} from 'react'
import Link from 'next/link'; 
import {Etherscan} from "./Context/Ethers"
const Home=()=>{
    const { data, 
      currentBlock, 
      topTenBlock, 
      yourBlockTxn, 
      transaction, 
      gasPrice, 
      provider,} = useContext(Etherscan);
    const [userAccount, setuserAccount] = useState('');
    return (
      <div className="">
        <div className=" w-full">
          <form action="" className=" p-2 flex flex-row gap-2 justify-center items-center">
            <input type="text" className='border-blue-200 w-2/3 sm:w-2/4 text-sm sm:text-base border border-1 ring-1 hover:ring-2 p-1 px-2 rounded-md ring-blue-400' placeholder='Enter Account Number '/>
            <Link href={{pathname:'/account',query:userAccount}} className='bg-blue-400 text-sm sm:text-base hover:bg-blue-600 rounded-md p-1 px-2 text-white italic'>
              Submit
            </Link>
          </form>
        </div>
        <div className="grid  grid-cols-1  sm:grid-cols-2 gap-3 p-1 " style={{height: "36rem"}}>
          <div className=" white border border-gray-300 flex flex-col overflow-auto rounded-xl gap-2 p-3 m-2 mt-0">
            <h3 className="text-2xl uppercase flex flex-row  shadow-sm text-purple-400 p-2 rounded-md font-bold">Latest Block</h3>
            <div className="overflow-auto flex flex-col gap-3">
            {yourBlockTxn.map((el,i)=>(
              <div className="bg-white rounded-md p-2 shadow-sm" key={i+1}>
                <div className="">
                  <div className="flex flex-row gap-1">
                    <p className="">Block</p>
                    <Link href={{pathname:'/block',query:el.number}} className='text-blue-500 hover:text-blue-700'>{el.number}</Link>
                  </div>
                  <p className="">{el.timestamp}</p>
                </div>
                <div className="">
                  <div className="Miner">
                    <p className="flex flex-row gap-1">
                      <span>Miner:</span>
                        <div className="overflow-auto text-blue-400 hover:text-blue-500">
                        {el.miner.slice(0,8)}...{el.miner.slice(-8,-1)}{el.miner.slice(-1)}
                        </div>
                    </p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>
          <div className="white border border-gray-300 flex flex-col overflow-auto rounded-xl gap-2 p-3 m-2 mt-0">
            <div className="text-2xl uppercase flex flex-row  shadow-sm text-purple-400 p-2 rounded-md font-bold">Latest Transaction</div>
            <div className="overflow-auto flex flex-col gap-3">
              {transaction.map((el,i)=>(
                <div className="bg-white rounded-md p-2 shadow-sm flex flex-row gap-2" key={i+1}>
                  <div className="">Tnx Hash</div>
                  <div className="text-blue-400 hover:text-blue-600">
                    <Link href={{}}>
                  {el.slice(0,10)}....{el.slice(-10,-1)}{el.slice(-1)}
                  </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      );
};

export default Home;