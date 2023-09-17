import React from 'react'
import Cube from './Cube'

type Props = {}

function Hero({}: Props) {
  return (
    <div className='flex flex-row justify-between'>
        <div className="p-4 mt-[7em] text-[#AEC3AE] font-mono font-semibold ml-4">
          <span className='text-[2.2em] mr-2'>{"Clumsy"}</span>
          <span className='text-[3em] font-semibold text-[#f2c317]'>{"Enough?"}</span>
          <h2 className='text-[2.5em] mt-[0.8em] mb-[0.8em]'>{"Don't worry, your content is"}</h2>
          <p className='text-[6.5em] font-semibold text-[#f2c317]'>{"Safe here!"}</p>
        </div>
        <div className="w-[40%] z:-60">
                <Cube />
        </div>
    </div>
  ) 
}

export default Hero
