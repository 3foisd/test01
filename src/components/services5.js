import Link from 'next/link'
import Image from "next/Image"

function Services5() {
    return (

        <div>
            <div className="bg-gray-200 flex flex-col lg:flex-row gap-4 py-10 px-5">
                <div className="py-10 px-5 w-full lg:w-4/12">
                    <h2 className="text-3xl mb-5">Quality Care for you and the ones you love</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer.</p>
                    <div className="flex flex-row gap-4 mt-6">
                        <button className="flex flex-row justify-around items-center bg-indigo-950 hover:bg-red-950 w-64 h-12 rounded-full text-white">
                            <Image src="/webfonts/bell-regular white.svg" width="24" height="24" alt="map"/>
                            <Link href="">Schedule an appointment</Link>
                        </button>
                        <button className="justify-around items-center bg-indigo-950 hover:bg-red-950 w-12 h-12 rounded-full hidden lg:block">
                            <Image className="mx-auto" src="/webfonts/arrow-right-solid.svg" width="20" height="20" alt="arrow-right"/>
                        </button>
                    </div>
                </div>
                
                <div className="bg-white rounded-xl py-10 px-5 w-full lg:w-4/12">
                    <Image className="pb-16" src="/webfonts/heart-pulse-solid.svg" width="50" height="50" alt="arrow-right"/>
                    <h2 className="text-3xl mb-3">Cardiology</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer.</p>
                </div>

                <div className="bg-red-950 rounded-xl text-white py-10 px-5 w-full lg:w-4/12">
                    <h2 className="text-3xl mb-5">Schedule your appointment today!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer.</p>
                    <div className="flex flex-row gap-4 mt-6">
                        <button className="flex flex-row justify-around items-center bg-white hover:bg-indigo-950 hover:text-white w-64 h-12 rounded-full text-black">
                            <Image src="/webfonts/bell-regular.svg" width="24" height="24" alt="map"/>
                            <Link href="">Schedule an appointment</Link>
                        </button>
                    </div>
                </div>

            </div>
        </div>

);
}

export default Services5;