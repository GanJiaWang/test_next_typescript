import { Layout } from "antd";
import Head from "next/head";

import Header from "@components/App/Header";
import Catalogue from "@components/Catalogue";
import React from "react";

const App: React.FC = () => (
    <>
        <Head>
            <title>Next.JS</title>
        </Head>
        <Layout className="layout bg-white">
            <Header />
            <Catalogue />
        </Layout>
    </>
);

export default App;
