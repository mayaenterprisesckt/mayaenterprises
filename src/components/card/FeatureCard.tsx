import { motion } from "framer-motion";
import Link from "next/link";
import { IconType } from "react-icons";

function FeatureCard({
    name,
    desc,
    Icon,
    link,
}: {
    name: string;
    desc: string;
    Icon: IconType;
    link: string;
}) {
    //  shadow-sm w-full hover:shadow-2xl lg:hover:translate-all transform-gpu ease-in-out  duration-200
    return (
        <Link href={link}>
            <div className="cursor-pointer hover:shadow-lightAccent p-4 md:w-1/3 flex flex-col text-center items-center shadow-sm   w-full hover:shadow-2xl lg:hover:translate-all transform-gpu ease-linear  duration-200 ">
                <motion.div
                    animate={{
                        color: ["#00bcf5", "#006af5", "#9b00f5", "#00c4f5"],
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="order-solid border-2 border-lightAccent w-20 h-20 inline-flex items-center justify-center rounded-full bg-gray-100 dark:bg-primaryDark text-primaryDark  dark:text-primaryLight  flex-shrink-0"
                >
                    <Icon className="w-10 h-10" />
                </motion.div>
                <div className="flex-grow">
                    <h2 className="text-primaryDark  dark:text-primaryLight text-lg title-font font-medium mb-3">
                        {name}
                    </h2>
                    <p className="leading-relaxed text-base text-primaryDark  dark:text-primaryLight">
                        {desc}
                    </p>
                    <a className="mt-3 text-primaryDark  dark:text-primaryLight inline-flex items-center">
                        Learn More
                        <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                        >
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>
            </div>
        </Link>
    );
}

export default FeatureCard;
