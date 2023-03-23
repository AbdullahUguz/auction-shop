import { useFormik } from "formik";
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
      <Box pt="20">
        <Box textAlign="center" mb="4">
          <Heading size={"xl"} mb="3">
            AUCTION SHOP
          </Heading>
          <Heading size={"lg"}>Register</Heading>
        </Box>
        <Box bg="white" px="16" py="10" boxShadow="dark-lg" rounded="md">
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
                <Text color="red">{errors.username}</Text>
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
              {errors.email ? (
                <Text color="red">{errors.email}</Text>
              ) : (
                <></>
              )}
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
                <Text color="red">{errors.password}</Text>
              ) : (
                <></>
              )}
            </FormControl>

            <Box align="center" mt={3} width="full">
              <Button mt="4" width="full" colorScheme="green" type="submit">
                Register
              </Button>
              <Divider />
              <Text mt={4} color="muted" fontSize="xs">
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
