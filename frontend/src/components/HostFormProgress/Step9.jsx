import React from 'react'
import { Grid, GridItem , Text, Stack, Box, Flex, Image, Heading, Textarea, Link} from '@chakra-ui/react'

const Step9 = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={0} h='85vh' bg="#fff8ef">
  <GridItem w='100%' h='100%'className="grid-bg" display={'flex'} justifyContent="center" alignItems={'center'} p={6} mt={8}>
    <Text fontSize={'5xl'} color="#3b3b3b">
What kind of event are you hosting
    </Text>
  </GridItem>
  <GridItem w='100%' h='100%' bg="#fff8ef" display={'flex'} justifyContent="center" alignItems={'center'}>
  <Flex flexDirection={'column'} justifyContent="center" gap="20">
    <Heading>
   Create the title 
    </Heading> 
  <Text>
  Your listing title should highlight what makes your place special. <Link>Review listing title guidelines.</Link>
  </Text>
 <Box>
     <Textarea
        // value={value}
        // onChange={handleInputChange}
        placeholder='Here is a sample placeholder'
     w={'100%'}
      />
      <Text>50/50</Text>
 </Box>
  </Flex>
  </GridItem>
  
</Grid>
  )
}

export default Step9