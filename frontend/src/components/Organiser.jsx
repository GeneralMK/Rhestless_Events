import React from 'react'
import { Grid, GridItem, Flex, Box, Text, Button, Image } from '@chakra-ui/react'


const Organiser = () => {
  return (
<Grid templateColumns='50% 25% 25%'>
  <GridItem w='100%' h="100vh" bg="#e5a428" p={12}>
   <Flex h="100%" justifyContent={'space-between'} flexDirection={'column'}>

    <Box>
      <Text fontSize={'7xl'} fontFamily="New Font">Organiser</Text>
    </Box>
    <Flex direction={'column'} gap={12}>
      <Text>All Event Planners have a dedicated page that lists all event properties currently listing tickets. Therefore, 1
dedicated page listing multiple events concurrently instead of various pages for each event.
RHESTless is a self-service online platform, meaning event Planners are responsible for publishing their own
events, ticket pricing tiers as well as publishing date. Additionally, event Planners can track detailed sales and
demographics reports through their dedicated dashboard</Text>
      <Button w="25%" p={8}>Create event for free</Button>
    </Flex>

   </Flex>
  </GridItem>
  <GridItem w='100%' h="100vh" display={'flex'} alignItems={'center'}justifyContent={'center'} >
  <Image h="100%" objectFit={'cover'} src='https://i0.wp.com/www.soundsofafrica.org/wp-content/uploads/2019/11/afronation-day-2-124.jpg?w=1533&ssl=1' alt='Dan Abramov' />
  </GridItem>
  <GridItem w='100%' h="100vh"     bg="#fff8ef" display={'flex'} p={12}>
    <Flex  h="100%" justifyContent={'center'} alignItems="end">
      <Text>Furthermore, proceeds from ticket prices after RHESTless commission and processing fees can be withdrawn
after the event conclusion directly from the dashboard and paid into the event organiser’s account after 1
banking day (Monday-Saturday 7:00 to 20:00)</Text>
    </Flex>
  </GridItem>
</Grid>
  )
}

export default Organiser