import React from 'react'
import { Flex, Grid, GridItem, Text } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
const Location = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' bg="#fff8ef">
    <GridItem w='100%' h='100%' bg="#fff8ef" border={'1px solid #e5a428'} p={12}>
        <Flex flexDirection={'column'} >
            <Text fontSize={'2xl'}>Date and Time</Text>
            <Text>
            Sat, August 20, 2022
            <br />

2:00 PM – 6:00 PM SAST
            </Text>
        </Flex>
    </GridItem>
    <GridItem w='100%' h='100%'bg="#fff8ef" p={12} border={'1px solid #e5a428'}>
    <Flex flexDirection={'column'} >
            <Text fontSize={'2xl'}>Location</Text>
            <Text>
            Soweto Campus YWCA Residence

Mahalefele Road
<br />
Johannesburg, GP 1801
            <br />
            </Text>
            <Link href='' isExternal>
View Map <ExternalLinkIcon mx='2px' />
</Link>
        </Flex>
    </GridItem>
  
  </Grid>
  )
}

export default Location