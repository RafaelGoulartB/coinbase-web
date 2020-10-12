import React from 'react'
import { Flex } from '@chakra-ui/core'

const HeroContainer: React.FC = ({ children }) => {
  return (
    <Flex
      alignItems="center"
      pt={['0', '0', '0', '4', '4']}
      minH={['420px', '420px', '420px', '727px', 'auto']}
      background={[
        "url('/bg.svg')",
        "url('/bg.svg')",
        "url('/bg.svg')",
        "url('/bg.svg')",
        'linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%);'
      ]}
      backgroundRepeat="no-repeat"
      backgroundSize="cover"
      backgroundPosition="center"
    >
      <Flex
        alignSelf="flex-start"
        justifyContent="space-between"
        pt={['16', '16', '16', '0', '0']}
        flexDir="row"
        maxW="1360px"
        width="100%"
        mx="auto"
      >
        {children}
      </Flex>
    </Flex>
  )
}

export default HeroContainer
