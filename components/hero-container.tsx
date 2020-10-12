import React from 'react'
import { Flex } from '@chakra-ui/core'

const HeroContainer: React.FC = ({ children }) => {
  return (
    <Flex background="url('/bg.svg')" flexDir="row" alignItems="center" pt="4">
      {children}
    </Flex>
  )
}

export default HeroContainer
