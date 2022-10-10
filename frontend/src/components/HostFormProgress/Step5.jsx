import React, { useState } from 'react';
import { AddressForm, verify } from '@lob/react-address-autocomplete'
import { Grid, GridItem , Text, Stack, Box, Flex, Image, VStack} from '@chakra-ui/react'
import {AiOutlinePlusCircle} from "react-icons/ai"
import {AiOutlineMinusCircle} from "react-icons/ai"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    InputLeftElement,
    InputRightElement,
    Input,
    Link,
    InputGroup
  } from '@chakra-ui/react'

const Step5 = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h='85vh' bg="#fff8ef">
  <GridItem w='100%' h='100%'className="grid-bg" display={'flex'} justifyContent="center" alignItems={'center'} p={6} mt={8}>
    <Text fontSize={'5xl'} color="#3b3b3b">
   How much are you charging per ticket?
    </Text>
  </GridItem>
  <GridItem w='100%' h='100%' bg="#fff8ef" display={'flex'} justifyContent="center" alignItems={'center'}>
  <Stack w={'100%'} display={'flex'} justifyContent="center" alignItems={'center'} spacing={2}>
   <VStack w="100%" p={12} spacing={20}>
    <Box textAlign={'center'}>
 <Flex justifyContent={'space-around'} alignItems="center" gap={8}>
<AiOutlinePlusCircle
color="#e5a428 "
size={50} />
 <Box>
        <InputGroup>
 
    <Input placeholder='R'
    w="400"
    h="100"
    />

  </InputGroup>
        </Box>
        <AiOutlineMinusCircle 
        size={50}
        color="#e5a428 " />
 </Flex>
        <Text mt={4}>Per Ticket</Text>
    </Box>
<Box border={'1px solid #3b3b3b'} p={8}>
  <Flex gap={8} justifyContent="space-around" alignItems={'center'}>
  <Box>
        <Text>Offer ticket pricing at different batches</Text>
        <Link>Learn more</Link>
    </Box>
    <Checkbox></Checkbox>
  </Flex>
</Box>
   </VStack>
  </Stack>
  </GridItem>
  
</Grid>
  )
}

export default Step5