import Link from 'next/link'
import Image from "next/Image"

function TestimonialAnimation() {
    return (

        <div>
            <div className='flex flex-col lg:flex-row gap-5'>
                <div className='bg-gray-200 rounded-xl flex flex-col justify-around gap-5 lg:w-4/12 py-5 px-5'>
                    <h3 className='text-3xl'>"Life-saving advice!"</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Vestibulum est quis aliquam augue phasellus. Eleifend etiam urna amet.</p>
                    <div className='flex flex-row gap-5'>
                        <div className='bg-gray-500 rounded-full w-20 h-20'></div>
                        <div className='flex flex-col'>
                            <h3 className='text-2xl'>John Doe</h3>
                            <p>Bruxelles</p>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-200 rounded-xl flex flex-col justify-around gap-5 lg:w-4/12 py-5 px-5'>
                    <h3 className='text-3xl'>"Life-saving advice!"</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Vestibulum est quis aliquam augue phasellus. Eleifend etiam urna amet.</p>
                    <div className='flex flex-row gap-5'>
                        <div className='bg-gray-500 rounded-full w-20 h-20'></div>
                        <div className='flex flex-col'>
                            <h3 className='text-2xl'>John Doe</h3>
                            <p>Bruxelles</p>
                        </div>
                    </div>
                </div>

                <div className='bg-gray-200 rounded-xl flex flex-col justify-around gap-5 lg:w-4/12 py-5 px-5'>
                    <h3 className='text-3xl'>"Life-saving advice!"</h3>
                    <p>Lorem ipsum dolor sit amet consectetur. Vestibulum est quis aliquam augue phasellus. Eleifend etiam urna amet.</p>
                    <div className='flex flex-row gap-5'>
                        <div className='bg-gray-500 rounded-full w-20 h-20'></div>
                        <div className='flex flex-col'>
                            <h3 className='text-2xl'>John Doe</h3>
                            <p>Bruxelles</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-row gap-4 justify-center mt-5">
                <button className="flex flex-row justify-around items-center bg-indigo-950 hover:bg-red-950 w-52 h-12 rounded-full text-white">
                    <Image src="/webfonts/bell-regular white.svg" width="24" height="24" alt="map"/>
                    <Link href="">Find out more</Link>
                </button>
                <button className="justify-around items-center bg-indigo-950 hover:bg-red-950 w-12 h-12 rounded-full hidden lg:block">
                    <Image className="mx-auto" src="/webfonts/arrow-right-solid.svg" width="20" height="20" alt="arrow-right"/>
                </button>
            </div>
        </div>

);
}

export default TestimonialAnimation;