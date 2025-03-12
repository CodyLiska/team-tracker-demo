"use client";

import {
  Box,
  Container,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Card,
  CardHeader,
  CardBody,
  useColorModeValue,
} from "@chakra-ui/react";
import PerformanceChart from "../../../components/charts/TeamSkillsAverages";
import PlayerStatsRadar from "../../../components/charts/PlayerStatsRadar";

const players = [
  {
    name: "John Doe",
    number: 42,
    position: "Forward",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  {
    name: "Jane Smith",
    number: 23,
    position: "Midfielder",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  {
    name: "Scooby Doo",
    number: 99,
    position: "Midfielder",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  {
    name: "Harry Kane",
    number: 9,
    position: "Midfielder",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  {
    name: "Leo Messi",
    number: 10,
    position: "Midfielder",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  {
    name: "Christiano Ronaldo",
    number: 7,
    position: "Midfielder",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  {
    name: "Neymar",
    number: 12,
    position: "Midfielder",
    psychological: {
      "SELF CONFIDENCE": 80,
      "COMPETITIVENESS": 85,
      "CONCENTRATION": 75,
      "SELF-CONTROL": 70,
      "DETERMINATION": 90,
      "ENJOYMENT": 95,
    },
    physical: {
      "AGILITY": 85,
      "BALANCE": 80,
      "COORDINATION": 75,
      "STAMINA": 90,
      "STRENGTH": 85,
      "SPEED": 88,
      "ACCELERATION": 87,
      "REACTION": 82,
    },
    socialEmotional: {
      "LISTENING": 80,
      "COOPERATION": 85,
      "COMMUNICATION": 75,
      "SHARING": 70,
      "PROBLEM-SOLVING": 90,
      "DECISION-MAKING": 85,
      "EMPATHY": 88,
      "PATIENCE": 87,
      "RESPECT/DISCIPLINE": 82,
    },
    technical: {
      "DRIBBLING": 85,
      "SHOOTING": 80,
      "RUNNING WITH BALL": 75,
      "TURNING WITH BALL": 90,
      "RECEIVING THE BALL": 85,
      "PASSING": 88,
    },
  },
  // Add more players as needed
];


export default function CoachDashboard() {
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bgColor} minH="100vh" py={8}>
      <Container maxW="container.xl">
        <Heading mb={8}>Coach Dashboard</Heading>

        {/* Stats Overview */}
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={6} mb={8}>
          <Stat bg={cardBg} p={6} borderRadius="lg" boxShadow="sm">
            <StatLabel>Total Players</StatLabel>
            <StatNumber>24</StatNumber>
            <StatHelpText>Active roster</StatHelpText>
          </Stat>
          <Stat bg={cardBg} p={6} borderRadius="lg" boxShadow="sm">
            <StatLabel>Games Played</StatLabel>
            <StatNumber>12</StatNumber>
            <StatHelpText>This season</StatHelpText>
          </Stat>
          <Stat bg={cardBg} p={6} borderRadius="lg" boxShadow="sm">
            <StatLabel>Win Rate</StatLabel>
            <StatNumber>75%</StatNumber>
            <StatHelpText>+5% from last month</StatHelpText>
          </Stat>
          <Stat bg={cardBg} p={6} borderRadius="lg" boxShadow="sm">
            <StatLabel>Team Rating</StatLabel>
            <StatNumber>8.5</StatNumber>
            <StatHelpText>Average performance</StatHelpText>
          </Stat>
        </SimpleGrid>

        {/* Performance Chart */}
        <Card bg={cardBg} mb={8}>
          <CardHeader>
            <Heading size="md">Team Skills Average</Heading>
          </CardHeader>
          <CardBody>
            <PerformanceChart />
          </CardBody>
        </Card>

        {/* Player Stats Radar */}
        <Card bg={cardBg} mb={8}>
          <CardHeader>
            <Heading size="md">Player Stats</Heading>
          </CardHeader>
          <CardBody>
            <PlayerStatsRadar players={players} />
          </CardBody>
        </Card>

        {/* Recent Activity */}
        <Card bg={cardBg} mb={8}>
          <CardHeader>
            <Heading size="md">Recent Activity</Heading>
          </CardHeader>
          <CardBody>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th>Date</Th>
                  <Th>Player</Th>
                  <Th>Activity</Th>
                  <Th>Details</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Today</Td>
                  <Td>John Doe</Td>
                  <Td>Training Complete</Td>
                  <Td>90 minutes</Td>
                </Tr>
                <Tr>
                  <Td>Yesterday</Td>
                  <Td>Team</Td>
                  <Td>Match Won</Td>
                  <Td>3-1 vs Eagles</Td>
                </Tr>
              </Tbody>
            </Table>
          </CardBody>
        </Card>
      </Container>
    </Box>
  );
}