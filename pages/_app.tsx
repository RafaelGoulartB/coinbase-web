import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import ThemeContainer from '../context/theme/ThemeContainer'
import Nav from '../components/nav'
import Footer from '../components/footer'
import { PseudoBox } from '@chakra-ui/core'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <PseudoBox as="main" overflowX="hidden">
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
        <Footer />
      </ThemeContainer>
    </PseudoBox>
  )
}

export default MyApp
