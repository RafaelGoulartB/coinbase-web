import React from 'react'
import { Flex } from '@chakra-ui/core'

const HeroTexts: React.FC = ({ children }) => {
  return (
    <Flex
      alignSelf="flex-start"
      flexDir="column"
      pt={['0', '0', '0', '32', '32']}
      pr={['8', '8', '0', '0', '0']}
      pl={['8', '8', '32', '32', '0']}
      color="white"
    >
      {children}
    </Flex>
  )
}

export default HeroTexts
