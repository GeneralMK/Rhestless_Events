import React from 'react'
import { Grid, GridItem , Text, Stack, Box, Flex, Image} from '@chakra-ui/react'
const Step2 = () => {
    return (
        <Grid templateColumns='repeat(2, 1fr)' gap={0} h='85vh' bg="#fff8ef" >
      <GridItem w='100%' h='100%'display={'flex'} justifyContent="center" alignItems={'center'} p={6} mt={8} className="grid-bg">
        <Text fontSize={'5xl'} color="#3b3b3b">
Which of these best describe your event
        </Text>
      </GridItem>
      <GridItem w='100%' h='100%' bg="#fff8ef" display={'flex'} justifyContent="center" alignItems={'center'}>
      <Stack w={'100%'} display={'flex'} justifyContent="center" alignItems={'center'} spacing={12}>
        <Box w={'65%'} border="1px solid #2b2b2b" p={4}>
    <Flex w={'100%'} justifyContent="space-between" alignItems={'center'} flexDirection="column">
      <Text as={'b'} fontSize="18px">Concert</Text>
     <Text>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni incidunt iure vitae beatae quos? Perspiciatis, pariatur
     </Text>
    </Flex>
        </Box>
        <Box w={'65%'} border="1px solid #2b2b2b" p={4}>
    <Flex w={'100%'} justifyContent="space-between" alignItems={'center'} flexDirection="column">
    <Text as={'b'} fontSize="18px">Conference</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita consectetur quaerat eveniet iure nam</Text>
    </Flex>
        </Box>
        <Box w={'65%'} border="1px solid #2b2b2b" p={4}>
    <Flex w={'100%'} justifyContent="space-between" alignItems={'center'} flexDirection="column">
    <Text as={'b'} fontSize="18px">Festival</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita consectetur quaerat eveniet iure nam</Text>
    </Flex>
        </Box>
        {/* <Box w={'65%'} border="1px solid #2b2b2b" p={4}>
    <Flex w={'100%'} justifyContent="space-between" alignItems={'center'} flexDirection="column">
    <Text as={'b'} fontSize="18px">Sports Event</Text>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas expedita consectetur quaerat eveniet iure nam</Text>
    </Flex>
        </Box> */}
      </Stack>
      </GridItem>
      
    </Grid>
      )
}

export default Step2