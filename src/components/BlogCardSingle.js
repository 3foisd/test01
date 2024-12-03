import Link from "next/link";
import Image from "next/Image";

function BlogCardSingle() {
    return (
            <div className="flex flex-col lg:flex-row justify-center gap-5">
                <Link href="/BlogSingle"><Image className="rounded-xl w-full" src="/images/freepik__candid-image-photography-natural-textures-highly-r__20995.jpg" width="500" height="500" alt="blog"/></Link> 
                <div className="bg-blu-200 rounded-xl flex flex-col justify-center gap-5 py-5 lg:py-0 px-10 w-full lg:w-2/5">
                    <div className="flex flex-row justify-between">
                        <p className="text-red-950">News</p>
                        <p>November 08, 2024</p>
                    </div>
                    <Link href="/"><h2 className="text-2xl lg:text-4xl mb-2">How climate change affects health</h2></Link> 
                    <p>Lorem ipsum dolor sit amet consectetur. Nunc lorem sed dolor odio faucibus augue risus sodales. Odio tellus mauris id sed egestas nibh eu quis.</p>
                    <div className="flex flex-row gap-4">
                        <button className="flex flex-row justify-around items-center bg-indigo-950 hover:bg-red-950 text-white w-32 h-12 rounded-full text-black">
                        <Link href="">Read more</Link>
                        </button>
                        <button className="justify-around items-center bg-indigo-950 hover:bg-red-950 w-12 h-12 rounded-full hidden lg:block">
                        <Image className="mx-auto" src="/webfonts/arrow-right-solid.svg" width="20" height="20" alt="arrow-right"/>
                        </button>
                    </div>
                </div>
            </div>

    );
}

export default BlogCardSingle;