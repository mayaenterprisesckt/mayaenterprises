/* eslint-disable @next/next/link-passhref */
import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerHeader,
    Accordion,
    DrawerFooter,
    DrawerBody,
    CloseButton,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
} from "@chakra-ui/react";
import { HiOutlineCog, HiOutlineHome } from "react-icons/hi";
import { MdSupervisorAccount, MdOutlineContactMail } from "react-icons/md";
import { FaBloggerB, FaMoneyBillAlt, FaRegLightbulb } from "react-icons/fa";
import Link from "next/link";
import dynamic from "next/dynamic";
import Logo from "@/components/icons/logo";
const DarkModeToggleSwitch = dynamic(() => import("../../../../shared/ToggleThemeSwitch"));

//

function MyDrawer({ isOpen, onClose }: any) {
    return (
        <>
            <div>
                <Drawer size="sm" onClose={onClose} isOpen={isOpen} onOverlayClick={onClose}>
                    <DrawerOverlay />
                    <DrawerContent
                        // i cant belive it worked
                        className="bg-primaryLight dark:bg-primaryDark"
                    >
                        <DrawerHeader>
                            <CloseButton
                                className="right-0 flex inset-y-0 ml-[19.25rem]"
                                onClick={onClose}
                            />
                            <div className="inset-y-0 right-0 flex items-center ">
                                <Logo />
                                <h1 className="text-xl -ml-2">MAYA ENTERPRISES</h1>
                            </div>
                        </DrawerHeader>
                        <hr />
                        <DrawerBody>
                            <Accordion allowToggle>
                                <Link href="/">
                                    <h2 className=" flex select-none mb-2 items-center h-12  ">
                                        <HiOutlineHome className="h-14 mb-1 text-[2rem]  text-lightAccent  dark:text-lightAccent" />{" "}
                                        <div className="ml-3 text-xl cursor-pointer hover:text-lightAccent">
                                            Home
                                        </div>
                                    </h2>
                                </Link>
                                <Link href="#about">
                                    <h2 className=" flex select-none mb-2 items-center h-12  ">
                                        <MdSupervisorAccount className="h-14 mb-1 text-[2rem]  text-lightAccent dark:text-lightAccent" />{" "}
                                        <div className="ml-3 text-xl cursor-pointer hover:text-lightAccent">
                                            About
                                        </div>
                                    </h2>
                                </Link>
                                <AccordionItem>
                                    <h2 className=" select-none mb-2 border-none items-center">
                                        <AccordionButton>
                                            <HiOutlineCog className="h-14 text-[2rem] text-lightAccent -ml-4  dark:text-lightAccent " />
                                            <Box flex={1} textAlign="left" border="none">
                                                <div className="ml-3 cursor-pointer text-xl">
                                                    Services
                                                </div>
                                            </Box>
                                            <AccordionIcon className="animate-bounce dark:text-lightAccent" />
                                        </AccordionButton>
                                    </h2>

                                    <AccordionPanel pb={4}>
                                        <Link href="http://minvest.mayaenterprises.co.in">
                                            <h2 className=" flex select-none mb-3 items-center -mt-1   ">
                                                <FaMoneyBillAlt className="ml-8 h-14 text-[2rem] text-lightAccent dark:text-lightAccent " />

                                                <div className="ml-2 text-xl hover:text-lightAccent mb-1 cursor-pointer">
                                                    Minvest
                                                </div>
                                            </h2>
                                        </Link>
                                        <hr />
                                        <Link href="http://gyanasutra.mayaenterprises.co.in">
                                            <h2 className=" flex select-none mt-3 items-center   ">
                                                <FaRegLightbulb className="ml-8 h-14 text-[1.5rem] text-lightAccent dark:text-lightAccent " />

                                                <div className="ml-2 text-xl hover:text-lightAccent   cursor-pointer">
                                                    Gyansutra
                                                </div>
                                            </h2>
                                        </Link>
                                    </AccordionPanel>
                                </AccordionItem>
                                <Link href="http://blog.mayaenterprises.co.in">
                                    <h2 className=" flex select-none mt-3 mb-2 items-center h-12  ">
                                        <FaBloggerB className="h-14 mb-1 text-[2rem]  text-lightAccent dark:text-lightAccent " />{" "}
                                        <div className="ml-3 text-xl hover:text-lightAccent cursor-pointer">
                                            Blog
                                        </div>
                                    </h2>
                                </Link>
                                <Link href="#contact">
                                    <h2 className=" flex select-none  mb-2 items-center h-12 border-0  ">
                                        <MdOutlineContactMail className="h-16 text-[2rem] mb-1  text-lightAccent dark:text-lightAccent hover:text-gray-900 " />{" "}
                                        <div className="ml-3 text-xl cursor-pointer hover:text-lightAccent">
                                            Contact
                                        </div>
                                    </h2>
                                </Link>
                            </Accordion>
                        </DrawerBody>
                        <hr />
                        <DrawerFooter>
                            <div className="flex justify-between bg-primaryLight dark:bg-primaryDark">
                                <DarkModeToggleSwitch />
                            </div>
                        </DrawerFooter>
                    </DrawerContent>
                </Drawer>
            </div>
        </>
    );
}

export default MyDrawer;
