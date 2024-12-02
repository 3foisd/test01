import React from 'react'
import Layout from '../components/layout'
import HeroDoctors from '../components/HeroDoctors'
import Doctors from '../components/doctors'
import Newsletter from '../components/newsletter'

export default function DoctorsPage() {
    return (
        <Layout>
            <div className='flex flex-col gap-32'>
            <HeroDoctors title="Expert team committed to transforming healthcare" description="Lorem ipsum dolor sit amet consectetur commodo aliquam
            augue duis aliquet ipsum donec tempus ac interdum enim."/>
            <Doctors/>
            <Newsletter/>
            </div>
        </Layout>
     )
    }