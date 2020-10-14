import React from 'react'
import { Flex, PseudoBox, Text } from '@chakra-ui/core'

const ContactSection: React.FC = () => {
  return (
    <Flex flexDir="column">
      <Text fontWeight="bold" color="white">
        Contact Us
      </Text>
      <Text pt="2">(+234) 137632128 </Text>
      <Text pt="2">coinbase@yahoo.com</Text>
      <Text pt="2">Address goes here</Text>
      <PseudoBox as="a" pt="8" _hover={{ textDecor: 'underline' }}>
        Download Our App
      </PseudoBox>
    </Flex>
  )
}

export default ContactSection
