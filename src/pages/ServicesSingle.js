import React from 'react'
import Layout from '../components/layout'
import HeroServices from '../components/HeroServices'
import RichText from '../components/RichText'
import Newsletter2 from '../components/newsletter2'


export default function ServicesSingle() {
  return (
    <Layout>
        <div className='flex flex-col gap-32'>
          <HeroServices title="Cardiology" description="Lorem ipsum dolor sit amet consectetur
                quisque faucibus dolor tortor porta sit
                tempor purus proin sapien docer."/>
          <RichText title1="Lorem" title2="Lorem" title3="Lorem" title4="Lorem" title5="Lorem"/>
          <Newsletter2/>
        </div>
    </Layout>
  )
}
