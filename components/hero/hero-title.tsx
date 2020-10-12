import React from 'react'
import { Heading } from '@chakra-ui/core'

const HeroTitle: React.FC = ({ children }) => {
  return (
    <Heading as="h2" display="inline" maxW="530px" mt="0">
      {children}
    </Heading>
  )
}

export default HeroTitle
