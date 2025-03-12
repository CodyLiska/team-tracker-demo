// HOME PAGE

"use client";

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Icon,
  useColorModeValue,
  Flex,
} from "@chakra-ui/react";
import Link from "next/link";
import { menuItems } from "@/config/menuItems";
import { useEffect, useState } from "react";

interface StatsWidgetProps {
  title: string;
  value: number | string;
  icon: React.ComponentType;
}

export default function Home() {
  const cardBg = useColorModeValue("white", "gray.800");
  const cardHoverBg = useColorModeValue("gray.50", "gray.700");
  const [randomValue, setRandomValue] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number | null>(null);

  useEffect(() => {
    setRandomValue(Math.random());
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box bg={useColorModeValue("gray.50", "gray.900")} minH="100vh">
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          <VStack spacing={4} textAlign="center">
            <Heading
              fontSize={{ base: "4xl", md: "5xl" }}
              bgGradient="linear(to-r, blue.400, purple.500)"
              bgClip="text"
            >
              Soccer Player Tracker
            </Heading>
            <Text
              fontSize={{ base: "lg", md: "xl" }}
              color={useColorModeValue("gray.600", "gray.300")}
              maxW="2xl"
            >
              Comprehensive player management and performance tracking platform
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {menuItems.map((item) => (
              <Link href={item.path} key={item.title}>
                <Box
                  p={8}
                  bg={cardBg}
                  borderRadius="xl"
                  boxShadow="lg"
                  transition="all 0.3s"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "xl",
                    bg: cardHoverBg,
                  }}
                >
                  <VStack spacing={4} align="flex-start">
                    <Flex
                      bgGradient={item.gradient}
                      w={12}
                      h={12}
                      borderRadius="full"
                      align="center"
                      justify="center"
                    >
                      <Icon as={item.icon} w={6} h={6} color="white" />
                    </Flex>
                    <VStack align="flex-start" spacing={2}>
                      <Heading size="md">{item.title}</Heading>
                      <Text
                        color={useColorModeValue("gray.600", "gray.300")}
                        fontSize="sm"
                      >
                        {item.description}
                      </Text>
                    </VStack>
                  </VStack>
                </Box>
              </Link>
            ))}
          </SimpleGrid>

          {/* Below the 4 main buttons */}
        </VStack>
      </Container>
    </Box>
  );
}
