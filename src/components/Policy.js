import Link from "next/link";
import Image from "next/Image";

function policy() {
    return (
      <div className="w-full lg:w-2/3 mx-auto flex flex-col gap-5">
        <div className="bg-hero-pattern bg-cover w-full rounded-xl py-10 mx-auto text-center text-white">
            <h1 className="text-3xl lg:text-5xl font-bold">Privacy Policy</h1>
            <p className="lg:text-2xl">How Novamed handles your data</p>
        </div>
        <h2 className="text-4xl font-bold">Introduction</h2>
        <p>This Privacy Policy will help you better understand how we collect, use, and share your personal information. If we change our privacy practices, we may update this privacy policy.</p>
        <h2 className="text-3xl font-bold">Our values</h2>
        <p>Trust is the foundation of the Novamed platform and includes trusting us to do the right thing with your information. Three main values guide us as we develop our products and services. These values should help you better understand how we think about your information and privacy.</p>
        <h3 className="text-2xl font-bold">Your information belongs to you</h3>
        <p>We carefully analyze what types of information we need to provide our services, and we try to limit the information we collect to only what we really need. Where possible, we delete or anonymize this information when we no longer need it. When building and improving our products, our engineers work closely with our privacy and security teams to build with privacy in mind. In all of this work our guiding principle is that your information belongs to you, and we aim to only use your information to your benefit.</p>
        <h3 className="text-2xl font-bold">We protect your information from others</h3>
        <p>If a third party requests your personal information, we will refuse to share it unless you give us permission or we are legally required. When we are legally required to share your personal information, we will tell you in advance, unless we are legally forbidden.</p>
        <h3 className="text-2xl font-bold">We help merchants and partners meet their privacy obligations</h3>
        <p>Many of the merchants and partners using Novamed do not have the benefit of a dedicated privacy team, and it is important to us to help them meet their privacy obligations. To do this, we try to build our products and services so they can easily be used in a privacy-friendly way. We also provide detailed FAQs and documentation covering the most important privacy topics, and respond to privacy-related questions we receive.</p>
        <h3 className="text-2xl font-bold">Why we process your information</h3>
        <p>We generally process your information when we need to do so to fulfill a contractual obligation, or where we or someone we work with needs to use your personal information for a reason related to their business (for example, to provide you with a service). Laws in the European Economic Area (“EEA”) and in the United Kingdom (“UK”) call these reasons “legitimate interests.” These “legitimate interests” include:</p>
        <ul className="list-disc px-10">
            <li>preventing risk and fraud</li>
            <li>answering questions or providing other types of support</li>
            <li>helping merchants find and use apps through our app store</li>
            <li>providing and improving our products and services</li>
            <li>providing reporting and analytics</li>
            <li>testing out features or additional services</li>
            <li>assisting with marketing, advertising, or other communications</li>
        </ul>
        <p>We only process personal information for these “legitimate interests” after considering the potential risks to your privacy and balancing any risks with certain measures—for example, by providing clear transparency into our privacy practices, offering you control over your personal information where appropriate, limiting the information we keep, limiting what we do with your information, who we send your information to, how long we keep your information, or the technical measures we use to protect your information.

            We may also process your personal information where you have provided your consent. In particular, where we cannot rely on an alternative legal basis for processing, where you direct us to transfer information to a third party, where we receive your data from a third party is sourced and it already comes with consent or where we are required by law to ask for your consent (including in the context of some of our sales and marketing activities). At any time, you have a right to withdraw your consent by changing your communication choices, opting out from our communications or by contacting us.

            Depending on whether you are a merchant, customer, partner, user or visitor, please refer to our supplemental privacy policies, as relevant, to understand our purposes for processing, categories of recipients and legal basis for processing for each type of personal data.
        </p>
        <h3 className="text-2xl font-bold">Your rights over your information</h3>
        <p>We believe you should be able to access and control your personal information no matter where you live. Depending on how you use Novamed, you may have the right to request access to, correct, amend, delete, port to another service provider, restrict, or object to certain uses of your personal information. We will not charge you more or provide you with a different level of service if you exercise any of these rights. Please note that a number of these rights apply only in certain circumstances, and all of these rights may be limited by law.

            If you buy something from or otherwise provide your information to a Novamed-powered store and wish to exercise these rights over information about your purchase or interaction, you need to directly contact the merchant you interacted with. We are a processor and process information on their behalf. We will of course help our merchants to fulfill these requests to the extent required by law, such as by giving them the tools to do so and by answering their questions.

            If you are a merchant, partner, Shop user, Novamed employee, website visitor or other individual that Novamed has a direct relationship with, please submit your data subject request through our online portal. Please note that if you send us a request relating to your personal information, we have to make sure that it is you before we can respond. In order to do so, we may use a third party to collect and verify identification documents. Further information about rights available to US residents can be found below under the header “United States Regional Privacy Notice”.

            If you are not happy with our response to a request, you can contact us to resolve the issue. If you are located in the EEA or UK, you also have the right to lodge a complaint with your local data protection or privacy authority at any time.

            Finally, because there is no common understanding about what a “Do Not Track” signal is supposed to mean, we don’t respond to those signals in any particular way.
        </p>
        <h3 className="text-2xl font-bold">How long do we retain your information</h3>
        <p>We will retain your personal data only for as long as necessary to fulfill the purposes for which we have collected it. To determine the appropriate retention period, we consider the amount, nature and sensitivity of your personal data, the potential risk of harm from unauthorized use or disclosure of your personal data, the purposes for which we process your personal data and whether we can achieve those purposes through other means and the applicable legal requirements. We will also retain and use your personal information to the extent necessary to comply with our legal obligations, resolve disputes and enforce our policies. If you stop using our services or if you delete your account with us, we will delete your information or store your information in an aggregated and anonymized format.

            Depending on whether you are a merchant, customer, partner, user or visitor, please refer to our supplemental privacy policies, as relevant, for further details on the retention of your personal information.
        </p>
        <h3 className="text-2xl font-bold">Our use of Machine Learning</h3>
        <p>One of the ways in which we are able to help merchants using Novamed is by using techniques like “machine learning” (some laws, including certain EEA and UK laws, may refer to this as “automated decision-making”) to help us improve our services. When we use machine learning, we either: (1) still have a human being involved in the process (and so are not fully automated); or (2) use machine learning in ways that don’t have legal or similarly significant effects (for example, reordering how apps might appear when you visit the app store).</p>
        <h3 className="text-2xl font-bold">How we protect your information</h3>
        <p>Our teams work tirelessly to protect your information, and to ensure the security and integrity of our platform. We also have independent auditors assess the security of our data storage and systems that process financial information. However, we all know that no method of transmission over the Internet, and method of electronic storage, can be 100% secure. This means we cannot guarantee the absolute security of your personal information. You can find more information about our security measures at /security.</p>
        <h3 className="text-2xl font-bold">How we use “cookies” and other tracking technologies</h3>
        <p>We use cookies and similar tracking technologies on our website and when providing our services. For more information about how we use these technologies, including a list of other companies that place cookies on our sites, a list of cookies that we place when we power a merchant’s store, and an explanation of how you can opt out of certain types of cookies, please see our Cookie Policy.</p>
        <h3 className="text-2xl font-bold">How you can reach us</h3>
        <p>If you would like to ask about, make a request relating to, or complain about how we process your personal information, please contact Novamed Support, or mail us at one of the addresses below. If you would like to submit a legally binding request to demand someone else’s personal information (for example, if you have a subpoena or court order), please review our Guidelines for Legal Requests.

            If you are a merchant, partner, Shop user, Novamed employee, website visitor or other individual that Novamed has a direct relationship with and you are located in the EEA or UK, Novamed International Ltd is the controller of your personal data. If you buy something from or otherwise provide your information to a Novamed-powered store, the merchant is your data controller and we are acting as a processor on their behalf.

            If you have questions about how a merchant or store processes your personal information, you should contact the merchant or visit their privacy policy.
        </p>

      </div>

);
}

export default policy;