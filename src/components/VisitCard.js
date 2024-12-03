import Link from 'next/link'
import Image from "next/Image"

function VisitCard() {
    return (
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col items-center'>
                <h1 className='text-3xl lg:text-5xl'>Visit our center</h1>
                <p>Litum ipsum dolor sit amet consectetur commodo aliquam augue
                duis aliquet ipsum donec tempus ac interdum enim.</p>
            </div>

            <div className='flex flex-col lg:flex-row gap-5'>
                <Image className='rounded-xl w-full lg:w-3/5' src="/images/no-people-empty-waiting-area-clinical-center-with-reception-desk-waiting-room-with-seats-start-checkup-visit-appointment-medical-examination-with-doctor-hospital-lobby.jpeg" width="600" height="600"/>
                <div className='bg-blu-200 rounded-xl flex flex-col justify-center gap-5 px-5 lg:px-20 py-5 w-full lg:w-2/5'>
                    <div>
                        <h2 className='text-2xl lg:text-4xl mb-5'>Bruxelles, Belgique</h2>
                        <p>Avenue Houba de Strooper 101, 1020 Laeken, Bruxelles</p>
                        <Link className='flex flex-row gap-3 text-indigo-950' href="https://maps.app.goo.gl/ySeLZxxQAuZouH3o8" target="_blank">Open on Google Maps <Image src="/webfonts/arrow-right-solid-black.svg" width="15" height="15"/></Link>
                    </div>
                    
                    <Link href="mailto:accueil@novamed.be" target="_blank" className='flex flex-row gap-4'>
                        <Image src="/webfonts/envelope-solid-black.svg" width="20" height="20"/>
                        <p>accueil@novamed.be</p>
                    </Link>

                    <Link href="tel:+32484990154" target="_blank" className='flex flex-row gap-4'>
                        <Image src="/webfonts/phone-alt-solid-black.svg" width="20" height="20"/>
                        <p>+32484990154</p>
                    </Link>
                    
                </div>
            </div>
        </div>

);
}

export default VisitCard;