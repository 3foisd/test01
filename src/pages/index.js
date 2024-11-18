import React from 'react'
import Layout from '../components/layout'
import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'
import About from '../components/about'



export default function Home() {
  return (
    <Layout>
      <Navbar/>
      <About/>
      <Newsletter/>
    </Layout>
  )
}
