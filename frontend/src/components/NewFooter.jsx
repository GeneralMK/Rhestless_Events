import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    Image,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import logo from "../assets/white-logo.png"
const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  );
};
  export default function LargeWithLogoCentered() {
    return (
      <Box  bg="#1b1b1b"
      h="100%"> 
       <Container as={Stack} maxW={'12xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 3, md: 3}} float="right" color="#fafafa">
          <Stack align={'flex-start'}>
            <ListHeader>Product</ListHeader>
            <Link href={'#'}>Overview</Link>
            <Stack direction={'row'} align={'center'} spacing={2}>
              <Link href={'#'}>Features</Link>
              <Tag
                size={'sm'}
                bg={useColorModeValue('green.300', 'green.800')}
                ml={2}
                color={'white'}>
                New
              </Tag>
            </Stack>
            <Link href={'#'}>Tutorials</Link>
            <Link href={'#'}>Pricing</Link>
            <Link href={'#'}>Releases</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Company</ListHeader>
            <Link href={'#'}>About Us</Link>
            <Link href={'#'}>Press</Link>
            <Link href={'#'}>Careers</Link>
            <Link href={'#'}>Contact Us</Link>
            <Link href={'#'}>Partners</Link>
          </Stack>
          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Link href={'#'}>Cookies Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>Terms of Service</Link>
            <Link href={'#'}>Law Enforcement</Link>
            <Link href={'#'}>Status</Link>
          </Stack>
        </SimpleGrid>
        <Box>
<Image
boxSize="80%"
h="300px"
objectFit="cover"
src={logo} alt='Dan Abramov' />
    <Flex>
        <Box>
        <Text pt={6} fontSize={'sm'} textAlign={'center'}>
          © 2022 Rhestless. All rights reserved
        </Text>
        </Box>
        <Flex>
        <Link href={'#'}>Facebook</Link>
            <Link href={'#'}>Twitter</Link>
            <Link href={'#'}>Dribbble</Link>
        </Flex>
    </Flex>
</Box>
        </Container>
      </Box>
    );
  }