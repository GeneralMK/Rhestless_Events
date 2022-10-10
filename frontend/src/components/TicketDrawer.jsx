import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    Button,
    Image,
    Box,
    Link,
    Input,
    InputGroup,
    Text,Flex, FormControl, FormLabel, Select,
  } from '@chakra-ui/react'
  import { Grid, GridItem } from '@chakra-ui/react'
  import {
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
  } from '@chakra-ui/react'
  import Countdown from './Countdown'
  import poster from "../assets/poster.jpg"
const TicketDrawer = () => {
    const dt = (new Date(Date.now() + 5 * 24*60*60*1000)).toString();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <>
     <Link colorScheme='blue' onClick={onOpen} w="25%"  bg={"#e5a428"} borderRadius="0" p={5} href="/checkout">
        Get Tickets
      </Link>
      <Drawer onClose={onClose} isOpen={isOpen} size="full" h="100vh" overFlow="hiddeb">
        <DrawerOverlay />
        <DrawerContent   bg="#fff8ef">
          <DrawerHeader borderBottomWidth='1px'>Your Cart</DrawerHeader>
          <DrawerBody>
          <Grid templateColumns='repeat(2, 1fr)' gap={0} h="100%">
  <GridItem w='100%' h='100%'   bg="#fff8ef"  p={8}>
  <Box w={'100%'} h="100%"

   backgroundImage={poster}
   backgroundPosition="center"
   backgroundRepeat="no-repeat"
   backgroundSize={'contain'}
  >

</Box>
  </GridItem>
  <GridItem w='100%'   bg="#fff8ef" borderLeft={'1px solid #e5a428'} overflow="hidden">
  <Box borderBottom={'1px solid #e5a428'} p={8}>
       <Flex flexDirection={'column'}  gap={8}>
       <Countdown 
        
        datetime={dt}/> 
        <Text textAlign={'center'} fontSize="15px">Time remaining to purchase tickets</Text>
       </Flex>
    </Box>
    <Box borderBottom={'1px solid #e5a428'} p={8}>
        <Text>Blue Ribbon Soweto Kota Festival</Text>
        <Text>Sat, Sep 3, 2022 12:00 PM - Sun, Sep 4, 2022 7:00 PM SAST</Text>
    </Box>
    <Box>
    <FormControl>

  <Select placeholder='' fontSize="1xl" color="#e5a428" 
    border="0"
    // borderBottom="1px solid #4b4b4b"
    borderRadius="0">
    <option>General Admission</option>
    
  </Select>
</FormControl>
<Flex w={"100%"}justifyContent={'space-between'} p="8" borderTop={'1px solid #e5a428'} borderBottom={'1px solid #e5a428'}>
<Box W="50%">
    <Text fontSize={'3xl'} letterSpacing="1px">R450</Text>
</Box>
<NumberInput defaultValue={1} min={1}>
  <NumberInputField />
  <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
  </NumberInputStepper>
</NumberInput>
</Flex>
    </Box>
    <Box >
        <Text pl="8" pt={4}>
            Order Summary
        </Text>
       <Flex w="100%" justifyContent={"space-between"} p={8}>
       <Text> <Text as='b'>9</Text> General Admission</Text>
       <Text as={'b'}>R450</Text>
       </Flex>
       </Box>
  <Box borderBottom={'1px solid #e5a428'}>
    <Flex w="100%" justifyContent={"space-between"} p={8}>
    <Text> Subtotal</Text>
       <Text as={'b'}>R450</Text>
    </Flex>
    <Flex w="100%" justifyContent={"space-between"} p={8}>
    <Text> Fees</Text>
       <Text as={'b'}>R33</Text>
    </Flex>
  </Box>
  <Box h="100%">
    <Flex w="100%" justifyContent={'space-between'} h="100%" >
        <Box borderRight={'1px solid #e5a428'} h="100%" w="50%" p={12}>
            <Flex flexDirection={'column'}>
                <Text>Total</Text>
                <Text fontSize={'6xl'}>R590</Text>
            </Flex>
        </Box>
        <Box >
        <Flex flexDirection={'column'} justifyContent="center" alignItems={'center'} w="100%" p={12}>
                <Button bg={"#e5a428"}>Checkout</Button>
            </Flex>
        </Box>
    </Flex>
  </Box>
  </GridItem>
  
</Grid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  </>
  )
}

export default TicketDrawer