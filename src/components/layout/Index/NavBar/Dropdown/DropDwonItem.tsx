import Link from "next/link";

function DropDwonItem({ link, name, desc }: { link: string; name: string; desc: string }) {
    return (
        <Link href={link}>
            <a className="-m-3 p-3 flex items-start group hover:bg-gray-300 bg-white dark:hover:bg-primaryDark dark:bg-black  tr04 cursor-pointer">
                <div className="ml-4">
                    <p className="text-base font-medium text-black dark:text-white group-hover:text-lightAccent">
                        {name}
                    </p>
                    <p className="mt-1 text-sm text-black dark:text-white">{desc}</p>
                </div>
            </a>
        </Link>
    );
}

export default DropDwonItem;
