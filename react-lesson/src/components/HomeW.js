import React,{useState,useEffect} from 'react'
 import { Button, ButtonGroup,Input ,Text} from '@chakra-ui/react'
 import {Labsname} from './LabsName'; 

 function HomeW() {

    const [names,setNames] = useState ("")

    // console.log(Labsname.filter(user=>user.lab.includes("")));

    const LogIn =()=>{
        if(names.fName.length==""){
            alert("required")
        }else{
            alert( `welcome ${names.fName}`)
        }
    }

const Submit = ()=>{
    LogIn()
    
}
//input : initial "" , + button . if you search ,(array),use statuse , onchange , mapMethod ; 

  return (


    <div>

    


        <Input onChange={Submit}w={40} m={3} value={names.fName} onChange={e=>setNames(e.target.value)}></Input><br />
        {/* <Input w={40} m={3} value={names.lName} onChange={e=>{setNames({ ...names,lName:e.target.value})}}></Input><br /> */}
        <Button m={3} onChange={Submit}>Search</Button>

<Text> {names.fName}</Text>
{/* <p>{JSON.stringify(names)}</p> */}
{Labsname.filter(Labsname.lab.includes(names)).map((user) => (
        <li key = {user.id} className ="listItem">{user.lab}</li>
    ))}


    </div>
  )
}

export default HomeW
