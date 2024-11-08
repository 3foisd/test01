import React from 'react'
import Link from 'next/link'

function navbar() {
    return (
      <div className="flex flex-row gap-4 justify-center mb-20">
        <Link href={'/contact'} className='bg-black text-white p-2 rounded hover:text-primary-600'>
            <p>Contacts</p>
        </Link>
        <Link href={'/services'} className='bg-black text-white p-2 rounded hover:text-primary-600'>
            <p>Services</p>
        </Link>
        <Link href={'/about'} className='bg-black text-white p-2 rounded hover:text-primary-600'>
            <p>About</p>
        </Link>
      </div>
    );
  }
  
  export default navbar;