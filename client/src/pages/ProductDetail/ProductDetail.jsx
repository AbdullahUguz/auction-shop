import React from "react";
import {
  Container,
  Flex,
  Stack,
  SimpleGrid,
  Grid,
  GridItem,
  Box,
  Text,
  Button,
  Center,
  Square,
} from "@chakra-ui/react";
import ProductDetailCard from "../../components/Card/ProductDetailCard";
import ChatCard from "../../components/Card/ChatCard";

function ProductDetail() {
  return (
    <Container maxW="1400px" mt={3}>
      <SimpleGrid columns={[1, null, 2]} spacing="20px">
        <ProductDetailCard></ProductDetailCard>
        <ChatCard></ChatCard>
      </SimpleGrid>
    </Container>
  );
}

export default ProductDetail;
