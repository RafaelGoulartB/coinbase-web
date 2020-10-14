import React from 'react'
import { Flex, Text, Heading, Stack, Avatar } from '@chakra-ui/core'
import Divider from '../divider'

const YourTeam: React.FC = () => {
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
      <Heading color="pink.500">Meet the Team</Heading>
      <Divider />
      <Text lineHeight="2.2em" color="black">
        Meet the team that makes the process of this system fast and painless as
        possible to provide you with good result
      </Text>

      <Stack isInline mt="6">
        <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
        <Avatar name="Kola Tioluwani" src="https://bit.ly/tioluwani-kolawole" />
        <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
        <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
        <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
        <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
        <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
      </Stack>
    </Flex>
  )
}

export default YourTeam
