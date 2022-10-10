import React from 'react'
import Marquee from "../components/Marquee"
import { Grid, GridItem, Box , Flex, Text, Link, Input, Stack, Button} from '@chakra-ui/react'
import Earning from '../components/Earning'
import {BsArrowUpRight} from "react-icons/bs"
import PricingTab from '../components/PricingTab'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Textarea 
} from '@chakra-ui/react'

const Pricing = () => {
  return (
    <Box>
         <Marquee 
      text=" PRICING - PRICING - PRICING - PRICING - PRICING - "
      />
      <Earning />
      <PricingTab />
      <Grid templateColumns='repeat(3, 1fr)'>
  <GridItem w='100%' h='10' bg='blue.500'></GridItem>
  <GridItem w='100%' h='10' bg='blue.500'></GridItem>
  <GridItem w='100%' h='10' bg='blue.500'></GridItem>
  
</Grid>
    </Box>
  )
}

export default Pricing