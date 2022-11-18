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
  import { Textarea } from '@chakra-ui/react'
const Step4 = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h='85vh' bg="#fff8ef">
  <GridItem w='100%' h='100%'className="grid-bg" display={'flex'} justifyContent="center" alignItems={'center'} p={6} mt={8}>
    <Text fontSize={'5xl'} color="#3b3b3b">
Describe your event
    </Text>
  </GridItem>
  <GridItem w='100%' h='100%' bg="#fff8ef" display={'flex'} justifyContent="center" alignItems={'center'}>
  <Stack w={'100%'} display={'flex'} justifyContent="center" alignItems={'center'} spacing={2}>
   <VStack w="100%" p={12}>
   <Text>Details about your event</Text>
  
<Box w="100%">
                <FormControl id="suburb" isRequired>
                  <FormLabel>Name of your event</FormLabel>
                  <Textarea size='md 'placeholder='' />
                </FormControl>
              </Box>
              <Box w="100%">
                <FormControl id="city" isRequired>
                <FormLabel>Describe your event</FormLabel>
                  <Textarea size='lg' placeholder='' />
                </FormControl>
              </Box>
              <Box></Box>
   </VStack>
  </Stack>
  </GridItem>
  
</Grid>
  )
}

export default Step4