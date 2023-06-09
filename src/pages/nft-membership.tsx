import React, { useEffect } from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Input from "@/components/form-elements/input";
import Upload from "@/components/form-elements/upload";
import { Web3Storage } from "web3.storage";
// import ABI from "../utils/ABI.json";
// import NFTABI from "../utils/NFTABI.json";
import { useToast } from "@chakra-ui/react";
// import { contractAddress, NFTContractAddress } from "@/utils/constants";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";

const Dashboard = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [supply, setSupply] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [uri, setUri] = useState("");
  const [maxSupplyFlag, setMaxSupplyFlag] = useState(true);

//   const { address } = useAccount();

  const toast = useToast();
  const createMetadata = () => {
    var metadata = {
      name: name,
      description: description,
      image: imageUrl,
    };
    console.log(metadata);
    const client = new Web3Storage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkxZTRjOEMwNTJiMzkzNEQ3Nzc5NWM3QWQ3MkQ0MTFhMGQyMWUxODIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzE2ODYwNTU1NjIsIm5hbWUiOiJNYXRpYy1Qcm9maWxlIn0.zDWjIoqZUCnPXtvWXjm_ZbvPN2ZZHTfcK7JHdM2S7hk",
    });
    client
      .put([new File([JSON.stringify(metadata)], "metadata.json")])
      .then(async (cid:any) => {
        setUri(`https://${cid}.ipfs.w3s.link/metadata.json`);
      });
  };

  return (
    <Layout>
      <Head>
        <title>Create NFT</title>
        <meta name="description" content="coinify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col space-y-8 justify-center items-center max-w-[800px] mx-auto pb-32 pl-[60px] lg:pl-0">
        <div className="flex items-center w-[90%] md:w-full bg-gradient-to-r from-violet-700 to-orange-500 rounded-[30px] overflow-hidden shadow-lg">
          <div className="hidden md:flex mx-auto justify-center">
            <Image src="/membership.png" width="200" height="200" alt="Icon" />
          </div>
          <div className="px-10 py-8 text-white text-right">
            <div className="font-bold text-xl mb-2">NFT Memberships</div>
            <div className="font-bold text-md mb-2">
              Monetize your community memberships to grant access and benefits.
              Specially designed for DAOs and guilds.
            </div>
          </div>
        </div>
        <form className="flex flex-col space-y-3 w-[90%] md:max-w-[600px] mx-auto">
          <Upload
            id="image"
            name="image"
            label="Image"
            type="file"
            onChange={(e:any) => {
              const image = URL.createObjectURL(e.target.files[0]);
              setImage(image);
              const files = e.target.files;
              const client = new Web3Storage({
                token:
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweDkxZTRjOEMwNTJiMzkzNEQ3Nzc5NWM3QWQ3MkQ0MTFhMGQyMWUxODIiLCJpc3MiOiJ3ZWIzLXN0b3JhZ2UiLCJpYXQiOjE2NzE2ODYwNTU1NjIsIm5hbWUiOiJNYXRpYy1Qcm9maWxlIn0.zDWjIoqZUCnPXtvWXjm_ZbvPN2ZZHTfcK7JHdM2S7hk",
              });
              client.put(files).then((cid:any) => {
                console.log(cid);
                setImageUrl(`https://${cid}.ipfs.w3s.link/${files[0].name}`);
              });
            }}
          />
          <Image
            className="mx-auto"
            src={image !== "" ? image : "/preview.png"}
            alt="preview"
            width={200}
            height={200}
          />
          <Input
            id="name"
            name="name"
            label="Name"
            placeholder="Coinify DAO"
            type="text"
            onChange={(e:any) => setName(e.target.value)}
            helper="This Can Be Your DAO Name or Special Access Collection"
          />
          <Input
            id="description"
            name="description"
            label="Description"
            placeholder="Coinify DAO Memberships"
            type="text"
            onChange={(e:any) => setDescription(e.target.value)}
            helper="Write Something About This NFT or Features"
          />
          <Checkbox
            onChange={(e) => setMaxSupplyFlag(e.target.checked)}
            defaultChecked
          >
            Set Max Supply
          </Checkbox>
          <Input
            id="supply"
            name="supply"
            label="Max Supply"
            placeholder="0"
            type="number"
            onChange={(e:any) => setSupply(e.target.value)}
            helper="Recommended Max Supply - 10 Million Tokens."
          />
          <Input
            id="price"
            name="price"
            label="Price"
            placeholder="1 5IRE"
            type="number"
            onChange={(e:any) => setPrice(e.target.value)}
            helper="Recommend initial NFT Price - 2 5IRE, No '5IRE' Symbol Required."
          />
          <button
            onClick={async (e) => {
              e.preventDefault();
              createMetadata();
            }}
            className="w-full text-[#fffff] bg-violet-500 hover:bg-violet-600 focus:ring-1 focus:outline-none focus:ring-[#cfcfcf] font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-none dark:bg-violet-500 dark:hover:bg-violet-600 dark:text-gray-100"
          >
            Upload
          </button>
          <button
            onClick={async (e) => {
              e.preventDefault();
            //   write();
            }}
            className="w-full text-[#fffff] bg-violet-500 hover:bg-violet-600 focus:ring-1 focus:outline-none focus:ring-[#cfcfcf] font-medium rounded-lg text-sm px-5 py-2.5 text-center shadow-none dark:bg-violet-500 dark:hover:bg-violet-600 dark:text-gray-100"
          >
            {" "}
            Create
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Dashboard;
