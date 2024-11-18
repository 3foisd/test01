import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import About from '../components/about'



export default function Home() {
  return (
    <Layout>
      <About/>
      <Newsletter/>
    </Layout>
  )
}
