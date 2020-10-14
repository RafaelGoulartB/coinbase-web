import React from 'react'
import { Text, Image, Flex } from '@chakra-ui/core'
import HeroContainer from '../components/hero/hero-container'
import HeroBreadcrumb from '../components/hero/hero-breadcrumb'
import HeroTexts from '../components/hero/hero-texts'
import HeroTitle from '../components/hero/hero-title'
import PostItem from '../components/blog/post-item'

const Blog: React.FC = () => {
  return (
    <>
      <HeroContainer>
        <HeroTexts>
          <HeroBreadcrumb />
          <HeroTitle>Stay updated, Never miss a post.</HeroTitle>
          <Text py="6" maxW="550px">
            Get to know the latest stuff about our services via our blog post.
          </Text>
        </HeroTexts>

        <Image
          src="/blog-bg.png"
          display={['none', 'none', 'none', 'block', 'block']}
          pb={['0', '0', '0', '40', '20']}
          mr="8"
        />
      </HeroContainer>

      <Flex
        flexDir="column"
        px={['8', '8', '32', '48', '48']}
        mt={['32', '32', '32', '8', '32']}
      >
        <PostItem
          key="1"
          title="How to sell your itunes giftcards with us."
          date="19 June, 2019"
          category="Business"
          description="Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
          voluptaria in. Ad mei modus quodsi complectitur, postea verterem
          persecuti cu est, sea epicuri."
          img_url="/blog/post-1.png"
        />
        <PostItem
          key="1"
          title="Exchange 5 products & get 1 free product."
          date="19 June, 2019"
          category="Business"
          description="Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
            voluptaria in. Ad mei modus quodsi complectitur, postea verterem
            persecuti cu est, sea epicuri."
          img_url="/blog/post-2.png"
        />
        <PostItem
          key="1"
          title="ETH to naira exchange rate is now #400 per..."
          date="19 June, 2019"
          category="Business"
          description="Lorem ipsum dolor sit amet, magna habemus ius ad, qui minimum
          voluptaria in. Ad mei modus quodsi complectitur, postea verterem
          persecuti cu est, sea epicuri."
          img_url="/blog/post-3.png"
        />
      </Flex>
    </>
  )
}

export default Blog
