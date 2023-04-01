import React from 'react'
import Search from './Search'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import Start from './Start';

function NavBar2() {
  return (
    <div>
        <div className="  dark:bg-gray-700 p-1 sm:pt-0  ">
          <div className="text-lg sm:text-2xl font-bold text-white pb-1 px-2"></div>
          <div className="grid grid-cols-1 sm:grid-rows-2 gap-1 w-full text-white ">
            <div className=" flex flex-row gap-2 sm:gap-2  flex-wrap px-3">
                <div className="p-2 bg-gray-500 text-white h-fit grow text-center text-md rounded-md shadow-md font-bold px-3 hover:bg-blue-400 dark:bg-white dark:text-black hover:text-white">DAPP</div>
                <div className="p-2 bg-gray-500 text-white h-fit grow text-center text-md rounded-md shadow-md font-bold px-3 hover:bg-blue-400 dark:bg-white dark:text-black hover:text-white">DAO</div>
                <div className="p-2 bg-gray-500 text-white h-fit grow text-center text-md rounded-md shadow-md font-bold px-3 hover:bg-blue-400 dark:bg-white dark:text-black hover:text-white">DEFI</div>
                <div className="p-2 bg-gray-500 text-white h-fit grow text-center text-md rounded-md shadow-md font-bold px-3 hover:bg-blue-400 dark:bg-white dark:text-black hover:text-white">NFT</div>
                <div className="p-2 bg-gray-500 text-white h-fit grow text-center text-md rounded-md shadow-md font-bold px-3 hover:bg-blue-400 dark:bg-white dark:text-black hover:text-white">TXN</div>
            </div>
            <Search/>
          </div>
        </div>
    </div>
  )
}

export default NavBar2