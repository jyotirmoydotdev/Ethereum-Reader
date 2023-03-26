import React,{useState, useContext, useEffect} from 'react'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";
import {Etherscan} from "./Context/Ethers"
const Home=()=>{
    const {data} = useContext(Etherscan);
    return <div>{data}</div>;
};

export default Home;