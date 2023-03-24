import { Link } from "react-router-dom";
import Logo from "../../logo/logo.png";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Flex,
  Image
} from "@chakra-ui/react";

function Navbar() {
  return (
    <Box as="nav" bg="#EBF8FF" boxShadow="md" p={{ base: "4", lg: "3" }}>
      <Container maxW="1400px">
        <HStack spacing="10" justify="space-between">
          <Button variant="unstyled" mb="3">
            <Link to="/">
              <Image w="120px"  h="58px" src={Logo} alt="Auction Shop" />
            </Link>
          </Button>
          <Flex justify="space-between" flex="1">
            <ButtonGroup variant="link" spacing="8">
              <Button variant="link">
                <Link to="/">Main Page</Link>
              </Button>
            </ButtonGroup>
            <HStack spacing="10">
              <Button colorScheme="blue">
                <Link to="/profile">Profile</Link>
              </Button>
            </HStack>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
}

export default Navbar;
