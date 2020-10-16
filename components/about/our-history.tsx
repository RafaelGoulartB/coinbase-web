import React from 'react'
import { Flex, Grid, Text, Heading, Image } from '@chakra-ui/core'
import Divider from '../divider'
import Tittle from '../title'

const OurHistory: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      mt="16"
      textAlign="center"
      maxW="1360px"
      w="100%"
      px={['8', '8', '32', '16', '0']}
      mx="auto"
    >
      <Tittle>Our history</Tittle>

      <Grid
        mt="16"
        templateColumns="1fr 18px 1fr"
        templateRows="1fr 1fr 1fr"
        templateAreas="
          'first tree .'
          'first tree second'
          'third tree .'
        "
      >
        <Flex
          flexDir="column"
          alignItems="flex-end"
          textAlign="right"
          gridArea="first"
          mr="8"
        >
          <Text color="pink.500" mb="3" fontWeight="bold" fontSize="2xl">
            May 2010
          </Text>
          <Text lineHeight="2em" maxW="410px" fontSize="sm">
            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
            Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
            Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
            nibh.uspendisse
          </Text>
        </Flex>

        <Image src="/about/tree.png" gridArea="tree" />

        <Flex
          flexDir="column"
          alignItems="flex-start"
          textAlign="left"
          gridArea="second"
          ml="8"
        >
          <Text color="pink.500" mb="3" fontWeight="bold" fontSize="2xl">
            May 2017
          </Text>
          <Text lineHeight="2em" maxW="410px" fontSize="sm">
            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
            Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
            Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
            nibh.uspendisse
          </Text>
        </Flex>

        <Flex
          flexDir="column"
          alignItems="flex-end"
          textAlign="right"
          gridArea="third"
          mr="8"
        >
          <Text color="pink.500" mb="3" fontWeight="bold" fontSize="2xl">
            May 2019
          </Text>
          <Text lineHeight="2em" maxW="410px" fontSize="sm">
            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
            Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
            Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
            nibh.uspendisse
          </Text>
        </Flex>
      </Grid>

      <Text textTransform="uppercase" fontWeight="bold" mt="8">
        To be continue…
      </Text>
    </Flex>
  )
}

export default OurHistory
