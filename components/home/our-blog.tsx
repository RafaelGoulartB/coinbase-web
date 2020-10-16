import React from 'react'
import { Flex, Text } from '@chakra-ui/core'
import Tittle from '../title'

const OurBlog: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      mt="12"
      textAlign="center"
      maxW="1280px"
      w="100%"
      px={['8', '8', '32', '16', '0']}
      mx="auto"
    >
      <Tittle>Our Blog</Tittle>

      <Text textAlign="center" lineHeight="2.2em" color="black">
        Get to know the latest stuff via our blog post.
      </Text>
    </Flex>
  )
}

export default OurBlog
