// Header.js
import React from 'react';
import { Flex, Box, Heading, Button } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      p="4"
      bg="blue.500"
      color="white"
    >
      <Box>
        <Heading as="h1" size="lg">
            Domina el terreno
        </Heading>
      </Box>
      <Box>
        <Button colorScheme="teal" mr="4">
            ver detalles
        </Button>
        <Button colorScheme="teal">
            ver video
        </Button>
      </Box>
    </Flex>
  );
};

export default Header;
