import Link from 'next/link'
import Image from "next/Image"

function CTA4() {
    return (
        <div className='bg-blu-200 rounded-xl flex flex-col justify-around lg:flex-row gap-5 py-10 px-5'>
            <div className='flex flex-col lg:flex-row gap-3 w-full lg:w-1/3 justify-center'>
                <Link href="/" className='bg-blu-200 rounded-full w-16 lg:w-20 h-16'>
                    <Image className='mx-auto mt-5' src="/webfonts/map-marker-alt-solid-black.svg" width="20" height="20"/>
                </Link>
                <div className='flex flex-col gap-2'>
                    <h3 className='text-2xl'>Visit us</h3>
                    <p>Avenue Houba de Strooper 101, 1020 Laeken, Bruxelles</p>
                    <Link className='flex flex-row gap-3 text-indigo-950' href="https://maps.app.goo.gl/ySeLZxxQAuZouH3o8" target="_blank">Open on Google Maps <Image src="/webfonts/arrow-right-solid-black.svg" width="15" height="15"/></Link>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center gap-3 w-full lg:w-1/3'>
                <Link href="/" className='bg-blu-200 rounded-full w-16 h-16'>
                    <Image className='mx-auto mt-5' src="/webfonts/clock-regular.svg" width="25" height="25"/>
                </Link>
                <div>
                <h3 className='text-2xl'>Opening hours</h3>
                <p>Mon - Fri: 08:00 am to 05:00 pm</p>
                <p>Saturday: 09:00am to 12:00 pm</p>
                </div>
            </div>

            <div className='flex flex-col lg:flex-row justify-center gap-3 w-full lg:w-1/3'>
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
        );
    }
    
    export default CTA4;