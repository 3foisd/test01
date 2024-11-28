import React from 'react'
import Layout from '../components/layout'
import StoryNov from '../components/storyNov'
import Top from '../components/HeroHome'
import Newsletter2 from '../components/newsletter2'
import CardAbtus from '../components/CardAbtus'
import Doctors from '../components/doctors'


export default function Contact() {
    return (
      <Layout>
        <div className='flex flex-col gap-5'>
        <Top/>
      <StoryNov/>
      <CardAbtus/>
      <div className='bg-gray-200 rounded-xl p-10'><Doctors/></div>
      
      <Newsletter2/>
      </div>
      </Layout>
    )
  }