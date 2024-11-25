import React from 'react'
import Link from 'next/link'
import Image from "next/Image";

function newsletter2() {
    return (
      <div className='bg-indigo-950 rounded-xl mx-auto lg:pl-10 flex flex-col lg:flex-row gap-5 w-full lg:h-96'>
        <div className='w-full lg:w-6/12 text-white lg:mb-0 px-5 lg:px-0 lg:pl-5 flex flex-col justify-center items-start'>
            <h2 className='text-2xl lg:text-5xl pt-10 lg:pt-0 text-start'>Don’t Let Your Health Take a Backseat!</h2>
            <p className='my-4 px-2 text-start font-light'>Schedule an appointment with one of our experienced medical professionals today!</p>
            <div className="flex flex-row gap-4">
                <button className="flex flex-row justify-around items-center bg-white w-64 h-12 rounded-full text-black">
                  <Image src="/webfonts/bell-regular.svg" width="24" height="24" alt="map"/>
                  <Link href="">Schedule an appointment</Link>
                </button>
                <button className="justify-around items-center bg-white w-12 h-12 rounded-full hidden lg:block">
                <Image className="mx-auto" src="/webfonts/arrow-right-solid-black.svg" width="20" height="20" alt="arrow-right"/>
                </button>
              </div>
        </div>
        <Image className='mx-auto' src="/images/freepik__candid-image-photography-natural-textures-highly-r__74749 2.png" width="650" height="400" alt="doctors"/>

      </div>
);
}

export default newsletter2;