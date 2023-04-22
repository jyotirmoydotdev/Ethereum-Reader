import React,{usestate, useEffect, useContext} from 'react'
import axios from 'axios'
import { Link,useLocation, useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import {Etherscan} from "../Context/Ethers";


function Account() {
    const {provider} = useContext(Etherscan);
  return (
    <div>Account</div>
  )
}

export default Account