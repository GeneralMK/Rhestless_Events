import React from 'react'
import { Grid, GridItem , Text, Stack, Box, Flex, Image, HStack} from '@chakra-ui/react'
import {MdNoDrinks} from "react-icons/md"
import {FaChild} from "react-icons/fa"
import {MdPets} from "react-icons/md"
import {GiDropWeapon} from "react-icons/gi"
import {RiParkingBoxLine} from "react-icons/ri"

const Step6 = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h='85vh' bg="#fff8ef">
  <GridItem w='100%' h='100%'className="grid-bg" display={'flex'} justifyContent="center" alignItems={'center'} p={6} mt={8}>
    <Text fontSize={'5xl'} color="#3b3b3b">
Are there any limiations for this event?
    </Text>
  </GridItem>
  <GridItem w='100%' h='100%' bg="#fff8ef" display={'flex'} justifyContent="center" alignItems={'center'}>
  <Stack w={'100%'} display={'flex'} justifyContent="center" alignItems={'center'} spacing={8}>
    <Box w={'65%'}  p={4}>
    <HStack spacing='24px'>
  <Box w="100%" h='150px' border={'1px solid #3b3b3b'} p={4}>
    <Flex flexDirection={'column'} p={2} alignItems="center" gap={2} w="100%">
<MdNoDrinks color='#e5a428'
size={35}/>
<Text>No Own Drinks Allowed</Text>
    </Flex>
  </Box>
  <Box w="100%" h='150px' border={'1px solid #3b3b3b'} p={4}>
    <Flex flexDirection={'column'} p={2} alignItems="center" gap={2} w="100%">
<FaChild color='#e5a428'
size={35}/>
<Text>No underaged children</Text>
    </Flex>
  </Box>
  <Box w="100%" h='150px' border={'1px solid #3b3b3b'} p={4}>
    <Flex flexDirection={'column'} p={2} alignItems="center" gap={2} w="100%">
<MdPets color='#e5a428'
size={35}/>
<Text>No Pets Allowed</Text>
    </Flex>
  </Box>
</HStack>
    </Box>
    <Box  w={'65%'}  p={4}>
    <HStack spacing='24px'>
  <Box w="100%" h='150px' border={'1px solid #3b3b3b'} p={4}>
    <Flex flexDirection={'column'} p={2} alignItems="center" gap={2} w="100%">
<GiDropWeapon color='#e5a428'
size={35}/>
<Text>No Weapons Allowed</Text>
    </Flex>
  </Box>
  <Box w="100%" h='150px' border={'1px solid #3b3b3b'} p={4}>
    <Flex flexDirection={'column'} p={2} alignItems="center" gap={2} w="100%">
<FaChild color='#e5a428'
size={35}/>
<Text>No underaged children</Text>
    </Flex>
  </Box>
  <Box w="100%" h='150px' border={'1px solid #3b3b3b'} p={4}>
    <Flex flexDirection={'column'} p={2} alignItems="center" gap={2} w="100%">
<RiParkingBoxLine color='#e5a428'
size={35}/>
<Text>Restricted Parking</Text>
    </Flex>
  </Box>
</HStack>
    </Box>
  </Stack>
  </GridItem>
  
</Grid>
  )
}

export default Step6