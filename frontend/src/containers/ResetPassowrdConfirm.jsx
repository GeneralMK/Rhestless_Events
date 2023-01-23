import React, { useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { reset_password_confirm } from '../actions/auth';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Grid, GridItem } from '@chakra-ui/react'
import SliderMarquee from "../components/SliderMarquee"
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
  Stack, HStack, VStack
} from '@chakra-ui/react';

const ResetPasswordConfirm = ({ match, reset_password_confirm }) => {
    const [requestSent, setRequestSent] = useState(false);
    const [formData, setFormData] = useState({
        new_password: '',
        re_new_password: ''
    });
    
    const { new_password, re_new_password } = formData;
    const [showPassword, setShowPassword] = useState(false);
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const {uid, token} = useParams()
    const onSubmit = e => {
        e.preventDefault();
      
        reset_password_confirm(uid, token, new_password, re_new_password);
        setRequestSent(true);

    };

    if (requestSent) {
        return <Navigate to={'/sign-in'} />
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
                      <FormLabel>New Password</FormLabel>
                      <Input     placeholder='New Password'
                                name='new_password'
                                value={new_password}
                                onChange={e => onChange(e)} required type={showPassword ? 'text': 'password'} />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel>Confirm New Password</FormLabel>
                      <InputGroup>
                        <Input     
                                placeholder='Confirm New Password'
                                name='re_new_password'
                                value={re_new_password}
                                onChange={e => onChange(e)}
                                minLength='6'
                                required type={showPassword ? 'text' : 'password'} />
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
                      type='submit'
                        loadingText="Submitting"
                         onClick={ e => onSubmit(e) }
                        size="lg"
                        bg={"#e5a428"}
                        color={'white'}
                        _hover={{
                          bg: 'blue.500',
                        }}>
                        Rest Password 
                      </Button>
                    </Stack>
                    {/* <Stack pt={6}>
                      <Text align={'center'}>
                        Already a user? <Link color={'#e5a428'} href={'/sign-up'}>Sign Up</Link>
                      </Text>
        
                      <Text align={'center'}>
                        Forgot Your Password? <Link color={'#e5a428'} href={'/reset-password'} cursor="point">Rest Password</Link>
                      </Text>
                    </Stack> */}
                  </Stack>
                </Box>
        
                   
              </Stack>
            </Flex>
        
          </GridItem>
        </Grid>
          )
};

export default connect(null, { reset_password_confirm })(ResetPasswordConfirm);