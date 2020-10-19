import React from 'react'
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
  PseudoBox,
  FormControl,
  Input,
  Button,
  ModalFooter
} from '@chakra-ui/core'

interface Props {
  isOpen: boolean
  onClose: (event, reason) => void
}

const LoginModal: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent
        borderRadius="30px"
        py="16"
        px="40"
        boxSizing="content-box"
        alignItems="center"
        color="black"
      >
        <ModalHeader color="purple.500" fontWeight="bold" fontSize="2xl">
          Welcome back!
        </ModalHeader>
        <ModalBody alignItems="center">
          <Text textAlign="center" pb="10">
            Kindly fill in your login details to proceed
          </Text>

          <FormControl>
            <Input
              type="email"
              id="email"
              flexGrow={1}
              placeholder="Email"
              flexBasis="330px"
              focusBorderColor="purple.500"
              minH="60px"
              mb="6"
            />
            <Input
              id="password"
              placeholder="Password"
              flexBasis="330px"
              focusBorderColor="purple.500"
              flexGrow={1}
              minH="60px"
            />

            <PseudoBox
              textAlign="end"
              fontSize="xs"
              pt="3"
              _hover={{ textDecor: 'underline', cursor: 'pointer' }}
            >
              Forgot my password
            </PseudoBox>
          </FormControl>
        </ModalBody>

        <ModalFooter display="flex" flexDir="column" alignItems="center">
          <Button
            variantColor="pink"
            background="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);"
            color="white"
            rounded="100px"
            width="158px"
            py="6"
            textTransform="uppercase"
          >
            Login
          </Button>

          <Text fontSize="xs" display="inline" pt="12">
            Don’t have an account yet?{' '}
            <PseudoBox
              display="inline"
              fontWeight="bold"
              textDecor="underline"
              _hover={{ cursor: 'pointer' }}
            >
              Sign Up
            </PseudoBox>
          </Text>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default LoginModal
