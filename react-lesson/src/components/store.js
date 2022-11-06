
import {
    Heading,
    Avatar,
    Box,
    Center,
     Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    
     Img,
  } from '@chakra-ui/react';
  import {Link} from "react-router-dom";

  import React,{useState} from 'react'
  import { ButtonGroup,Input } from '@chakra-ui/react'
  import Store from './store';
  import Gett from './Gett'





  export default function SocialProfileWithImage(props) {

   
let vall ;
let coll ;
    if (props.Expiry>16){
      vall = "Read more";
      coll = '#3dcc55';
    }
    else {
      vall = "التسجيل مغلق";
      coll = '#a0a2a5';
    }

    const [searching, setSearch] = useState('');


    let x =  [props.Name]
      let arr = x.filter((e)=>e)
      console.log(x);

      function handle(e){
        if(arr.includes(e.target.value)){
          setSearch(true)
       }else{
        setSearch(false)
       }
      }

    
      // <Search Logg = "jjjjjjjj"/>



//     const [list, setList] = useState([props.Name])
//  const listt = props.Name ;
//     const sum = () =>{
//       setList(list)
//   }

 

  //   const Nnames = () =>{
  //     setList()
  // }
  

    return (



 
      



      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('#edf2f7', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Flex justify={'center'} mt={3}>
            <Avatar
            
             objectFit={'cover'}
              size={'xl'}
              src = {props.Img}
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'right'} mb={5}>
              <Heading dir="rtl" align={'center'} fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                {props.Name}
              </Heading>
              <Text dir="rtl" align={'center'} color={'gray.500'}>
              {/* noOfLines={'4'} */}
                <br/>
                <br/>
                status : {props.Description}</Text>
            </Stack>
            <Link to= {`/Get/${props.id}`}><Button
              w={'full'}
              mt={-3}
              bg={useColorModeValue(coll, 'gray.900')}
              color={'white'}
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
                {vall}
            </Button></Link>
          </Box>
        </Box>
      </Center>
    );
  }