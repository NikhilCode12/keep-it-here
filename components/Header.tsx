import React from 'react'
import Link from 'next/link'
import { AiFillGithub,AiFillLinkedin,AiFillTwitterCircle,AiOutlineShareAlt } from 'react-icons/ai'
import { motion } from 'framer-motion'

type Props = {}

function Header({}: Props) {
  return (
    <div className='flex flex-row justify-between p-2 relative'>
        <motion.a 
        initial = {{
          opacity: 0,
          y: -200
        }}
        animate = {{
          opacity: 1,
          y: 0
        }}
        transition={{
          duration: 0.6
        }}
        href="/" className='mt-[2px] ml-[4px] text-3xl font-semibold-600 font-serif text-slate-400 italic'><span className='text-lime-200'>Keep-it</span> {" "} here.</motion.a>
        <nav className='mt-2 m-auto'>
            <ul className='flex flex-row'>
                <Link href={"#documents"}><motion.li initial={{opacity:0,y:-200}} animate={{opacity:1,y:0}}
                transition={{duration:0.8}} className='list'>Documents</motion.li></Link>
                <Link href={"#videos"}><motion.li initial={{opacity:0,y:-200}} animate={{opacity:1,y:0}}
                transition={{duration:1}} className='list'>Videos</motion.li></Link>
                <Link href={"#links"}><motion.li initial={{opacity:0,y:-200}} animate={{opacity:1,y:0}}
                transition={{duration:1.2}} className='list'>Links</motion.li></Link>
            </ul>
        </nav>
        <motion.ul initial={{opacity:0}} animate={{opacity:1}}
                transition={{duration:1.4}} className='flex flex-row mt-2 '>
          <Link target='_blank' href={"https://github.com/NikhilCode12"} className='lks-social'><AiFillGithub   className='w-6 h-6 hover:text-slate-400 text-slate-300'/></Link>
          <Link target='_blank' href={"https://www.linkedin.com/in/nikhil-sharma-41a287226"} className='lks-social'><AiFillLinkedin className='w-6 h-6 text-slate-300 hover:text-slate-400'/></Link>
          <Link target='_blank' href={"https://twitter.com/Sharma_Nikh12"} className='lks-social'><AiFillTwitterCircle className='w-6 h-6 text-slate-300 hover:text-slate-400'/></Link>
          <Link target='_blank' href={"https://NikhilCode12.github.io"} className='lks-social'><AiOutlineShareAlt className='w-6 h-6 text-slate-300 hover:text-slate-400'/></Link>
        </motion.ul>
    </div>
  )
}

export default Header