"use client";

import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Container,
  Heading,
  IconButton,
  useDisclosure,
  HStack,
  Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import { navigationItems } from "@/config/navigation";

export default function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const bgColor = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bgColor} px={4} boxShadow="sm">
      <Container maxW="container.xl">
        <Flex h={16} alignItems="center" justifyContent="space-between">
          <IconButton
            size="md"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label="Open Menu"
            display={{ md: "none" }}
            onClick={onToggle}
          />

          <HStack spacing={8} alignItems="center">
            <NextLink href="/" passHref>
              <Heading size="md" cursor="pointer">
                Soccer Tracker
              </Heading>
            </NextLink>

            <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
              {navigationItems.map((navItem) => (
                <NextLink key={navItem.label} href={navItem.href} passHref>
                  <Link
                    px={2}
                    py={1}
                    rounded="md"
                    _hover={{
                      textDecoration: "none",
                      bg: useColorModeValue("gray.200", "gray.700"),
                    }}
                  >
                    {navItem.label}
                  </Link>
                </NextLink>
              ))}
            </HStack>
          </HStack>

          <Stack direction="row" spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
}
