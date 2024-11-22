import React from 'react'
import Layout from '../components/layout'
import Newsletter from '../components/newsletter'
import CTA1 from '../components/CTA1'
import HeroHome2 from '../components/HeroHome2'
import CTA3 from '../components/CTA3'
import WhyChooseUs from '../components/WhyChooseUs'
import Services5 from '../components/services5'
import Doctors from '../components/doctors'
import Services from '../components/services'
import Specialities from '../components/sevices2'
import Blog from '../components/Blog'
import List from '../components/DocList'
import List2 from '../components/DocList2'
import Testimonial from '../components/TestimonialAnimation'




export default function Home() {
  return (
    <Layout>
      <div className='flex flex-col gap-5'>
      <HeroHome2/>
      <CTA3/>
      <CTA1/>
      <WhyChooseUs/>
      <Services5/>
      <Services/>
      <Specialities/>
      <Doctors/>
      <List/>
      <List2/>
      <Testimonial/>
      <Blog/>
      <Newsletter/>
      </div>
    </Layout>
  )
}
