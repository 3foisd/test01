import React from 'react'
import Layout from '../components/layout'
import Contacts from '../components/contacts'
import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'

export default function Contact() {
  return (
    <Layout>
      <Navbar/>
       <h1 className='text-center text-[25px] mb-20'>Contact page</h1>
       <Contacts/>
       <Newsletter/>
    </Layout>
  )
}
