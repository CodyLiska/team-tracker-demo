"use client";

import { Box, Circle, Text, useColorModeValue } from "@chakra-ui/react";

export default function TeamFormation({ players, formation = "4-3-3" }) {
  const bgColor = useColorModeValue("green.100", "green.900");
  const playerBg = useColorModeValue("white", "gray.800");
  const playerColor = useColorModeValue("gray.800", "white");

  const getPositions = (formation) => {
    const rows = formation.split("-").map(Number);
    rows.unshift(1); // Add goalkeeper

    let positions = [];
    let yStep = 100 / (rows.length + 1);

    rows.forEach((playersInRow, rowIndex) => {
      let xStep = 100 / (playersInRow + 1);
      for (let i = 1; i <= playersInRow; i++) {
        positions.push({
          x: `${xStep * i}%`,
          y: `${yStep * (rowIndex + 1)}%`,
        });
      }
    });

    return positions;
  };

  const positions = getPositions(formation);

  return (
    <Box
      w="100%"
      h="600px"
      bg={bgColor}
      position="relative"
      borderRadius="lg"
      p={4}
    >
      {positions.map((pos, index) => (
        <Box
          key={index}
          position="absolute"
          left={pos.x}
          top={pos.y}
          transform="translate(-50%, -50%)"
        >
          <Circle
            size="60px"
            bg={playerBg}
            color={playerColor}
            boxShadow="md"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
          >
            <Text fontSize="sm" fontWeight="bold">
              {players[index]?.number || ""}
            </Text>
            <Text fontSize="xs">{players[index]?.name || ""}</Text>
          </Circle>
        </Box>
      ))}
    </Box>
  );
}
