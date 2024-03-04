import React from "react";
import { Box, Heading, VStack, Text } from "@chakra-ui/react";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <VStack p={8}>
      <Navigation />
      <Heading mb="8">About Us</Heading>
      <Box>
        <Text fontSize="lg">This website was created by a team of dedicated developers who love to build useful and beautiful web applications.</Text>
      </Box>
    </VStack>
  );
};

export default About;
