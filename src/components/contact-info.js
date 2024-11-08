import Link from "next/link";
import Image from "next/Image";

function Contact() {
    return (
      <div>
        <div>
        <h2 className="mx-auto rounded-lg text-center pt-4 bg-indigo-950 w-72 h-16 text-white font-[900] text-2xl">Bientôt <font color='#EE0000'>disponible</font></h2>
        <p className="text-center px-4 my-12 text-2xl mx-auto text-center">Notre site est en cours de construction.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 font-[900]">
          <div className="flex flex-col gap-4 items-center justify-center text-center px-8 mx-auto w-72 lg:w-3/12 h-72 bg-indigo-950 rounded-lg">
            <Image src="/webfonts/phone-alt-solid.svg" width="24" height="24" alt="phone"/>
            <Link href="tel:+32484990154" className="text-white hover:text-primary-600">+32484990154</Link>
          </div>  
          <div className="flex flex-col gap-4 items-center justify-center text-center px-8 mx-auto w-72 lg:w-3/12 h-72 bg-indigo-950 rounded-lg">
            <Image src="/webfonts/map-marker-alt-solid.svg" width="24" height="24" alt="map"/>
            <Link href="https://maps.app.goo.gl/Syji96gp16iBVE3DA" className="text-white hover:text-primary-600">Avenue houba de strooper 101, 1020 Laeken, Bruxelles</Link>
          </div>
          <div className="flex flex-col gap-4 items-center justify-center text-center px-8 mx-auto w-72 lg:w-3/12 h-72 bg-indigo-950 rounded-lg">
            <Image src="/webfonts/envelope-solid.svg" width="24" height="24" alt="mail"/>
            <Link href="mailto:accueil@novamed.be" className="text-white hover:text-primary-600">accueil@novamed.be</Link>
          </div>
        </div>
        {/* <div className="flex flex-row align-center justify-end m-16">
            <a href="/services" className="pt-3 pr-3">Services</a>
            <img src="/webfonts/angle-right-solid.svg" width="24" height="24" alt="mail"></img>
        </div> */}
      </div>
        );
    }
    
    export default Contact;