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
import Start from './Component/Start.jsx';

const App = () => {
return(
  <>
  <BrowserRouter>
  <EtherProvider>
    <div className=''>
      <NavBar/>
      <Search/>
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