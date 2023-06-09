import React, { useEffect } from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
import Input from "@/components/form-elements/input";
import Button from "../components/form-elements/Button";
// import ABI from "../utils/ABI.json";
import { useToast } from "@chakra-ui/react";
// import { contractAddress } from "@/utils/constants";
import { Checkbox, CheckboxGroup } from "@chakra-ui/react";
import tokenAbi from "../abi/Token.abi.json";
import { Address, ProviderRpcClient } from "everscale-inpage-provider";
import BigNumber from "bignumber.js";


const Dashboard = () => {
  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [supply, setSupply] = useState("");
  const [totalCap, setTotalCap] = useState("");
  const [whitelist, setWhitelist] = useState([]);
  const [capFlag, setCapFlag] = useState(true);
  const [supplyFlag, setSupplyFlag] = useState(true);
  const [venomConnect, setVenomConnect] = useState<any>();
  const [wallet, setWallet] = useState();
  const [tokenAmount, setTokenAmount] = useState<number | undefined>(0);


  const login = async () => {
    if (!venomConnect) return;
   const res =  await venomConnect.connect();
    setVenomConnect(res)
  };

  const getAddress = async (provider: any) => {
    const providerState = await provider?.getProviderState?.();

    const address =
      providerState?.permissions.accountInteraction?.address.toString();

    // console.log("Step 5: Got Address", address);
    setWallet(address);
    return address;
  };
//   const { address } = useAccount();

const buyTokens = async () => {
  
  // if (!venomConnect || !wallet || !tokenAmount) return;
  //@ts-ignore
  const userAddress = new Address(wallet);
  const contractAddress = new Address("0:fac0dea61ab959bf5fc5d325b6ef97ef45ef371c8649042e92b64e46c3c854d5"); // Our Tokensale contract address
  //@ts-ignore
  const deposit = new BigNumber(tokenAmount).multipliedBy(10 ** 8).toString(); // Contract"s rate parameter is 1 venom = 10 tokens
  const provider = await login()
  try {

  //@ts-ignore
  const contract = new provider.Contract(tokenAbi, contractAddress);
  const amount = new BigNumber(deposit).plus(new BigNumber(1).multipliedBy(10 ** 9)).toString();
    // and just call buyTokens method according to smart contract
    const result = await contract.methods
      .buyTokens({
        deposit,
      } as never)
      .send({
        from: userAddress,
        amount,
        bounce: true,
      });
    if (result?.id?.lt && result?.endStatus === "active") {
      setTokenAmount(1000000000);
      // getBalance(address);
    }
  } catch (e) {
    console.error(e);
  }
};

  const toast = useToast();


  useEffect(() => {
    console.log(capFlag, supplyFlag);
  }, [supply, totalCap]);

  const createToken = async ()=>{
    
    // return result;
  }

  return (
    <Layout>
      <Head>
        <title>Create Token</title>
        <meta name="description" content="coinify" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col space-y-8 justify-center items-center max-w-[800px] mx-auto pb-32 pl-[60px] lg:pl-0">
        <div className="flex items-center w-[90%] md:w-full bg-gradient-to-r from-emerald-500 to-lime-600 rounded-[30px] overflow-hidden shadow-lg">
          <div className="hidden md:flex mx-auto justify-center">
            <Image src="/token.png" width="200" height="200" alt="Icon" />
          </div>
          <div className="px-10 py-8 text-white text-right">
            <div className="font-bold text-xl mb-2">TOKEN</div>
            <div className="font-bold text-md mb-2">
              Mint a personal or a community token on a fixed supply Already
              have a token? Import token into Coinify
            </div>
          </div>
        </div>
        <form className="flex flex-col space-y-3 w-[90%] md:max-w-[600px] mx-auto">
          <Input
            id="name"
            name="name"
            label="Name"
            placeholder="Forefront"
            type="text"
            onChange={(e:any) => setName(e.target.value)}
            helper="This Can Be A Discord Server, Project Or Your Own Name."
          />
          <Input
            id="symbol"
            name="symbol"
            label="Symbol"
            placeholder="FF"
            type="text"
            onChange={(e:any) => setSymbol(e.target.value)}
            helper="Your Token Symbol (1-7 Characters), No '$' Sign Required."
          />
          <Checkbox
            onChange={(e) => setCapFlag(e.target.checked)}
            defaultChecked
          >
            Set Total Cap
          </Checkbox>
          <Input
            id="supply"
            name="supply"
            label="Total Cap"
            placeholder="0"
            type="number"
            onChange={(e:any) => setTotalCap(e.target.value)}
            helper="Recommended Supply - 10 Million Tokens."
          />
          <Checkbox
            onChange={(e) => setSupplyFlag(e.target.checked)}
            defaultChecked
          >
            Set Initial Supply
          </Checkbox>
          <Input
            id="supply"
            name="supply"
            label="Initial Supply"
            placeholder="0"
            type="number"
            onChange={(e:any) => setSupply(e.target.value)}
            helper="Recommended Supply - 10 Million Tokens."
          />
          <Input
            id="whitelist"
            name="whitelist"
            label="Enter addresses for whitelist"
            placeholder="Enter comma separated addresses"
            type="text"
            onChange={(e:any) => {
              const addresses = e.target.value.split(",");
              setWhitelist(addresses);
            }}
            helper="Only whitelisted addresses will be able to mint your token."
          />
          <Button
            label="Create"
            onClick={(e:any) => {
              e.preventDefault();
              buyTokens();
            }}
          />
        </form>
      </div>
    </Layout>
  );
};

export default Dashboard;
