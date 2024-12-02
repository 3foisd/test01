import Link from 'next/link'
import Image from "next/Image"

function DocList2() {
    return (

            <div className='flex flex-col lg:flex-row gap-10'>
                <div className='bg-gray-200 hover:bg-red-950 hover:text-white rounded-xl flex flex-col lg:flex-row justify-between items-center w-full lg:pr-10 py-2 lg:py-0'>
                    <div className='flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-16'>
                        <Image className='rounded-xl lg:rounded-normal lg:rounded-l-xl' src="/images/front-view-male-nurse-hospital (1).jpg" width="100" height="100"/>
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