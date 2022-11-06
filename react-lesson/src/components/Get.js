import React from 'react'
import {useEffect,useState} from 'react';
import axios from "axios";
import Store from './store';
import {useParams}from 'react-router-dom'


function Get() {




    const [state, setstate] = useState([])
  useEffect(() => {
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

<Store Name = {item.name} Description={item.status}Expiry = "20"Img ={item.image} id ={item.id}/>

      )
    })}
    </div>  
  )
}

export default Get