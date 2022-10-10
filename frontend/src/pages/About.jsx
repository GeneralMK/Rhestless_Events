import React from 'react'
import Marquee from "../components/Marquee"
import  MarqueeText from "../components/MarqueeText"
import ServicesTwo from '../components/ServicesTwo'
import DigitalWallet from '../components/DigitalWallet'
import Dashboard from '../components/Dashboard'
import Organiser from "../components/Organiser"
import { Grid, GridItem, Box , Flex, Text, Link, Input, Stack, Button} from '@chakra-ui/react'
function About() {
  return (
  <Box h="100%"
  bg="#fff8ef">
    <Marquee 
      text=" ABOUT - ABOUT - ABOUT - ABOUT - ABOUT  - ABOUT - ABOUT - ABOUT - ABOUT -"
      />
      <Flex h="85vh" flexDir={'column'} justifyContent={'center'} p={12} position="relative">
        {/* <Text>IT TAKES A VILLAGE</Text> */}
        {/* <div className='css-blurry-gradient'>
   </div> */}
        <Text fontSize={'5xl'} w="80%">RHESTless is an online marketplace connecting event Planners, patrons and service providers. A dedicated
end-to-end platform that enables event Planners to sell tickets and merchandise to event patrons as well as
purchase resources required to host successful events at wholesale prices. An inclusive solution that stream
-
lines cashflow and profits by interchangeably processing income and expenses.</Text>
      </Flex>

      <ServicesTwo />
      <Organiser />
      <DigitalWallet />
      <Dashboard />
  </Box>
  )
}

export default About