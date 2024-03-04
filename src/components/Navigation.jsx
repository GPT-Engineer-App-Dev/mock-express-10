import React from "react";
import { HStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <HStack spacing={8} mb={8}>
      <Link as={RouterLink} to="/">
        Home
      </Link>
      <Link as={RouterLink} to="/about">
        About
      </Link>
    </HStack>
  );
};

export default Navigation;
