import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import ThemeContainer from '../context/theme/ThemeContainer'
import Nav from '../components/nav'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <title>Coinbase Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeContainer>
        <Nav />
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  )
}

export default MyApp
