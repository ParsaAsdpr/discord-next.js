import Head from "next/head";
import React from "react";
import Sidebar from "./Sidebar/Sidebar";

export default function Layout({ title, children }) {
  let pings = [{id: '1234567891234'}]
  let titleText = `${pings.length > 0 ? `(${pings.length})` : "•"} Discord | ${title}`
  return (
    <>
      <Head>
        <title>{titleText}</title>
        <link rel="icon" href={pings.length > 0 ? 'Images/pingIcon.png' : '/Images/nopingIcon.png'} />
        <meta name="description" content="Discord Clone" />
      </Head>

      <div className="flex min-h-screen flex-row w-full">
        <Sidebar />
        <main className="w-full">{children}</main>
      </div>
    </>
  );
}
