import React from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  PseudoBox,
  Box,
  Button,
  Flex
} from '@chakra-ui/core'
import { FaBitcoin, FaEthereum } from 'react-icons/fa'

interface Props {
  isOpen: boolean
  onClose: (event, reason) => void
}

const BitcoinModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius="30px"
        py="16"
        px="64"
        boxSizing="content-box"
        alignItems="center"
        color="black"
      >
        <ModalHeader color="purple.500" fontWeight="bold" fontSize="2xl">
          Sell bitcoin
        </ModalHeader>
        <ModalBody alignItems="center">
          <Text textAlign="center" pb="10">
            Choose your preffered product to continue
          </Text>

          <Flex alignItems="center">
            <PseudoBox
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              background="radial-gradient(100% 100% at 46.86% 0%, #FF8000 0%, #E34141 100%);"
              color="white"
              borderRadius="15px"
              py="16"
              px="40"
              mr="5"
              transition="transform 0.4s"
              _hover={{
                cursor: 'pointer',
                transform: 'scale(1.04)'
              }}
            >
              <Box as={FaBitcoin} size="45px" color="white" />
              <Text pt="6">Bitcoin</Text>
            </PseudoBox>

            <PseudoBox
              display="flex"
              flexDir="column"
              alignItems="center"
              justifyContent="center"
              background="linear-gradient(145.64deg, #00E0FF 9.67%, #0047FF 107.49%);"
              color="white"
              borderRadius="15px"
              py="16"
              px="40"
              transition="transform 0.4s"
              _hover={{
                cursor: 'pointer',
                transform: 'scale(1.04)'
              }}
            >
              <Box as={FaEthereum} size="45px" color="white" />
              <Text pt="6">Ethereum</Text>
            </PseudoBox>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

export default BitcoinModal
