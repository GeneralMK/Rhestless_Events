import React from 'react'
import Marquee from "../components/Marquee"
import { Grid, GridItem, Box , Flex, Text, Link, Input, Stack, Button, Image} from '@chakra-ui/react'
import EventsSwiper from '../components/EventsSwiper'
import {BsArrowUpRight} from "react-icons/bs"
import poster from "../assets/poster.jpg"
function EntityDetail() {
  return (
   <Box bg="#fff8ef">

<Marquee text="NTHWE YOHLE - NTHWE YOHLE - NTHWE YOHLE - NTHWE YOHLE -" />
<Box   borderBottom='1px solid #4b4b4b' lineHeight="10vh"pl={24} >
    <Link fontSize="20px" color="#2b2b2b" href="/all-entities" fontWeight={500} textTransform="uppercase" pr={8} pl={8} pt={2}  pb={2} border="1px solid #4b4b4b" >View All Entities</Link>
  
  </Box>
<Grid templateColumns='repeat(2, 1fr)'  h="100%">
  <GridItem w='100%' h='100%' borderRight="1px solid #4b4b4b">
  <Image
  p={20}
    boxSize='100%'
    objectFit='cover'
    src={poster}
    alt='Dan Abramov'
  />
  </GridItem>
  <GridItem w='100%' h='100%' >
    <Box p={20} display="flex" justifyContent="center" alignItems="center" flexDir="column" gap={12}>
      <Text fontSize="5xl" fontFamily="New Font">NTHWE YOHLE</Text>
      <Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex nisi ut eius expedita quisquam! Sapiente nobis accusamus libero dolorum totam et! Hic a ad natus ratione perspiciatis esse tempora ullam.

        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae in quasi animi ex numquam! Impedit eveniet, at veniam tenetur nostrum provident ullam perspiciatis aperiam sed nobis blanditiis deserunt, assumenda ad.
        <br /> <br /> White Isle powerhouses Ushuaïa Ibiza and elrow come together for three wonderfully wild Wednesday shows this summer on 20th July, 17th August and 7th September. This iconic partnership lead to three historic events back in 2019 and now, two years later, they promise to be bigger and better than ever. 



elrow is an iconic brand that puts on the world's most colourful and vibrant dance music experiences. It is an eye-popping party and a feast for all the senses. Each unique event entertains and amuses on a totally different level, with exuberant atmospheres and an infectious charm that makes for a special kind of magic on the dance floor. 


      </Text>
      {/* <Button>Buy Tickets</Button>
      <Button></Button> */}
    </Box>
  </GridItem>
</Grid>
<EventsSwiper />
   </Box>

  )
}

export default EntityDetail