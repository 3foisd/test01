import React from 'react'
import Layout from '../components/layout'
import About from '../components/storyNov'
import Top from '../components/aboutTop'
import Newsletter from '../components/newsletter'
import Value from '../components/valueBadge'
import Doctors from '../components/doctorID'


export default function Contact() {
    return (
      <Layout>
        <Top/>
      <About/>
      <Value/>
      <Doctors/>
      <Newsletter/>
      </Layout>
    )
  }