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
import FAQs from '../components/FAQs'
const Pricing = () => {
  return (
    <>
         <Marquee 
      text=" PRICING - PRICING - PRICING - PRICING - PRICING - "
      />
      <Earning />
      <PricingTab />
   <FAQs />

    </>
  )
}

export default Pricing