import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import {EffectCoverflow} from 'swiper';
import "../styles.css"

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Grid,
  GridItem,
  IconProps,
  Input,
  Box,
} from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import concert from "../assets/concert.mp4"
// import fashion from "../assets/fashion.mp4"
import fire from "../assets/fire.mp4"
export default () => {
    return (
      <Swiper modules={[EffectCoverflow]} effect="coverflow"
        // install Swiper modules
        modules={[]}
        spaceBetween={5}
        slidesPerView={9.2}
        loop={true} 
        pagination={{ clickable: false }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        <SwiperSlide >
<Box backgroundImage="url('https://images.unsplash.com/photo-1606216836537-eea72a939072?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60')" h="60vh"
bgPos="center"
bgPosition="center"
bgSize="cover"
borderRadius="5"
>

</Box>
        </SwiperSlide>
        <SwiperSlide>

        <Box backgroundImage="url('https://img.buzzfeed.com/buzzfeed-static/static/2019-08/7/9/asset/a3410f4187b9/sub-buzz-1834-1565171933-1.jpg?resize=990:1320')" h="60vh"
bgPos="center"
bgPosition="center"
bgSize="cover"
borderRadius="5"
>

</Box>

        </SwiperSlide>
        <SwiperSlide>
        <Box
      as='video'
      w="100%"
      h="60vh"
 
      autoPlay muted
      loop
      borderRadius="5"
      src={''}
      poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
      alt='Big Buck Bunny'
      objectFit='cover'
      objectPosition="center"
      obj
      sx={{
        aspectRatio: '16/9'
      }}
  />
        </SwiperSlide>
        <SwiperSlide>
        <Box backgroundImage="url('https://images.pexels.com/photos/3321796/pexels-photo-3321796.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" h="60vh"
bgPos="center"
bgPosition="center"
bgSize="cover"
borderRadius="5"
>

</Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box backgroundImage="url('https://images.unsplash.com/photo-1556848798-ee649b672584?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80')" h="60vh"
bgPos="center"
bgPosition="center"
bgSize="cover"
borderRadius="5"
>

</Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box backgroundImage="url('https://images.unsplash.com/photo-1555272813-c40bcb71a8e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80https://images.unsplash.com/photo-1606216836537-eea72a939072?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60')" h="60vh"
bgPos="center"
bgPosition="center"
bgSize="cover"
borderRadius="5"
>

</Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box backgroundImage="url('https://images.pexels.com/photos/1540406/pexels-photo-1540406.jpeg?auto=compress&cs=tinysrgb&w=1600')" h="60vh"
bgPos="center"
bgPosition="center"
bgSize="cover"
borderRadius="5"
>

</Box>
        </SwiperSlide>
        <SwiperSlide>
        <Box
      as='video'
      w="100%"
      h="60vh"
      borderRadius="5"
      autoPlay muted
      loop
      src={''}
      poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
      alt='Big Buck Bunny'
      objectFit='cover'
      objectPosition="center"
      obj
      sx={{
        aspectRatio: '16/9'
      }}
  />
        </SwiperSlide>
        <SwiperSlide>        <Box backgroundImage="url('https://images.pexels.com/photos/7974876/pexels-photo-7974876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" h="60vh"
bgPos="center"
bgPosition="center"
bgSize="cover"
borderRadius="5"
>
 
</Box></SwiperSlide>
        <SwiperSlide>        <Box backgroundImage="url('https://images.pexels.com/photos/1916820/pexels-photo-1916820.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" h="60vh"
bgPos="center"
bgPosition="center"
bgSize="cover"
borderRadius="5"
>
 
</Box></SwiperSlide>
        <SwiperSlide>        <Box backgroundImage="url('https://images.unsplash.com/photo-1565876427310-0695a4ff03b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1393&q=80')" h="60vh"
bgPos="center"
bgPosition="center"
bgSize="cover"
borderRadius="5"
>
 
</Box>
</SwiperSlide>
        <SwiperSlide>       <Box
      as='video'
      w="100%"
      h="60vh"
      borderRadius="5"
      autoPlay muted
      loop
      src={fire}
      poster='https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217'
      alt='Big Buck Bunny'
      objectFit='cover'
      objectPosition="center"
      obj
      sx={{
        aspectRatio: '16/9'
      }}
  />
</SwiperSlide>
        
        
      </Swiper>
    );
  };