import { ReactNode } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Head from "next/head";

interface IndexLayoutProps {
    PageTitle: string;
    PageDesc: string;
    MainHeading?: string;
    MainDesc?: string;
    children: ReactNode;
}

function IndexLayout({ PageTitle, PageDesc, children }: IndexLayoutProps) {
    return (
        <>
            <>
                <Head>
                    <title>{PageTitle}</title>
                    <meta name="description" content={`|${PageDesc}`} />
                </Head>
                <div className="w-screen m-0 p-0 bg-primaryLight dark:bg-primaryDark h-[100vh]">
                    <NavBar />
                    {children}
                    <div className="pt-5">
                        <Footer />
                    </div>
                </div>
            </>
        </>
    );
}

export default IndexLayout;
