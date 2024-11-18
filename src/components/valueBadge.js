import Link from "next/link";
import Image from "next/Image";

function contact() {
    return (
        <div>

            <div className="bg-gray-200 rounded-[20px] py-10 px-5 w-full lg:w-4/12 mb-16">
                <Image className="pb-16" src="/webfonts/circle-check-regular.svg" width="50" height="50" alt="arrow-right"/>
                <h2 className="text-3xl mb-3">Integrity and trust</h2>
                <p>Lorem ipsum dolor sit amet consectetur
                quisque faucibus dolor tortor porta sit
                tempor purus proin sapien docer.</p>
            </div>

        </div>

);
}

export default contact;