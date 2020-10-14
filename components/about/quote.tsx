import React from 'react'
import { Flex, Text } from '@chakra-ui/core'
import Divider from '../divider'

const Quote: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      maxW="510px"
      mx="auto"
      px={['8', '8', '0', '0', '0']}
      mt={['32', '32', '32', '8', '32']}
      as="blockquote"
    >
      <Text
        color="pink.500"
        textAlign="center"
        lineHeight="2em"
        fontWeight="bold"
      >
        “Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec semper
        leo ut lobortis condimentum. Orci varius natoque penatibus et magnis”
      </Text>

      <Divider />

      <Text as="cite" color="#333">
        Ramon Ridwan • CEO CoinBase
      </Text>
    </Flex>
  )
}

export default Quote
