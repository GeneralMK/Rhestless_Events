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
import {AiFillGoogleCircle} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import SliderMarquee from "./SliderMarquee"
import { connect } from 'react-redux';
import {signup} from '../actions/auth'
import { Navigate } from 'react-router-dom';
const SignUpForm = ({signup, isAuthenticated}) => {

const[accountCreated, setAccountCreated] = useState(false)
 const [formData, setFormData] = useState({
  'first_name':'',
  'last_name':'',
  'email':'',
  'password':'',
  're_password':''

 })

 const {first_name, last_name, email, password, re_password} = formData;

 const onChange= e =>setFormData({
  ...formData,
  [e.target.name]:e.target.value
 })
 const [showPassword, setShowPassword] = useState(false)
 const onSubmit = e =>{
  e.preventDefault();
  if(password == re_password)
  {
    console.log(formData)
    signup(first_name, last_name, email, password, re_password)
    setAccountCreated(true)
  }
 }

 if(isAuthenticated)
 {
  return <Navigate to='/'/>
 }
 if(accountCreated)
 {
  return <Navigate to='/sign-in'/>
 }
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
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
          An online eventing marketplace connecting event Planners, patrons and service providers


          </Text>
        </Stack>
        <HStack spacing='24px'>
  <Box w='100%' h='40px'>
    <Link>
    <AiFillGoogleCircle
  color={'#e5a428'}
    size={35}/>
    </Link>
  </Box> 
   <Box w='100%' h='40px' >

    <Link>
    <BsFacebook 
    size={30}
    color={'#e5a428'}
    />
    </Link>
    
  </Box>
  <Box w='100%' h='40px'>
    <AiFillTwitterCircle
    size={35}
    color={'#e5a428'}
    />
  </Box>
</HStack>
<Text textAlign={'center'}>Or use your email for registration</Text>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
             
                <FormControl id="firstName" isRequired>
               
                  <FormLabel>First Name</FormLabel>
                  <Input value={first_name} onChange={e => onChange(e)} name="first_name" type="text"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName" isRequired>
                  <FormLabel>Last Name</FormLabel>
                  <Input value={last_name} onChange={e => onChange(e)} name="last_name" type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input value={email} onChange={e=>onChange(e)} name="email" type="email" />
            </FormControl>

            <FormControl id="user" isRequired>
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={e => onChange(e)} name="password" type={showPassword ? 'text' : 'password'} />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <InputGroup>
                <Input value={re_password} onChange={e=>onChange(e)} name="re_password" type={showPassword ? 'text' : 'password'} />
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
                onClick={e=>onSubmit(e)}
                size="lg"
                bg={"#e5a428"}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'#e5a428'} href={'/sign-in'}>Login</Link>
              </Text>

              
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>

  </GridItem>
</Grid>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, {signup})(SignUpForm)