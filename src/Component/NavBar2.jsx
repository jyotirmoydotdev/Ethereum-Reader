import React from 'react'
import Search from './Search'
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useNavigation,
  Link,
} from "react-router-dom";
import Start from './Start';

function NavBar2() {
  return (
    <div>
        <div className="sm:pt-0  ">
          <div className=" font-bold text-white pb-1 "></div>
          <div className="grid grid-cols-1 sm:grid-rows-2 gap-2 w-full text-white ">
            <div className=" flex flex-row gap-2 sm:gap-2  flex-wrap sm:px-3">
            <Link to='/' className="p-2 text-sm sm:text-md bg-blue-500 text-white h-fit grow text-center text-md rounded-md shadow-md font-bold px-3 hover:bg-blue-400 dark:hover:bg-blue-500 dark:bg-blue-600 dark:text-white">  HOME </Link>
            <Link to='/erc' className="p-2 text-sm sm:text-md bg-blue-500 text-white h-fit grow text-center text-md rounded-md shadow-md font-bold px-3 hover:bg-blue-400 dark:hover:bg-blue-500 dark:bg-blue-600 dark:text-white">  ERC</Link>
            <Link to='/dao' className="p-2 text-sm sm:text-md bg-blue-500 text-white h-fit grow text-center text-md rounded-md shadow-md font-bold px-3 hover:bg-blue-400 dark:hover:bg-blue-500 dark:bg-blue-600 dark:text-white">DAO  </Link>
            <Link to='/defi' className="p-2 text-sm sm:text-md bg-blue-500 text-white h-fit grow text-center text-md rounded-md shadow-md font-bold px-3 hover:bg-blue-400 dark:hover:bg-blue-500 dark:bg-blue-600 dark:text-white">  DEFI </Link>
            <Link to='/nft' className="p-2 text-sm sm:text-md bg-blue-500 text-white h-fit grow text-center text-md rounded-md shadow-md font-bold px-3 hover:bg-blue-400 dark:hover:bg-blue-500 dark:bg-blue-600 dark:text-white">  NFT </Link>
            </div>
            <Search/>
          </div>
        </div>
    </div>
  )
}

export default NavBar2