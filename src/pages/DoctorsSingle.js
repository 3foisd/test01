import React from 'react'
import Layout from '../components/layout'
import Richtext from '../components/RichText'
import Doctors from '../components/doctors'
import HeroSingleDoctor from '../components/HeroSingleDoctor'
import CTA2 from '../components/CTA2'

export default function DoctorsSingle() {
    return (
        <Layout>
            <HeroSingleDoctor/>
            <Richtext/>
            <div className='bg-gray-200 rounded-xl p-10'><Doctors/></div>
            <CTA2/> 
        </Layout>
     )
    }