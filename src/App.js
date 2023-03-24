import React from 'react'
import NavBar from "./Component/NavBar.jsx";
import Footer from "./Component/Footer.jsx";

const App=({ Component, pageProps })=>(
    <div className=''>
    <NavBar/>
    <div className="">
      {/*<Component {...pageProps}/>*/}
    </div>
    <Footer/>
    </div>
);

export default App