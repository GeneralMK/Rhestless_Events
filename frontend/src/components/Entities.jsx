import React, {useRef, useEffect, useState} from "react";
import Marquee from './Marquee'
import { Box, Flex, Text, Link, Stack, HStack, VStack} from '@chakra-ui/react'
import { gsap } from "gsap";
import {useParams} from 'react-router-dom';
import axios from 'axios';

import {BsArrowUpRight} from "react-icons/bs"



function Entities(props) {
  const baseUrl ="http://127.0.0.1:8000/api"
  const baseURL ="http://127.0.0.1:8000/api/Event"
  const [entitites, setEntity] = useState([])

  const [eventDetails, setEventDetails] = useState([])


  useEffect(() =>{
    fetchData(baseUrl+'/Events')
    fetchDataDetails()
  },[])
  
  function fetchData(baseUrl){
    fetch(baseUrl)
    .then((response) => response.json())
    .then((data) =>{
      console.log(data)
      setEntity(data)
    });
  }
  const {event_id}=useParams();

  function fetchDataDetails(){
    try{
      axios.get(baseURL+'/Event/'+event_id)
      .then((res)=>{
        setEventDetails({
              title:res.data.title,
              detail:res.data.detail,
          });
      });
  }catch(error){
      console.log(error);
  }
  }
  
 const oneEntity = entitites.map((data)=>{
return(
  <Flex justifyContent="space-between" p={8} alignItems="center" borderBottom='1px' borderColor='#e5a428' className="event">

  <Box display="flex" flexDirection="column" justifyContent="space-between" >
   
  <Text  fontSize='8xl' textTransform="uppercase" className="title" fontFamily='New Font'>{data.title}</Text>
  <Text fontSize='xl' w="50%" >{data.details}</Text>
  </Box>
  <Box display="flex" gap={2} justifyContent="center" alignItems="center">
    <Link fontSize="xl"  mt={4} color="#e5a428" href="/entity-detail">View Details</Link>
    <BsArrowUpRight />
  </Box>
          </Flex>

)
  })

  
  return (
    <Box pt="8rem"    bg="#fff8ef" >
      <Marquee 
      text="ENTITIES - ENTITIES - ENTITIES - ENTITIES"
      />


<Stack direction="column" spacing='24px'>
     
   {oneEntity}     
  </Stack>
    </Box>
    
    
  )
}

export default Entities