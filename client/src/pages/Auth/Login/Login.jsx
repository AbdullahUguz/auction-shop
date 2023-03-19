import {useNavigate} from "react-router-dom";
import { useFormik } from "formik";
import validations from "../../../validations/Validation";
import { fetchLogin } from "../../../api/api";
import {useAuth} from "../../../contexts/AuthContext";

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
  Alert
} from "@chakra-ui/react";


function Login() {

  const navigate = useNavigate();
  const {login}= useAuth();

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    isSubmitting,
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
        }).then((res)=>{
          console.log("cookie : ",document.cookie)
          login({username:res.username,role:res.role});
          navigate("/");
        }).catch(err=>{
           alert(err);
           bag.resetForm();
        });
        
        
      } catch (error) {
        console.log(error);
      }
    },
    validationSchema: validations,
  });


  return (
      <Flex align="center" justifyContent="center">
        <Box pt="20">
          <Box textAlign="center" mb="4">
            <Heading size={"xl"} mb="3">AUCTION SHOP</Heading>
            <Heading size={"lg"}>Login</Heading>
          </Box>
          <Box my={5}>
             {errors.general && (
              <Alert status="error">{errors.general}</Alert>
            )} 
            </Box>

          <Box
            bg="white"
            px="16"
            py="10"
            boxShadow="dark-lg"
            rounded="md"
          >
            <form onSubmit={handleSubmit}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>
                <Input
                  htmlSize="30"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  isInvalid={touched.email && errors.email}
                />
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
              </FormControl>

              <Box align="center" mt={3} width="full">
                <Button mt="4" width="full" colorScheme="blue" type="submit">
                  Login
                </Button>
                <Divider />
                <Text mt={4} color="muted" fontSize="xs">Don't have an account?</Text>
                <Button variant="link" size="xs" colorScheme="blue">
                  Register
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Flex>
    
  );
}

export default Login;
