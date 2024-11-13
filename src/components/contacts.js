import Link from "next/link";
import Image from "next/Image";

function contact() {
    return (
      <div className="mb-52">

        <div className="w-full lg:w-6/12 mx-auto text-center mb-10">
            <h2 className="text-4xl lg:text-6xl">Visit our center</h2>
            <p className="lg:px-10">Litum ipsum dolor sit amet consectetur commodo aliquam augue
            duis aliquet ipsum donec tempus ac interdum enim.</p>
        </div>

        <div className="flex flex-col lg:flex-row mt-24 gap-5"> 
            <Image className="rounded-[20px] mx-auto lg:mx-0" width="700" height="700" src="/images/no-people-empty-waiting-area-clinical-center-with-reception-desk-waiting-room-with-seats-start-checkup-visit-appointment-medical-examination-with-doctor-hospital-lobby.jpeg" alt="iconic"/>
            <div className="px-5 py-10 lg:py-0 lg:px-16 lg:pt-16 gap-5 bg-gray-200 rounded-[20px]">
                <h2 className="text-2xl lg:text-4xl mb-5 text-center lg:text-left">Bruxelles, Belgique</h2>
                <div className="flex flex-col gap-2 w-full lg:w-7/12 mb-6">
                  <p>Avenue houba de strooper 101, 1020 Laeken, Bruxelles</p>
                  <div className="flex flex-row gap-3">
                  <Link href="https://maps.appb.goo.gl/Syji96gp16iBVE3DA" className="text-indigo-950 font-bold text-left hover:text-primary-600">Open on Google Maps</Link>
                  <Image src="/webfonts/arrow-right-solid-black.svg" width="20" height="20" className="text-indigo-950 text-left hover:text-primary-600"/>
                  </div>
                </div>
                <div className="flex flex-row gap-5 mb-2">
                  <Image src="/webfonts/envelope-solid-black.svg" width="20" height="20" alt="mail"/>
                  <Link href="mailto:accueil@novamed.be" className="hover:text-primary-600">contact@novamed.be</Link>
                </div>
                <div className="flex flex-row gap-5">
                  <Image src="/webfonts/phone-alt-solid-black.svg" width="20" height="20" alt="mail"/>
                  <Link href="tel:+32484990154" className="hover:text-primary-600">+32484990154</Link>
                </div>
            </div>
        </div>

      </div>
);
}

export default contact;