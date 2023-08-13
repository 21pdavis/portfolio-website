import Head from 'next/head';
import { AppProps } from 'next/app';
import { ContextProvider } from '../components/context';

import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon.png"/>
      </Head>
      <Component {...pageProps} /> 
    </>
  )
}