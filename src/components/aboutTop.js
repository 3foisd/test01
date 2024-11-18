import Link from 'next/link'
import Image from "next/Image"

function header() {
    return (

        <div className='flex flex-col lg:flex-row justify-between items-center mb-32'>
            <Image className='rounded-[20px]' src="/images/freepik__candid-image-photography-natural-textures-highly-r__55151.jpg" width="500" height="500"/>
            <div className='flex flex-col w-full lg:w-5/12 lg:mr-20 py-5 lg:py-0'>
                <h2 className='text-2xl lg:text-5xl mb-3 lg:mb-0'>Pioneering the future of personalized healthcare</h2>
                <p>Lorem ipsum dolor sit amet consectetur commodo aliquam
                augue duis aliquet ipsum donec tempus ac interdum enim.</p>

                <div className="flex flex-row gap-4 mt-5">
                    <button className="flex flex-row justify-around items-center bg-indigo-950 w-32 h-12 rounded-full text-white">
                        <Image src="/webfonts/bell-regular-white.svg" width="24" height="24" alt="map"/>
                        <Link href="">Label</Link>
                    </button>
                    <button className="justify-around items-center bg-indigo-950 w-12 h-12 rounded-full hidden lg:block">
                        <Image className="mx-auto" src="/webfonts/arrow-right-solid-white.svg" width="20" height="20" alt="arrow-right"/>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default header;