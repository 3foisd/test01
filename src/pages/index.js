import React from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Contacts from '../components/contacts'



export default function Home() {
  return (
    <Layout>
      <Navbar/>
      <Contacts/>
      <Newsletter/>
    </Layout>
  )
}
