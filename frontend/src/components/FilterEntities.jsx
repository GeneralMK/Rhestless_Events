import React from 'react'
import { Grid, GridItem, Text, Stack, Box, Button , Flex, Input} from '@chakra-ui/react'
import {
    Slider,
    SliderTrack,
    SliderFilledTrack,
    SliderThumb,
    SliderMark,
  } from '@chakra-ui/react'
function FilterEntities() {
  return (
  <Box borderBottom="1px solid #4b4b4b" p={8} >

    <Flex justifyContent="space-between">
       
       <Box border="1px solid #4b4b4b" pr={8} pl={8} pt={2} pb={2}>
        A - B
       </Box >
       <Box border="1px solid #4b4b4b" pr={8} pl={8} pt={2} pb={2}> C  - D</Box>
       <Box border="1px solid #4b4b4b" pr={8} pl={8} pt={2} pb={2}> E - F</Box>
       <Box border="1px solid #4b4b4b" pr={8} pl={8} pt={2} pb={2}> G - H</Box>
       <Box border="1px solid #4b4b4b" pr={8} pl={8} pt={2} pb={2}>I - J</Box>
       <Box border="1px solid #4b4b4b" pr={8} pl={8} pt={2} pb={2}>K - L</Box>
       <Box border="1px solid #4b4b4b" pr={8} pl={8} pt={2} pb={2}>M - N</Box>
       <Box border="1px solid #4b4b4b" pr={8} pl={8} pt={2} pb={2}>O - P</Box>
       <Box border="1px solid #4b4b4b" pr={8} pl={8} pt={2} pb={2}>Q - R</Box>
       <Box border="1px solid #4b4b4b" pr={8} pl={8} pt={2} pb={2}>S - T</Box>
  <Box border="1px solid #4b4b4b" pr={8} pl={8} pt={2} pb={2}>U - V</Box>
  <Box border="1px solid #4b4b4b" pr={8} pl={8} pt={2} pb={2}>W - X</Box>
  <Box border="1px solid #4b4b4b" pr={8} pl={8} pt={2} pb={2}>Y - Z</Box>
    </Flex>
    <Box>
    <Input placeholder='Search organiser' size='md' mt={6}
    borderRadius={0}
    borderColor="#4b4b4b"
    />
    </Box>
  </Box>
  )
}

export default FilterEntities