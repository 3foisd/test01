import Link from 'next/link'
import Image from "next/Image"

function CTA5() {
    return (
        <div className='bg-blu-200 rounded-xl flex flex-col lg:flex-row gap-5 justify-between'>
            <div className='flex flex-col justify-between w-full lg:w-1/2 gap-5 py-10 px-5'>
                <div className='flex flex-col lg:flex-row gap-3 w-full justify-center'>
                    <Link href="/" className='bg-blu-200 rounded-full w-16 h-16'>
                        <Image className='mx-auto mt-5' src="/webfonts/map-marker-alt-solid-black.svg" width="20" height="20"/>
                    </Link>
                    <div className='flex flex-col gap-2'>
                        <h3 className='text-2xl'>Visit us</h3>
                        <p>Avenue Houba de Strooper 101, 1020 Laeken, Bruxelles</p>
                        <Link className='flex flex-row gap-3 text-indigo-950' href="https://maps.app.goo.gl/ySeLZxxQAuZouH3o8" target="_blank">Open on Google Maps <Image src="/webfonts/arrow-right-solid-black.svg" width="15" height="15"/></Link>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-start gap-3 w-full'>
                    <Link href="/" className='bg-blu-200 rounded-full w-16 h-16'>
                        <Image className='mx-auto mt-5' src="/webfonts/clock-regular.svg" width="25" height="25"/>
                    </Link>
                    <div>
                    <h3 className='text-2xl'>Opening hours</h3>
                    <p>Mon - Fri: 08:00 am to 05:00 pm</p>
                    <p>Saturday: 09:00am to 12:00 pm</p>
                    </div>
                </div>

                <div className='flex flex-col lg:flex-row justify-start gap-3 w-full'>
                    <Link href="/" className='bg-blu-200 rounded-full w-16 h-16'>
                        <Image className='mx-auto mt-5' src="/webfonts/phone-alt-solid-black.svg" width="20" height="20"/>
                    </Link>
                    <div>
                        <h3 className='text-2xl'>Contact us</h3>
                        <p>+32 484 990 154</p>
                        <Link className='text-indigo-950' href="mailto:accueil@novamed.be">accueil@novamed.be</Link>
                    </div>
                </div>
            </div>

            <section class="bg-blu-200 rounded-xl w-full lg:w-2/3">
                <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <form action="#" className="flex flex-wrap items-center space-y-8">
                        <div className="w-full lg:w-1/2 mt-8">
                            <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Name</label>
                            <input type="text" id="name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full lg:w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="john doe" required></input>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full lg:w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label for="phone number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number</label>
                            <input type="text" id="phone number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full lg:w-5/6 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="+32" required></input>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
                            <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 w-full lg:w-5/6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label for="date" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date</label>
                            <input type="text" id="date" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 w-full lg:w-5/6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Preferred Date" required></input>
                        </div>
                        <div className="w-full lg:w-1/2">
                            <label for="time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Time</label>
                            <input type="text" id="time" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 w-full lg:w-5/6 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Preferred time" required></input>
                        </div>
                        <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-indigo-950 sm:w-fit hover:bg-red-950 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                    </form>
                </div>
            </section>
        </div>
        );
    }
    
    export default CTA5;