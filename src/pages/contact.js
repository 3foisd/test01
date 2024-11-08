import React from 'react'
import Layout from '../components/layout'
import ContactInfo from '../components/contact-info'
import Navbar from '../components/navbar'

export default function Contact() {
  return (
    <Layout>
      <Navbar/>
       <h1 className='text-center text-[25px] mb-20'>Contact page</h1>
       <ContactInfo/>
    </Layout>
  )
}
