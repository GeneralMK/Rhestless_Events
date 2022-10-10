import React, {useRef, useEffect, useState} from "react";
import Marquee from '../components/Marquee'
import { Box, Flex, Text, Link, Stack, HStack, VStack} from '@chakra-ui/react'
import FilterEntities from "../components/FilterEntities";
import { gsap } from "gsap";

import {BsArrowUpRight} from "react-icons/bs"
  const listOfentities = [
    {
  
    title:"Nthwe Yohle",
    description:"lorem ipsmyk djddddebdhhbjhedbi",
    link:"",
  },
  {
    title:"Delicious Fest",
    description:"lorem ipsmyk djddddebdhhbjhedbi",
    link:"",
  },
  {
    title:"Home Coming",
  description:"lorem ipsmyk djddddebdhhbjhedbi",
  link:""
  },
  ]
function AllEntities() {
    const oneEntity = listOfentities.map((entity)=>{
        return(
          <Flex justifyContent="space-between" p={8} alignItems="center" borderBottom='1px' borderColor='#e5a428' className="event">
        
          <Box display="flex" flexDirection="column" justifyContent="space-between" >
           
          <Text  fontSize='8xl' textTransform="uppercase" className="title" fontFamily='New Font'>{entity.title}</Text>
          <Text fontSize='xl' w="50%" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores ipsum, error repudiandae quibusdam omnis odit itaque ...</Text>
          </Box>
          <Box display="flex" gap={2} justifyContent="center" alignItems="center">
            <Link fontSize="xl"  mt={4} color="#e5a428" href="/entity-detail">View Details</Link>
            <BsArrowUpRight />
          </Box>
                  </Flex>
        
        )
          })
  return (
    <Box bg="#fff8ef">
<Marquee text="ENTITIES - ENTITIES - ENTITIES  - ENTITIES  -" />
<FilterEntities />
<Stack direction="column" spacing='24px'>
     
   {oneEntity}     
  </Stack>
    </Box>
  )
}

export default AllEntities