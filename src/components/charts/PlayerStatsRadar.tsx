"use client";

import { Box, SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import PlayerCard from "../player/PlayerCard";

export default function PlayerStatsRadar({ players }) {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      p={6}
      borderRadius="lg"
      boxShadow="sm"
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {players.map((player) => (
          <PlayerCard key={player.number} player={player} />
        ))}
      </SimpleGrid>
    </Box>
  );
}
