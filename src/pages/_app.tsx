import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import { initVenomConnect } from '../venom-connect/configure';
import VenomConnect from 'venom-connect';
import { Component, useEffect, useState } from 'react';
import ConnectWallet from '@/components/ConnectWallet';
import { ChakraProvider } from '@chakra-ui/react';
import { ThemeProvider } from "next-themes";

//@ts-ignore
function App({ Component, pageProps }) {

  return (
    <ThemeProvider attribute="class">
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  </ThemeProvider>
  );
}

export default App;