import React from 'react'
import Cube from './Cube'
import { motion } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter'

type Props = {}

function Hero({}: Props) {
  const[text,count] = useTypewriter({
    words: ["Secured here!","Safe here!","Kept here!"],
    loop: true,
    delaySpeed: 2000
  });

  return (  
    <motion.div 
    initial = {{opacity: 0}}
    animate = {{opacity: 1}}
    transition = {{duration: 1.2}}
    className='flex flex-col md:flex-row md:justify-between text-center md:text-left'>
        <div className="p-2 md:p-4 mt-[2em] md:mt-[6em] text-[#AEC3AE] font-mono font-semibold ml-4">
          <div className="mb-[1em] md:mb-[4em]">
            <span className='text-[1.4em] md:text-[3em] mr-2'>{"Clumsy"}</span>
            <span className='text-[1.4em] md:text-[3em] font-semibold text-[#f2c317]'>{"Enough?"}</span>
          </div>
          <h2 className='text-[1.4em] mb-[1em] md:text-[2.5em]'>{"Don't worry, your content is"}</h2>
          <p className='text-[2.5em] font-bold md:text-[6.5em] md:font-semibold text-[#f2c317]'>{text}</p>
        </div>
        <div className="w-[100%] md:w-[40%]">
                <Cube />
        </div>
    </motion.div>
  ) 
}

export default Hero
