import { Stack, Box, Text, Flex, Image, Button} from '@chakra-ui/react'
import React from 'react'

const EventTypes = () => {
  return (
<Stack h="100vh"  align='center' spacing={8} bg="#fff8ef"

display="flex" justifyContent="center">

 <Box >
 <Flex fontSize="120px" fontFamily="New Font" gap={12} justifyContent="center" alignItems="center"> <Text>LIVE</Text>
 
  <Text>EVENTS</Text>
  <Image src='https://images.pexels.com/photos/9511240/pexels-photo-9511240.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='Dan Abramov' 
 w='250px'
 h="125px"
 objectFit='cover'
borderRadius='20px'
 />
  </Flex>
  <Text textAlign="center">Connect in-person to drive IRL conversations, content experiences, and interactions.</Text>
  </Box> 
 <Box> <Flex fontSize="120px" fontFamily="New Font" gap={12} justifyContent="center" alignItems="center">

   <Text>VIRTUAL</Text>
   <Image src='https://images.unsplash.com/photo-1459749411175-04bf5292ceea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80' alt='Dan Abramov' 
 w='250px'
 h="125px"
 objectFit='cover'
borderRadius='20px'
 />
  <Text>EVENTS</Text>

  </Flex>
  <Text textAlign="center">Engage your community online with webinars, livestreams, meetings, and more.</Text>
  </Box>
 <Box>
 <Flex fontSize="120px" fontFamily="New Font" gap={12} justifyContent="center" alignItems="center">
 <Image src='https://images.unsplash.com/photo-1501612780327-45045538702b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80' alt='Dan Abramov' 
 w='250px'
 h="125px"
 objectFit='cover'
borderRadius='20px'
 />
   <Text>HYBRID</Text>
 
  <Text>EVENTS</Text>
  </Flex>
  <Text textAlign="center">Blend live and virtual events to extend your reach and get more out of your investment..</Text>
 </Box>
 <Button>Get started for free</Button>
</Stack>

  )
}

export default EventTypes