// eslint-disable-next-line 
import React from 'react'
import { Link } from 'react-router-dom'
import {Etherscan} from "../Context/Ethers";
import { useContext, useState, useEffect } from 'react';

function Start() {
  const { data, 
    currentBlock, 
    topTenBlock, 
    yourBlockTxn, 
    transaction, 
    gasPrice,
    TnxDetails
  } = useContext(Etherscan);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (topTenBlock &&  yourBlockTxn && transaction && gasPrice && TnxDetails) {
      setIsLoading(false);
    }
  }, [topTenBlock, yourBlockTxn, transaction, gasPrice, TnxDetails]);
  return (
    <div>
      {!isLoading?(
        <div className="">
          loading..
        </div>
      ):(
        <Link to='/Home' className='' >Start</Link>
      )

      }
    </div>
  )
}

export default Start