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
import SliderMarquee from "./SliderMarquee"
import { connect } from 'react-redux';
import {login} from '../actions/auth'


const SignInForm = ({ login }) => {

 const [formData, setFormData] =useState({
  email:'',
  password:''
 });

 const {email, password} =formData

 const onChange = e => setFormData({
  ...formData,
  [e.target.name]:e.target.value
 });

 const onSubmit= e =>{
  e.preventDefault();
  login(email, password)
  
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
              <Input value={email} onChange={e => onChange(e)} name="email" type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input value={password} onChange={e => onChange(e)} name="password" type={showPassword ? 'text' : 'password'} />
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
                 onClick={ onSubmit }
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
                Already a user? <Link color={'#e5a428'} href={'/sign-up'}>Sign Up</Link>
              </Text>

              <Text align={'center'}>
                Forgot Your Password? <Link color={'#e5a428'} href={'/reset-password'} cursor="point">Rest Password</Link>
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

const mapStateToProps = state => ({
  //is authent
})

export default connect(null, {login})  (SignInForm);