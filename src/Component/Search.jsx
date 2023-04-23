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
      <div className="grid grid-cols-1   h-fit p-1">
        <form action="" className=" flex flex-row gap-2 justify-center px-3 items-center">
          <input type="text" className=' text-black dark:text-white dark:bg-gray-600 grow text-sm sm:text-base  p-1 px-2 rounded-md' placeholder='Enter Account Number ' id="accountAddress"/>
          <Link to="/account/" onClick={(event) => AccountAddress(event)} className='bg-blue-400 h-full text-sm sm:text-base hover:bg-blue-500 rounded-md p-1 px-2 text-white italic'>
            Submit
          </Link>
        </form>
      </div> 
    </div>
  )
}

export default Search;
