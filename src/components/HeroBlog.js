import Link from "next/link";
import Image from "next/Image";

function HeroBlog() {
    return (
        <div className="bg-indigo-950 rounded-xl flex flex-col items-center gap-4 text-white p-2 py-10 lg:p-20">
            <h2 className="text-3xl lg:text-5xl w-full lg:w-2/3 text-center">News and articles</h2>
            <p className="w-full lg:w-1/2 text-center font-light">Lorem ipsum dolor sit amet consectetur commodo aliquam
            augue duis aliquet ipsum donec tempus ac interdum enim.</p>
        </div>

);
}

export default HeroBlog;