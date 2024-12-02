import React from 'react'
import Layout from '../components/layout'
import StoryNov from '../components/storyNov'
import HeroHome from '../components/HeroHome'
import Newsletter2 from '../components/newsletter2'
import CardAbtus from '../components/CardAbtus'
import Doctors from '../components/doctors'


export default function Contact() {
    return (
      <Layout>
        <div className='flex flex-col gap-32'>
        <HeroHome title="Pioneering the future of personalized healthcare" description="Lorem ipsum dolor sit amet consectetur commodo aliquam
                augue duis aliquet ipsum donec tempus ac interdum enim."/>
      <StoryNov/>
      <CardAbtus/>
      <div className='bg-gray-200 rounded-xl p-10'><Doctors title2="More doctors"/></div>
      
      <Newsletter2/>
      </div>
      </Layout>
    )
  }