import { BiSun, BiMoon, BiWalletAlt } from "react-icons/bi";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { initVenomConnect } from '../venom-connect/configure';
import VenomConnect from 'venom-connect';
import React from "react";
import ConnectWallet from "./ConnectWallet";

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  const [venomConnect, setVenomConnect] = useState<VenomConnect | undefined>();
  const init = async () => {
    const _venomConnect = await initVenomConnect();
    setVenomConnect(_venomConnect);
  };
  useEffect(() => {
    init();
  }, []);

  return (
    <>
      <nav className="w-full mx-auto py-5 px-2 lg:px-0">
        <div className="max-w-[1080px] container flex flex-wrap justify-end space-x-5 items-center mx-auto">
        <ConnectWallet venomConnect={venomConnect} />
          {theme === "light" ? (
            <BiMoon
              size="25"
              onClick={switchTheme}
              className="text-[#9f9f9f] hover:cursor-pointer dark:text-[#605e8a]"
            />
          ) : (
            <BiSun
              size="20"
              onClick={switchTheme}
              className="text-[#9f9f9f] hover:cursor-pointer dark:text-[#605e8a]"
            />
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
