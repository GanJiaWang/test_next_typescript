import { Layout } from "antd";
import Head from "next/head";
import Header from "@components/App/Header";
import React from "react";

const CataloguePage: React.FC = () => (
    <>
        <Head>
            <title>Next.JS</title>
        </Head>
        <Layout className="layout bg-white">
            <Header />
        </Layout>
    </>
);

export default CataloguePage;
