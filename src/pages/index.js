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
import Services2 from '../components/services2'
import Services3 from '../components/services3'
import Services4 from '../components/services4'
import Blog from '../components/Blog'
import List from '../components/DocList'
import List2 from '../components/DocList2'
import Testimonial from '../components/TestimonialAnimation'
import FAQ from '../components/FAQ'




export default function Home() {
  return (
    <Layout>
      <div className='flex flex-col gap-10'>
      <HeroHome2/>
      <CTA3/>
      <CTA1/>
      <WhyChooseUs/>
      <Services5/>
      <Services/>
      <Services2/>
      <Services3/>
      <Services4/>
      <Doctors/>
      <List/>
      <List2/>
      <Testimonial/>
      <Blog/>
      <Newsletter/>
      <FAQ/>
      </div>
    </Layout>
  )
}
