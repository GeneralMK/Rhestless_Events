import React from "react";
import { motion } from "framer-motion";

import "./marquee.css";

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

const Marquee = (props) => {
  return (
    <div>
      <div className="marquee">
        <motion.div
          className="track"
          variants={marqueeVariants}
          animate="animate"
        >
          <h1>
           {props.text}
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Marquee;
