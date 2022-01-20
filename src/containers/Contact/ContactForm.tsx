function ContactForm() {
    return (
        <>
            <div className="bg-primaryLight dark:bg-primaryDark lg:w-1/3 md:w-1/2flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-primaryDark  dark:text-primaryLight  text-lg mb-1 font-medium title-font">
                    Feedback
                </h2>
                <p className="leading-relaxed mb-5 text-primaryDark  dark:text-primaryLight ">
                    Post-ironic portland shabby chic echo park, banjo fashion axe
                </p>
                <div className="relative mb-4">
                    <label
                        htmlFor="name"
                        className=" leading-7 text-sm text-primaryDark  dark:text-primaryLight "
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full bg-primaryLight dark:bg-primaryDark rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label
                        htmlFor="email"
                        className="leading-7 text-sm text-primaryDark  dark:text-primaryLight "
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full bg-primaryLight dark:bg-primaryDark rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <div className="relative mb-4">
                    <label
                        htmlFor="message"
                        className="leading-7 text-sm text-primaryDark  dark:text-primaryLight "
                    >
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        className="w-full bg-primaryLight dark:bg-primaryDark rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                </div>
                <button className="text-white bg-lightAccent border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                    Send
                </button>
                <p className="text-xs text-primaryDark  dark:text-primaryLight  mt-3">
                    Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
                </p>
            </div>
        </>
    );
}

export default ContactForm;
