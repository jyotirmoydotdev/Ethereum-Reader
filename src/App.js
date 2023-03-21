import './App.css';
import logo from './logo.svg';
const {ethers}= require ("ethers");
const {infuraID} = require ("./InfuraID.js");
function App() {
  const Infura_ID=infuraID;
  const provider=new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/"+Infura_ID);
  const address="0xDA9dfA130Df4dE4673b89022EE50ff26f6EA73Cf";
  const main =async()=>{
       const balance=await provider.getBalance(address);
       return balance;
  }
  main();
  return (
    <div className="App">
      {
        main()
      }
    </div>
  );
}

export default App;
