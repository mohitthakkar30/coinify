import Head from "next/head";
import { SimpleGrid } from "@chakra-ui/react";
import NFTDetails from "../components/nft-cards";
import { useEffect, useState } from "react";
// import NFTABI from "../utils/NFTABI.json";
import Layout from "@/components/layout";

export default function Products() {
  const [parsedData, setParsedData] = useState([]);

  const [productData, setProductData] = useState([{}]);



//   const fetchData = async () => {
//     let nfts = [];
//     for (let nft of data) {
//       const response = await fetch(nft.uri);
//       const pd = await response.json();
//       nfts.push({
//         name: pd.name,
//         description: pd.description,
//         image: pd.image,
//         price: parseFloat(nft.nftPrice)
//       });
//     }
//     setProductData(nfts);
//   };

//   useEffect(() => {
//     if (data) {
//       fetchData()
//     }
//   }, [data]);

  return (
    <Layout>
      <Head>
        <title>Explore</title>
        <meta name="description" content="Explore" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        spacing={"20"}
        maxW={"container.xl"}
        my={16}
        mx={"auto"}
      >
        {productData.map((products, index) => (
          <NFTDetails {...products} index={index} key={index} />
        ))}
      </SimpleGrid>
    </Layout>
  );
}
