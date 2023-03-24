import React, {useState, useEffect, useContext}from 'react';
import Link from 'next/link';
import axios, { Axios } from 'axios';


const NavBar=()=> {
  const [UserAccount, setUserAccount] = useState('');
  const [Balance, setBalance] = useState('');
  const [count, setcount] = useState('');
  const [openModel, setopenModel] = useState(true);
  const [price, setprice] = useState([]);
  const [EtherSupply, setEtherSupply] = useState([]);
  const [updatedPriceDate, setupdatedPriceDate] = useState('');
  const varr=1;

  const getEtherPrice=async()=>{
    try{
      const Ether_APIkey='6BGBJR95MWV3YKYX2GISBBHN7F3QFHGZ4Z';
      axios.get('https://api.etherscan.io/api?module=stats&action=ethprice&apikey='+Ether_APIkey)
      .then((response)=>{
        setprice(response.data.result);
        const timestamp= Number(response.data.result.ethusd_timestamp);
        const date= new Date(timestamp);
        setupdatedPriceDate("UpDate: "+ date.getHours() + ":" + date.getMinutes()+":"+date.getSeconds());
        console.log(timestamp);
        console.log(updatedPriceDate);
        console.log(price);
        
      })
    }catch(error){
      console.log(error);
    }
  };
  useEffect(() => {
    getEtherPrice()
  }, [])

  return (
    <div>
      <div className="">
        <div className="container flex flex-row">
          <div className="text-3xl">
            <Link href="/">
              <h1>Ethereum Reader</h1>
            </Link>
          </div>
          {/*//left*/}
          <div className="">
            hey 
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar