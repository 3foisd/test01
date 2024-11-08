import React from 'react'
import Link from 'next/link'

function backbtn() {
    return (
      <div className="flex flex-row gap-4 justify-start mb-20">
        <img src="/webfonts/angle-left-solid.svg" width="24" height="24" alt="mail"></img>
        <Link href="/" className="pt-3 pr-3">Back</Link>
      </div>
    );
  }
  
  export default backbtn;