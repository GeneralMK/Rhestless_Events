import React from 'react'
import { Grid, GridItem , Text, Stack, Box, Flex, Image, Link} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'

const Step1 = () => {
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={4} h='85vh' bg="#fff8ef">
  <GridItem w='100%' h='100%'className="grid-bg" display={'flex'} justifyContent="center" alignItems={'center'} p={6} mt={8}>
    <Text fontSize={'5xl'} color="#fff8ef">
What kind of event are you hosting
    </Text>
  </GridItem>
  <GridItem w='100%' h='100%' bg="#fff8ef" display={'flex'} justifyContent="center" alignItems={'center'}>
  <Stack w={'100%'} display={'flex'} justifyContent="center" alignItems={'center'} spacing={12}>
  <Select placeholder='category' size='lg' h={'100px'}>
  <option value='option1'>Business</option>
  <option value='option2'>Career</option>
  <option value='option4'>Food and Drink</option>
  <option value='option5'>Fashion and Design</option>
  <option value='option6'>Children and Youth</option>
  <option value='option7'>Food and Drink</option>
  <option value='option8'>Charity and Aid</option>
</Select>
  </Stack>
  </GridItem>
  
</Grid>
  )
}

export default Step1