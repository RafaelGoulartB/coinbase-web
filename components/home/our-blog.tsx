import React from 'react'
import { Flex, Heading, Text, Button, PseudoBox } from '@chakra-ui/core'
import Tittle from '../title'

const OurBlog: React.FC = () => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      mt="12"
      textAlign="center"
      maxW="1360px"
      w="100%"
      px={['8', '8', '32', '16', '0']}
      mx="auto"
    >
      <Tittle>Our Blog</Tittle>

      <Text textAlign="center" lineHeight="2.2em" color="black">
        Get to know the latest stuff via our blog post.
      </Text>

      <Flex mt="8" alignItems="center" mx="auto" justifyContent="center">
        {/* Item */}
        <PseudoBox
          display={['none', 'none', 'none', 'flex', 'flex']}
          mr="-5%"
          flexDir="column"
          alignItems="flex-start"
          textAlign="left"
          zIndex={1}
          borderColor="gray.500"
          borderWidth="1px"
          borderRadius="15px"
          maxW="370px"
          boxShadow="0px 50px 100px rgba(0, 0, 0, 0.1)"
          py="6"
          px="16"
        >
          <Flex textTransform="uppercase" pb="3" color="gray" fontSize="10px">
            <Text pr="2" borderRightWidth="1px" borderRightColor="gray">
              19 June, 2019
            </Text>
            <Text pl="2">Business</Text>
          </Flex>
          <Heading
            as="h6"
            color="#888888"
            textTransform="uppercase"
            fontSize="2xl"
            lineHeight="1.5em"
          >
            ETH to naira exchange rate is now #400 per...
          </Heading>
          <Text lineHeight="2.2em" color="black" py="3" fontSize="10px">
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea...
          </Text>

          <Button
            variantColor="gray"
            background="gray"
            color="white"
            rounded="100px"
            width="140px"
            py="4"
            textTransform="uppercase"
            mb="6"
          >
            Read more
          </Button>
        </PseudoBox>
        {/* End Item */}

        {/* Main Item */}
        <Flex
          bg="white"
          flexDir="column"
          alignItems="flex-start"
          textAlign="left"
          zIndex={999}
          borderColor="pink.500"
          borderWidth="1px"
          borderRadius="15px"
          maxW="465px"
          boxShadow="0px 50px 100px rgba(0, 0, 0, 0.1)"
          py="10"
          px="16"
        >
          <Flex textTransform="uppercase" pb="6" color="black" fontSize="xs">
            <Text pr="2" borderRightWidth="1px" borderRightColor="black">
              19 June, 2019
            </Text>
            <Text pl="2">Business</Text>
          </Flex>
          <Heading
            as="h6"
            color="pink.500"
            textTransform="uppercase"
            fontSize="2xl"
            lineHeight="1.5em"
          >
            ETH to naira exchange rate is now #400 per...
          </Heading>
          <Text lineHeight="2.2em" color="black" py="6" fontSize="xs">
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea...
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
            Read more
          </Button>
        </Flex>
        {/* End Main Item */}

        {/* Item */}
        <PseudoBox
          display={['none', 'none', 'none', 'flex', 'flex']}
          ml="-5%"
          flexDir="column"
          alignItems="flex-start"
          textAlign="left"
          zIndex={1}
          borderColor="gray.500"
          borderWidth="1px"
          borderRadius="15px"
          maxW="370px"
          boxShadow="0px 50px 100px rgba(0, 0, 0, 0.1)"
          py="6"
          px="16"
        >
          <Flex textTransform="uppercase" pb="3" color="gray" fontSize="10px">
            <Text pr="2" borderRightWidth="1px" borderRightColor="gray">
              19 June, 2019
            </Text>
            <Text pl="2">Business</Text>
          </Flex>
          <Heading
            as="h6"
            color="#888888"
            textTransform="uppercase"
            fontSize="2xl"
            lineHeight="1.5em"
          >
            EXCHANGE 5 PRODUCTS & GET 1 FREE PRODUCT.
          </Heading>
          <Text lineHeight="2.2em" color="black" py="3" fontSize="10px">
            Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea...
          </Text>

          <Button
            variantColor="gray"
            background="gray"
            color="white"
            rounded="100px"
            width="140px"
            py="4"
            textTransform="uppercase"
            mb="6"
          >
            Read more
          </Button>
        </PseudoBox>
        {/* End Item */}
      </Flex>
    </Flex>
  )
}

export default OurBlog
