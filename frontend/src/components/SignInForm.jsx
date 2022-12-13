import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
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
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { useState, useEffect } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import Swal from 'sweetalert2';

import SliderMarquee from "./SliderMarquee"
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api';

const SignInForm = () => {

  const [LoginData,setLoginData]=useState({
    email:'',
    password:''
});

const [errorMsg,seterrorMsg]=useState('');

const handleChange=(event)=>{
    setLoginData({
        ...LoginData,
        [event.target.name]:event.target.value
    });
}
const LoginStatus=localStorage.getItem('LoginStatus');
if(LoginStatus ==='true'){
    window.location.href='/hostdash';
}

useEffect(()=>{
    document.title='Rhestless Events Login'
});
const submitForm=()=>{
  const hostFormData=new FormData();
  hostFormData.append('email',LoginData.email)
  hostFormData.append('password',LoginData.password)
  try{
      axios.post(baseUrl+'/host-login',hostFormData)
      .then((res)=>{
          if(res.data.bool===true){
              localStorage.setItem('LoginStatus',true);
              localStorage.setItem('hostId',res.data.host_id);
              window.location.href='/hostdash';
          }else{
              seterrorMsg('Invalid Email Or Password!!');
          }
      });
  }catch(error){
      console.log(error);
  }
}
  const [showPassword, setShowPassword] = useState(false);

  return (
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
            Sign In
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          An online eventing marketplace connecting event Planners, patrons and service providers


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
              <Input value={LoginData.email} onChange={handleChange} name="email" type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input value={LoginData.password} onChange={handleChange} name="password" type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                     
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                onClick={submitForm}
                size="lg"
                bg={"#e5a428"}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign In
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'#e5a428'} to={'sign-up'}>Sign Up</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

  </GridItem>
</Grid>
  )
}

export default SignInForm