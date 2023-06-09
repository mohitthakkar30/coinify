import Head from "next/head";
import Layout from "@/components/layout";
import Image from "next/image";

const ComingSoon = () => {
  return (
    <Layout>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="coinify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center min-h-[70vh]">
        <h1 className="text-[#9f9f9f] font-bold text-2xl dark:text-[#605e8a] mb-5">
          Coming Soon ...
        </h1>
        <Image
            src="/comingsoon.gif"
            width="200"
            height="250"
            alt="Coming Soon"
            className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300 border rounded-full"
            />
      </div>
    </Layout>
  );
};

export default ComingSoon;
