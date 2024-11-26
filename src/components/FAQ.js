import Link from "next/link";
import Image from "next/Image";

function blog() {
    return (
        
        <div className="flex flex-col justify-center items-center gap-3">
            <h2 className="text-2xl lg:text-5xl">Frequently asked questions</h2>
            <p className="w-full lg:w-1/2 text-center mb-5">Litum ipsum dolor sit amet consectetur commodo aliquam augue
            duis aliquet ipsum donec tempus ac interdum enim.</p>

            <div className="flex flex-col lg:flex-row justify-around items-center gap-5 lg:gap-0 bg-gray-200 rounded-xl w-full lg:w-2/3 px-5 lg:px-0 py-5">
                <h3 className="text-xl lg:text-2xl">How can I book an appointment with a
                specialist?</h3>
                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="bg-black rounded-full w-16 h-16">
                    <Image className="ml-5" src="/webfonts/plus-solid-white.svg" width="25" height="25" />
                </button>
            </div>

            <div className="flex flex-col lg:flex-row justify-around items-center gap-5 lg:gap-0 bg-gray-200 rounded-xl w-full lg:w-2/3 px-5 lg:px-0 py-5">
                <h3 className="text-xl lg:text-2xl">How can I book an appointment with a
                specialist?</h3>
                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="bg-black rounded-full w-16 h-16">
                    <Image className="ml-5" src="/webfonts/plus-solid-white.svg" width="25" height="25" />
                </button>
            </div>

            <div className="flex flex-col lg:flex-row justify-around items-center gap-5 lg:gap-0 bg-gray-200 rounded-xl w-full lg:w-2/3 px-5 lg:px-0 py-5">
                <h3 className="text-xl lg:text-2xl">How can I book an appointment with a
                specialist?</h3>
                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="bg-black rounded-full w-16 h-16">
                    <Image className="ml-5" src="/webfonts/plus-solid-white.svg" width="25" height="25" />
                </button>
            </div>

            <div className="flex flex-col lg:flex-row justify-around items-center gap-5 lg:gap-0 bg-gray-200 rounded-xl w-full lg:w-2/3 px-5 lg:px-0 py-5">
                <h3 className="text-xl lg:text-2xl">How can I book an appointment with a
                specialist?</h3>
                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="bg-black rounded-full w-16 h-16">
                    <Image className="ml-5" src="/webfonts/plus-solid-white.svg" width="25" height="25" />
                </button>
            </div>
        </div>
    );
}

export default blog;