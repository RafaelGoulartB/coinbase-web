import React from 'react'
import {
  Flex,
  Heading,
  Image,
  Button,
  Text,
  Box,
  PseudoBox
} from '@chakra-ui/core'

interface Props {
  title: string
  date: string
  category: string
  description: string
  img_url: string
}

const PostItem: React.FC<Props> = ({
  title,
  date,
  category,
  description,
  img_url
}) => {
  return (
    <PseudoBox
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      maxW="1170px"
      mx="auto"
      mt="20"
      _first={{
        mt: '0'
      }}
    >
      <Image src={img_url} />
      <Flex
        flexDir="column"
        alignItems="center"
        borderColor="pink.500"
        borderWidth="2px"
        borderBottomLeftRadius="30px"
        borderBottomRightRadius="30px"
        borderTop="none"
      >
        <Heading
          textTransform="uppercase"
          textAlign="center"
          py="6"
          color="pink.500"
          fontSize={['xl', 'xl', '2xl', '3xl', '3xl']}
        >
          {title}
        </Heading>
        <Flex textTransform="uppercase">
          <Text pr="2" borderRightWidth="1px" borderRightColor="black">
            {date}
          </Text>
          <Text pl="2">{category}</Text>
        </Flex>
        <Text width="80%" py="6" lineHeight="2em">
          {description}
        </Text>
        <Button
          variantColor="pink"
          background="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);"
          color="white"
          rounded="100px"
          width="158px"
          py="6"
          textTransform="uppercase"
          mb="6"
        >
          Discover
        </Button>
      </Flex>
    </PseudoBox>
  )
}

export default PostItem
