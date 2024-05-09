import React from "react";

import { Box, Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" mt="auto" py={6} bg="blue.500" color="white" position="fixed" bottom={0} width='100%' >
        <Flex justify="center" mt={2}>
            <Link href="#" mx={2}>
                Privacy Policy
            </Link>
            <Link href="#" mx={2}>
                Terms of use
            </Link>
            <Link href="#" mx={2}>
                Contacts
            </Link>
        </Flex>
        <Flex
            direction="column"
            align="center"
            justify="center"
            textAlign="center"
            marginTop="10px"
        >
            <Text>
                Diagnostic system for pneumonia diseases &copy; {new Date().getFullYear()}
            </Text>
        </Flex>
        
    </Box>
  );
};

export default Footer;

