import React from 'react'
import { Grid, GridItem, Image,Text, Box,Flex, Button} from '@chakra-ui/react'
import TicketDrawer from './TicketDrawer'

const TicketGrid = () => {
  return (
<Box p={12}>
    <Flex gap={10} direction="column">
        <Text fontSize={'5xl'}>NTHWE YOHLE</Text>
        <Text>    Entrance Fee:</Text>
        <Text fontSize={'5xl'}>
            R450</Text>
      <TicketDrawer/>
        {/* <Image
  p={20}
    boxSize='35%'
    objectFit='cover'
    src='https://previews.dropbox.com/p/thumb/ABqcuZny5FYFOlnxxPZMovMHuT0O2kLDjgHX6P6q5evgo8SHcc_iXOVJaQak_AdO_lTFRy2cz0MgJs0wXI5cCGuxkYdl4Fr9by0k8mMgiqZPrngkPkxs-T8Ty2CHilHDD14T9BLBjzJpWah7tmyln8NG_bMdJIelax9vJ2lBWDLRp-1Jxx-VoztZsx5iUz1ND6zs54fm69eOcab7gJ6QrpEGOtdBtoPRM99f8n9iPkD-ZGaJ0LbBKoFAZbw3XBT5Be9Iysv_ZVI4inGp9QZrYA2SrkQmGzeLFAyVoKx9RtpRpQVu_0nYXP_KQbWq2OEki3hdYR1KR9gidYrWaynrRXmMR8NaaW65U5CbZtHYWhfD--KKlxlMmnN2kPFqwzwWmh8/p.jpeg'
    alt='Dan Abramov'
  /> */}
    </Flex>
    <Text mt={20}>
    Attend the Binance meet up to learn more about Binance ecosystem updates, its plans for the SA region, listen to our Binance Ekasi teams and guest speakers, and of course have fun, win nice gifts and meet new people during networking sessions!
    <br />Please note that we can only host a limited number of guests. In order to secure your spot - register for this event and save the ticket.


    </Text>
</Box>
  )
}

export default TicketGrid