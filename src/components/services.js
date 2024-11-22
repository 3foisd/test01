import Link from "next/link";
import Image from "next/Image";

function Services() {
    return (
        <div>

            <div className="flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-5/12">
                    <p className="text-red-950">Our services</p>
                    <h2 className="text-3xl lg:text-4xl">Expert solutions for every step of your journey</h2>
                </div>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 mt-10'>
                <button className="flex flex-row justify-around items-center bg-gray-200 w-52 h-12 rounded-full text-black">
                    <Image src="/webfonts/map-marker-alt-solid-black.svg" width="24" height="24" alt="bell"/>
                    <Link href="https://maps.app.goo.gl/ySeLZxxQAuZouH3o8" target="_blank">Browse all services</Link>
                </button>
                <button className="hidden lg:flex flex-row justify-around items-center bg-gray-200 w-12 h-12 rounded-full">
                    <Link href="/"><Image src="/webfonts/arrow-right-solid-black.svg" width="24" height="24" alt="bell"/></Link>
                </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row mt-10">
                <div className="px-5 w-full lg:w-4/12 mb-16">
                    <Link href="/">
                        <Image className="pb-5" src="/images/002_First_Aid_Kit.png" width="125" height="125" alt="arrow-right"/>
                    </Link>
                    <Link href="/">
                        <h2 className="text-3xl mb-3">General Medecine</h2>
                    </Link> 
                    <p>Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer.</p>
                </div>

                <div className="px-5 w-full lg:w-4/12 mb-16">
                    <Link href="/">
                        <Image className="pb-5" src="/images/002_First_Aid_Kit.png" width="125" height="125" alt="arrow-right"/>
                    </Link>
                    <Link href="/">
                        <h2 className="text-3xl mb-3">General Medecine</h2>
                    </Link> 
                    <p>Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer.</p>
                </div>

                <div className="bg-red-950 rounded-[20px] text-white py-10 px-5 w-full lg:w-4/12 mb-5">
                    <h2 className="text-3xl mb-5">Schedule your appointment today!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer.</p>
                    <div className="flex flex-row gap-4 mt-6">
                        <button className="flex flex-row justify-around items-center bg-white w-64 h-12 rounded-full text-black">
                            <Image src="/webfonts/bell-regular.svg" width="24" height="24" alt="map"/>
                            <Link href="">Schedule an appointment</Link>
                        </button>
                    </div>
                </div>
            </div>

        </div>

);
}

export default Services;