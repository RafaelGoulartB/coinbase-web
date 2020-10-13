import React from 'react'
import { Flex, Text, Image, Heading, Button } from '@chakra-ui/core'

const Welcome: React.FC = () => {
  return (
    <Flex
      flexDir="row"
      justifyContent="space-between"
      alignItems="flex-start"
      maxW="1360px"
      w="100%"
      pt={['32', '32', '32', '8', '32']}
      pb="40"
      px={['8', '8', '32', '16', '0']}
      mx="auto"
    >
      <Image
        src="/about-bg.png"
        display={['none', 'none', 'none', 'block', 'block']}
        pr="6"
      />

      <Flex flexDir="column">
        <Heading color="pink.500">Welcome to CoinBase</Heading>
        <Text py="6" maxW="550px" lineHeight="2em">
          We have the best rates . Simply start your exchange right now. Sign up
          for our Affiliate program and earn commission from each exchange. The
          earnings are credited in your account instantly and can be withdrawn
          right away. Also note some exchange directions are hidden for
          unregistered user. To ensure to have access to all our exchange
          directions and benefits kindly sign up and verify your identity.
        </Text>
        <Button
          background="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);"
          textTransform="uppercase"
          color="white"
          rounded="100px"
          width="158px"
          py="6"
          mb={['8', '8', '8', '0', '0']}
        >
          Discover
        </Button>
      </Flex>
    </Flex>
  )
}

export default Welcome
