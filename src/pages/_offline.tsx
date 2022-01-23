/* eslint-disable react/display-name */

import IndexLayout from "@/components/layout/Index/IndexLayout";
import Head from "next/head";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
    <IndexLayout PageTitle={"OFFLINE"} PageDesc={"OFFLINE"}>
        <Head>
            <title>OFFLINE</title>
        </Head>
        <h1>This is offline fallback page</h1>
        <h2>When offline, any page route will fallback to this page</h2>
    </IndexLayout>
);
