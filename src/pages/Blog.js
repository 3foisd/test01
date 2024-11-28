import React from 'react'
import Layout from '../components/layout'
import HeroBlog from '../components/HeroBlog'
import BlogCardSingle from '../components/BlogCardSingle'
import Blog from '../components/Blog'
import Newsletter3 from '../components/newsletter3'


export default function BlogPage() {
    return (
        <Layout>
            <HeroBlog/>
            <BlogCardSingle/>
            <Blog/>
            <Newsletter3/>
        </Layout> 
     )
    }