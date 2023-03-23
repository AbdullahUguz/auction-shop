import {
  Container,
  Box,
  Avatar,
  Button,
  Flex,
  Input,
  FormLabel,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Profile() {
  const { logout,user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      logout(() => {
        navigate("/");
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Container maxW="1400px" mt={3}>
      <Flex align="center" justifyContent="center">
        <Box textAlign="center">
          <Avatar size="xl" bg="teal.500" />
          <Box bg="white" px="8" py="5" boxShadow="base" rounded="md">
            <FormLabel>Username</FormLabel>
            <Input placeholder={user.username} disabled />
            <Button mt={5} bg="red" color="white" onClick={handleLogout}>
              Logout
            </Button>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}

export default Profile;
