import React from "react";
import { Box, Container, Text } from "@chakra-ui/react";

function Error() {
  return (
    <>
      <Container align="center">
        <Box mt="60">
          <Text  fontSize="6xl" as="b" color="tomato">
            NOT FOUND !!!
          </Text>
        </Box>
      </Container>
    </>
  );
}

export default Error;
