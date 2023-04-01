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

const App = () => {
  const dark="className='dark'";
return(
  <>
  <BrowserRouter>
  <EtherProvider>
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </div>
  </EtherProvider>
  </BrowserRouter>
  </>
)};

export default App