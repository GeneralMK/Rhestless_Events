import React from 'react'
import Marquee from "../components/Marquee"
import { Grid, GridItem, Box , Flex, Text, Link, Input, Stack, Button} from '@chakra-ui/react'

import {BsArrowUpRight} from "react-icons/bs"
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Select,
  Textarea 
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
function Contact() {
  return (
    <Box h="100%"
    bg="#fff8ef">
   
      <Marquee 
      text=" CONTACT - CONTACT - CONTACT - CONTACT - CONTACT - "
      />
      <Grid templateColumns='repeat(2, 1fr)'  h="85vh" display="flex" flexDir="row" alignItems="center" justifyContent="center">
  <GridItem w='100%'   bg="#fff8ef" display="flex" flexDir="column" justifyContent="space-between" h="100%">
    <Flex flexDir="column"  justifyContent="space-evenly"  h="100%"  p={20}>
      <Box   w="100%">
        <Text fontSize="4xl" w="85%" fontFamily="New Font">For any comments and questions, please reach out and we will respond shortly!</Text>
      </Box>
      <Box >
        <Text fontSize="2xl">Follow us</Text>
        <Flex gap={4} fontSize="2xl">
          <Link>Instagram</Link> -
          <Link>Twitter</Link>

        </Flex>
      </Box>
      <Box>
      <Text fontSize="2xl">Get In Touch</Text>
        <Flex gap={4}>
          <Link fontSize="2xl">support@rhestless.com</Link>
     
          </Flex>
      </Box>
    </Flex>
  </GridItem>
  <GridItem w='100%'   bg="#fff8ef" borderLeft="1px solid #5b5b5b" h="100%">
  <Tabs size='lg' isFitted variant='enclosed' display="flex" flexDir="column" justifyContent="space-evenly"   h="100%" p={0}>
  <TabList border="1px solid #3b3b3b" borderTop="0" borderLeft={0} borderRight={0} m="0">
    <Tab fontSize="2xl" fontFamily="New Font" _selected={{ color: '#e5a428' }}  p={12}>Organiser</Tab>
    <Tab fontSize="2xl" fontFamily="New Font" _selected={{ color: '#e5a428' }}p={12} >Attendee</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
<Stack spacing={10}
        w={'full'}
        maxW="100%"
        rounded={'xl'}
        p={6}>
<FormControl id="email" isRequired>
          <FormLabel  fontSize="2xl">Name</FormLabel>
          <Input
            placeholder="Your name here"
            _placeholder={{ color:"#e5a428"  }}
            type="email"
            fontSize="1xl"
            border="0"
            // borderBottom="1px solid #3b3b3b"
            borderRadius="0"
          />
        </FormControl>
<FormControl id="email" isRequired>
          <FormLabel  fontSize="2xl">Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{ color:"#e5a428" }}
            type="email"
            fontSize="1xl"
            border="0"
            // borderBottom="1px solid #4b4b4b"
            borderRadius="0"
          />
        </FormControl>
        <FormControl>
  <FormLabel fontSize="2xl">Subject</FormLabel>
  <Select placeholder='' fontSize="1xl" color="#e5a428" 
    border="0"
    // borderBottom="1px solid #4b4b4b"
    borderRadius="0">
    <option>Payouts and invoices</option>
    <option>Fees and packages</option>
    <option>Digital Wallet</option>
    <option>Event listing</option>
    <option>Tickets</option>
    <option>Analytics</option>
    <option>Marketplace</option>
    <option>Account Settings</option>
  </Select>
</FormControl>
<FormControl id="email" isRequired>
          <FormLabel  fontSize="2xl">Your Message</FormLabel>
          <Textarea
        // value={}
        // onChange={handleInputChange}
        placeholder='Type your message here'
        size='md'
        _placeholder={{ color:"#e5a428" }}
        fontSize="1xl"
        border="0"
        // borderBottom="1px solid #3b3b3b"
        borderRadius="0"
      />
        </FormControl>
        <Stack spacing={6} w="100%" p={0} m={0}>
        <Box display="flex" gap={4} justifyContent="center" alignItems="center" >
  <Link fontSize="4xl"  color="#e5a428">SUBMIT</Link>
  <BsArrowUpRight 
  fontSize="5xl" />
</Box>
  
        </Stack>
</Stack>
    </TabPanel>
    <TabPanel>
    <Stack spacing={10}
        w={'full'}
        maxW="100%"
     
        rounded={'xl'}
  
        p={6}
      >
<FormControl id="email" isRequired>
          <FormLabel  fontSize="2xl">Name</FormLabel>
          <Input
            placeholder="Your name here"
            _placeholder={{ color:"#e5a428"  }}
            type="email"
            fontSize="1xl"
            border="0"
            // borderBottom="1px solid #3b3b3b"
            borderRadius="0"
          />
        </FormControl>
<FormControl id="email" isRequired>
          <FormLabel  fontSize="2xl">Email address</FormLabel>
          <Input
            placeholder="your-email@example.com"
            _placeholder={{color:"#e5a428"  }}
            type="email"
            fontSize="1xl"
            border="0"
            // borderBottom="1px solid #3b3b3b"
            borderRadius="0"
          />
        </FormControl>
        <FormControl>
  <FormLabel fontSize="2xl">Subject</FormLabel>
  <Select placeholder='' fontSize="1xl" color="#e5a428" 
    border="0"
    borderBottom="1px solid #4b4b4b"
    borderRadius="0">
    <option>Refunds and Cancellations</option>
    <option>Tickets</option>
    <option>Event Queries</option>
    <option>Account and Profile</option>
    <option>Tickets</option>
    <option>Analytics</option>
    <option>Marketplace</option>
    <option>Account Settings</option>
  </Select>
</FormControl>
<FormControl id="email" isRequired>
          <FormLabel  fontSize="2xl">Your Message</FormLabel>
          <Textarea
        // value={}
        // onChange={handleInputChange}
        placeholder='Type your message here'
        _placeholder={{ color:"#e5a428"  }}
        size='md'
        fontSize="1xl"
        border="0"
        // borderBottom="1px solid #3b3b3b"
        borderRadius="0"
      />
        </FormControl>
        <Stack spacing={6}>
        <Box display="flex" gap={2} justifyContent="center" alignItems="center">
  <Link fontSize="4xl"  color="#e5a428">SUBMIT</Link>
  <BsArrowUpRight 
  fontSize="5xl" />
</Box>
  
        </Stack>
</Stack>
    </TabPanel>
  </TabPanels>
</Tabs>
  </GridItem>
 
</Grid>
    </Box>
  )
}

export default Contact