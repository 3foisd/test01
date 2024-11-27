import Link from 'next/link'
import Image from "next/Image"

function DocList() {
    return (

        
            <div className='flex flex-row gap-2 lg:gap-5'>
                <Image className='rounded-full ' src="/images/front-view-male-nurse-hospital (1).jpg" width="100" height="100"/>
                <div className='bg-gray-200 rounded-xl flex flex-row justify-between items-center w-full px-10'>
                    <div>
                        <p>Cardiologist</p>
                        <h3 className='text-2xl lg:text-3xl mt-2'>Dr. Soufiane Chebli</h3>
                    </div>
                    <Link href="/">
                        <Image src="/webfonts/angle-right-solid-black.svg" width="20" height="20" />
                    </Link>
                </div>
            </div>
);
}

export default DocList;