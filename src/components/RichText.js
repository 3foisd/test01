import Link from "next/link";
import Image from "next/Image";

function RichText({ title1, title2, title3, title4, title5}) {
    return (

        <div className="flex flex-col gap-5 w-full lg:w-2/3 mx-auto">
            <h1 className="text-3xl lg:text-5xl">{title1}</h1>
            <p>Venenatis sollicitudin posuere elit consequat et enim. Neque tortor amet dictum
            tempor. Leo facilisis aliquet viverra scelerisque eleifend viverra est. At massa erat
            vel amet enim laoreet dictum pellentesque. Urna cursus quam pulvinar tellus. 
            Duis
            fermentum nibh volutpat morbi
            . Et ac sed ultricies ut nunc sodales lectus. Ultricies
            pharetra mauris eget pellentesque accumsan tincidunt.</p>

            <h2 className="text-2xl lg:text-3xl">{title2}</h2>
            <p>Et urna ac et maecenas fusce amet. Nibh nec commodo massa sed. Tincidunt
            porttitor in pharetra egestas sit neque ac lacus. Amet a nunc et cum. Odio at
            volutpat volutpat in leo eget ipsum diam elementum. Erat magna arcu orci lorem
            senectus orci fringilla. Tincidunt metus nisl vitae maecenas pretium aliquet. At id
            pharetra in vestibulum lectus pellentesque venenatis molestie.</p>

            <ul className="list-disc px-10">
                <li>Morbi fringilla molestie magna sed dictum. Praesent pharetra turpis augue.</li>
                <li>Cras mi purus, viverra vitae felis sit amet, tincidunt fringilla lorem.</li>
                <li>non mattis urna ex nec sem. Donec varius diam et suscipit venenati proin
                tincidunt</li>
                <li>Quisque euismod posuere lacus sit amet volutpat. Praesent vel imperdiet</li>
            </ul>

            <p>Quis faucibus massa sit egestas. Sit fermentum est ac pulvinar et sagittis sed sit ut.
            Quis faucibus aenean nibh vestibulum enim mi sit. Sollicitudin ultrices ultrices in
            ipsum urna fringilla massa leo. Sapien ultricies vitae rhoncus molestie purus. Urna
            urna dolor euismod porttitor et. Magna adipiscing dictum et adipiscing mollis
            feugiat. Est ac ultrices varius volutpat nibh purus placerat. Sapien morbi sed sit non
            habitant turpis dignissim. Facilisis vitae massa justo neque.</p>

            <Image className="mx-auto rounded-xl" src="/images/Candid Image Natural Textures (2).png" width="1000" height="1000" alt="doctor"/>
            <p className="mx-auto">Lorem ipsum dolor sit amet consectur</p>

            <p>uis faucibus massa sit egestas. Sit fermentum est ac pulvinar et sagittis sed sit ut.
            Quis faucibus aenean nibh vestibulum enim mi sit. Sollicitudin ultrices ultrices in
            ipsum urna fringilla massa leo. Sapien ultricies vitae rhoncus molestie purus. Urna
            urna dolor euismod porttitor et. Magna adipiscing dictum et adipiscing mollis
            feugiat. Est ac ultrices varius volutpat nibh purus placerat. Sapien morbi sed sit non
            habitant turpis dignissim. Facilisis vitae massa justo neque.</p>

            <h3 className="text-2xl">{title3}</h3>
            <p>Cursus curabitur euismod vel fermentum sapien non dolor odio vel. Tortor lectus
            mauris in praesent a tincidunt nam. In aenean odio aliquet pretium viverra elit quis
            magna. Eget ut risus posuere velit purus nisi nec sollicitudin. Tellus enim interdum
            neque sit vestibulum lacus. 
            Nam pulvinar a lectus justo 
            aliquet integer amet.</p>

            <div className="bg-gray-200 rounded-xl py-10">
                <p className="text-xl lg:text-3xl text-center mx-auto w-full w-3/4">“Sed id mi eget urna facilisis pharetra.
                Nunc viverra est at magna maximus
                consectetur. Sed nec maximus augue.
                Aliquam commodo sem eu nisl efficitur
                venenatis. Proin eu suscipit lorem. Nam
                vitae aliquet augue. Morbi rutrum ultrices
                lorem molestie suscipit. Sed mattis luctus
                odio eu porta.”</p>
            </div>

            <p>Cursus curabitur euismod vel fermentum sapien non dolor odio vel. Tortor lectus
            mauris in praesent a tincidunt nam. In aenean 
            odio aliquet pretium viverra
            elit quis
            magna. Eget ut risus posuere velit purus nisi nec sollicitudin. Tellus enim interdum
            neque sit vestibulum lacus. Nam pulvinar a lectus justo aliquet integer amet.</p>

            <h3 className="text-xl">{title4}</h3>
            <p>Sed non quis tellus velit orci. Quam sed mauris elementum tempor viverra. Luctus
            semper risus ipsum id diam praesent. Pretium eget mauris ultrices curabitur sed
            sem amet. Erat nulla habitant in mattis massa mi a
            dipiscing ullamcorper
            condimentum
            . Erat quisque integer tincidunt ac amet tempor vulputate tristique.
            Venenatis neque odio a nulla iaculis euismod etiam.</p>

            <ul className="list-decimal px-10">
                <li>Morbi fringilla molestie magna sed dictum. Praesent pharetra turpis augue.</li>
                <li>Cras mi purus, viverra vitae felis sit amet, tincidunt fringilla lorem.</li>
                <li>non mattis urna ex nec sem. Donec varius diam et suscipit venenati proin
                tincidunt</li>
                <li>Quisque euismod posuere lacus sit amet volutpat. Praesent vel imperdiet</li>
            </ul>

            <h3 className="text-xl">{title5}</h3>
            <p>Sed non quis tellus velit orci. Quam sed mauris elementum tempor viverra. Luctus
            semper risus ipsum id diam praesent. Pretium eget mauris ultrices curabitur sed
            sem amet. Erat nulla habitant in mattis massa mi a
            dipiscing ullamcorper
            condimentum
            . Erat quisque integer tincidunt ac amet tempor vulputate tristique.
            Venenatis neque odio a nulla iaculis euismod etiam.</p>
        </div>

);
}

export default RichText;