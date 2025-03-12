"use client";

import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
  Flex,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      bg={bgColor}
      borderTop={1}
      borderStyle={"solid"}
      borderColor={borderColor}
    >
      <Container
        as={Stack}
        maxW={"container.xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <Flex gap={6}>
          <Link href={"#"} isExternal>
            About
          </Link>
          <Link href={"#"} isExternal>
            Contact
          </Link>
          <Link href={"#"} isExternal>
            Privacy Policy
          </Link>
        </Flex>
        <Stack direction={"row"} spacing={6}>
          <Link href={"#"} isExternal>
            <Icon as={FaTwitter} w={6} h={6} />
          </Link>
          <Link href={"#"} isExternal>
            <Icon as={FaGithub} w={6} h={6} />
          </Link>
          <Link href={"#"} isExternal>
            <Icon as={FaLinkedin} w={6} h={6} />
          </Link>
        </Stack>
        <Text>© 2024 Soccer Player Tracker. All rights reserved</Text>
      </Container>
    </Box>
  );
}
