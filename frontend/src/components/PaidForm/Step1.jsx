import React, { useState, useEffect}  from 'react'
import { Grid, GridItem , Text, Stack, Box, Flex, Image, Link} from '@chakra-ui/react'
import { Select } from '@chakra-ui/react'
import axios from 'axios'



const Step1 = () => {
  const baseUrl = 'http://127.0.0.1:8000/api'
  const [categories, setCategories] =useState([])

  useEffect(()=>{
    try{
        axios.get(baseUrl+'/Categories')
        .then((res)=>{
          setCategories(res.data);

        });
    }catch(error){
        console.log(error);
    }
},[]);
  
  return (
    <Grid templateColumns='repeat(2, 1fr)' gap={4} h='85vh' bg="#fff8ef">
  <GridItem w='100%' h='100%'className="grid-bg" display={'flex'} justifyContent="center" alignItems={'center'} p={6} mt={8}>
    <Text fontSize={'5xl'} color="#fff8ef">
What kind of event are you hosting
    </Text>
  </GridItem>
  <GridItem w='100%' h='100%' bg="#fff8ef" display={'flex'} justifyContent="center" alignItems={'center'}>
  <Stack w={'100%'} display={'flex'} justifyContent="center" alignItems={'center'} spacing={12}>
  <Select name='categories'  placeholder='Select Category' size='lg' h={'100px'}>
  {categories.map((category,index)=>{return <option key={index} value={category.id}>{category.title}</option>})}

  </Select>
  
  </Stack>
  </GridItem>
  
</Grid>
  )
}

export default Step1