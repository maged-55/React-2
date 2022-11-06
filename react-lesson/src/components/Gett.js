import React from 'react'
import {useParams}from 'react-router-dom'
import {useEffect,useState} from 'react';
import axios from "axios";




function Gett(props) {
    const {id} = useParams()
    console.log(id);


    const [state, setstate] = useState([])
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((res) =>{
            
          console.log(res.data);
          setstate(res.data.results);
    
        })
     }, [])

     


    
   
  return (
    <div className ="anwar">

{state.filter(user => user.id==id).map((user) => (
        <li  key = {user.id}className ="listItem">
            Details
           <img   src= {user.image}/>
           Name: {user.name}
           <br/>
           status: {user.status}
           <br/>
           species: {user.species}
           <br/>
           gender: {user.gender}
           <br/>
           type: {user.type}
        
        
        </li>

        // <p>{user.id}</p>
       
    ))}
        



    </div>
  )
}

export default Gett