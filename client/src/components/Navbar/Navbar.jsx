import { Link } from "react-router-dom";
import Logo from "../../logo/logo.png";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  HStack,
  Flex,
  Image,
} from "@chakra-ui/react";
import { useAuth } from "../../contexts/AuthContext";

function Navbar() {
  const { user } = useAuth();

  return (
    <Box as="nav" bg="#EBF8FF" boxShadow="md" p={{ base: "4", lg: "3" }}>
      <Container maxW="1400px">
        <HStack spacing="10" justify="space-between">
          <Button variant="unstyled" mb="3">
            <Link to="/">
              <Image w="120px" h="58px" src={Logo} alt="Auction Shop" />
            </Link>
          </Button>
          <Flex justify="space-between" flex="1">
            <ButtonGroup variant="link" spacing="8">
              <Link to="/">
                <Button variant="link">Main Page</Button>
              </Link>
            </ButtonGroup>
            <HStack spacing="8">
              <Flex>
                <Link to="/profile">
                  <Button colorScheme="blue">Profile</Button>
                </Link>
                {user.role === "admin" ? (
                  <Link to="/admin">
                    <Button ml="2" colorScheme="green">Admin Page</Button>
                  </Link>
                ) : (
                  <></>
                )}
              </Flex>
            </HStack>
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
}

export default Navbar;
