import React from 'react'
import { Flex, Text, Box, PseudoBox } from '@chakra-ui/core'
import Tittle from '../title'
import { FaBitcoin } from 'react-icons/fa'
import { IoIosCard } from 'react-icons/io'

const TradeAnywhere: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      justifyContent="space-between"
      alignItems="center"
      maxW="980px"
      w={['90%', '90%', '80%', '100%', '100%']}
      mt="20"
      px={['8', '8', '8', '48', '48']}
      py="16"
      mx="auto"
      bg="white"
      boxShadow="0px 5px 10px rgba(0, 0, 0, 0.1);"
      borderRadius="36px"
      color="black"
    >
      <Tittle>Trade from anywhere</Tittle>

      <Flex
        flexDir={['column', 'column', 'column', 'row', 'row']}
        mt="12"
        alignItems="center"
      >
        <PseudoBox
          display="flex"
          bg="white"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          borderColor="purple.500"
          borderWidth="1px"
          borderRadius="15px"
          width="262px"
          py="10"
          px="24"
          mr={['0', '0', '0', '16', '16']}
          mb={['6', '6', '6', '0', '0']}
          _hover={{
            cursor: 'pointer',
            bg: '#fafafa'
          }}
        >
          <Box as={FaBitcoin} size="58px" color="purple.500" />
          <Text fontWeight="bold" color="black" pt="12">
            Bitcoin
          </Text>
        </PseudoBox>
        <PseudoBox
          display="flex"
          bg="white"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          borderColor="purple.500"
          borderWidth="1px"
          borderRadius="15px"
          width="262px"
          py="10"
          px="24"
          _hover={{
            cursor: 'pointer',
            bg: '#fafafa'
          }}
        >
          <Box as={IoIosCard} size="58px" color="purple.500" width="100%" />
          <Text fontWeight="bold" color="black" pt="12">
            GiftCards
          </Text>
        </PseudoBox>
      </Flex>
    </Flex>
  )
}

export default TradeAnywhere
