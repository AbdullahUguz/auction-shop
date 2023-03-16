import React from 'react'
import {
    Flex,
    Box,
    Heading,
    FormControl,
    FormLabel,
    Button,
    Input,
    Divider,
    Text
  } from "@chakra-ui/react";

function Register() {
  return (
    <Flex align="center" justifyContent="center">
        <Box pt="20">
          <Box textAlign="center" mb="4">
            <Heading size={"xl"} mb="3">AUCTION SHOP</Heading>
            <Heading size={"lg"}>Register</Heading>
          </Box>
          {/*<Box my={5}>
             {formik.errors.general && (
              <Alert status="error">{formik.errors.general}</Alert>
            )} 
            </Box> */}

          <Box
            bg="white"
            px="16"
            py="10"
            boxShadow="dark-lg"
            rounded="md"
          >
            {/* <form onSubmit={formik.handleSubmit}> */}
            <form>
             <FormControl>
                <FormLabel>Username</FormLabel>
                <Input
                  htmlSize="30"
                  name="text"
                  //   onChange={formik.handleChange}
                  //   onBlur={formik.handleBlur}
                  //   value={formik.values.email}
                  //   isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>E-mail</FormLabel>
                <Input
                  name="email"
                  //   onChange={formik.handleChange}
                  //   onBlur={formik.handleBlur}
                  //   value={formik.values.email}
                  //   isInvalid={formik.touched.email && formik.errors.email}
                />
              </FormControl>

              <FormControl mt="4">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  type="password"
                  //   onChange={formik.handleChange}
                  //   onBlur={formik.handleBlur}
                  //   value={formik.values.password}
                  //   isInvalid={formik.touched.password && formik.errors.password}
                />
              </FormControl>

              <Box align="center" mt={3} width="full">
                <Button mt="4" width="full" colorScheme="green" type="submit">
                  Register
                </Button>
                <Divider />
                <Text mt={4} color="muted" fontSize="xs">If you have an account</Text>
                <Button variant="link" size="xs" colorScheme="blue">
                    Login
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Flex>
  )
}

export default Register
