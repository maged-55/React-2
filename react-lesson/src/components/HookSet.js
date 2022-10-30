import React,{useState} from 'react'
 import { Button, ButtonGroup,Input } from '@chakra-ui/react'
 



function HookSet() {
    const [todo, setTodo] = useState("")


    const [todo1, setTodo1] = useState("")
    const [list, setList] = useState([])


    const sum = () =>{
        setList([...list,(todo)+(todo1)])
    }
    const min = () =>{
        setList([...list,parseInt(todo)-parseInt(todo1)])
    }
    const mul = () =>{
        setList([...list,parseInt(todo)*parseInt(todo1)])
    }
    const div = () =>{
        setList([...list,parseInt(todo)/parseInt(todo1)])
    }



    // const [counter, setCounter] = useState(0)
// const increment = () => {
//     // setCounter(counter +1)
//     setCounter((prev) => prev +1)
// }
// const decrement = () => {
//     setCounter((prev) => prev -1)
// }

  return (
    <div>
        {/* <Button onClick={increment}>increment</Button>
        <Button onClick={decrement}>decrement</Button>
        <Input></Input> */}
        <Input htmlSize ={8} width ='20%' onChange={(e)=>{setTodo(e.target.value)}} placeholder='Enter number' />
        <Input htmlSize ={8} width ='20%' onChange={(e)=>{setTodo1(e.target.value)}} placeholder='Enter number' />

        {/* {console.log({todo})} */}
        <Button onClick={sum}>+</Button>
        <Button onClick={min}>-</Button>
        <Button onClick={mul}>X</Button>
        <Button onClick={div}>/</Button>


        <p>{list.map(items => 
        <ul>
            <li> {items}</li>
        </ul>



    )}</p>

        

        
        {/* {console.log({setTodo()})} */}
        {/* <p>counter : {counter}</p> */}
    </div>
  )
}

export default HookSet