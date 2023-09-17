import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className='uppercase tracking-[4px] text-sm absolute bottom-1 left-[38%]'>
        <motion.div 
          initial = {{opacity: 0,}}
          animate = {{opacity: 1,}}
          transition = {{duration: 1}}
        >
          {"Created By"} <Link href={"https://github.com/NikhilCode12"} className='font-semibold hover:text-[#f29a17]'>
          {"Nikhil Sharma"}</Link>
        </motion.div>
    </footer>
  )
}

export default Footer