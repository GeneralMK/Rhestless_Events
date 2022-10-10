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
    Link,
    IconProps,
    Input,
    Box,
  } from '@chakra-ui/react';
import  SwiperSlide  from '../components/SwiperSlider';
import Earning from '../components/Earning';
import DigitalWallet from '../components/DigitalWallet';
import Dashboard from '../components/Dashboard';
import ServicesTwo from "../components/ServicesTwo"
import Marquee from "../components/Marquee"
  
  export default function CallToActionWithIllustration() {
    return (
      <Container maxW="100%" 
      h="100%"
      bg="#fff8ef"
     
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
          
      Become an event host{' '}
            <br />
            <Text as={'span'} color="#e5a428">
            With ease
            </Text>
          </Heading>
          <Text color={'gray.500'} maxW={'9xl'}  fontSize="lg">
          Creating your event has not been easier. We offer great pricing and tools that will make your event a success and grow your ticket sales
 
          </Text>
<Link href='/create-event' target={'_blank'}>Get started for free</Link>
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
     <Earning />
     <ServicesTwo />
     <DigitalWallet />
     <Dashboard />
     <Marquee 
      text="PRICING -PRICING -PRICING -PRICING - PRICING - "
      />
      </Container>
    );
  }
  
  export const Illustration = (props: IconProps) => {
    return (
      <SwiperSlide />

    );
  };