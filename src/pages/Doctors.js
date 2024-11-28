import React from 'react'
import Layout from '../components/layout'
import HeroDoctors from '../components/HeroDoctors'
import Doctors from '../components/doctors'
import Newsletter from '../components/newsletter'

export default function DoctorsPage() {
    return (
        <Layout>
            <HeroDoctors/>
            <Doctors/>
            <Newsletter/>
        </Layout>
     )
    }