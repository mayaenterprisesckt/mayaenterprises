import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Stats from "../Stats";
import HeroImage from "public/assets/images/investment_data.svg";
import MotionBox from "@/components/motion/Box";
const Hero = () => {
    return (
        <>
            <div className="w-screen m-0 p-0 bg-primaryLight dark:bg-primaryDark">
                <div className=" bg-primaryLight w-screen dark:bg-primaryDark grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <section className="px-4 sm:pt-24 pt-24  md:pt-32 lg:pt-36 lg:pb-[6] mx-auto w-full">
                        <div className="w-full  mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
                            <motion.h1
                                animate={{ fontSize: "56px" }}
                                className="select-none py-8 mb-6 text-4xl font-extrabold leading-none tracking-normal text-primaryDark  dark:text-primaryLight  md:text-6xl md:tracking-tight"
                            >
                                Manage your
                                <motion.span
                                    animate={{
                                        color: ["#00bcf5", "#006af5", "#9b00f5", "#00c4f5"],
                                    }}
                                    transition={{ duration: 4, repeat: Infinity }}
                                    className="antialiased ml-3 mr-2 block w-full text-transparent bg-clip-text lg:inline animate-pulse"
                                >
                                    Investments
                                </motion.span>
                                in one single place.
                            </motion.h1>
                            <p className="select-none  px-0  text-lg text-primaryDark  dark:text-primaryLight  md:text-xl lg:px-24">
                                Hellonext is a feature voting software where you can allow your
                                users to vote on features, publish roadmap, and complete your
                                customer feedback loop.
                            </p>
                        </div>
                    </section>
                    <div className="container px-10  sm:pt-24 pt-16  md:pt-32 lg:pt-36 lg:pb-[6] mx-auto  text-center md:w-full lg:w-3/4">
                        <MotionBox
                            animate={{ y: 20, scale: 0.97 }}
                            transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
                            marginY={8}
                            // maxWidth={[240, 320]}
                            // shadow={"2xl"}
                            marginX="auto"
                            // className="shadow-2xl shadow-lightAccent dark:shadow-darkAccent"
                        >
                            <Image layout="responsive" src={HeroImage} alt=" software screenshot" />
                        </MotionBox>
                    </div>
                </div>
            </div>
            <Stats />
        </>
    );
};

export default Hero;
