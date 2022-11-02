
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
  import React,{useState} from 'react'
  import { ButtonGroup,Input } from '@chakra-ui/react'
  import Store from './store';




  export default function SocialProfileWithImage(props) {


    <div className='Card'>
    <Store Name = "معسكر تطبيقات الويب للناشئين" Description = "يهدف المعسكر إلى تطوير الناشئ في مجال تطبيقات الويب باستخدام لغة JavaScript بدايةً من تعلم أساسيات تطبيقات الويب إلى أن يصل إلى بناء مشروع"Expiry = "20"Img ="https://files.bootcamp.sa/8fb8a053-432d-40a1-8179-176051ca23c4/logo/053d6071-e12e-4e92-9b9d-038c966b6c8c.png"/>
    <Store Name = "تطوير تطبيقات iOS باستخدام SwiftUI"Description="برنامج تدريبي لتطوير تطبيقات iOS باستخدام إطار عمل SwiftUI الذي يعتبر الإطار الأحدث والأسهل لبناء واجهات المستخدم عبر جميع منصات Apple،"Expiry="10"Img="https://files.bootcamp.sa/5e7889ad-bc2b-494a-a95a-c0ca153a594a/logo/bf4e8496-e8f3-4e4e-af20-05418aba18ed.png"/>
    <Store Name = "دورة تصميم المواقع بمنهجية No-Code"Description="نستهدف في هذه الدورة الراغبين بتعلم تصميم مواقع الويب من الصفر لتطوير مهاراتهم عن طريق مجموعة من التدريبات العملية والممتعة."Expiry="20" Img ="https://files.bootcamp.sa/5e7889ad-bc2b-494a-a95a-c0ca153a594a/logo/daa4de04-1eaf-4ecc-bb81-11c39bdecc9b.png" />
    <Store Name = "معسكر Python البرمجي للناشئين"Description="معسكر يهدف إلى إيصال مفهوم الأنظمة الرقمية وأنواع لغات البرمجة وأهميتها والتى تمكن الناشئ من بناء برامج بسيطة داخل برنامج Python"Expiry="24"Img="https://files.bootcamp.sa/7f8e3372-2db2-4d3b-8679-118f0dd4d0f2/logo/b8497526-2eb3-4e79-a8ad-a0a006816623.png"/>
    <Store Name = "دورة ITIL لإدارة خدمات تقنية المعلومات"Description="نستهدف في هذه الدورة المهتمين بتعلم مفاهيم ITIL 4 من خلال تزويدهم بعدد من المفاهيم والتطبيقات العملية المختصة بخدمات تقنية المعلومات."Expiry="10"Img="https://files.bootcamp.sa/99565bbd-9d6b-4270-a60e-f6405ef928a2/logo/16f98694-88fb-42cb-bdbb-69f31149b0d6.png"/>
    <Store Name = "معسكر تطوير الألعاب باستخدام Unity للناشئين"Description="يهدف معسكر تطوير الألعاب باستخدام محرك الألعاب Unity ولغة البرمجة #C إلى تمكين المتدرب ابتداءً من المهارات الأساسية إلى تطوير وبرمجة الألعاب بشكل كامل"Expiry="11"Img="https://files.bootcamp.sa/7f8e3372-2db2-4d3b-8679-118f0dd4d0f2/logo/f8d7a8e5-a77c-4dd8-b9d4-1324bdc52cb8.jpeg"/>
    </div> 
let vall ;
let coll ;
    if (props.Expiry>16){
      vall = "التسجيل متاح";
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
              <Text dir="rtl" align={'right'} color={'gray.500'}>
              {/* noOfLines={'4'} */}
                <br/>
                <br/>
                {props.Description}</Text>
            </Stack>
            <Button
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
            </Button>
          </Box>
        </Box>
      </Center>
    );
  }