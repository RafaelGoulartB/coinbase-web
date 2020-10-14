import React from 'react'
import { Flex, Image, Text, Box } from '@chakra-ui/core'
import Link from 'next/link'
import {
  AiOutlineGooglePlus,
  AiFillFacebook,
  AiOutlineTwitter,
  AiOutlineInstagram
} from 'react-icons/ai'
import CoinbaseLinks from './footer/coinbase-links'
import ContactSection from './footer/contact-section'

const Footer: React.FC = () => {
  return (
    <Flex
      bg="#151515"
      mt="40"
      paddingX={['16', '16', '16', '16', '15%']}
      py="20"
      justifyContent="space-between"
      color="gray.200"
    >
      <Flex flexDir="column">
        <Flex align="center" mr={5}>
          <Link href="/">
            <Image src="/logo-footer.png" />
          </Link>
        </Flex>
        <Text maxW="360px" py="6">
          Fusce ut elit aliquet, fermentum leo vel, tempus nunc. Fusce eu
          rhoncus augue. Fusce vel metus pharetra, fermentum
        </Text>
        <Flex flexDir="row">
          <Box as={AiOutlineGooglePlus} mr="4" size="22px" color="gray.200" />
          <Box as={AiFillFacebook} mr="4" size="22px" color="gray.200" />
          <Box as={AiOutlineTwitter} mr="4" size="22px" color="gray.200" />
          <Box as={AiOutlineInstagram} mr="4" size="22px" color="gray.200" />
        </Flex>
      </Flex>

      <CoinbaseLinks />

      <ContactSection />
    </Flex>
  )
}

export default Footer
