
import './App.css';
import Nav from './components/Nav';
import Store from './components/store1';
import Footer from './components/Footer';
// import HookSet from './components/HookSet';
import LoginView from './components/LoginView';
import HomeW from './components/HomeW';
// import UseEff from './components/UseEff';
import { Button, ButtonGroup,Input ,Text,useState} from '@chakra-ui/react';
// import Search from './components/Search'
import Majed from './components/Majed'
import {Link} from "react-router-dom";
import Route1 from "./components/Route1"



function App() {


  return (
    

 
    <div className="App">

<Nav/>
{/* <HomeW/> */}
<Route1/>

 <Footer/>
    
    </div>
   );
 }

export default App;
