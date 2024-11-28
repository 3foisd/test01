import React from 'react'
import Layout from '../components/layout'
import HeroBlog from '../components/HeroBlog'
import RichText from '../components/RichText'
import Blog from '../components/Blog'
import Newsletter3 from '../components/newsletter3'


export default function BlogSingle() {
    return (
        <Layout>
            <HeroBlog/>
            <RichText/>
            <Blog/>
            <Newsletter3/>
        </Layout> 
     )
    }