import React from 'react'
import { Flex, Text, ButtonGroup, Button } from '@chakra-ui/core'
import Tittle from '../title'
import { AiFillApple } from 'react-icons/ai'
import { FaGooglePlay } from 'react-icons/fa'

const AppDownload: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      maxW="510px"
      mx="auto"
      px={['8', '8', '0', '0', '0']}
      mt="32"
      textAlign="center"
    >
      <Tittle>Download our app</Tittle>

      <Text lineHeight="2.2em" color="black">
        Discover exclusive deals and discounts with our mobile experience.
      </Text>

      <ButtonGroup mt="6" spacing={6}>
        <Button leftIcon={AiFillApple} bg="black" color="white" py="4">
          App Store
        </Button>
        <Button leftIcon={FaGooglePlay} bg="black" color="white" py="4">
          Google Play
        </Button>
      </ButtonGroup>
    </Flex>
  )
}

export default AppDownload
