import React from 'react'
import { Box, Flex, Text, Link, Badge, Center} from '@chakra-ui/react'
import {BsArrowUpRight} from "react-icons/bs"
function Bio() {
  return (
  <Box h="80vh" display="flex" justifyContent="center" alignItems="center" flexDirection="column" p={12} bg="#fff8ef" position={'relative'}>
   {/* <div className='css-blurry-gradient'>
   </div> */}
<Text fontSize="6xl" fontWeight="500"   w="50%"  fontFamily="New Font" zIndex="3">Powering your events
so you can grow
</Text>
<Text w="35%" alignSelf="flex-end" pt={70} lineHeight="1.66rem" zIndex="3">RHESTless is an online marketplace connecting event Planners, patrons and service providers. A dedicated
end-to-end platform that enables event Planners to sell tickets and merchandise to event patrons as well as
purchase resources required to host successful events at wholesale prices. An inclusive solution that stream
-
lines cashflow and profits by interchangeably processing income and expenses. </Text>
<Box display="flex" gap={2} alignSelf="flex-end" justifyContent="center" alignItems="center">
<Link  mt={4} color="#e5a428" fontSize="xl" href='/about'isExternal>View More </Link>
<BsArrowUpRight />
</Box>
  </Box>
  )
}

export default Bio