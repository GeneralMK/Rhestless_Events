import  { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';
import { verify } from '../actions/auth';
import { useParams } from 'react-router-dom';
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
const Activate = ({ verify, match }) => {
    const [verified, setVerified] = useState(false);

    const {uid, token} = useParams();

    const verify_account = e => {
        verify(uid, token);
        setVerified(true);
    };

    if (verified) {
        return <Navigate to='/sign-in' />
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
         
          <Text fontSize={'lg'} color={'gray.600'}>
         Verify Your Account


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
           
            <Stack spacing={10} pt={2}>
              <Button
                type='submit'
                onClick={verify_account}
                size="lg"
                bg={"#e5a428"}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Verify Account
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

export default connect(null, { verify })(Activate);