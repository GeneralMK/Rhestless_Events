import React from 'react'
import Marquee from "../components/Marquee"
import { Grid, GridItem, Box ,  AspectRatio ,Flex, Text, Link, Input, Stack, Button, Image} from '@chakra-ui/react'
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/react'
import EventsSwiper from '../components/EventsSwiper'
import {BsArrowUpRight} from "react-icons/bs"

import TicketGrid from "../components/TicketGrid"
import Location from '../components/Location'
import poster from "../assets/poster.jpg"
function EventDetail() {

  return (
<Box  bg="#fff8ef">
<Marquee text="NTHWE YOHLE - NTHWE YOHLE - NTHWE YOHLE - NTHWE YOHLE -" />
<Grid templateColumns='repeat(2, 1fr)' >
  <GridItem w='100%'  p={12} display="flex" justifyContent={'center'}  h="100vh" overflow="hidden" flexDirection={'column'} pt={20} >
  <Image w="95%"
          src={poster}
          alt="post image"
          roundedTop="lg"
          border={0}
        />
    
  </GridItem>
  <GridItem w='100%' h='100vh'  overflow={'hidden'} borderLeft="1px solid #e5a428" display={'flex'} justifyContent="space-between" alignSelf={'center'} flexDirection="column" overflowY={'scroll'}>
  <TicketGrid/>
  <Location />
  <UnorderedList listStyleType={'none'} w="100%" m="0">
  <ListItem border={'1px solid #e5a428'} padding="1.5rem 2rem"><Flex w="100%" justifyContent={'space-between'}>
    <Text>Age restriction</Text>
    <Text>18+</Text>
    </Flex></ListItem>
    <ListItem border={'1px solid #e5a428'} padding="1.5rem 2rem"><Flex w="100%" justifyContent={'space-between'}>
    <Text>Parking</Text>
    <Text>Limited</Text>
    </Flex></ListItem>
    <ListItem border={'1px solid #e5a428'} padding="1.5rem 2rem"><Flex w="100%" justifyContent={'space-between'}>
    <Text>Prohibited</Text>
    <Text>Own alcoholo, no drugs, no weapons</Text>
    </Flex></ListItem>
    <ListItem border={'1px solid #e5a428'} padding="1.5rem 2rem"><Flex w="100%" justifyContent={'space-between'}>
    <Text>Ticket Refunds</Text>
    <Text>View Refund policy</Text>
    </Flex></ListItem>
</UnorderedList>
  </GridItem>
</Grid>
<EventsSwiper/>
</Box>
  )
}

export default EventDetail