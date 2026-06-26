import React from 'react';
import { motion } from 'motion/react';

const App = () => {
  return (
    <div>
      <motion.h1
        initial={{//similar to 'from'
          x: -500
        }}
        animate={{//similar to 'to'
          x: 1000,
          rotate: 360
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          //repeat: 1,
        }}
      >Subscribe me!</motion.h1>
      <motion.div
        className="box"
        animate={{
          x: 1000,
          y: 500,
          rotate: 360
        }}
        transition={{
          duration: 3,
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
      <motion.img
        animate={{
          x: 1000,
          rotate: 360
        }}
        transition={{
          duration: 2,
          delay: 1,
          repeat: Infinity,
          ease: 'anticipate'
        }}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvgZmQHFlFZyGSHDaAqmKsvs1RwuVZcD2VhQ&s" alt="" />
      <motion.div 
       initial={{
        x:0,
        y:0
       }}
       animate={{
         x:[0,800,800,0,0],
         y:[0,0,300,300,0],
         rotate: [0,360,0,-360,0]
       }}

       transition={{
        duration: 2,
        delay: 1,
        repeat: 2,
        ease: 'anticipate'
       }}
      className="box"></motion.div>
    </div>
  )
}

export default App
