import React from 'react'
import { Heading } from '@chakra-ui/core'
import Divider from './divider'

const Tittle: React.FC = ({ children }) => {
  return (
    <>
      <Heading color="purple.500" mt="6">
        {children}
      </Heading>

      <Divider />
    </>
  )
}

export default Tittle
