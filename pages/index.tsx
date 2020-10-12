import React from 'react'
import { Heading, Flex, Button, Text, Image, PseudoBox } from '@chakra-ui/core'
import HeroContainer from '../components/hero-container'

const Home: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <Flex
          flexDir="column"
          pr={['8', '8', '40', '0', '0']}
          pl={['8', '8', '40', '40', '40']}
          color="white"
        >
          <Heading
            as="h2"
            fontWeight="normal"
            display="inline"
            mt={['8', '8', '8', '0', '0']}
          >
            We provide easy solution to exchange your{' '}
            <Text fontWeight="bold" display="inline">
              Bitcoin/ GiftCard for money
            </Text>
          </Heading>
          <Text py="6">
            CoinBase is a platform for trading your bitcoin and giftcard at the
            best rate, why not give us a trial.
          </Text>
          <Button
            background="white"
            textTransform="uppercase"
            color="pink.500"
            rounded="100px"
            width="158px"
            py="6"
            mb={['8', '8', '8', '0', '0']}
          >
            Get Started
          </Button>
        </Flex>

        <Image
          src="/home-bg.png"
          display={['none', 'none', 'none', 'block', 'block']}
          pb="40"
        />
      </HeroContainer>
    </>
  )
}

export default Home
