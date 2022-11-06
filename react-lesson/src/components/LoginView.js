import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import {Link} from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import React,{useState,useEffect} from 'react'
import axios from "axios";


export default function LoginView() {
  let url = "https://636242497521369cd068dfd3.mockapi.io/ToDo"
  // const [names,setNames]=useState({email:"",password:""})


  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")

  const postData = () => {
    axios.post(url,{
        Email,
        Password
    }).then(res =>{
        console.log(res)
    })
   }

  const navigate = useNavigate()

  const LogIn =()=>{
    if(Email.length<1 || Password.length<1){
        alert("Email and Password are required");
    }else{
     postData();
      navigate('Get');
    }}

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              {/* <Input value={names.email} onChange={e=>{setNames({ ...names,email:e.target.value})}} type="email" /> */}
             <Input onChange ={e =>{ setEmail(e.target.value)}} type="email" />

            </FormControl>
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input onChange ={e =>{ setPassword(e.target.value)}} type="password" />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}>
                <Checkbox>Remember me</Checkbox>
                <Link color={'blue.400'}>Forgot password?</Link>
              </Stack>
              <Button onClick={() => LogIn()}
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign in
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}