import React from 'react'
import {useEffect,useState} from 'react';
import axios from "axios";
import Store from './store';



function Get() {
    // https://636242497521369cd068dfd3.mockapi.io/ToDo
    const [state, setstate] = useState([])
    // https://api.publicapis.org/entries
  useEffect(() => {
    http://www.omdbapi.com/?i=tt3896198&apikey=be3b01cb
    // https://api.publicapis.org/entries
    axios.get("https://rickandmortyapi.com/api/character").then((res) =>{
      console.log(res.data);
      setstate(res.data.results);

    })


  }, [])
  return (

    // <div className="App">
    <div className='Card'>


    {state.map(item=>{
      return (
//       <>
//       <div className = "de">
//       <img src = {item.image}/>
//         <br/>
//         <p> Name: {item.name}</p>
//         <p> status: {item.status}</p>



// </div>
//       </>

<Store Name = {item.name} Description={item.status}Expiry = "20"Img ={item.image}/>








      )
    })}
    </div>  



   
  )
}

export default Get