import React from "react";
import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Divider,
  CardFooter,
  ButtonGroup,
  Button,
  Input,
  Heading,
  CardHeader
} from "@chakra-ui/react";

function ChatCard() {
  return (
    <>
      <Card maxW="lg">
        <CardHeader>
          <Heading size="md">Live Data</Heading>
        </CardHeader>
        <Divider />
        <CardBody>
          <Stack mt="6" spacing="3"></Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <Input type="number"/>
          <Button variant="solid" ml={2} colorScheme="blue">
            Add to cart
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default ChatCard;
