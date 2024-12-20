import Link from 'next/link'
import Image from "next/Image"

function WhyChooseUs({ title1, title2, description}) {
    return (

        <div>
            <div className='py-5'>
                <p className='text-red-950'>Why choose us</p>
                <h2 className='text-4xl w-full lg:w-1/3'>{title1}</h2>
            </div>

            <div className='flex flex-col lg:flex-row gap-10 lg:gap-5'>
                <Link href="/">
                    <div className="bg-blu-200 hover:bg-red-950 hover:text-white rounded-xl pt-10">
                        <h3 className='text-2xl px-10 lg:px-0 mb-5 text-center'>{title2}</h3>
                        <p className='px-5 lg:px-10 mb-5'>{description}</p>
                        <Image className='rounded-b-xl' src="/images/freepik__candid-image-photography-natural-textures-highly-r__43460.jpg" width="400" height="400" alt="doctors" />
                    </div>
                </Link>

                <Link href="/">
                    <div className="bg-blu-200 hover:bg-red-950 hover:text-white rounded-xl pt-10">
                        <h3 className='text-2xl px-10 lg:px-0 mb-5 text-center'>Doctors experts in the industry</h3>
                        <p className='px-5 lg:px-10 mb-5'>Ut enim ad minim veniam, quis nostrud
                        exer ullamcoert labore et dolore magna.</p>
                        <Image className='rounded-b-xl' src="/images/freepik__candid-image-photography-natural-textures-highly-r__43460.jpg" width="400" height="400" alt="doctors"/>
                    </div>
                </Link>

                <Link href="/">
                    <div className="bg-blu-200 hover:bg-red-950 hover:text-white rounded-xl pt-10">
                        <h3 className='text-2xl px-10 lg:px-0 mb-5 text-center'>Doctors experts in the industry</h3>
                        <p className='px-5 lg:px-10 mb-5'>Ut enim ad minim veniam, quis nostrud
                        exer ullamcoert labore et dolore magna.</p>
                        <Image className='rounded-b-xl' src="/images/freepik__candid-image-photography-natural-textures-highly-r__43460.jpg" width="400" height="400" alt="doctors" />
                    </div>
                </Link>
            </div>
        </div>

);
}

export default WhyChooseUs;