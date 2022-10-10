import React from 'react'
import { Grid, GridItem , Box, Text, Button, Flex, Avatar, AvatarBadge, Stack} from '@chakra-ui/react'
function DigitalWallet() {
  return (
    <Box h="100vh" overflow="hidden" borderTop={'1px solid #e5a428'} bg="#fff8ef">
         <Grid templateColumns=
    'repeat(2, 1fr)' h="100%">
    <GridItem w='100%'  bg='' display={'flex'} direction={'column'} alignItems="center" justifyContent="center">
<Flex direction={'column'} alignItems="start" justifyContent="center" gap={8} p={12} >    <Text fontSize={'6xl'} fontFamily="New Font">Get Value through your Digital Wallet</Text>
        <Text w="65%">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum corporis aut quasi ab voluptate? Nemo, esse dolores eos expedita veritatis voluptates sint ut, provident molestias maiores quisquam excepturi doloremque eius.</Text>
        <Button>Create an Event</Button>
        </Flex>
    </GridItem>ç
    <GridItem w='100%' position="relative" borderLeft={'1px solid #e5a428'}>
<Box className='glass-card'>
<Flex alignItems="center" gap={4} borderBottom={'1px solid #e5a428'} p={2} pl={4}> <Avatar name='Dan Abrahmov' src='https://bit.ly/dan-abramov' />
<Text fontWeight="500">ABC Events</Text>
</Flex>
<Flex alignItems="left" gap={4} p={4} direction='column'> 
<Text>Total Balance</Text>
<Text fontSize={'4xl'} fontWeight="500" >R 789 000</Text>
</Flex>
<Stack direction={'row'} alignItems={'center'} justifyContent={'center'} w="100%" spacing={12}>
<Button>Withdraw</Button>
<Button>More details</Button>

</Stack>
</Box>
<Flex direction={'column'} p={2} w="18%" bg="#e5a428" borderRadius={5} color="#fafafa"
className='ana-card'
>
  <Text fontWeight={500} fontSize="2xl">+7%</Text>
  <Text>Sales this week</Text>
</Flex>
   {/* <div className='css-blurry-gradient'>
   </div> */}
    </GridItem>
  </Grid>
    </Box>
   
  )
}

export default DigitalWallet