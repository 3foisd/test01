import Link from "next/link";
import Image from "next/Image";

function CTA1({ title, description}) {
    return (

        <div>

            <div className="flex flex-col lg:flex-row gap-5"> 
                <Image className="rounded-xl mx-auto lg:mx-0" width="700" height="700" src="/images/Professional Medical Consultation.jpeg" alt="iconic"/>
                <div className="flex flex-col justify-center px-5 py-10 lg:py-16 lg:px-16 gap-5 bg-blu-200 rounded-xl">
                    <p className="text-red-950">About us</p>
                    <h2 className="text-2xl lg:text-4xl mb-5 text-left">{title}</h2>
                    <p>{description}</p>
                   
                    <div className="flex flex-row gap-4">
                        <button className="flex flex-row justify-around items-center bg-indigo-950 hover:bg-red-950 w-56 h-12 rounded-full text-white">
                            <Image src="/webfonts/bell-regular white.svg" width="24" height="24" alt="bell"/>
                            <Link href="">Learn more about us</Link>
                        </button>
                        <button className="justify-around items-center bg-indigo-950 hover:bg-red-950 w-12 h-12 rounded-full hidden lg:block">
                            <Image className="mx-auto" src="/webfonts/arrow-right-solid.svg" width="20" height="20" alt="arrow-right"/>
                        </button>
                    </div>
                </div>
            </div>


        </div>

);
}

export default CTA1;