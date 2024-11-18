import Link from "next/link";
import Image from "next/Image";

function contact() {
    return (

        <div>

            <div className="flex flex-col lg:flex-row my-24 gap-5"> 
                <Image className="rounded-[20px] mx-auto lg:mx-0" width="700" height="700" src="/images/Professional Medical Consultation.jpeg" alt="iconic"/>
                <div className="flex flex-col justify-center px-5 py-10 lg:py-16 lg:px-16 gap-5 bg-gray-200 rounded-[20px]">
                    <p className="text-red-950">About us</p>
                    <h2 className="text-2xl lg:text-4xl mb-5 text-left">Our caring doctors are here for you</h2>
                    <p>Ut enim ad minim veniam, quis nostrud exer ullamcoert
                    laboris nisi ut aliquip exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.</p>
                   
                    <div className="flex flex-row gap-4 mt-5">
                        <button className="flex flex-row justify-around items-center bg-indigo-950 w-56 h-12 rounded-full text-white">
                            <Image src="/webfonts/bell-regular white.svg" width="24" height="24" alt="bell"/>
                            <Link href="">Learn more about us</Link>
                        </button>
                        <button className="justify-around items-center bg-indigo-950 w-12 h-12 rounded-full hidden lg:block">
                            <Image className="mx-auto" src="/webfonts/arrow-right-solid.svg" width="20" height="20" alt="arrow-right"/>
                        </button>
                    </div>
                </div>
            </div>


        </div>

);
}

export default contact;