"use client";

import {
  Box,
  VStack,
  Icon,
  Text,
  Flex,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/config/navigation";

const SidebarItem = ({ icon, children, href, isActive }) => {
  const activeBg = useColorModeValue("blue.50", "blue.900");
  const hoverBg = useColorModeValue("gray.100", "gray.700");

  return (
    <Link
      as={NextLink}
      href={href}
      _hover={{ textDecoration: "none" }}
      width="100%"
    >
      <Flex
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        bg={isActive ? activeBg : "transparent"}
        _hover={{
          bg: isActive ? activeBg : hoverBg,
        }}
      >
        <Icon
          mr="4"
          fontSize="16"
          as={icon}
          color={isActive ? "blue.500" : "gray.500"}
        />
        <Text color={isActive ? "blue.500" : "gray.500"}>{children}</Text>
      </Flex>
    </Link>
  );
};

export default function Sidebar() {
  const pathname = usePathname();
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
    >
      <VStack spacing={1} align="stretch" py={5}>
        {navigationItems.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            href={item.href}
            isActive={pathname === item.href}
          >
            {item.label}
          </SidebarItem>
        ))}
      </VStack>
    </Box>
  );
}
