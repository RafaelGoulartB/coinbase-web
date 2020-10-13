import React from 'react'
import { Text, Image } from '@chakra-ui/core'
import HeroContainer from '../components/hero/hero-container'
import HeroBreadcrumb from '../components/hero/hero-breadcrumb'
import HeroTexts from '../components/hero/hero-texts'
import HeroTitle from '../components/hero/hero-title'

const ContactUs: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <HeroTexts>
          <HeroBreadcrumb />
          <HeroTitle>24/7 Customer support Including weekends.</HeroTitle>
          <Text py="6" maxW="550px">
            We’re always there ti help regardless the number of queries at hand.
          </Text>
        </HeroTexts>

        <Image
          src="/contact-bg.png"
          display={['none', 'none', 'none', 'block', 'block']}
          pb={['0', '0', '0', '40', '20']}
          mr="8"
        />
      </HeroContainer>
    </>
  )
}

export default ContactUs
