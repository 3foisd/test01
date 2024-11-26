import Link from 'next/link'
import Image from "next/Image"

function header() {
    return (
<header>
    <nav class="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div class="flex flex-row justify-between items-center mx-auto max-w-screen-xl">
            <div className='flex flex-col lg:flex-row gap-20'>
            <Link href="/" class="flex items-center">
                <Image src="images/logo-black.svg" width="150" height="150" alt="Novamed Logo" />
            </Link>

            <div class="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                <ul class="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="/" class="text-black hover:text-red-950 active:bg-red-950" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="/about" class="text-black hover:text-red-950 active:bg-red-950">About</a>
                    </li>
                    <li>
                        <a href="/services" class="text-black hover:text-red-950 active:bg-red-950">Services</a>
                    </li>
                    <li>
                        <a href="#" class="text-black hover:text-red-950 active:bg-red-950">Doctors</a>
                    </li>
                    <li>
                        <a href="#" class="text-black hover:text-red-950 active:bg-red-950">Blog</a>
                    </li>
                    <li>
                        <a href="#" class="text-black hover:text-red-950 active:bg-red-950">Contact</a>
                    </li>
                </ul>
            </div>
            </div>

            <div class="flex gap-4 items-center">
                <button className="flex flex-row justify-around items-center bg-indigo-950 hover:bg-red-950 w-64 h-12 rounded-full text-white">
                  <Image src="/webfonts/bell-regular white.svg" width="24" height="24" alt="map"/>
                  <Link href="">Schedule an appointment</Link>
                </button>

                <button className="justify-around items-center bg-indigo-950 hover:bg-red-950 w-12 h-12 rounded-full hidden lg:block">
                <Image className="mx-auto" src="/webfonts/arrow-right-solid.svg" width="20" height="20" alt="arrow-right"/>
                </button>

                <button data-collapse-toggle="mobile-menu-2" type="button" class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
                    <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>

        </div>
    </nav>
</header>
  );
}

export default header;