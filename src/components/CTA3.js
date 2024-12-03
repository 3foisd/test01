import Link from 'next/link'
import Image from "next/Image"

function CTA3() {
    return (

        <div className='bg-blu-200 rounded-xl gap-10 lg:gap-0 pl-10 py-10 flex flex-col lg:flex-row justify-between'>
            <div className='w-full lg:w-4/12'>
                <h2 className='text-2xl lg:text-5xl'>Let us take care of your health</h2>
                <p>Lorem ipsum dolor sit amet consectetur commodo aliquam augue duis aliquet ipsum donec tempus ac interdum enim.</p>
            </div>

            <div className='flex flex-col gap-2 pr-10 lg:pr-0 w-full lg:w-3/12'>
                <Link href="/" className='bg-blu-200 rounded-full w-16 h-16'>
                    <Image className='mx-auto mt-5' src="/webfonts/map-marker-alt-solid-black.svg" width="20" height="20"/>
                </Link>
                <h3 className='text-2xl'>Visit us</h3>
                <p>Avenue Houba de Strooper 101, 1020 Laeken, Bruxelles</p>
                <Link className='flex flex-row gap-3 text-indigo-950 hover:text-red-950' href="https://maps.app.goo.gl/ySeLZxxQAuZouH3o8" target="_blank">Open on Google Maps <Image src="/webfonts/arrow-right-solid-black.svg" width="15" height="15"/></Link>
                <div className="bg-black w-full h-px my-3"/>
                <p>Mon - Fri: 08:00 am to 05:00 pm</p>
                <p>Saturday: 09:00am to 12:00 pm</p>
            </div>

            <div className='flex flex-col gap-2 w-full lg:w-3/12 lg:pl-10'>
                <Link href="/" className='bg-blu-200 rounded-full w-16 h-16'>
                    <Image className='mx-auto mt-5' src="/webfonts/phone-alt-solid-black.svg" width="20" height="20"/>
                </Link>
                <h3 className='text-2xl'>Contact us</h3>
                <p>Phone number</p>
                <Link className='flex flex-row gap-3 text-indigo-950 hover:text-red-950' href="tel:+32484990154" target="_blank">+32484990154</Link>
                <div className="bg-black w-6/12 h-px my-3"/>
                <p>Email :</p>
                <Link className='text-indigo-950 hover:text-red-950' href="mailto:accueil@novamed.be">accueil@novamed.be</Link>
            </div>
        </div>

);
}

export default CTA3;