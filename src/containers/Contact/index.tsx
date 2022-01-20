import dynamic from "next/dynamic";

const Adress = dynamic(() => import("./Adress"));
const ContactForm = dynamic(() => import("./ContactForm"));
function ContactContainer() {
    const marginHeight = 0;
    const marginWidth = 0;
    return (
        <>
            <div className="text-gray-600 body-font pb-24 relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="text-center">
                        <h1 className="mb-5 text-6xl Avenir font-semibold text-gray-900 dark:text-white">
                            Contact US
                        </h1>
                        <h1 className="mb-9 text-2xl font-semibold text-gray-600 dark:text-gray-300">
                            Enter your email address and get our newsletters straight away.
                        </h1>
                        <div className="flex mt-6 justify-center">
                            <div className="w-full h-1 rounded-full bg-indigo-500 inline-flex" />
                        </div>
                    </div>
                </div>
                <div className="container px-5  mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            className="absolute inset-0"
                            frameBorder="0"
                            title="map"
                            {...marginHeight}
                            {...marginWidth}
                            scrolling="no"
                            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                            style={{ filter: "grayscale", opacity: 0.7 }}
                        />
                        <Adress />
                    </div>
                    <ContactForm />
                </div>
            </div>
        </>
    );
}

export default ContactContainer;
