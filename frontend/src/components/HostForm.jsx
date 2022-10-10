import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,

  InputRightElement,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
} from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {AiFillGoogleCircle} from "react-icons/ai"
import {BsFacebook} from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import SliderMarquee from "../components/SliderMarquee"
import CreateEventForm from './CreateEventForm';
const HostForm = () => {
  const [showPassword, setShowPassword] = useState(false);
const[name, setName]  = useState('')

const handleInputChange = (e) => setName(e.target.value)

  return (
<Box>
    <CreateEventForm/>
</Box>
  )
}

export default HostForm