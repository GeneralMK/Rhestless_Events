import React from 'react'
import { Grid, GridItem, Text, Box, Button} from '@chakra-ui/react'


function Services() {
  return (
  <Box p={20} h="100vh" display="flex" justifyContent="center" flexDirection="8" flexDir="column"  gap={8}>
<Text>Services</Text>
  <Grid templateColumns='40% 60%' gap={12} h="40vh">
    <GridItem borderRadius="25px" w='100%' h='100%' bg='blue.500' display="flex" justifyContent="center" alignItems="center" flexDirection="column">

        <Box p={8} display="flex" justifyContent="center"  flexDirection="column" gap={4}>
      <Text fontSize="5xl">Private and Public Events</Text>
      <Text>Host an intimate friends and family gathering or a large gathering. our RSVP solution
provides a data-rich dashboard that facilitates guest management, capturing additional information pertaining to the logistics of event as well as communication with attendees utilizing SMS and email</Text>
<Button w="50%">Get Started</Button>
        </Box>
    </GridItem>
    <GridItem borderRadius="25px" w='100%' h='100%' bg='blue.500' display="flex" justifyContent="center" alignItems="center" flexDirection="column">
    <Box p={8} display="flex" justifyContent="center"  flexDirection="column" gap={4}>
      <Text fontSize="5xl">Private and Public Events</Text>
      <Text>Host an intimate friends and family gathering or a large gathering. our RSVP solution
provides a data-rich dashboard that facilitates guest management, capturing additional information pertaining to the logistics of event as well as communication with attendees utilizing SMS and email</Text>
<Button>Get Started</Button>
        </Box>
    </GridItem>
  </Grid>
<Grid templateColumns='60% 40%'  gap={12}  h="40vh" >
<GridItem borderRadius="25px" w='100%' h='100%' bg='blue.500' display="flex" justifyContent="center" alignItems="center" flexDirection="column">
    <Box p={8} display="flex" justifyContent="center"  flexDirection="column" gap={4}>
      <Text fontSize="5xl">Private and Public Events</Text>
      <Text>Host an intimate friends and family gathering or a large gathering. our RSVP solution
provides a data-rich dashboard that facilitates guest management, capturing additional information pertaining to the logistics of event as well as communication with attendees utilizing SMS and email</Text>
<Button>Create Event</Button>
        </Box>
    </GridItem>
    <GridItem borderRadius="25px" w='100%' h='100%' bg='blue.500' display="flex" justifyContent="center" alignItems="center" flexDirection="column">
    <Box p={8} display="flex" justifyContent="center"  flexDirection="column" gap={4}>
      <Text fontSize="5xl">Private and Public Events</Text>
      <Text>Host an intimate friends and family gathering or a large gathering. our RSVP solution
provides a data-rich dashboard that facilitates guest management, capturing additional information pertaining to the logistics of event as well as communication with attendees utilizing SMS and email</Text>
<Button>Get Started</Button>
        </Box>
    </GridItem>
</Grid>
  </Box>
  )
}

export default Services