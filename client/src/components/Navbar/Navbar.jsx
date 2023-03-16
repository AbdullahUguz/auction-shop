import React from "react";

import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Heading,
  Avatar,
  Flex,
} from "@chakra-ui/react";

function Navbar() {
  return (
    // bg-surface
    <Box as="nav" bg="#EBF8FF" boxShadow="md" p={{ base: "4", lg: "3" }}>
      <Container maxW="1400px">
        <HStack spacing="10" justify="space-between">
          <Button variant="unstyled">AUCTION SHOP</Button>
          <Flex justify="space-between" flex="1">
            <ButtonGroup variant="link" spacing="8">
              <Button variant="link">Product</Button>
            </ButtonGroup>
            <HStack spacing="10">
              <Button colorScheme="blue">Profile</Button>
            </HStack>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
}

export default Navbar;
