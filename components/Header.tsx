import React from 'react'
import Link from 'next/link'

type Props = {}

function Header({}: Props) {
  return (
    <div className=''>
        <a href="/" className=''>Keep it here.</a>
        <nav className=''>
            <ul className=''>
                <Link href={"#documents"}><li>Documents</li></Link>
                <Link href={"#videos"}><li>Videos</li></Link>
                <Link href={"#links"}><li>Links</li></Link>
            </ul>
        </nav>
    </div>
  )
}

export default Header