import React, { useState } from 'react';
import { AddressForm, verify } from '@lob/react-address-autocomplete'
import { Grid, GridItem , Text, Stack, Box, Flex, Image, VStack} from '@chakra-ui/react'
import {AiOutlinePlusCircle} from "react-icons/ai"
import {AiOutlineMinusCircle} from "react-icons/ai"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
import {AiOutlinePicture} from "react-icons/ai"
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

const Step7 = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)'  h='85vh' bg="#fff8ef" gap="8">
        
  <GridItem w='100%' h='100%'className="grid-bg" display={'flex'} justifyContent="center" alignItems={'center'} p={6} mt={8}>
    <Text fontSize={'5xl'} color="#3b3b3b">
  Upload images
    </Text>
  </GridItem>
  
  <GridItem w='100%' h='100%' bg="#fff8ef" display={'flex'} justifyContent="center" alignItems={'center'} gridAutoFlow="column">
<Grid templateColumns="repeat(2, 1fr)" w={'100%'} gap="5"> 
    <GridItem w={'100%'}>
    <Box w={350} border="1px dashed #3b3b3b"  h={300} display="flex" justifyContent={'center'} alignItems="center">
<AiOutlinePicture
size={50}
color="#e5a428"
/>
    </Box>
    </GridItem>
    <GridItem w={'100%'}>  <Box w={350} border="1px dashed #3b3b3b" h={300} display="flex" justifyContent={'center'} alignItems="center">
<AiOutlinePicture
size={50} 
color="#e5a428"
/>
    </Box></GridItem>
    <GridItem w={'100%'} colSpan={2}>  <Box w={'100%'} border="1px dashed #3b3b3b"  h={400} display="flex" justifyContent={'center'} alignItems="center">
<AiOutlinePicture 
size={50}
color="#e5a428"
/>
    </Box></GridItem>
</Grid>
  </GridItem>
  
</Grid>
  )
}

export default Step7