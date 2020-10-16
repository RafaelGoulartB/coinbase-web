import React from 'react'
import {
  Button,
  Flex,
  FormControl,
  Heading,
  Input,
  Text
} from '@chakra-ui/core'
import Divider from './divider'
import Tittle from './title'

const Newsletter: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      maxW="510px"
      mx="auto"
      px={['8', '8', '0', '0', '0']}
      mt="20"
      textAlign="center"
    >
      <Tittle>Subscribe our newsletter</Tittle>

      <Text lineHeight="2.2em" color="black">
        Subscribe to our newsletter for daily/weekly update of our products and
        services.
      </Text>

      <FormControl display="flex" alignItems="center" mt="6">
        <Input
          type="email"
          id="email"
          placeholder="Email"
          mr="4"
          focusBorderColor="pink.500"
        />
        <Button
          variantColor="pink"
          background="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);"
          color="white"
          rounded="100px"
          width="158px"
          py="6"
          textTransform="uppercase"
        >
          Discover
        </Button>
      </FormControl>
    </Flex>
  )
}

export default Newsletter
