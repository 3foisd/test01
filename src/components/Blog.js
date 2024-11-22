import Link from "next/link";
import Image from "next/Image";

function blog() {
    return (
        <div>

            <div className="flex flex-col lg:flex-row justify-between">
                <div className="w-full lg:w-5/12">
                    <p className="text-red-950">Blog</p>
                    <h2 className="text-3xl lg:text-4xl">Browse our latest articles on healthcare & wellness</h2>
                </div>
                <div className='flex flex-col lg:flex-row gap-4 lg:gap-10 mt-10'>
                <button className="flex flex-row justify-around items-center bg-gray-200 w-52 h-12 rounded-full text-black">
                    <Image src="/webfonts/map-marker-alt-solid-black.svg" width="24" height="24" alt="bell"/>
                    <Link href="https://maps.app.goo.gl/ySeLZxxQAuZouH3o8" target="_blank">Browse all posts</Link>
                </button>
                <button className="hidden lg:flex flex-row justify-around items-center bg-gray-200 w-12 h-12 rounded-full">
                    <Link href="/"><Image src="/webfonts/arrow-right-solid-black.svg" width="24" height="24" alt="bell"/></Link>
                </button>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row justify-between gap-5">
                <div className="w-full lg:w-4/12">
                    <Link href="/"><Image className="rounded-xl mb-5" src="/images/freepik__candid-image-photography-natural-textures-highly-r__20995.jpg" width="500" height="500" alt="blog"/></Link> 
                    <Link href="/"><h2 className="text-3xl mb-2">How climate change affects health</h2></Link> 
                    <p>Lorem ipsum dolor sit amet consectetur. Nunc lorem sed dolor odio faucibus augue risus sodales. Odio tellus mauris id sed egestas nibh eu quis.</p>
                    <div className="flex flex-row justify-between mt-5">
                        <div className="bg-indigo-950 text-white w-20 h-6 rounded-full text-center">
                            <p>News</p>
                        </div>
                        <p>Nov 08, 2024</p>
                    </div>
                </div>

                <div className="w-full lg:w-4/12">
                    <Link href="/"><Image className="rounded-xl mb-5" src="/images/freepik__candid-image-photography-natural-textures-highly-r__20995.jpg" width="500" height="500" alt="blog"/></Link> 
                    <Link href="/"><h2 className="text-3xl mb-2">How climate change affects health</h2></Link> 
                    <p>Lorem ipsum dolor sit amet consectetur. Nunc lorem sed dolor odio faucibus augue risus sodales. Odio tellus mauris id sed egestas nibh eu quis.</p>
                    <div className="flex flex-row justify-between mt-5">
                        <div className="bg-indigo-950 text-white w-20 h-6 rounded-full text-center">
                            <p>News</p>
                        </div>
                        <p>Nov 08, 2024</p>
                    </div>
                </div>

                <div className="w-full lg:w-4/12">
                    <Link href="/"><Image className="rounded-xl mb-5" src="/images/freepik__candid-image-photography-natural-textures-highly-r__20995.jpg" width="500" height="500" alt="blog"/></Link> 
                    <Link href="/"><h2 className="text-3xl mb-2">How climate change affects health</h2></Link> 
                    <p>Lorem ipsum dolor sit amet consectetur. Nunc lorem sed dolor odio faucibus augue risus sodales. Odio tellus mauris id sed egestas nibh eu quis.</p>
                    <div className="flex flex-row justify-between mt-5">
                        <div className="bg-indigo-950 text-white w-20 h-6 rounded-full text-center">
                            <p>News</p>
                        </div>
                        <p>Nov 08, 2024</p>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default blog;