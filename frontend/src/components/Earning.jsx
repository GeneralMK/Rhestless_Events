import React, { useState } from 'react';
import "../styles.css"
import { Grid, GridItem, Text, Stack, Box, Button } from '@chakra-ui/react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'
function Earning() {
    const [sliderValue, setSliderValue] = useState(25)
    const [customersValue, setCustomerValue] = useState(25)

  const labelStyles = {
    mt: '2',
    ml: '-2.5',
    fontSize: 'sm',
  }
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h="100%"  bg="#fff8ef" display="flex" justifyContent="center" alignItems="center" w="100%" borderBottom={'1px solid #e5a428'}>
    <GridItem w='100%' h='100vh'    bg="#fff8ef" display="flex" justifyContent="center" alignItems="center" flexDir="column" borderRight={'1px solid #e5a428'} pl="12">
<Text fontSize="6xl"  fontFamily='New Font'>See your potential earnings</Text>
<Text pr="50">Quicket has two fees, commission and booking fees. Typically event organisers pay the commission and ticket buyers pay booking fees, but flexible pricing means you choose who pays which fee.</Text>
<Stack spacing={50} w="100%">
<Box pt={6} pb={2} pr={24}  bg="#fff8ef" w="100%">
    <Text mb={20}>Ticket Price</Text>
      <Slider aria-label='slider-ex-6' 
      
      id='slider'
      defaultValue={250}
      min={20}
      max={2000}
      w="100%"
   
      onChange={(val) => setSliderValue(val)} >
        <SliderMark value={50} {...labelStyles}>
          R50
        </SliderMark>
        <SliderMark value={500} {...labelStyles} w="100%">
          R500
        </SliderMark>
        <SliderMark value={1500} {...labelStyles} w="100%">
          R1500
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg="#e5a428"
          color='white'
          mt='-14'
          ml='-5'
         
          w="12%"
          borderRadius="5px"
        >
         R {sliderValue}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
    <Box pt={6} pb={2} pr={24}>
    <Text mb={20}>Expected Attendees</Text>
      <Slider aria-label='slider-ex-6' 
      
      id='sliderTwo'
      defaultValue={500}
      min={50}
      max={100000}
  
   
      onChange={(val) => setSliderValue(val)}  w="100%">
        <SliderMark value={250} {...labelStyles}>
          250
        </SliderMark>
        <SliderMark value={50000} {...labelStyles} w="100%">
         50000
        </SliderMark>
        <SliderMark value={100000} {...labelStyles} w="100%">
          100000
        </SliderMark>
        <SliderMark
          value={sliderValue}
          textAlign='center'
          bg="#e5a428"
          color='white'
          mt='-14'
          ml='-5'
          w='12%'
          
          borderRadius="5px"
        >
        {sliderValue}
        </SliderMark>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
    </Box>
</Stack>
    </GridItem>
    <GridItem w='100%' h='100vh' display="flex" justifyContent="center" alignItems="center" flexDirection="column">
<Box className='glass'>
   <Text>Your total earnings</Text>
   <Text fontSize="7xl">R 17k</Text>
   <Button>Create an event</Button>
</Box>
    </GridItem>
   
  </Grid>
  )
}

export default Earning