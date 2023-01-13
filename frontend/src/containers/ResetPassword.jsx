import React, { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password } from '../actions/auth';
import SliderMarquee from "../components/SliderMarquee"
import { Grid, GridItem } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react'

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Swal from 'sweetalert2';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputRightElement,
    Button,
    Heading,
    Text,
    useColorModeValue,
    Link,
  } from '@chakra-ui/react';
const ResetPassword = ({ reset_password }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        email: ''
    });

    const { email } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();

        reset_password(email);
        setRequestSent(true);
    };

    if (requestSent) {
        return <Navigate to='/' />
    }

    return (
        <>
           <Grid templateColumns='repeat(2, 1fr)' gap={6} h="100vh" bg="#fff8ef">
  <GridItem w='100%' h='100%'overflow={'hidden'} id="overlay" position={'relative'}>
<SliderMarquee/>
  </GridItem>
  <GridItem w='100%' h='100%'>
  <Flex
  
  w="100%"
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg="#fff8ef">
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'5xl'} textAlign={'center'}      fontFamily='New Font'>
            Reset Password
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          Request For A Password Rest


          </Text>
        </Stack>
        <HStack spacing='24px'>

</HStack>

        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              
            
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input  name="email" type="email" />
            </FormControl>
            
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                onClick={''}
                size="lg"
                bg={"#e5a428"}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Reset Password
              </Button>
            </Stack>
            
          </Stack>
        </Box>
      </Stack>
    </Flex>

  </GridItem>
</Grid>
        </>
    );
};

export default connect(null, { reset_password })(ResetPassword);