import React from "react";
import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
} from '@chakra-ui/react';

function ProductDetailCard({product,price}) {
  return (
    <Card maxW="lg" px={10}>
      <CardBody>
        <Image 
          h="400px"
          w="350px"
          src={product.imageUrl ? product.imageUrl:"https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"}
          alt={product.title}
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <Text>
            {product.description}
          </Text>
          
          <Text color="blue.600" fontSize="2xl">
             {product.price} TL
          </Text>
          <Text color="green" fontSize="2xl">
             {price} TL
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default ProductDetailCard;
