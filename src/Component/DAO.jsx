import React from 'react'
import DAOs from './DAO/DAOs';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useNavigation,
  Link,
} from "react-router-dom";
import NEWS from './DAO/NEWS';
import TOOLS from './DAO/TOOLS';

function DAO() {
  return (
    <div>
      <div className=" grid bg-gray-100 dark:bg-gray-700 grid-cols-1  sm:grid-cols-1 gap-3 p-1 pt-3 ">
          <div className=" shadow-sm bg-white dark:bg-gray-800 dark:shadow-gray-500 flex flex-col overflow-auto rounded-xl gap-2 p-3 m-2 mt-0">
            <div className=" rounded-sm  flex flex-row sm:gap-3 gap-0 p-2 shadow-sm shadow-gray-200 dark:shadow-gray-600 w-full overflow-x-auto">
            <Link to='/dao'>      <h3 className="sm:text-lg           flex flex-row  hover:text-blue-500   text-blue-400 border-blue-400 text-sm p-1 px-2  font-bold">DAOs</h3></Link>
            <Link to='/dao/tools'><h3 className="sm:text-lg  flex flex-row hover:text-blue-500   text-blue-400 border-blue-400 text-sm p-1 px-2  font-bold">TOOLs</h3></Link>
            <Link to='/dao/news'><h3 className="sm:text-lg uppercase flex flex-row hover:text-blue-500  text-blue-400 border-blue-400 text-sm p-1 px-2  font-bold">News</h3></Link>
            </div>
            <Routes>
              <Route path="/" element={<DAOs/>} />
              <Route path="news/*" element={<NEWS/>} />
              <Route path="tools/*" element={<TOOLS/>} />
            </Routes>
          </div>
        </div>
    </div>
  )
}

export default DAO