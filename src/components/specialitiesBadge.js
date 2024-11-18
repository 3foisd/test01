import Link from "next/link";
import Image from "next/Image";

function contact() {
    return (
        <div>

            <div className="px-5 w-full lg:w-4/12 mb-16">
                <div className="bg-gray-200 rounded-full w-4/12 h-4/12 py-9">
                    <Link href="/">
                        <Image className="mx-auto" src="/webfonts/clipboard-list-solid.svg" width="35" height="35" alt="arrow-right"/>
                    </Link>
                </div>
                
                <Link href="/">
                    <h2 className="text-3xl mb-3">General Medecine</h2>
                </Link> 
                <p>Lorem ipsum dolor sit amet consectetur
                quisque faucibus dolor tortor porta sit
                tempor purus proin sapien docer.</p>
            </div>

        </div>

);
}

export default contact;