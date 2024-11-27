import Link from 'next/link'
import Image from "next/Image"

function HeroHome2() {
    return (

        <div className='flex flex-col lg:flex-row items-center bg-indigo-950 rounded-xl w-full px-5 pt-10'>
            <div className='flex flex-col gap-5 w-full lg:w-1/2 text-white'>
                <h1 className='text-3xl lg:text-6xl'>Your partner in Health and Wellness</h1>
                <p>Lorem ipsum dolor sit amet consectetur commodo aliquam
                augue duis aliquet ipsum donec tempus ac interdum enim.</p>

                <div className='flex flex-col lg:flex-row gap-4 lg:gap-10'>
                <button className="flex flex-row justify-around items-center bg-white hover:bg-red-950 hover:text-white w-36 h-12 rounded-full text-black">
                    <Image src="/webfonts/map-marker-alt-solid-black.svg" width="24" height="24" alt="bell"/>
                    <Link href="https://maps.app.goo.gl/ySeLZxxQAuZouH3o8" target="_blank">Our center</Link>
                </button>
                <button className="flex flex-row justify-around items-center hover:text-red-950 w-36 h-12 rounded-full">
                    <Image src="/webfonts/arrow-right-solid.svg" width="24" height="24" alt="bell"/>
                    <Link href="/">Learn more</Link>
                </button>
                </div>
            </div>
            <Image src="/images/freepik__candid-image-photography-natural-textures-highly-r__79106-removebg.png" width="700" height="700" alt="doctors" />
        </div>

);
}

export default HeroHome2;