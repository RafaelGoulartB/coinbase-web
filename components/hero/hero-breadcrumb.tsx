import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/core'
import { useRouter } from 'next/dist/client/router'

const HeroBreadcrumb: React.FC = () => {
  const router = useRouter()

  return (
    <Breadcrumb textTransform="uppercase" mb="8">
      <BreadcrumbItem>
        <BreadcrumbLink href="/">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink>{router.pathname.substring(1)}</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  )
}

export default HeroBreadcrumb
