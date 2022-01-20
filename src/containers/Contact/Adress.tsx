function Adress() {
    return (
        <>
            <div className="bg-primaryLight dark:bg-primaryDark relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                    <h2 className="title-font font-semibold text-primaryDark  dark:text-primaryLight  tracking-widest text-xs">
                        ADDRESS
                    </h2>
                    <p className="mt-1">
                        Photo booth tattooed prism, portland taiyaki hoodie neutra typewriter
                    </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                    <h2 className="title-font font-semibold text-primaryDark  dark:text-primaryLight  tracking-widest text-xs">
                        EMAIL
                    </h2>
                    <a className="text-lightAccent leading-relaxed">example@email.com</a>
                    <h2 className="title-font font-semibold text-primaryDark  dark:text-primaryLight  tracking-widest text-xs mt-4">
                        PHONE
                    </h2>
                    <p className="leading-relaxed">123-456-7890</p>
                </div>
            </div>
        </>
    );
}
export default Adress;
