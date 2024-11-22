import Link from "next/link";
import Image from "next/Image";

function contact() {
    return (
        <div>

            <div className="flex flex-col lg:flex-row justify-between mb-5">
                <h2 className="text-4xl">Meet our team</h2>
                <div className="flex flex-row gap-4 mt-5">
                    <button className="flex flex-row justify-around items-center bg-indigo-950 w-52 h-12 rounded-full text-white">
                        <Image src="/webfonts/bell-regular white.svg" width="24" height="24" alt="map"/>
                        <Link href="">See all doctors</Link>
                    </button>
                    <button className="justify-around items-center bg-indigo-950 w-12 h-12 rounded-full hidden lg:block">
                        <Image className="mx-auto" src="/webfonts/arrow-right-solid.svg" width="20" height="20" alt="arrow-right"/>
                    </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row gap-4">
                <div className="w-full lg:w-4/12 mb-16">
                    <Link href="/"><Image className="rounded-[20px] mb-5" src="/images/front-view-male-nurse-hospital (1).jpg" width="500" height="500" alt="mail"/></Link> 
                    <p className="text-xl">Cardiologist</p>
                    <Link href="/"><h2 className="text-4xl">Dr. Soufiane Chebli</h2></Link> 
                    <div className="flex flex-row gap-4 mx-auto lg:mx-0 mt-4">
                        <Link href="/" className="hover:text-primary-600">
                        <Image src="/webfonts/facebook-f-brands-solid-black.svg" width="14" height="14" alt="arrow-right"/>
                        </Link>
                        <Image src="/webfonts/twitter-brands-solid-black.svg" width="20" height="20" alt="arrow-right"/>
                        <Image src="/webfonts/instagram-brands-solid-black.svg" width="20" height="20" alt="arrow-right"/>
                        <Image src="/webfonts/linkedin-in-brands-solid-black.svg" width="20" height="20" alt="arrow-right"/>
                    </div>
                </div>

                <div className="w-full lg:w-4/12 mb-16">
                    <Link href="/"><Image className="rounded-[20px] mb-5" src="/images/front-view-male-nurse-hospital (1).jpg" width="500" height="500" alt="mail"/></Link> 
                    <p className="text-xl">Cardiologist</p>
                    <Link href="/"><h2 className="text-4xl">Dr. Soufiane Chebli</h2></Link> 
                    <div className="flex flex-row gap-4 mx-auto lg:mx-0 mt-4">
                        <Link href="/" className="hover:text-primary-600">
                        <Image src="/webfonts/facebook-f-brands-solid-black.svg" width="14" height="14" alt="arrow-right"/>
                        </Link>
                        <Image src="/webfonts/twitter-brands-solid-black.svg" width="20" height="20" alt="arrow-right"/>
                        <Image src="/webfonts/instagram-brands-solid-black.svg" width="20" height="20" alt="arrow-right"/>
                        <Image src="/webfonts/linkedin-in-brands-solid-black.svg" width="20" height="20" alt="arrow-right"/>
                    </div>
                </div>

                <div className="w-full lg:w-4/12 mb-16">
                    <Link href="/"><Image className="rounded-[20px] mb-5" src="/images/front-view-male-nurse-hospital (1).jpg" width="500" height="500" alt="mail"/></Link> 
                    <p className="text-xl">Cardiologist</p>
                    <Link href="/"><h2 className="text-4xl">Dr. Soufiane Chebli</h2></Link> 
                    <div className="flex flex-row gap-4 mx-auto lg:mx-0 mt-4">
                        <Link href="/" className="hover:text-primary-600">
                        <Image src="/webfonts/facebook-f-brands-solid-black.svg" width="14" height="14" alt="arrow-right"/>
                        </Link>
                        <Image src="/webfonts/twitter-brands-solid-black.svg" width="20" height="20" alt="arrow-right"/>
                        <Image src="/webfonts/instagram-brands-solid-black.svg" width="20" height="20" alt="arrow-right"/>
                        <Image src="/webfonts/linkedin-in-brands-solid-black.svg" width="20" height="20" alt="arrow-right"/>
                    </div>
                </div>

            </div>

        </div>

);
}

export default contact;