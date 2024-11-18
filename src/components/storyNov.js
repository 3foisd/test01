import Link from 'next/link'
import Image from "next/Image"

function header() {
    return (

        <div className="bg-gray-200 rounded-[20px] mb-32">

            <div className='flex flex-col lg:flex-row justify-between items-center px-10 pt-20 pb-16'>
                <div className="w-full lg:w-5/12 mb-5 lg:mb-0">
                    <h2 className="text-4xl mb-2">The story of how novamed was founded</h2>
                    <p>Lorem ipsum dolor sit amet consectetur. Pharetra odio enim vitae suscipit quis. Massa placerat tortor amet est scelerisque turpis semper amet dignissim. Aenean eget sit massa volutpat. Eget arcu tellus et elit nunc est dolor.</p>
                </div>
                <Image className='rounded-[20px]' src="/images/bureau.jpg" width="550" height="550" alt="bureau" />
            </div>

            <div className='flex flex-col lg:flex-row items-center justify-around pb-10 gap-5 lg:gap-0'>
                <div className='bg-indigo-950 text-white rounded-full w-44 flex flex-col items-center py-1.5'>
                    <h3 className='text-3xl'>10K+</h3>
                    <p>Users worldwide</p>
                </div>

                <div className='bg-indigo-950 text-white rounded-full w-44 flex flex-col items-center py-1.5'>
                    <h3 className='text-3xl'>4+</h3>
                    <p>Years experience</p>
                </div>

                <div className='bg-indigo-950 text-white rounded-full w-44 flex flex-col items-center py-1.5'>
                    <h3 className='text-3xl'>100%</h3>
                    <p>Positive review</p>
                </div>

            </div>

        </div>
    );
}

export default header;