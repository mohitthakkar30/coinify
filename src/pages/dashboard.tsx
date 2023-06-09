import React from "react";
import Head from "next/head";
import Layout from "@/components/layout";
import Image from "next/image";
import Link from "next/link";
import Table from "@/components/table";
// import { contractAddress } from "@/utils/constants";
// import ABI from "../utils/ABI.json";

import { useState, useEffect } from "react";
//@ts-ignore
const Card = ({ heading, title, img, link, color }) => {
  return (
    <div className="w-[90%] md:w-1/3 flex flex-col">
      <h1 className="text-[#9f9f9f] font-bold text-sm pl-5 pb-3 dark:text-[#605e8a]">
        {heading}
      </h1>
      <Link
        href={link}
        className={`flex items-center rounded-[30px] overflow-hidden shadow-lg  min-h-[100px] md:min-h-[150px] ${color}`}
      >
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center text-[#E4E4ED]">
            {title}
          </div>
        </div>
        <div className="flex mx-auto justify-center w-[100%]">
          <Image
            src={img}
            width="120"
            height="100"
            alt="Icon"
            className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300"
          />
        </div>
      </Link>
    </div>
  );
};

const headers = [
  "Name",
  "Symbol",
  "Total Supply",
  "Total Cap",
  "",
];

const Dashboard = () => {
  const [productData, setProductData] = useState([{}]);
//   const { address } = useAccount();

  return (
    <Layout>
      <Head>
        <title>Dashboard</title>
        <meta name="description" content="coinify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col w-full pl-[80px] lg:pl-0 pb-10 md:pr-5">
        <div className="flex space-x-2 items-center mb-10 justify-center md:justify-start">
          <Image src="/dashboard-icon.svg" width="25" height="25" alt="Icon" />
          <h1 className="text-[#1e1e1e] font-semibold text-xl dark:text-[#cccae3]">
            DASHBOARD
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0 md:items-start md:justify-start">
          <Card
            heading="LAUNCH A COMMUNITY TOKEN"
            link="/token"
            title="TOKEN"
            img="/token.png"
            color="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 "
          />
          <Card
            heading="CREATE TOKEN DISTRIBUTIONS"
            link="/coming-soon"
            title="AIRDROP"
            img="/airdrop.webp"
            color="bg-gradient-to-r from-blue-400 to-emerald-400"
          />
          <Card
            heading="CREATE A NFT MARKETPLACE"
            link="/nft-membership"
            title="NFT MEMBERSHIP"
            img="/membership.png"
            color="bg-gradient-to-r from-red-800 via-yellow-600 to-yellow-500"
          />
        </div>
      </div>
      <div>
        <Table headers={headers} data={productData} />
      </div>
    </Layout>
  );
};

export default Dashboard;
