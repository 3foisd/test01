import React from 'react'
import Layout from '../components/layout'
import RichText from '../components/RichText'
import ContactForm from '../components/ContactForm'
import Newsletter3 from '../components/newsletter3'
import Hero from '../components/HeroDoctors'
import HeroSingle from '../components/HeroSingleDoctor'
import HeroBlog from '../components/HeroBlog'
import CTA2 from '../components/CTA2'
import CTA4 from '../components/CTA4'
import CTA6 from '../components/CTA6'
import CTA5 from '../components/CTA5'



export default function Services() {
  return (
    <Layout>
      <div className='flex flex-col gap-10'>
      <CTA2/>
      <Hero/>
      <HeroBlog/>
      <HeroSingle/>
      <RichText/>
      <ContactForm/>
      <Newsletter3/>
      <CTA4/>
      <CTA6/>
      <CTA5/>
      </div>
    </Layout>
  )
}
