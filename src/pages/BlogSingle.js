import React from 'react'
import Layout from '../components/layout'
import HeroBlog from '../components/HeroBlog'
import RichText from '../components/RichText'
import Blog from '../components/Blog'
import Newsletter3 from '../components/newsletter3'


export default function BlogSingle() {
    return (
        <Layout>
            <div className='flex flex-col gap-32'>
                <HeroBlog title="News and articles" description="Lorem ipsum dolor sit amet consectetur commodo aliquam
                    augue duis aliquet ipsum donec tempus ac interdum enim."/>
                <RichText/>
                <Blog/>
                <Newsletter3/>
            </div>
        </Layout> 
     )
    }