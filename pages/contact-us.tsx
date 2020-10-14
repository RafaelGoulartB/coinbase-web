import React from 'react'
import {
  Text,
  Image,
  Flex,
  FormControl,
  Input,
  Button,
  Textarea
} from '@chakra-ui/core'
import HeroContainer from '../components/hero/hero-container'
import HeroBreadcrumb from '../components/hero/hero-breadcrumb'
import HeroTexts from '../components/hero/hero-texts'
import HeroTitle from '../components/hero/hero-title'

const ContactUs: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <HeroTexts>
          <HeroBreadcrumb />
          <HeroTitle>24/7 Customer support Including weekends.</HeroTitle>
          <Text py="6" maxW="550px">
            We’re always there ti help regardless the number of queries at hand.
          </Text>
        </HeroTexts>

        <Image
          src="/contact-bg.png"
          display={['none', 'none', 'none', 'block', 'block']}
          pb={['0', '0', '0', '40', '20']}
          mr="8"
        />
      </HeroContainer>

      <Flex
        flexDir="column"
        px={['8', '8', '32', '16', '0']}
        alignItems="center"
        pt={['32', '32', '32', '8', '32']}
      >
        <Text pb="12" color="#333">
          Please note that all message will be replied within the next 12hours
        </Text>

        <form>
          <FormControl
            as="fieldset"
            display="flex"
            flexDir="row"
            flexWrap="wrap"
            flexGrow={1}
            justifyContent="space-between"
            alignItems="center"
          >
            <Input
              id="fname"
              placeholder="First name"
              flexBasis="330px"
              flexGrow={1}
              minH="60px"
              mb={['6', '6', '0', '0', '0']}
              mr={['0', '0', '0', '6', '6']}
            />
            <Input
              type="email"
              id="email"
              flexGrow={1}
              placeholder="Email"
              flexBasis="330px"
              minH="60px"
            />
          </FormControl>
          <FormControl mt="6">
            <Textarea
              placeholder="Your Content"
              size="lg"
              resize="vertical"
              minH="180px"
            />
          </FormControl>
          <Button
            variantColor="pink"
            background="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);"
            color="white"
            rounded="100px"
            width="158px"
            mt="16"
            mb="6"
            py="6"
            textTransform="uppercase"
          >
            Publish
          </Button>
        </form>
      </Flex>
    </>
  )
}

export default ContactUs
