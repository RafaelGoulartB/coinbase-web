import React from 'react'
import { Flex, Text, Image, Button } from '@chakra-ui/core'
import Tittle from '../title'

const GreatExperience: React.FC = () => {
  return (
    <Flex
      flexDir="row"
      justifyContent="space-between"
      alignItems="flex-start"
      maxW="1280px"
      w="100%"
      pt={['0', '0', '0', '8', '32']}
      px={['8', '8', '32', '16', '0']}
      mx="auto"
      mt="40"
    >
      <Flex flexDir="column">
        <Tittle> Great experience with CoinBase</Tittle>

        <Text pb="6" maxW="550px" lineHeight="2em">
          CoinBase is an online site and a p2admin platform that allows users to
          buy, sell and/ or exchange digital and fiat assets safely. Owned and
          managed by CoinBase Business Services established and Incoperated in
          Nigeria.
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

      <Image
        src="/home/great-exp.png"
        display={['none', 'none', 'none', 'block', 'block']}
        pr="6"
      />
    </Flex>
  )
}

export default GreatExperience
