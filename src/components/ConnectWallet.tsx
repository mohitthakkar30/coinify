import { Button } from 'antd';
import React, { useEffect, useState } from 'react';
import { VenomConnect } from 'venom-connect';
import { Address, ProviderRpcClient } from "everscale-inpage-provider";

type Props = {
  venomConnect: VenomConnect | undefined;
};

function ConnectWallet({ venomConnect }: Props) {

  const [venomConnectt, setVenomConnect] = useState<any>();
  const [venomProvider, setVenomProvider] = useState<any>();
  const [address, setAddress] = useState();
  const [balance, setBalance] = useState();

  const login = async () => {
    if (!venomConnect) return;
    await venomConnect.connect();
  };


  const checkAuth = async (_venomConnect: any) => {
    console.log("Step 3: Checking Auth");
    const auth = await _venomConnect?.checkAuth();
    console.log("Auth", auth);
    console.log("Step 4: Checked Auth");

    if (auth) await getAddress(_venomConnect);
  };

  const getAddress = async (provider: any) => {
    const providerState = await provider?.getProviderState?.();

    const address =
      providerState?.permissions.accountInteraction?.address.toString();

    console.log("Step 5: Got Address", address);
    setWallet(address);
    return address;
  };

  const getBalance = async (provider: any, _address: string) => {
    try {
      const providerBalance = await provider?.getBalance?.(_address);

      console.log("Step 6: Got Balance", providerBalance);

      return providerBalance;
    } catch (error) {
      return undefined;
    }
  };

  const initVenomConnect = async () => {
    console.log("Step 1: Init VenomConnect");
    return new VenomConnect({
      theme: "venom",
      checkNetworkId: 1000,
      providersOptions: {
        venomwallet: {
          walletWaysToConnect: [
            {
              package: ProviderRpcClient,
              packageOptions: {
                fallback:
                  VenomConnect.getPromise("venomwallet", "extension") ||
                  (() => Promise.reject()),
                forceUseFallback: true,
              },
              id: "extension",
              type: "extension",
            },
          ],
          defaultWalletWaysToConnect: ["mobile", "ios", "android"],
        },
      },
    });
  };

  const onInitButtonClick = async () => {
    const initedVenomConnect = await initVenomConnect();
    setVenomConnect(initedVenomConnect);
    console.log("Step 2: Inited VenomConnect", initedVenomConnect);
    await checkAuth(initedVenomConnect);
  };

  const onConnect = async (provider: any) => {
    setVenomProvider(provider);
    console.log("provider", provider);

    check(provider);
    console.log("address", address);
    console.log("balance", balance);
  };

  const check = async (_provider: any) => {
    const _address = _provider ? await getAddress(_provider) : undefined;
    const _balance =
      _provider && _address ? await getBalance(_provider, _address) : undefined;

    setAddress(_address);

    setBalance(_balance);

    if (_provider && _address)
      setTimeout(() => {
        check(_provider);
      }, 100);
  };

  const onConnectButtonClick = async () => {
    console.log("We clicked connect");
    venomConnect?.connect();
  };

  const onDisconnectButtonClick = async () => {
    console.log("Disconnecting");
    venomProvider?.disconnect();
  };

  const print = async () => {
    console.log("print");
  };

  useEffect(() => {
    const off = venomConnect?.on("connect", onConnect);

    return () => {
      off?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [venomConnect]);

  useEffect(() => {
    onInitButtonClick();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [wallet, setWallet] = useState("Connect wallet");
  console.log("Wallet ",wallet);
  
  
  return (
    <div>
      <>
      <Button className="bg-white" onClick={login}>{wallet}</Button>
      </>
    </div>
  );
}
  
export default ConnectWallet;