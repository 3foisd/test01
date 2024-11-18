import Link from "next/link";
import Image from "next/Image";

function contact() {
    return (
        <div className="mb-32">
            <h2 className="text-4xl mx-auto text-center w-full lg:w-5/12 mb-12">The values that inspire our every decision</h2>
            <div className="flex flex-col lg:flex-row gap-4">
                <div className="bg-gray-200 rounded-[20px] py-10 px-5 w-full lg:w-4/12 mb-5">
                    <Image className="pb-16" src="/webfonts/circle-check-regular.svg" width="50" height="50" alt="arrow-right"/>
                    <h2 className="text-3xl mb-3">Integrity and trust</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer.</p>
                </div>

                <div className="bg-gray-200 rounded-[20px] py-10 px-5 w-full lg:w-4/12 mb-5">
                    <Image className="pb-16" src="/webfonts/circle-check-regular.svg" width="50" height="50" alt="arrow-right"/>
                    <h2 className="text-3xl mb-3">Integrity and trust</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer.</p>
                </div>

                <div className="bg-gray-200 rounded-[20px] py-10 px-5 w-full lg:w-4/12 mb-5">
                    <Image className="pb-16" src="/webfonts/circle-check-regular.svg" width="50" height="50" alt="arrow-right"/>
                    <h2 className="text-3xl mb-3">Integrity and trust</h2>
                    <p>Lorem ipsum dolor sit amet consectetur
                    quisque faucibus dolor tortor porta sit
                    tempor purus proin sapien docer.</p>
                </div>

            </div>
        </div>

);
}

export default contact;