import React from 'react'
import NavBar from "./Component/NavBar.jsx";
import Home from "./Home";
import Footer from "./Component/Footer.jsx";
import {EtherProvider}  from "./Context/Ethers.js";

const App=({ Component, pageProps })=>(
  <EtherProvider>
    <div className=''>
    <NavBar/>
    <Home/>
    <Footer/>
    </div>
  </EtherProvider>
);

export default App