import React from 'react'
import { useState } from 'react';
import {
  Link,
  useNavigate,
} from "react-router-dom";


const Search=()=>{
  let navigate = useNavigate();
  const [userAccount, setuserAccount] = useState('');

  const AccountAddress = (event) => {
    event.preventDefault();
    let address = document.getElementById("accountAddress").value.trim();
    setuserAccount(address);
    navigate(`/account?${address}`);
    address="";
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 content-center h-fit p-2">
        <form action="" className="p-2 flex flex-row gap-2 justify-center items-center">
          <input type="text" className='border-blue-200 w-2/3 sm:w-2/4 text-sm sm:text-base border border-1 ring-1 hover:ring-2 p-1 px-2 rounded-md ring-blue-400' placeholder='Enter Account Number ' id="accountAddress"/>
          <Link to="/account/" onClick={(event) => AccountAddress(event)} className='bg-blue-400 text-sm sm:text-base hover:bg-blue-600 rounded-md p-1 px-2 text-white italic'>
            Submit
          </Link>
        </form>
        <div className="flex flex-col-1 justify-center items-center text-sm">
        <div className="justify-self-center px-2 py-2 border border-1 border-white bg-blue-400 text-white shadow-md rounded-lg">
        🟡 Please wait for the data to load and click reload.
        </div>
        </div>
      </div> 
    </div>
  )
}

export default Search;
