import React, { useState } from 'react';
import { AddressForm, verify } from '@lob/react-address-autocomplete'
import { Grid, GridItem , Text, Stack, Box, Flex, Image, VStack} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
  } from '@chakra-ui/react'

const Step2 = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h='85vh' bg="#fff8ef">
  <GridItem w='100%' h='100%'className="grid-bg" display={'flex'} justifyContent="center" alignItems={'center'} p={6} mt={8}>
    <Text fontSize={'5xl'} color="#3b3b3b">
    Where is your event located?
    </Text>
  </GridItem>
  <GridItem w='100%' h='100%' bg="#fff8ef" display={'flex'} justifyContent="center" alignItems={'center'}>
  <Stack w={'100%'} display={'flex'} justifyContent="center" alignItems={'center'} spacing={2}>
   <VStack w="100%" p={12}>
   <Text>Enter the address</Text>
   <Box w="100%">
                <FormControl id="firstName" isRequired>
                  <FormLabel>Street</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
<Box w="100%">
                <FormControl id="suburb" isRequired>
                  <FormLabel>Suburb</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box w="100%">
                <FormControl id="city" isRequired>
                  <FormLabel>City</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box w="100%">
                <FormControl id="province" isRequired>
                  <FormLabel>Province</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
              <Box w="100%">
                <FormControl id="province" isRequired>
                  <FormLabel>Post Code</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>

              <Box></Box>
   </VStack>
  </Stack>
  </GridItem>
  
</Grid>
  )
}

export default Step2