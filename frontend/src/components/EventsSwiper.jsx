import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { Box, Flex, Text, Link, Stack, HStack, VStack, Image} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import poster from "../assets/poster.jpg"


function EventsSwiper() {
  return (
    <Box   border='1px solid #4b4b4b' >
   <Flex w="100%" borderBottom="1px solid #4b4b4b" pl={20} pr={20} 
   justifyContent="space-between" alignItems="center">
   <Text fontSize="6xl"  fontFamily='New Font'> Events</Text>
   <Stack direction="row">
    <Link pr={8} pl={8} border="1px solid #4b4b4b">ALL</Link>
    <Link pr={8} pl={8} border="1px solid #4b4b4b">UPCOMING</Link>
    <Link pr={8} pl={8} border="1px solid #4b4b4b">PAST</Link>
   </Stack>
   </Flex>
    <Swiper
  
      slidesPerView={2.8}
      spaceBetween={30}
 
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
    >
      <SwiperSlide>
      
     <Link href='/event-detail' isExternal>
     <Flex p={50} w="full" alignItems="center" justifyContent="center">
          <Box 


          h="100%"
          border="1px solid #4b4b4b"
          roundedTop="lg"
   
        >
      
      <Image
          src={poster}
          alt="post image"
          roundedTop="lg"
          border={0}
        />
       <Stack p={4}>
        <Text fontFamily='New Font' fontSize="2xl" >Tshwanefontein</Text>
        <Text >African Beer Emporium Beer, Pretoria</Text>
        <Flex w="100%" justifyContent="space-between" >
          <Text>R150</Text>
          <Text>12 PM</Text>
        </Flex>
      
       </Stack>
          </Box>
         </Flex></Link>

      </SwiperSlide>
      <SwiperSlide>
      
         <Flex p={50} w="full" alignItems="center" justifyContent="center">
          <Box 


          h="100%"
          border="1px solid #4b4b4b"
          roundedTop="lg"
   
        >
      
      <Image
 src={poster}
          alt="post image"
          roundedTop="lg"
        />
       <Stack p={4}>
        <Text fontFamily='New Font' fontSize="2xl" >Tshwanefontein</Text>
        <Text >African Beer Emporium Beer, Pretoria</Text>
        <Flex w="100%" justifyContent="space-between" >
          <Text>R150</Text>
          <Text>12 PM</Text>
        </Flex>
      
       </Stack>
          </Box>
         </Flex>

      </SwiperSlide>
      <SwiperSlide>
      
      <Flex p={50} w="full" alignItems="center" justifyContent="center">
       <Box 


       h="100%"
       border="1px solid #4b4b4b"
       roundedTop="lg"

     >
   
   <Image
 src={poster}
       alt="post image"
       roundedTop="lg"
     />
    <Stack p={4}>
     <Text fontFamily='New Font' fontSize="2xl" >Tshwanefontein</Text>
     <Text >African Beer Emporium Beer, Pretoria</Text>
     <Flex w="100%" justifyContent="space-between" >
       <Text>R150</Text>
       <Text>12 PM</Text>
     </Flex>
   
    </Stack>
       </Box>
      </Flex>

   </SwiperSlide>
      
    </Swiper>
  </Box>
  )
}

export default EventsSwiper