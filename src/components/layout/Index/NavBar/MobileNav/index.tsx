import { ReactNode } from "react";

function MobileNav({ children }: { children: ReactNode }) {
    return (
        <div>
            <nav className="fixed lg:hidden md:hidden bottom-0 left-0 right-0 z-20 shadow-t  ">
                <div className="bg-gray-50 shadow-lg dark:bg-black  sm:px-3 px-4 ">
                    <ul className="flex w-full justify-between items-center text-black-500">
                        {children}
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default MobileNav;
