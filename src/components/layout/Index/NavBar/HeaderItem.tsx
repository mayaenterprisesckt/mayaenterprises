import Link from "next/link";

function HeaderItem({ name, link }: { name: string; link: string }) {
    return (
        <>
            <Link href={link}>
                <a className="mr-5 cursor-pointer text-black dark:text-gray-300 hover:text-lightAccent dark:hover:text-lightAccent hover:animate-bounce font-semibold tr04 ">
                    {name}
                </a>
            </Link>
        </>
    );
}

export default HeaderItem;
