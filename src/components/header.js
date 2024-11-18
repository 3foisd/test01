import Link from 'next/link'
import Image from "next/Image"

function header() {
    return (
      <div className="App">
           <header className='flex flex-row justify-between px-10 py-10'>
		        <div className='flex flex-row gap-10'>
              <Image src="/images/logo-black.svg" width="150" height="150" />
              <div className='flex flex-row pt-2 gap-10 pl-5'>
                <Link href="/" className='text-black'>Home</Link>
                <Link href="/" className='text-black'>About</Link>
                <Link href="/" className='text-black'>Services</Link>
                <Link href="/" className='text-black'>Doctors</Link>
                <Link href="/" className='text-black'>Blog</Link>
              </div>
            </div>
            <button className="flex flex-row justify-around items-center bg-indigo-950 w-60 h-12 rounded-full text-white">
              <Image src="/webfonts/bell-regular-white.svg" width="24" height="24" alt="bell"/>
              <Link href="">Book an appointment</Link>
            </button>
	        </header>
      </div>
  );
}

export default header;