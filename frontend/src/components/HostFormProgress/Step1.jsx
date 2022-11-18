import React from 'react'
import { Grid, GridItem , Text, Stack, Box, Flex, Image, Link} from '@chakra-ui/react'

const Step1 = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h='85vh' bg="#fff8ef">
  <GridItem w='100%' h='100%'className="grid-bg" display={'flex'} justifyContent="center" alignItems={'center'} p={6} mt={8}>
    <Text fontSize={'5xl'} color="#3b3b3b">
What kind of event are you hosting
    </Text>
  </GridItem>
  <GridItem w='100%' h='100%' bg="#fff8ef" display={'flex'} justifyContent="center" alignItems={'center'}>
  <Stack w={'100%'} display={'flex'} justifyContent="center" alignItems={'center'} spacing={12}>
    <Box w={'65%'} border="1px solid #2b2b2b" p={4}>
<Link><Flex w={'100%'} justifyContent="space-between" alignItems={'center'}>
  <Text>Public</Text>
  <Image
    boxSize='120px'
    objectFit='cover'
    src='https://images.pexels.com/photos/1537638/pexels-photo-1537638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    alt='Dan Abramov'
  />
</Flex></Link>
    </Box>
    <Box w={'65%'} border="1px solid #2b2b2b" p={4}>
<Link href="/paid-event"><Flex w={'100%'} justifyContent="space-between" alignItems={'center'}>
  <Text>Private</Text>
  <Image
    boxSize='120px'
    objectFit='cover'
    src='https://images.pexels.com/photos/3916019/pexels-photo-3916019.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load'
    alt='Dan Abramov'
  />
</Flex></Link>
    </Box>
  </Stack>
  </GridItem>
  
</Grid>
  )
}

export default Step1