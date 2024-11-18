import React from 'react'
import Image from "next/Image";

function newsletter() {
    return (
      <div className='bg-indigo-950 rounded-[25px] mx-auto mb-32 w-full lg:h-96'>
        <div className='flex flex-col justify-center items-center content-center w-full text-white mb-10 lg:mb-0 px-5 lg:px-0 lg:pl-5'>
            <div className='w-full lg:w-6/12 flex flex-col'>
                <h2 className='text-2xl lg:text-4xl pt-10 lg:pt-0 px-10 text-center'>Subscribe to our newsletter</h2>
                <p className='my-4 px-2 text-center'>Ipsum dolor sit amet consectetur commodo aliquam augue
                duis aliquet ipsum donec tempus ac interdum enim.</p>    
            </div> 
            <div className='flex flex-row mx-auto mt-5 justify-around items-center bg-white w-full lg:w-80 h-12 rounded-full'>
                <p className='text-black'>Enter your email</p>
                <button className='flex flex-row gap-2 justify-between items-center bg-gray-800 w-26 lg:w-30 h-8 rounded-full px-5'>
                    <p>Subscribe</p>
                    <Image className='float-right' src="/webfonts/arrow-right-solid.svg" width="12" height="12" alt="arrow-right"/>
                </button>
            </div>
        </div>

      </div>
);
}

export default newsletter;