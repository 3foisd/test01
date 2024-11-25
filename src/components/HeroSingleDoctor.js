import Link from "next/link";
import Image from "next/Image";

function blog() {
    return (
        <div className="bg-indigo-950 rounded-xl flex flex-col lg:flex-row justify-around items-center gap-4 lg:py-5 text-white">
            <Image className="rounded-xl" src="/images/front-view-male-nurse-hospital (1).jpg" width="400" height="400" />
            <div className="lg:w-1/2 flex flex-col justify-start items-start gap-5 px-5 py-5">
                <h2 className="text-3xl lg:text-5xl w-full text-start">Dr. Soufiane Chebli</h2>
                <p className="w-full text-start font-light">Lorem ipsum dolor sit amet consectetur commodo aliquam
                    augue duis aliquet ipsum donec tempus ac interdum enim.</p>

                <div className="flex flex-row gap-4 lg:mx-0">
                    <Link href="/" className="hover:text-primary-600">
                    <Image src="/webfonts/facebook-f-brands-solid.svg" width="14" height="14" alt="arrow-right"/>
                    </Link>
                    <Image src="/webfonts/twitter-brands-solid.svg" width="20" height="20" alt="arrow-right"/>
                    <Image src="/webfonts/instagram-brands-solid.svg" width="20" height="20" alt="arrow-right"/>
                    <Image src="/webfonts/linkedin-in-brands-solid.svg" width="20" height="20" alt="arrow-right"/>
                </div>    
            </div>
        </div>

);
}

export default blog;