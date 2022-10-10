import React from "react";
import { motion } from "framer-motion";
import { Box, Flex, Text, Link, Badge} from '@chakra-ui/react'
import "../marqueeText.css";

const marqueeVariants = {
  animate: {
    x: [0, -1036],
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  },
};
const marqueeVariantsTwo = {
    animate: {
      x: [0, 1036],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 5,
          ease: "linear",
        },
      },
    },
    
  };
const Marquee = (props) => {
  return (
    <Box h="20vh" border={0}>
      <div className="two">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h3>
           {props.text}
          </h3>
          
        </motion.div>
       <Box h="50%"></Box>
        <motion.div
          className="track"
          variants={marqueeVariantsTwo}
          animate="animate"
        >
          <h3>
           {props.text2}
          </h3>
          
        </motion.div>
      </div>
    </Box>
  );
};

export default Marquee;
