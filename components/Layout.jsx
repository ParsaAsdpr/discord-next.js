import Head from "next/head";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";

export default function Layout({ title, children }) {
  let titleText = `• Discord | ${title}`
  return (
    <>
      <Head>
        {/* <title>{`(${pings ? pings.length : "•"} Discord | ${title} `} </title> */}
        <title>{titleText}</title>
        <meta name="description" content="Discord Clone" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex min-h-screen flex-row w-full">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
    </>
  );
}
