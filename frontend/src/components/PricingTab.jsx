import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Text , Heading} from '@chakra-ui/react';
import PricingPrivate from './PricingPrivate';
import PricingPublic from './PricingPublic';
const PricingTab = () => {
  return (
  <Box h="100%" bg="#fff8ef">
    <Box p="12">
        <Heading textAlign={'center'} fontSize={'5xl'} fontFamily="New Font">Find the package that's right for you</Heading>
    </Box>
      <Tabs isFitted variant='enclosed' p="12" >
    <TabList mb='1em' color={'#e5a428'}>
      <Tab fontSize={'4xl'} fontFamily="New Font">Private Event</Tab>
      <Tab fontSize={'4xl'} fontFamily="New Font">Public Event</Tab>
    </TabList>
    <TabPanels>
      <TabPanel>
       <PricingPrivate/>
      </TabPanel>
      <TabPanel>
       <PricingPublic/>
      </TabPanel>
    </TabPanels>
  </Tabs>
  </Box>
  )
}

export default PricingTab