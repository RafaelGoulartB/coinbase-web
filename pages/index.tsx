import React from 'react'
import { Heading } from '@chakra-ui/core'
import Nav from '../components/nav'

const Home: React.FC = () => {
  return (
    <>
      <Nav />
      <Heading
        background="linear-gradient(174.48deg, #FD749B -12.41%, #281AC8 88.56%);"
        color="white"
        pt="40"
      >
        Home
      </Heading>
    </>
  )
}

export default Home
