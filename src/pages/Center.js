import React from 'react'
import Layout from '../components/layout'
import VisitCard from '../components/VisitCard'
import Newsletter2 from '../components/newsletter2'

export default function DoctorsSingle() {
    return (
        <Layout>
            <div className='flex flex-col gap-32'>
                <VisitCard/>
                <Newsletter2/>
            </div>
        </Layout>    
     )
    }