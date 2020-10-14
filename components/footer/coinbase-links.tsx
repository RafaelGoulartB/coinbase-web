import React from 'react'
import { Flex, Text, PseudoBox } from '@chakra-ui/core'
import Link from 'next/link'

const CoinbaseLinks: React.FC = () => {
  return (
    <Flex flexDir="column" my={['12', '12', '12', '0', '0']}>
      <Text fontWeight="bold" color="white">
        CoinBase Links
      </Text>
      <Link href="/">
        <PseudoBox as="a" pt="4" _hover={{ textDecor: 'underline' }}>
          Home
        </PseudoBox>
      </Link>
      <Link href="/about">
        <PseudoBox as="a" pt="4" _hover={{ textDecor: 'underline' }}>
          About Us
        </PseudoBox>
      </Link>
      <Link href="/blog">
        <PseudoBox as="a" pt="4" _hover={{ textDecor: 'underline' }}>
          Blog
        </PseudoBox>
      </Link>
      <Link href="/contact-us">
        <PseudoBox as="a" pt="4" _hover={{ textDecor: 'underline' }}>
          Contact Us
        </PseudoBox>
      </Link>
    </Flex>
  )
}

export default CoinbaseLinks
