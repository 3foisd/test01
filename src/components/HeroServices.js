import Link from "next/link";
import Image from "next/Image";

function HeroServices({title, description}) {
    return (

        <div className="bg-indigo-950 rounded-xl relative flex flex-col lg:flex-row items-center gap-5 px-10 py-10">
            <div className="flex flex-col gap-5 w-full lg:w-2/3 lg:pr-20 text-white">
                <Link href="/ServicesSingle">
                    <Image src="/webfonts/heart-pulse-solid-white.svg" width="75" height="75" alt="heart-pulse"/>
                </Link>    
                <h2 className="text-2xl lg:text-5xl font-bold">{title}</h2>
                <p className="">{description}</p>
                <div className="flex flex-row gap-3">
                    <Image src="/webfonts/circle-check-regular-white.svg" width="20" height="20"/>
                    <p>3 appointment per month</p>
                </div>
                <div className="flex flex-row gap-3">
                    <Image src="/webfonts/circle-check-regular-white.svg" width="20" height="20"/>
                    <p>6 medical services</p>
                </div>
                <div className="flex flex-row gap-3">
                    <Image src="/webfonts/circle-check-regular-white.svg" width="20" height="20"/>
                    <p>Appointments available 24/7</p>
                </div>
            </div>

            <section class="bg-gray-200 rounded-xl lg:absolute top-10 right-10 w-full lg:w-1/3">
                <div class="py-8 lg:py-16 px-5">
                    <form action="#" className="flex flex-col justify-start items-start gap-8">
                        <h2 className="text-2xl">Schedule an appointment</h2>
                        <p>Litum ipsum dolor sit amet consectetur commodo aliquam augue duis.</p>
                        <div className="w-full">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full lg:w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="john doe" required></input>
                        </div>
                        <div className="w-full">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full lg:w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
                        </div>
                        <div className="w-full">
                            <label for="phone number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                            <input type="text" id="phone number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full lg:w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+32" required></input>
                        </div>
                        
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-full bg-indigo-950 sm:w-fit hover:bg-red-950 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                </div>
            </section>
        </div>

);
}
    
    export default HeroServices;