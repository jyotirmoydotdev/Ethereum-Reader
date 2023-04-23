import React from 'react'
import { Link } from 'react-router-dom';
import Switcher from '../Switch'
import NavBar2 from './NavBar2';
import '../mobile.css';

function Head() {
  return (
    <div>
        <div className=" dark:bg-blue-600 bg-blue-500 grid grid-cols-1 w-full text-white" style={{height: "4rem"}}>
        <div className=" flex flex-row  w-full items-center justify-around">
          <div className="">
            <Link to="/">
              <p className='flex flex-row gap-1 items-center text-lg font-extrabold sm:text-3xl'> 
                <div className=" shadow-xl  hover:shadow-inner sm:p-1 sm:px-2 px-2 p-1 bg-white dark:bg-gray-800 rounded-full  ">
                  🐋
                </div>  
                <div className="flex flex-row sm:flex-row gap-2">
                  <div className=""> ETHEREUM </div>
                  <div className=""> READER </div>
                </div> 
              </p>
            </Link>
          </div>
          <div className="hide-on-mobile">
            <NavBar2/>
          </div>
          {/*//left*/}
          <div className="flex flex-row items-center gap-3">
          <Switcher/>
          </div>
          <div className="">
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Head