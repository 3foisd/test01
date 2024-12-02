import React from 'react'
import Layout from '../components/layout'
import HeroBlog from '../components/HeroBlog'
import CardServices4 from '../components/CardServices4'
import Newsletter2 from '../components/newsletter2'



export default function Services() {
  return (
    <Layout>
      <div className='flex flex-col gap-32'>
      <HeroBlog title="All medical services available" description="Lorem ipsum dolor sit amet consectetur commodo aliquam
                augue duis aliquet ipsum donec tempus ac interdum enim."/>
      <CardServices4/>
      <Newsletter2/>
      </div>
    </Layout>
  )
}
