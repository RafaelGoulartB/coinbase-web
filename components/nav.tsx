import React from 'react'
import {
  Button,
  Link as ChakraLink,
  Divider,
  Flex,
  Image,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  PseudoBox,
  Icon
} from '@chakra-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

interface MenuItem {
  link?: string
  onClick?: any
}

const MenuItems: React.FC<MenuItem> = ({ children, link, onClick }) => {
  const router = useRouter()

  return (
    <Link href={link}>
      <PseudoBox
        as="a"
        mt={[6, 6, 0, 0]}
        mr={'36px'}
        display="block"
        fontWeight="bold"
        fontSize={['md', 'md', 'md', 'md']}
        color="black"
        onClick={onClick || undefined}
        transition="border .2s"
        borderBottomColor={router.pathname === link ? 'pink.500' : 'none'}
        borderBottomWidth={router.pathname === link ? '4px' : 'none'}
        borderBottomLeftRadius={router.pathname === link ? '2px' : 'none'}
        borderBottomRightRadius={router.pathname === link ? '2px' : 'none'}
        _hover={{
          cursor: 'pointer',
          textDecor: router.pathname !== link ? 'underline' : 'none'
        }}
      >
        {children}
      </PseudoBox>
    </Link>
  )
}

const Nav: React.FC = props => {
  const [show, setShow] = React.useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as="nav"
      position="relative"
      width="100vw"
      alignItems="center"
      justify="space-between"
      wrap="wrap"
      padding="1.5rem"
      paddingX={['16', '16', '16', '16', '15%']}
      paddingY="8"
      backgroundColor="white"
      color="white"
      zIndex={999}
      overflow="hidden"
      {...props}
    >
      <Flex align="center" mr={5}>
        <Link href="/">
          <Image src="/logo.png" />
        </Link>
      </Flex>
      <Box display={['block', 'block', 'none', 'none']} onClick={handleToggle}>
        <svg
          fill="#333"
          width="22px"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>Menu</title>
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </Box>

      <Box
        display={[
          show ? 'block' : 'none',
          show ? 'block' : 'none',
          'flex',
          'flex'
        ]}
        alignItems="center"
        width={['full', 'full', 'auto', 'auto']}
        marginTop={['20px', '20px', '0', '0', '0']}
      >
        <Divider />
        <MenuItems onClick={handleToggle} link="/">
          Home
        </MenuItems>
        <MenuItems onClick={handleToggle} link="/about">
          About Us
        </MenuItems>
        <MenuItems onClick={handleToggle} link="/blog">
          Blog
        </MenuItems>
        <MenuItems onClick={handleToggle} link="/contact-us">
          Contact Us
        </MenuItems>
      </Box>

      <Box
        display={['none', 'none', 'none', 'block', 'block']}
        alignItems="center"
      >
        <Menu>
          <MenuButton as={Button} color="black" bg="none" mr="10">
            Sell Bitcoin/ Giftcard <Icon name="chevron-down" />
          </MenuButton>
          <MenuList color="black">
            <MenuItem>Sell Bitcoins</MenuItem>
            <MenuItem>Sell Giftcard</MenuItem>
          </MenuList>
        </Menu>
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
      </Box>
    </Flex>
  )
}

export default Nav
