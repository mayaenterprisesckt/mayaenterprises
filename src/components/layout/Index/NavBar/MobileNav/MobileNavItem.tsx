import Link from "next/link";
import { IconType } from "react-icons";
function MobileNavItem({ name, Icon, link }: { name: string; Icon: IconType; link: string }) {
    return (
        <>
            <Link href={link}>
                <a className="mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs  transition-all ">
                    <Icon className="w-6 h-6 text-black dark:text-white" />
                    {name}
                </a>
            </Link>
        </>
    );
}

export default MobileNavItem;
