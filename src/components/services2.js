import Link from "next/link";
import Image from "next/Image";

function Services2({title, description}) {
    return (
        <div>

            <div className="flex flex-col lg:flex-row justify-between">
                <h2 className="w-full lg:w-5/12 text-3xl lg:text-4xl">Discover our wide range of specialities</h2>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 mt-10'>
                <button className="flex flex-row justify-around items-center bg-gray-200 hover:bg-indigo-950 hover:text-white w-52 h-12 rounded-full text-black">
                    <Image src="/webfonts/map-marker-alt-solid-black.svg" width="24" height="24" alt="map"/>
                    <Link href="https://maps.app.goo.gl/ySeLZxxQAuZouH3o8" target="_blank">Browse all services</Link>
                </button>
                <button className="hidden lg:flex flex-row justify-around items-center bg-gray-200 hover:bg-indigo-950 w-12 h-12 rounded-full">
                    <Link href="/"><Image src="/webfonts/arrow-right-solid-black.svg" width="24" height="24" alt="arrow-right"/></Link>
                </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row mt-5 gap-4">
                <div className="hover:bg-red-950 rounded-xl hover:text-white px-5 w-full lg:w-4/12 flex flex-col py-5 justify-center">
                    <div className="bg-gray-200 rounded-full w-24 h-24">
                        <Link href="/">
                            <Image className="mx-auto mt-6" src="/webfonts/clipboard-list-solid.svg" width="35" height="35" alt="clipboard"/>
                        </Link>
                    </div>
                    
                    <Link href="/">
                        <h2 className="text-3xl mb-3">{title}</h2>
                    </Link> 
                    <p>{description}</p>
                </div>

                <div className="hover:bg-red-950 rounded-xl hover:text-white px-5 py-5 w-full lg:w-4/12 flex flex-col justify-center">
                    <div className="bg-gray-200 rounded-full w-24 h-24">
                        <Link href="/">
                            <Image className="mx-auto mt-6" src="/webfonts/clipboard-list-solid.svg" width="35" height="35" alt="clipboard"/>
                        </Link>
                    </div>
                    
                    <Link href="/">
                        <h2 className="text-3xl mb-3">General Medecine</h2>
                    </Link> 
                    <p>Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer.</p>
                </div>

                <div className="hover:bg-red-950 rounded-xl hover:text-white py-5 px-5 w-full lg:w-4/12 flex flex-col justify-center">
                    <div className="bg-gray-200 rounded-full w-24 h-24">
                        <Link href="/">
                            <Image className="mx-auto mt-6" src="/webfonts/clipboard-list-solid.svg" width="35" height="35" alt="clipboard"/>
                        </Link>
                    </div>
                    
                    <Link href="/">
                        <h2 className="text-3xl mb-3">General Medecine</h2>
                    </Link> 
                    <p>Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer.</p>
                </div>
            </div>

        </div>

);
}

export default Services2;