import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import CardDetails from './CardDetails'
const PaymentForm = () => {
  return (
<Grid templateColumns='repeat(2, 1fr)' gap={0}>
  <GridItem w='100%' h='100%' bg='blue.500'>
<CardDetails />
  </GridItem>
  <GridItem w='100%' h='100%' bg='blue.500'>2</GridItem>
</Grid>
  )
}

export default PaymentForm