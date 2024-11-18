import Link from "next/link";
import Image from "next/Image";

function contact() {
    return (
        <div>

            <div className="px-5 w-full lg:w-4/12 mb-16">
                <Link href="/">
                    <Image className="pb-5" src="/images/002_First_Aid_Kit.png" width="125" height="125" alt="arrow-right"/>
                </Link>
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