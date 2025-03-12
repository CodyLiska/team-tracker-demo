"use client";

import {
  Box,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";

export default function StatCard({
  title,
  value,
  change,
  icon,
  description,
  colorScheme = "blue",
}) {
  const bgColor = useColorModeValue("white", "gray.800");
  const iconBg = useColorModeValue(`${colorScheme}.100`, `${colorScheme}.800`);
  const iconColor = useColorModeValue(
    `${colorScheme}.500`,
    `${colorScheme}.200`
  );

  return (
    <Box
      bg={bgColor}
      p={6}
      borderRadius="lg"
      boxShadow="sm"
      position="relative"
      overflow="hidden"
    >
      <Box
        position="absolute"
        top={4}
        right={4}
        p={2}
        borderRadius="full"
        bg={iconBg}
      >
        <Icon as={icon} w={6} h={6} color={iconColor} />
      </Box>

      <Stat>
        <StatLabel fontSize="sm" color="gray.500">
          {title}
        </StatLabel>
        <StatNumber fontSize="3xl" fontWeight="bold" my={2}>
          {value}
        </StatNumber>
        {change && (
          <StatHelpText>
            <StatArrow type={change > 0 ? "increase" : "decrease"} />
            {Math.abs(change)}%
          </StatHelpText>
        )}
        {description && (
          <StatHelpText color="gray.500">{description}</StatHelpText>
        )}
      </Stat>
    </Box>
  );
}
