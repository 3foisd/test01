import React from 'react'
import Image from "next/Image";

function newsletter2() {
    return (
      <div className='bg-indigo-950 rounded-xl mx-auto flex flex-col lg:flex-row w-full lg:h-96'>
        <div className='w-full lg:w-1/2 text-white lg:mb-0 px-5 lg:px-0 lg:pl-5 flex flex-col justify-center align-items-center'>
            <h2 className='text-2xl lg:text-4xl pt-10 lg:pt-0 px-10 text-center'>Subscribe to our newsletter</h2>
            <p className='my-4 px-2 text-center'>Ipsum dolor sit amet consectetur commodo aliquam augue
            duis aliquet ipsum donec tempus ac interdum enim.</p>
            <div className='flex flex-row mx-auto mt-5 justify-around items-center bg-white w-full lg:w-80 h-12 rounded-full'>
                <input type="email" id="email" class="border-0 rounded-full h-12 text-black" placeholder="Enter your email" required></input>
                <button className='flex flex-row gap-2 justify-between items-center bg-gray-800 hover:bg-red-950 w-26 lg:w-30 h-8 rounded-full px-5'>
                    <p>Subscribe</p>
                    <Image className='float-right' src="/webfonts/arrow-right-solid.svg" width="12" height="12" alt="arrow-right"/>
                </button>
            </div>
        </div>
        <Image className='mx-auto' src="/images/freepik__candid-image-photography-natural-textures-highly-r__74749 2.png" width="650" height="400" alt="doctors"/>

      </div>
);
}

export default newsletter2;