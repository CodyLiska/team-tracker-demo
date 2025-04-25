"use client";

import { useState } from "react";
import {
  Box,
  Text,
  Flex,
  Button,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
} from "@chakra-ui/react";

interface SkillRatings {
  [key: string]: number;
}

interface PlayerType {
  name: string;
  number: number;
  position: string;
  psychological: SkillRatings;
  physical: SkillRatings;
  socialEmotional: SkillRatings;
  technical: SkillRatings;
}

interface PlayerCardProps {
  player: PlayerType;
}

const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  const [isOpen, setIsOpen] = useState(false);
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const getAverageRating = (ratings: SkillRatings) => {
    const total = Object.values(ratings).reduce((a, b) => a + b, 0);
    return (total / Object.values(ratings).length).toFixed(1);
  };

  return (
    <>
      <Box
        bg={cardBg}
        p={6}
        borderRadius="lg"
        boxShadow="sm"
        mb={4}
        border="1px"
        borderColor={useColorModeValue("gray.200", "gray.700")}
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.05)" }}
      >
        <Text fontSize="xl" fontWeight="bold" color={textColor} mb={1}>
          {player.name}
        </Text>
        <Text fontSize="md" color={textColor} mb={1}>
          #{player.number}
        </Text>
        <Text color={textColor} mb={3}>
          Position: {player.position}
        </Text>
        <Flex justifyContent="space-between" alignItems="center" mb={1}>
          <Text color={textColor}>Psychological:</Text>
          <Text fontSize="0.9em">{getAverageRating(player.psychological)}</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb={1}>
          <Text color={textColor}>Physical:</Text>
          <Text fontSize="0.9em">{getAverageRating(player.physical)}</Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center" mb={1}>
          <Text color={textColor}>Social/Emotional:</Text>
          <Text fontSize="0.9em">
            {getAverageRating(player.socialEmotional)}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text color={textColor}>Technical:</Text>
          <Text fontSize="0.9em">{getAverageRating(player.technical)}</Text>
        </Flex>
        <Button mt={4} colorScheme="blue" onClick={openModal}>
          View Details
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={closeModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            {player.name} - #{player.number}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text mb={2}>Position: {player.position}</Text>
            <VStack align="start" spacing={3}>
              <Box>
                <Text fontWeight="bold">PSYCHOLOGICAL:</Text>
                {Object.entries(player.psychological).map(([skill, rating]) => (
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                    key={skill}
                  >
                    <Text mr={4}>{skill}:</Text>
                    <Text fontSize="0.9em">{rating}</Text>
                  </Flex>
                ))}
              </Box>
              <Box>
                <Text fontWeight="bold">PHYSICAL:</Text>
                {Object.entries(player.physical).map(([skill, rating]) => (
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                    key={skill}
                  >
                    <Text mr={4}>{skill}:</Text>
                    <Text fontSize="0.9em">{rating}</Text>
                  </Flex>
                ))}
              </Box>
              <Box>
                <Text fontWeight="bold">SOCIAL/EMOTIONAL:</Text>
                {Object.entries(player.socialEmotional).map(
                  ([skill, rating]) => (
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      mb={1}
                      key={skill}
                    >
                      <Text mr={4}>{skill}:</Text>
                      <Text fontSize="0.9em">{rating}</Text>
                    </Flex>
                  )
                )}
              </Box>
              <Box>
                <Text fontWeight="bold">TECHNICAL:</Text>
                {Object.entries(player.technical).map(([skill, rating]) => (
                  <Flex
                    justifyContent="space-between"
                    alignItems="center"
                    mb={1}
                    key={skill}
                  >
                    <Text mr={4}>{skill}:</Text>
                    <Text fontSize="0.9em">{rating}</Text>
                  </Flex>
                ))}
              </Box>
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeModal}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default PlayerCard;
