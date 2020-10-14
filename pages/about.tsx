import React from 'react'
import { Text, Image } from '@chakra-ui/core'
import HeroContainer from '../components/hero/hero-container'
import HeroBreadcrumb from '../components/hero/hero-breadcrumb'
import HeroTexts from '../components/hero/hero-texts'
import HeroTitle from '../components/hero/hero-title'
import Quote from '../components/about/quote'
import AboutCoinbase from '../components/about/about-coinbase'

const About: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <HeroTexts>
          <HeroBreadcrumb />
          <HeroTitle>Great service, Professional support</HeroTitle>
          <Text py="6" maxW="550px">
            CoinBase is a platform for trading your bitcoin and giftcard at the
            best rate, why not give us a trial.
          </Text>
        </HeroTexts>

        <Image
          src="/about-bg.png"
          display={['none', 'none', 'none', 'block', 'block']}
          pb={['0', '0', '0', '40', '20']}
          mr="8"
          pt="10"
        />
      </HeroContainer>

      <Quote />

      <AboutCoinbase />
    </>
  )
}

export default About
