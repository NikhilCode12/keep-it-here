"use client"
import React from 'react'
import Header from '../../components/Header'
import Hero from '../../components/Hero'
import Footer from '../../components/Footer'

export default function Home() {
  return (
    <div>
      <Header />

      <section className='mt-1 md:mt-4'>
        <Hero />
      </section>

      {/* Footer is not loaded right now! */}
      {/* <Footer /> */}
    </div>
  )
}
