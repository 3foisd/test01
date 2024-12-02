import React from 'react'
import Layout from '../components/layout'
import Richtext from '../components/RichText'
import Doctors from '../components/doctors'
import HeroSingleDoctor from '../components/HeroSingleDoctor'
import CTA2 from '../components/CTA2'

export default function DoctorsSingle() {
    return (
        <Layout>
            <div className='flex flex-col gap-32'>
                <HeroSingleDoctor title="Dr. Soufiane Chebli" description="Lorem ipsum dolor sit amet consectetur commodo aliquam
                        augue duis aliquet ipsum donec tempus ac interdum enim."/>
                <Richtext/>
                <div className='bg-gray-200 rounded-xl p-10'><Doctors/></div>
                <CTA2/> 
            </div>
        </Layout>
     )
    }