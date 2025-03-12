"use client";

import { Box, useColorModeValue, BoxProps } from "@chakra-ui/react";

interface CardProps extends BoxProps {
  children: React.ReactNode;
  isHoverable?: boolean;
}

export default function Card({
  children,
  isHoverable = false,
  ...props
}: CardProps) {
  const bgColor = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box
      bg={bgColor}
      borderWidth="1px"
      borderColor={borderColor}
      borderRadius="lg"
      overflow="hidden"
      boxShadow="sm"
      transition="all 0.2s"
      _hover={
        isHoverable
          ? {
              transform: "translateY(-4px)",
              boxShadow: "md",
            }
          : {}
      }
      {...props}
    >
      {children}
    </Box>
  );
}
