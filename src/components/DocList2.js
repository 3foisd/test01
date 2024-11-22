import Link from 'next/link'
import Image from "next/Image"

function DocList2() {
    return (

            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='bg-gray-200 rounded-xl flex flex-row justify-between items-center w-full pr-10'>
                    <div className='flex flex-row items-center gap-4 lg:gap-16'>
                        <Image className='rounded-l-xl' src="/images/front-view-male-nurse-hospital (1).jpg" width="100" height="100"/>
                        <div>
                            <p>Cardiologist</p>
                            <h3 className='text-2xl lg:text-3xl mt-2'>Dr. Soufiane Chebli</h3>
                        </div>
                    </div>
                    <Link href="/" className='bg-indigo-950 rounded-full w-12 h-12'>
                        <Image className='mx-auto my-3' src="/webfonts/phone-alt-solid white.svg" width="20" height="20" />
                    </Link>
                </div>
            </div>

    );
}

export default DocList2;