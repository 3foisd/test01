import Link from 'next/link'
import Image from "next/Image"

function HeroHome({title, description}) {
    return (

        <div className='flex flex-col lg:flex-row justify-between items-center'>
            <Image className='rounded-xl' src="/images/freepik__candid-image-photography-natural-textures-highly-r__55151.jpg" width="500" height="500" alt="doctors"/>
            <div className='flex flex-col gap-3 w-full lg:w-5/12 lg:mr-20 py-5 lg:py-0'>
                <h2 className='text-2xl lg:text-5xl'>{title}</h2>
                <p>{description}</p>

                <div className="flex flex-row gap-4">
                    <button className="flex flex-row justify-around items-center bg-indigo-950 hover:bg-red-950 w-32 h-12 rounded-full text-white">
                        <Image src="/webfonts/bell-regular white.svg" width="24" height="24" alt="map"/>
                        <Link href="">Label</Link>
                    </button>
                    <button className="justify-around items-center bg-indigo-950 hover:bg-red-950 w-12 h-12 rounded-full hidden lg:block">
                        <Image className="mx-auto" src="/webfonts/arrow-right-solid.svg" width="20" height="20" alt="arrow-right"/>
                    </button>
                </div>
            </div>
        </div>

    );
}

export default HeroHome;