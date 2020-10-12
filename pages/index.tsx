import React from 'react'
import { Heading } from '@chakra-ui/core'
import Nav from '../components/nav'

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Heading
        background="linear-gradient(178.18deg, #FD749B -13.56%, #281AC8 158.3%);"
        color="white"
        pt="40"
      >
        Home
      </Heading>
    </>
  )
}

export default Home
