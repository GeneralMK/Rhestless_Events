import React from 'react'
import { Grid, GridItem, Box,Text, Heading, Flex, Image, Stack,} from '@chakra-ui/react'
import poster from "../assets/poster.jpg"
import {FaCcVisa} from "react-icons/fa"
import {BsCreditCard2Front} from "react-icons/bs"
import DetailsCheckoutForm from "../components/DetailsCheckoutForm"
import { Radio, RadioGroup } from '@chakra-ui/react'
const OrderSummary = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h="100%"  >
  <GridItem w='100%' h='100%' bg="#fff8ef" p={8} >
  <Box>
    <Heading fontSize={'20px'} fontWeight={600} mb={4}>Summary Order</Heading>
    <Text fontSize={"12px"} mb={4}>Rhestless complies with the strictest modern security standards to ensure your data is kept safe. Your details are transmitted over an encrypted SSL connection and processed by our PCI compliant service providers.</Text>
</Box>
<Box border={'1px solid #e5a428'} p={5} mb={5}>
<Heading fontSize={'20px'} fontWeight={600} mb={4}>Ticket Insurance</Heading>
    <Text fontSize={"12px"} mb={4}>These tickets are subject to our standard refund policy.
Upgrade your refund terms for R75 to receive a 100% refund if you cannot attend for one of the many reasons in our Terms and Conditions here, which you accept with this upgrade
<br />
<br />
Some examples include: Covid-19 infection, accident/injury, transport failure, home emergency and many more.
</Text>
<RadioGroup defaultValue='2'>
  <Stack spacing={5} direction='column'>
    <Radio colorScheme='red' value='1'>
    Yes, upgrade my refund terms for <Text as="b">R 75 (recommended)</Text>
    </Radio>
    <Radio colorScheme='green' value='2'>
    No, don't upgrade my order
    </Radio>
  </Stack>
</RadioGroup>
</Box>
<Box border={'1px solid #e5a428'} p={5}>
   
<Flex w="100%" justifyContent={'space-around'} alignItems="center">
<Image
    boxSize='150px'
    objectFit='cover'
    src={poster}
    alt='Dan Abramov'
  />
<Stack>
    <Text>Nthwe Yohle </Text>
    <Text>R450</Text>
</Stack>
<Text>1</Text>
</Flex></Box>
<Box mt={4}>
<Box>
    <Heading fontSize={'20px'} fontWeight={600} mb={4}>Payment Methods</Heading>
    <Box border={'1px solid #e5a428'} p={5}>
   
   <Flex w="100%" justifyContent={'space-around'} alignItems="center">
 <BsCreditCard2Front
 size={40}
 />
   <Stack>
       <Text>Credit or Debit Card</Text>
   
   </Stack>
   <FaCcVisa
 size={40}
 />
   </Flex></Box>
</Box>
</Box>
<Box mt={4}>
<Box>

    <Box border={'1px solid #e5a428'} p={5}>
   
   <Flex w="100%" justifyContent={'space-around'} alignItems="center">
 <BsCreditCard2Front
 size={40}
 />
   <Stack>
       <Text>Instant EFT</Text>
   
   </Stack>
   <Image
    boxSize='40px'
    objectFit='cover'
    src="https://i.shgcdn.com/d1eabd5c-0413-4ee1-86ef-9dca2705b29d/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
    alt='Dan Abramov'
  />
   </Flex></Box>
</Box>
</Box>
<Box mt={4}>
<Box>

    <Box border={'1px solid #e5a428'} p={5}>
   
   <Flex w="100%" justifyContent={'space-around'} alignItems="center">
 <BsCreditCard2Front
 size={40}
 />
   <Stack>
       <Text>Instant EFT</Text>
   
   </Stack>
   <Image
    boxSize='40px'
    objectFit='cover'
    src="https://stitch.money/images/stitch-favicon.png"
    alt='Dan Abramov'
  />
   </Flex></Box>
</Box>
</Box>
  </GridItem>
  <GridItem w='100%' h='100%' bg="#fff8ef" borderLeft={'1px solid #e5a428'} p={0}>
<Box p={8}>
<Box>
    <Heading fontSize={'20px'} fontWeight={600} mb={4}>Payment Details</Heading>
    <Text fontSize={"12px"} mb={4}>Fill in payment details to complete order</Text>
</Box>
    <DetailsCheckoutForm />
</Box>
  </GridItem>
  
</Grid>
  )
}

export default OrderSummary