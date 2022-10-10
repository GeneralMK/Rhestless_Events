import React, {useState} from 'react';
import {
  Container,
  FormControl,
  Input,
  Stack,
  Button,
  Heading,
  VStack,
  Center,
  Checkbox,
  Text,
  Link
} from '@chakra-ui/react';
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
// Here we have used react-icons package for the icon
import { BiLockAlt } from 'react-icons/bi';

const SignInForm = () => {
  const [value, setValue] = useState()
  return (
    <Container w="100%">
              <Stack spacing={20}>
        {/* <Stack align="center">
            <Heading fontSize="3xl">Sign in to your account</Heading>
          </Stack>  */}
          <VStack as="form" spacing={2} w={{ base: 'sm', sm: 'lg' }} p={{ base: 5, sm: 6 }} >
            <VStack spacing={10} w="100%">
            <FormControl id="name">
                <Input
                  type="name"
                  placeholder="Name"
                  rounded="md"
                  borderBottomLeftRadius="0"
                  borderBottomRightRadius="0"
                />
              </FormControl>
              <FormControl id="surname">
                <Input
                  type="surname"
                  placeholder="Surname"
                  rounded="md"
                  borderBottomLeftRadius="0"
                  borderBottomRightRadius="0"
                />
              </FormControl>
              <FormControl id="email">
                <Input
                  type="email"
                  placeholder="Email Address"
                  rounded="md"
                  borderBottomLeftRadius="0"
                  borderBottomRightRadius="0"
                />
              </FormControl>
              <FormControl id="country">
                <Input
                  type="email"
                  placeholder="Country"
                  rounded="md"
                  borderBottomLeftRadius="0"
                  borderBottomRightRadius="0"
                />
              </FormControl>
              <FormControl id="Adress">
                <Input
                  type="Adress"
                  placeholder="Adress"
                  rounded="md"
                  borderBottomLeftRadius="0"
                  borderBottomRightRadius="0"
                />
              </FormControl>
              <FormControl id="password" position="relative" bottom="1px">
                <Input
                  type="password"
                  placeholder="Postal Code"
                  rounded="md"
                  borderTopLeftRadius="0"
                  borderTopRightRadius="0"
                />
              </FormControl>
              <FormControl id="town" position="relative" bottom="1px">
              <PhoneInput
  international
  defaultCountry="RU"
  value={value}
  onChange={setValue}/>
              </FormControl>
              <Text><Link as="b">Create account: </Link>Save your details to make your future purchases quicker.</Text>
              <FormControl id="password" position="relative" bottom="1px">
                <Input
                  type="password"
                  placeholder="Password"
                  rounded="md"
                  borderTopLeftRadius="0"
                  borderTopRightRadius="0"
                />
              </FormControl>
            </VStack>
            <VStack w="100%" spacing={12}>
              <Stack direction="row" justify="space-between" w="100%">
                <Checkbox colorScheme="green" size="md">
                  Remember me
                </Checkbox>
                {/* <Link fontSize={{ base: 'md', sm: 'md' }}>Forgot password?</Link> */}
              </Stack>
              <Button
               leftIcon={<BiLockAlt />}
                bg="#e5a428"
                color="white"
                _hover={{
                  bg: 'green.500'
                }}
                rounded="md"
                w="100%"
              >
                Continue
              </Button>
            </VStack>
          </VStack>
        </Stack>
    
    </Container>
  );
};

export default SignInForm;