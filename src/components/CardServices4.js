import Link from 'next/link'
import Image from "next/Image"

function CardServices4() {
    return (

        <div>
            <div className="bg-gray-200 hover:bg-red-950 hover:text-white rounded-xl py-10 px-5 w-full lg:w-1/3">
                <Link href="/ServicesSingle">
                    <Image className="pb-16" src="/webfonts/heart-pulse-solid.svg" width="50" height="50" alt="heart-pulse"/>
                </Link>    
                <h2 className="text-3xl mb-3">Cardiology</h2>
                <p>Lorem ipsum dolor sit amet consectetur
                quisque faucibus dolor tortor porta sit
                tempor purus proin sapien docer.</p>
            </div>
        </div>

);
}

export default CardServices4;