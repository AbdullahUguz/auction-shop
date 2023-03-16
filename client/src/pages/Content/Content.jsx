import { Container, Flex, Stack,SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import ProductCard from '../../components/Card/ProductCard'

function Content() {
  return (
    <Container maxW="1400px" mt={3}>

      <SimpleGrid  spacing={4} templateColumns='repeat(auto-fill, minmax(350px, 2fr))'>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>

      </SimpleGrid>

    </Container>
  )
}

export default Content
