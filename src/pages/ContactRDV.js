import React from 'react'
import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'
import FAQ from '../components/FAQ'
import Newsletter from '../components/newsletter'

export default function DoctorsSingle() {
    return (
        <Layout>
            <ContactForm/>
            <FAQ/>
            <Newsletter/>
        </Layout>    
     )
    }