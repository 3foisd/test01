import Link from "next/link";
import Image from "next/Image"

function contact() {
    return (
      <div className="">
                    <div className="d-flex flex-column justify-content-center"> 
                        <h2 className="dispo mx-auto rounded-lg text-center pt-4 bg-indigo-950 w-72 h-16 text-white font-[900] text-2xl">Bientôt <font color='#EE0000'>disponible</font></h2>
                        <p className="text-center px-4 my-12 text-2xl mx-auto text-center">Notre site est en cours de construction.</p>

                        <div className="mx-auto my-12 d-flex icons mx-auto text-center flex-column justify-content-center">
                            <Image  className=" mx-auto my-3" src="/webfonts/phone-alt-solid.svg" width="24" height="24" alt="phone"/>
                            <Link href="tel:+32484990154" className="hover:text-primary-600">+32484990154</Link>
                        </div>
                        <div className="mx-auto my-12 text-center icons mx-auto text-center px-4 d-flex flex-column justify-content-center">
                            <Image className="mx-auto my-3" src="/webfonts/map-marker-alt-solid.svg" width="24" height="24" alt="map"/>
                            <Link href="https://maps.app.goo.gl/Syji96gp16iBVE3DA" className="hover:text-primary-600">Avenue houba de strooper 101, 1020 Laeken, Bruxelles</Link>
                        </div>
                        <div className="mx-auto icons mx-auto text-center d-flex flex-column justify-content-center">
                            <Image className="mx-auto my-3" src="/webfonts/envelope-solid.svg" width="24" height="24" alt="mail"/>
                            <Link href="mailto:accueil@novamed.be" className="hover:text-primary-600">accueil@novamed.be</Link>
                        </div>
                        {/* <div className="flex flex-row align-center justify-end m-16">
                            <a href="/contact" className="pt-3 pr-3">Contacts</a>
                            <img src="/webfonts/angle-right-solid.svg" width="24" height="24" alt="mail"></img>
                        </div> */}
                    </div>	
      </div>
  );
}

export default contact;