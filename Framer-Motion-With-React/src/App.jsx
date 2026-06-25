import React from 'react';
import { motion } from 'motion/react';

const App = () => {
  return (
    <div>
      <motion.div
        className="box"
        animate={{
          x: 1000,
          y: 500,
          rotate: 360
        }}
        transition={{
          duration:3,
          delay: 2
        }}
      ></motion.div>
      <motion.div
        className='circle'
        animate={{
          x: 1000,
          y: 500,
          rotate: 360
        }}
      ></motion.div>
      <motion.h1>Welcome to React HomeLand!</motion.h1>
    </div>
  )
}

export default App
