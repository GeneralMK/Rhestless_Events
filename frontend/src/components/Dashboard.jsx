import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Box, Grid, GridItem, Flex, Text, Image  } from '@chakra-ui/react'

const Dashboard = () => {
  return (
   <Box h="100vh" W='100%'
   bg="#fff8ef"
   borderTop={'1px solid #e5a428'}> 
   
   <Tabs variant='soft-rounded' colorScheme='gray' display={'flex'} justifyContent='space-between'  flexDirection={'row'} h="100%"  >
   <TabPanels  w='50%' display={'flex'} justifyContent="center" alignItems={'flex-start'} flexDirection="column">
     <TabPanel display={'flex'} justifyContent="center" alignItems={'center'} flexDirection="column">
     <Box display={'flex'} justifyContent="center" alignItems={'flex-start'} flexDirection="column" gap={10}>
     <Text fontSize={'4xl'} fontFamily='New Font'>Keep Track of Sales</Text>
     <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor facere quaerat tenetur voluptatum laboriosam quo illum eligendi porro! Iure pariatur sunt laborum nostrum reprehenderit asperiores esse dolore natus soluta?</Text>
     <Image alignSelf={'center'}
     w="80%"
     src="https://cdn.dribbble.com/userupload/2994360/file/original-1082756e71b54e5d571b68dc6d7451ca.png?compress=1&resize=2048x1536"
     />
     </Box>
     </TabPanel>
     <TabPanel display={'flex'} justifyContent="center" alignItems={'center'} flexDirection="column">
     <Box display={'flex'} justifyContent="center" alignItems={'flex-start'} flexDirection="column" gap={10}>
     <Text fontSize={'4xl'} fontFamily='New Font'>Digital Wallet</Text>
     <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor facere quaerat tenetur voluptatum laboriosam quo illum eligendi porro! Iure pariatur sunt laborum nostrum reprehenderit asperiores esse dolore natus soluta?</Text>
     <Image alignSelf={'center'}
     w="80%"
     src="https://cdn.dribbble.com/userupload/2994360/file/original-1082756e71b54e5d571b68dc6d7451ca.png?compress=1&resize=2048x1536"
     />
     </Box>
     </TabPanel>
     <TabPanel display={'flex'} justifyContent="center" alignItems={'center'} flexDirection="column">
     <Box display={'flex'} justifyContent="center" alignItems={'flex-start'} flexDirection="column" gap={10}>
     <Text fontSize={'4xl'} fontFamily='New Font'>Accurate  metrics</Text>
     <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor facere quaerat tenetur voluptatum laboriosam quo illum eligendi porro! Iure pariatur sunt laborum nostrum reprehenderit asperiores esse dolore natus soluta?</Text>
     <Image alignSelf={'center'}
     w="80%"
     src="https://cdn.dribbble.com/userupload/2994360/file/original-1082756e71b54e5d571b68dc6d7451ca.png?compress=1&resize=2048x1536"
     />
     </Box>
     </TabPanel>
     <TabPanel display={'flex'} justifyContent="center" alignItems={'center'} flexDirection="column">
     <Box display={'flex'} justifyContent="center" alignItems={'flex-start'} flexDirection="column" gap={10}>
     <Text fontSize={'4xl'} fontFamily='New Font'>Easily accesible reporting</Text>
     <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolor facere quaerat tenetur voluptatum laboriosam quo illum eligendi porro! Iure pariatur sunt laborum nostrum reprehenderit asperiores esse dolore natus soluta?</Text>
     <Image alignSelf={'center'}
     w="80%"
     src="https://cdn.dribbble.com/userupload/2994360/file/original-1082756e71b54e5d571b68dc6d7451ca.png?compress=1&resize=2048x1536"
     />
     </Box>
     </TabPanel>
   </TabPanels>
   <TabList w='100%' display={'flex'} justifyContent='space-between' flexDirection={'column'} h="100%" borderLeft={'1px solid #e5a428'}>
    <Box p={12}>
    <Text fontSize={'7xl'} fontFamily='New Font'>Easy to use Dasboard</Text>
      <Text fontSize={'20px'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, nostrum eveniet reiciendis atque magnam ducimus. Quaerat, veniam harum! Excepturi praesentium incidunt neque ratione dolorem ipsum. Consectetur blanditiis dolorem hic commodi.</Text>
    </Box>
<Box p={12}>
  <Text>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, et, deleniti necessitatibus voluptates reprehenderit, iure architecto placeat doloremque molestias iste cum laboriosam laborum maxime. Cumque magnam harum eum voluptas quibusdam?</Text>
<Flex mt={8}>
  
  <Tab>Sales</Tab>
      <Tab>Wallet</Tab>
      <Tab>Analytics</Tab>
      <Tab>Reports</Tab>
  </Flex>
</Box>
   </TabList>
 </Tabs>
 
 {/* <Grid templateColumns='repeat(2, 1fr)'  h="100%">
  <GridItem w='100%' h='100vh' bg='blue.500'>
    <Tabs variant='soft-rounded' colorScheme='green'>
      <TabList>
      <Tab>Tab 1</Tab>
     <Tab>Tab 2</Tab>
      </TabList>
    </Tabs>
  </GridItem>
  <GridItem w='100%' h='100vh' bg='blue.500'>
  <Tabs>
  <TabPanels>
     <TabPanel>
       <p>one!</p>
     </TabPanel>
     <TabPanel>
       <p>two!</p>
     </TabPanel>
   </TabPanels>
  </Tabs>
  </GridItem>

  
</Grid> */}
 </Box>
 
  )
}

export default Dashboard