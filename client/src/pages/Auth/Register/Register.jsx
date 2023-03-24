import { useFormik } from "formik";
import Logo from "../../../logo/logo.png";
import {
  Flex,
  Box,
  Heading,
  FormControl,
  FormLabel,
  Button,
  Input,
  Divider,
  Text,
  Image,
} from "@chakra-ui/react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { fetchRegister } from "../../../api/api";
import validations from "./Validation";
import { useAuth } from "../../../contexts/AuthContext";

function Register() {
  const navigate = useNavigate();
  const { loggedIn } = useAuth();

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    //  isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    onSubmit: async (values, bag) => {
      try {
        await fetchRegister({
          username: values.username,
          email: values.email,
          password: values.password,
        })
          .then((res) => {
            navigate("/");
          })
          .catch((err) => {
            alert(err);
            bag.resetForm();
          });
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: validations,
  });

  return !loggedIn ? (
    <Flex align="center" justifyContent="center">
      <Box >
        <Box align="center" mt="5" mb="3">
          <Image w="300px" h="180px" src={Logo} alt="Auction Shop" />
        </Box>

        <Box bg="white" px="16" py="8" boxShadow="dark-lg" rounded="md">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                htmlSize="30"
                name="username"
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                isInvalid={touched.username && errors.username}
              />
              {errors.username ? (
                <Text fontSize='sm' color="red">{errors.username}</Text>
              ) : (
                <></>
              )}
            </FormControl>

            <FormControl mt="4">
              <FormLabel>E-mail</FormLabel>
              <Input
                name="email"
                type="email"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
                isInvalid={touched.email && errors.email}
              />
              {errors.email ? <Text fontSize='sm' color="red">{errors.email}</Text> : <></>}
            </FormControl>

            <FormControl mt="4">
              <FormLabel>Password</FormLabel>
              <Input
                name="password"
                type="password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                isInvalid={touched.password && errors.password}
              />
              {errors.password ? (
                <Text fontSize='sm' color="red">{errors.password}</Text>
              ) : (
                <></>
              )}
            </FormControl>

            <Box align="center" mt={3} width="full">
              <Button mt="4" width="full" colorScheme="green" type="submit">
                Register
              </Button>
              <Divider />
              <Text mt="3" color="muted" fontSize="xs">
                If you have an account
              </Text>
              <Button variant="link" size="xs" colorScheme="blue">
                <Link to="/login">Login</Link>
              </Button>
            </Box>
          </form>
        </Box>
      </Box>
    </Flex>
  ) : (
    <Navigate to="/" />
  );
}

export default Register;
