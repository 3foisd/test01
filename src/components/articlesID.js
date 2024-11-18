import Link from "next/link";
import Image from "next/Image";

function contact() {
    return (
        <div>

            <div className="w-full lg:w-4/12 mb-16">
                <Link href="/"><Image className="rounded-[20px] mb-5" src="/images/freepik__candid-image-photography-natural-textures-highly-r__20995.jpg" width="500" height="500" alt="mail"/></Link> 
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

    );
}

export default contact;