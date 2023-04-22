import React from 'react'
import NavBar from "./Component/NavBar.jsx";
import Home from "./Home";
import Footer from "./Component/Footer.jsx";
import {EtherProvider}  from "./Context/Ethers.js";
import Search from './Component/Search.jsx';
import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  useNavigate,
  useNavigation,
} from "react-router-dom";
import NavBar2 from './Component/NavBar2.jsx';
import Switcher from './Switch.js';
import ERC from './Component/ERC.jsx';
import DAO from './Component/DAO.jsx';
import Account from './Component/Account.jsx';

const App = () => {
  const dark="className='dark'";
return(
  <>
  <BrowserRouter>
  <EtherProvider>
    <div className='h-screen bg-gray-100 dark:bg-gray-700'>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="erc/*" element={<ERC/>} />
        <Route path="dao/*" element={<DAO/>} />
        <Route path="account/*" element={<Account/>} />
      </Routes>
      <Footer/>
    </div>
  </EtherProvider>
  </BrowserRouter>
  </>
)};

export default App