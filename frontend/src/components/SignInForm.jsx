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
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {AiFillGoogleCircle} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import SliderMarquee from "../components/SliderMarquee"
const SignInForm = () => {
  const [showPassword, setShowPassword] = useState(false);
const[name, setName]  = useState('')

const handleInputChange = (e) => setName(e.target.value)

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
    size={35}/></Link>
  </Box>
  <Box w='100%' h='40px' >
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
                  <Input type="text" 
                  onChange={handleInputChange}
                  value={name}
                  id="name"
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="lastName">
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
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
                Already a user? <Link color={'#e5a428'}>Login</Link>
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