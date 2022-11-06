import React from 'react'
import {Routes,Route}from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import LoginView from './LoginView';
import Majed from './Majed'
import Store from './store1'
import Get from './Get'
import Gett from './Gett'




function Route1() {
  return (
    <div>
    
    <Routes>

 <Route exact path="/" element={<LoginView/>} />
 <Route path="Store" element={<Store/>} />
 <Route path="Get" element={<Get/>} />
 <Route path="/Get/:id" element={<Gett/>}/>
 
 



</Routes>
   </div>
  )
}

export default Route1