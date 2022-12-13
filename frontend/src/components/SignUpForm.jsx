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
import axios from 'axios';
const baseUrl='http://127.0.0.1:8000/api/hosts/';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false);
const [hostData, setHostData]=useState({
  'name':'',
  'last_name':'',
  'email':'',
  'password':''
});

  // Change Element value
  const handleInputChange=(event)=>{
    setHostData({
        ...hostData,
        [event.target.name]:event.target.value
    });
}

    // End

    // Submit Form
    const submitForm=()=>{
      const hostFormData=new FormData();
      hostFormData.append("name", hostData.name)
      hostFormData.append("last_name", hostData.last_name)
      hostFormData.append("email", hostData.email)
      hostFormData.append("password", hostData.password)
 

      try{
          axios.post(baseUrl,hostFormData).then((response)=>{
              setHostData({
                  'name':'',
                  'last_name':'',
                  'email':'',
                  'password':'',
                  'status':'success'
              });
              if(response.status==201){
                Swal.fire({
                    title: 'Successfully Registered!',
                    icon: 'success',
                    toast:true,
                    timer:3000,
                    position:'top-right',
                    timerProgressBar:true,
                    showConfirmButton: false
                });
            }
            else{
              Swal.fire({
                title: 'Something Went Wrong!',
                icon: 'error',
                toast:true,
                timer:3000,
                position:'top-right',
                timerProgressBar:true,
                showConfirmButton: false
            });
            }
          });
      }catch(error){
          console.log(error);
          setHostData({'status':'error'})
      }
      
  };

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
  {/* <Box w='100%' h='40px'>
    <Link>
    <AiFillGoogleCircle
  color={'#e5a428'}
    size={35}/></Link>
  </Box> */}
  {/* <Box w='100%' h='40px' >
    <BsFacebook 
    size={30}
    color={'#e5a428'}
    />
  </Box>
  <Box w='100%' h='40px'>
    <AiFillTwitterCircle
    size={35}
    color={'#e5a428'}
    />
  </Box> */}
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
                  <Input value={hostData.name} onChange={handleInputChange} name="name" type="text"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input value={hostData.last_name} onChange={handleInputChange} name="last_name" type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input value={hostData.email} onChange={handleInputChange} name="email" type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input value={hostData.password} onChange={handleInputChange} name="password" type={showPassword ? 'text' : 'password'} />
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
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link color={'#e5a428'} to={'sign-in'} cursor="point">Login</Link>
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

export default SignUpForm