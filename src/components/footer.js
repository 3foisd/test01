import Link from "next/link";
import Image from "next/Image";

function footer() {
    return (
      <div>

        <footer className="flex flex-col justify-evenly bg-indigo-950 min-h-fit lg:h-screen rounded-t-xl px-10 mx-5">
            <div className="flex flex-col lg:flex-row justify-around">
              <div className="flex flex-col mb-10 lg:mb-0 pr-0 lg:pr-10 gap-4 lg:w-3/12 mx-auto text-center lg:text-left">
                <Image className="mx-auto lg:mx-0" width="200" height="200" src="/images/logo.svg" alt="iconic"/>
                <p className="text-lg">Ipsum dolor sit amet litum dolor
                consectetur aliquam augue.</p>
              </div>
              <div className="flex flex-col gap-4 w-full lg:w-3/12 mx-auto text-center lg:text-left mb-10 lg:mb-0">
                <h2 className="font-black text-2xl">Pages</h2>
                <Link className="hover:text-primary-600" href="">Home</Link>
                <Link className="hover:text-primary-600" href="">About</Link>
                <Link className="hover:text-primary-600" href="">Services</Link>
                <Link className="hover:text-primary-600" href="">Doctors</Link>
                <Link className="hover:text-primary-600" href="">Blog</Link>
                <Link className="hover:text-primary-600" href="">Testimonials</Link>
              </div>
              <div className="flex flex-col gap-4 w-full lg:w-3/12 mx-auto text-center lg:text-left mb-10 lg:mb-0">
                <h2 className="font-black text-2xl">Pages</h2>
                <Link className="hover:text-primary-600" href="">FAQ</Link>
                <Link className="hover:text-primary-600" href="">Privacy Policy</Link>
                <Link className="hover:text-primary-600" href="">Terms and conditions</Link>
              </div>
              <div className="flex flex-col gap-4 w-full lg:w-3/12 mx-auto text-center lg:text-left mb-10 lg:mb-0">
                <h2 className="font-black text-2xl">Contact us</h2>
                <div className="flex flex-row gap-10">
                  <Image src="/webfonts/map-marker-alt-solid-white.svg" width="16" height="16" alt="map"/>
                  <Link href="https://maps.app.goo.gl/ySeLZxxQAuZouH3o8" target="_blank" className="text-white text-left hover:text-primary-600">Avenue houba de strooper 101, 1020 Laeken, Bruxelles</Link>
                </div>
                <div className="flex flex-row gap-10">
                  <Image src="/webfonts/envelope-solid-white.svg" width="16" height="16" alt="mail"/>
                  <Link href="mailto:accueil@novamed.be" className="text-white hover:text-primary-600">contact@novamed.be</Link>
                </div>
                <div className="flex flex-row gap-10">
                  <Image src="/webfonts/phone-alt-solid white.svg" width="16" height="16" alt="mail"/>
                  <Link href="tel:+32484990154" className="text-white hover:text-primary-600">+32484990154</Link>
                </div>
              </div>
            </div>

            <div className="bg-white w-full h-px"/>


            <div className="flex flex-col lg:flex-row items-end justify-between gap-10 lg:gap-0 py-10 lg:py-0">
              <h2 className="text-2xl lg:text-6xl w-full lg:w-6/12 text-center lg:text-left">Your Journey to Wellness Starts Here</h2>
              <div className="flex flex-row gap-4">
                <button className="flex flex-row justify-around items-center bg-white w-64 h-12 rounded-full text-black">
                  <Image src="/webfonts/bell-regular.svg" width="24" height="24" alt="map"/>
                  <Link href="">Schedule an appointment</Link>
                </button>
                <button className="justify-around items-center bg-white w-12 h-12 rounded-full hidden lg:block">
                <Image className="mx-auto" src="/webfonts/arrow-right-solid-black.svg" width="20" height="20" alt="arrow-right"/>
                </button>
              </div>
            </div>

            <div className="bg-white w-full h-px"/>

            <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between py-10 lg:py-0 mb-10 text-center lg:text-left">
              <p>Copyright © Pixl | Designed by Napster</p>
              <div className="flex flex-row gap-4 mx-auto lg:mx-0">
                <Link href="/" className="hover:text-primary-600">
                  <Image src="/webfonts/facebook-f-brands-solid.svg" width="14" height="14" alt="arrow-right"/>
                </Link>
                <Image src="/webfonts/twitter-brands-solid.svg" width="20" height="20" alt="arrow-right"/>
                <Image src="/webfonts/instagram-brands-solid.svg" width="20" height="20" alt="arrow-right"/>
                <Image src="/webfonts/linkedin-in-brands-solid.svg" width="20" height="20" alt="arrow-right"/>
              </div>
            </div>
        </footer>

      </div>

);
}

export default footer;