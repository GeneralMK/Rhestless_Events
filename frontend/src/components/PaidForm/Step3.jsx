import React, { useState } from 'react';
import { AddressForm, verify } from '@lob/react-address-autocomplete'
import { Grid, GridItem , Text, Stack, Box, Flex, Image, VStack} from '@chakra-ui/react'
import "react-datetime/css/react-datetime.css";
import Datetime from "react-datetime";
import moment from "moment";
import { Select } from '@chakra-ui/react'

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'
  var yesterday = moment().subtract(1, "day");
  function valid(current) {
    return current.isAfter(yesterday);
  }
  
const Step3 = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h='85vh' bg="#fff8ef">
  <GridItem w='100%' h='100%'className="grid-bg" display={'flex'} justifyContent="center" alignItems={'center'} p={6} mt={8}>
    <Text fontSize={'5xl'} color="#fafafa">
    When is your event located?
    </Text>
  </GridItem>
  <GridItem w='100%' h='100%' bg="#fff8ef" display={'flex'} justifyContent="center" alignItems={'center'}>
  <Stack w={'100%'} display={'flex'} justifyContent="center" alignItems={'center'} spacing={2}>
   <VStack w="100%" p={12}>
   <Text>Date Details</Text>
   <Box w="100%">
                <FormControl id="province" isRequired>
                  <FormLabel>Type of event</FormLabel>
                  <Select placeholder='Select option'>
  <option value='option1'>One-day Event</option>
  <option value='option2'>Multi-day Event</option>
  <option value='option2'>Recurring Event</option>

</Select>
                </FormControl>
              </Box>
   <Box w="100%">
                <FormControl id="firstName" isRequired>
                  <FormLabel>Start Date</FormLabel>
                  <Datetime isValidDate={valid} />
                </FormControl>
              </Box>
<Box w="100%">
                <FormControl id="suburb" isRequired>
                <FormLabel>End Date</FormLabel>
                  <Datetime isValidDate={valid} />
                </FormControl>
              </Box>
              {/* <Box w="100%">
                <FormControl id="city" isRequired>
                  <FormLabel>City</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box> */}
            
    

        
   </VStack>
  </Stack>
  </GridItem>
  
</Grid>
  )
}

export default Step3