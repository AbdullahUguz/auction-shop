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
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <Card maxW="sm">
      <CardBody>
        <Image
          src={product.imageUrl}
          alt="Product Image"
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
          <Link to={`/products/${product.id}`}>
            <Button variant="solid" colorScheme="blue">
              Go To Auction
            </Button>
          </Link>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProductCard;
