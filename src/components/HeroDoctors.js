import Link from "next/link";
import Image from "next/Image";

function HeroDoctors({ title, description}) {
    return (
        <div className="bg-hero-pattern bg-cover rounded-xl flex flex-col items-center gap-4 text-white p-2 py-10 lg:p-20">
            <h2 className="text-3xl lg:text-5xl w-full lg:w-2/3 text-center">{title}</h2>
            <p className="w-full lg:w-1/2 text-center font-light">{description}</p>
        </div>

);
}

export default HeroDoctors;