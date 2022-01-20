import dynamic from "next/dynamic";
import type { NextPage } from "next";
import Head from "next/head";
import BlogContainer from "@/containers/Blog";

const ContactContainer = dynamic(() => import("../containers/Contact"));
const IndexLayout = dynamic(() => import("../components/layout/Index/IndexLayout"));
const Hero = dynamic(() => import("../containers/Hero"));
const Featurs = dynamic(() => import("../containers/Feature"));
const Partners = dynamic(() => import("../containers/Partners"));

const Home: NextPage = () => {
    return (
        <div>
            <Head>
                <title>MayaEnterprises</title>
                <meta name="description" content="All your investments in one single place" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <IndexLayout PageTitle="MayaEnterprises" PageDesc="Home">
                <Hero />
                <hr />
                <Featurs />
                <Partners />
                <hr />
                <BlogContainer />
                <hr />
                <ContactContainer />
            </IndexLayout>
        </div>
    );
};

export default Home;
