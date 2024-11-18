import React from 'react'
import Layout from '../components/layout'
import Contacts from '../components/contacts'
import Navbar from '../components/navbar'
import Newsletter from '../components/newsletter'
import Articles from '../components/articlesID'
import Doctors from '../components/doctorID'
import Newsletter02 from '../components/newsletter02'
import Badge from '../components/valueBadge'
import Services from '../components/homeServices'
import Special from '../components/specialitiesBadge'

export default function Contact() {
  return (
    <Layout>
      <Navbar/>
       <h1 className='text-center text-[25px] mb-20'>Contact page</h1>
       <Contacts/>
       <Articles/>
       <Doctors/>
       <Badge/>
       <Services/>
       <Special/>
       <Newsletter02/>
       <Newsletter/>
    </Layout>
  )
}
