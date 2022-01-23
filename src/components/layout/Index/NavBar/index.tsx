import Logo from "@/components/icons/logo";
import dynamic from "next/dynamic";
import { IconButton, useDisclosure } from "@chakra-ui/react";
const Drawer = dynamic(() => import("./Drawer"));
import { FiMenu } from "react-icons/fi";

const Dropdown = dynamic(() => import("./Dropdown"));

const DropDwonItem = dynamic(() => import("./Dropdown/DropDwonItem"));
const HeaderItem = dynamic(() => import("./HeaderItem"));

const ThemeSwitch = dynamic(() => import("../../../shared/ToggleTheme"));

const NavBar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <div className="fixed top-0 w-full clearNav bg-gray-50  dark:bg-black z-50">
                <div className="px-4 -py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                    <div className="relative flex items-center justify-between">
                        {/* Logo */}
                        <p
                            aria-label=" Maya Enterprises"
                            title=" Maya Enterprises"
                            className="inline-flex  items-center"
                        >
                            <div className="-ml-9">
                                <Logo />
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center ">
                                {/* <!-- Mobile menu button--> */}
                                <IconButton
                                    display={{ base: "flex", md: "flex" }}
                                    variant="outline"
                                    aria-label="open menu"
                                    icon={<FiMenu />}
                                    onClick={isOpen ? onClose : onOpen}
                                />
                            </div>
                            <span className="sm:mr-1 -ml-3 text-xl font-bold tracking-wide text-black dark:text-white uppercase">
                                Maya Enterprises
                            </span>
                        </p>
                        {/* Nav Items  */}
                        <ul className=" items-center  space-x-7 lg:flex md:hidden  hidden">
                            <div className="lg:-mr-3">
                                <HeaderItem name={"Home"} link={""} />
                            </div>
                            <div className="lg:ml-3">
                                <Dropdown name="Services">
                                    <DropDwonItem
                                        link={"http://minvest.mayaenterprises.co.in"}
                                        name={"MInvest"}
                                        desc={"One palce for all your investmemt"}
                                    />
                                    <DropDwonItem
                                        link={"http://gyanasutra.mayaenterprises.co.in"}
                                        name={"Gaynasutra"}
                                        desc={"Blue bottle crucifix vinyl post-ironic "}
                                    />
                                </Dropdown>
                            </div>
                            <HeaderItem name={"About"} link={"#about"} />
                            <HeaderItem name={"Blog"} link={"http://blog.mayaenterprises.co.in"} />
                            <HeaderItem name={"Contact"} link={"#contact"} />
                            <li>
                                <ThemeSwitch />
                            </li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>

            {/* Drawer */}
            <Drawer isOpen={isOpen} onClose={onClose} />
        </>
    );
};
export default NavBar;
