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
import Blog from '../components/Blog'
import List from '../components/DocList'
import List2 from '../components/DocList2'
import Testimonial from '../components/TestimonialAnimation'





export default function Home() {
  return (
    <Layout>
      <div className='flex flex-col gap-32'>
      <HeroHome2 title="Your partner in Health and Wellness" description="Lorem ipsum dolor sit amet consectetur commodo aliquam
                augue duis aliquet ipsum donec tempus ac interdum enim."/>
      <CTA3/>
      <CTA1 title="Our caring doctors are here for you" description="Ut enim ad minim veniam, quis nostrud exer ullamcoert
                    laboris nisi ut aliquip exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat."/>
      <WhyChooseUs title1="The right care for your loved ones" title2="Doctors experts in the industry" description="Ut enim ad minim veniam, quis nostrud
                        exer ullamcoert labore et dolore magna."/>
      <Services5/>
      <Services title="General Medecine" description="Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer."/>
      <Services2 title="General Medecine" description="Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer."/>
      <Services3 title1="Our wide range of specialities" title2="General Medecine" description="Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer."/>      
      <Doctors title="Meet our team"/>
      <List/>
      <List2/>
      <Testimonial/>
      <Blog/>
      <Newsletter/>
      </div>
    </Layout>
  )
}
