import React from 'react'
import Layout from '../components/layout'
import Contact from '../components/contact-card'
import Navbar from '../components/navbar'

export default function Services() {
  return (
    <Layout>
      <Navbar/>
      <h1 className='text-center text-[25px] mb-20'>Services</h1>
      <Contact/>
    </Layout>
  )
}
