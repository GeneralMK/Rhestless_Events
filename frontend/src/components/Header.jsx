import React from 'react'
import { motion } from "framer-motion"
import {
    Flex,
    Container,
    Heading,
    Stack,
    Text,
    Button,
    Grid,
    GridItem,
    IconProps,
    Input,
    Box,
  } from '@chakra-ui/react';
  import SwiperSlide from "./SwiperSlider"

  
  export default function CallToActionWithIllustration() {
    return (
      <Container maxW="100%" 
      h="100%"
      bg="#fff8ef"
      className='headerWraper'
     
  >
        <Stack
          textAlign={'center'}
          align={'center'}
          spacing={{ base: 8, md: 100}}
     direction="column"
          justifyContent="space-between"
    
      >
         <Flex flexDirection="column" gap={9} justifyContent="center" alignItems="center" pt="20">
         <Heading
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', md: '8xl' }}
            lineHeight={'110%'}
            letterSpacing={1}
            fontFamily='New Font'>
          
          Events Scheduling{' '}
            <br />
            <Text as={'span'} color="#e5a428">
              Made Easy
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'9xl'}  fontSize="lg">
          An online eventing marketplace connecting event Planners, patrons and service providers
          </Text>
          <Input placeholder='Search for events or host' size='lg' width='100%'  borderRadius="5" />
         </Flex>
            {/* <Button
              rounded={'full'}
              px={6}
              colorScheme={'orange'}
              bg={'orange.400'}
              _hover={{ bg: 'orange.500' }}>
              Get started
            </Button>
            <Button rounded={'full'} px={6}>
              Learn more
            </Button> */}
             
       
          <Flex w={'full'} justifyContent="center" alignItems="center" >
            <Illustration
              // height={{ sm: '24rem', lg: '28rem' }}
              // mt={{ base: 12, sm: 16 }}
            
            />
          </Flex>
        </Stack>
      </Container>
    );
  }
  
  export const Illustration = (props: IconProps) => {
    return (
      <SwiperSlide />

    );
  };