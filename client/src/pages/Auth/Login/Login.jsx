import { Link, Navigate, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import validations from "./Validation";
import { fetchLogin } from "../../../api/api";
import { useAuth } from "../../../contexts/AuthContext";
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

function Login() {
  const navigate = useNavigate();
  const { login, loggedIn } = useAuth();

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
      email: "",
      password: "",
    },
    onSubmit: async (values, bag) => {
      try {
        await fetchLogin({
          email: values.email,
          password: values.password,
        })
          .then((res) => {
            console.log("cookie : ", document.cookie);
            login({ username: res.username, role: res.role });
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
      <Box>
        <Box align="center" mb="3" mt="10">
          <Image w="300px" h="180px" src={Logo} alt="Auction Shop" />
        </Box>
        <Box bg="white" px="16" py="10" boxShadow="dark-lg" rounded="md">
          <form onSubmit={handleSubmit}>
            <FormControl>
              <FormLabel>E-mail</FormLabel>
              <Input
                htmlSize="30"
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
              <Button mt="4" width="full" colorScheme="blue" type="submit">
                Login
              </Button>
              <Divider />
              <Text mt={4} color="muted" fontSize="xs">
                Don't have an account?
              </Text>
              <Button variant="link" size="xs" colorScheme="blue">
                <Link to="/register">Register</Link>
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

export default Login;
