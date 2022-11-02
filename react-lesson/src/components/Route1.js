import React from 'react'
import {Routes,Route}from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import LoginView from './LoginView';
import Majed from './Majed'
import Store from './store1'



function Route1() {
  return (
    <div>
    
    <Routes>

 <Route exact path="/" element={<LoginView/>} />
 <Route path="Store" element={<Store/>} />

</Routes>
   </div>
  )
}

export default Route1