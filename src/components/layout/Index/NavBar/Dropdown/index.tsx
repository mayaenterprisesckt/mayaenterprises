import { ReactNode, useState } from "react";

function Dropdown({ name, children }: { name: string; children: ReactNode }) {
    const [flyer, setFlyer] = useState(false);
    const [, setFlyerTwo] = useState(false);
    return (
        <div>
            <div className="relative">
                <button
                    type="button"
                    className="
                   group rounded-md text-red-400 inline-flex items-center text-base font-medium focus:outline-none pb-8'
                  "
                    onMouseEnter={() => (setFlyer(!flyer), setFlyerTwo(false))}
                >
                    <span
                        className={
                            flyer === true
                                ? "cursor-pointe text-lightAccent  font-semibold tr04 "
                                : "cursor-pointer text-black dark:text-gray-300  font-semibold tr04 "
                        }
                    >
                        {name}
                    </span>
                    <svg
                        className={
                            flyer === true
                                ? "transform rotate-180 ml-3 h-5 w-5 transition ease-out duration-200"
                                : "ml-2 h-5 w-5 text-green-400 group-hover:text-gray-500"
                        }
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                <div
                    onMouseLeave={() => setFlyer(false)}
                    className={
                        flyer
                            ? "opacity-100 translate-y-0 transition ease-out duration-200 absolute z-10 -ml-4 mt-3 g327 border transform px-2 w-screen max-w-sm sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                            : "hidden opacity-0 translate-y-1 absolute z-10 -ml-4 mt-3 transform px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                    }
                >
                    <div className="overflow-hidden">
                        <div className="relative grid gap-6 bg-white dark:bg-black px-2 py-6 sm:gap-8 ">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
