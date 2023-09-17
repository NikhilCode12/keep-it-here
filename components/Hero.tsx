import React from 'react'
import Cube from './Cube'
import { motion } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter'

type Props = {}

function Hero({}: Props) {
  const[text,count] = useTypewriter({
    words: ["Secure here!","Safe here!","Kept here!"],
    loop: true,
    delaySpeed: 2000
  });

  return (
    <motion.div 
    initial = {{opacity: 0}}
    animate = {{opacity: 1}}
    transition = {{duration: 1.2}}
    className='flex flex-row justify-between'>
        <div className="p-4 mt-[7em] text-[#AEC3AE] font-mono font-semibold ml-4">
          <span className='text-[3em] mr-2'>{"Clumsy"}</span>
          <span className='text-[3em] font-semibold text-[#f2c317]'>{"Enough?"}</span>
          <h2 className='text-[2.5em] mt-[0.8em] mb-[0.8em]'>{"Don't worry, your content is"}</h2>
          <p className='text-[6.5em] font-semibold text-[#f2c317]'>{text}</p>
        </div>
        <div className="w-[40%] z:-60">
                <Cube />
        </div>
    </motion.div>
  ) 
}

export default Hero