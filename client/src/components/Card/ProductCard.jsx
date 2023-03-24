import React from "react";
import {
    Card,
    CardBody,
    Image,
    Stack,
    Heading,
    Text,
    Divider,
    CardFooter,
    ButtonGroup,
    Button
    
} from '@chakra-ui/react';
import { Link } from "react-router-dom";

function ProductCard({product}) {
  return (
    <Card maxW="sm" >
      <CardBody>
        <Image
          src={product.imageUrl}
          alt="Green double couch with wooden legs"
          borderRadius="lg"
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{product.title}</Heading>
          <Text color="blue.600" fontSize="2xl">
            {product.price} TL
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button variant="solid" colorScheme="blue">
            <Link to={`/products/${product.id}`} >Go To Auction</Link>
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
