import React from 'react'
import Link from 'next/link'

type Props = {}

function Footer({}: Props) {
  return (
    <footer className='flex flex-row justify-center mt-6'>
        {"Created By"} <Link href={"https://github.com/NikhilCode12"} className='hover:opacity-85 mx-1 font-semibold text-[#f29a17]'>
          {"Nikhil Sharma"}</Link>
    </footer>
  )
}

export default Footer