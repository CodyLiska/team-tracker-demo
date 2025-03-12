// import { Box, Grid, Stack, Heading } from "@chakra-ui/react";
// import PlayerCard from "./PlayerCard";
// import StatsWidget from "./StatsWidget";
// import ProgressChart from "./ProgressChart";
// import RecentMatches, { Match } from "./RecentMatches";

// interface PlayerProgress {
//   date: string;
//   value: number;
// }

// interface Player {
//   id: string;
//   name: string;
//   imageUrl: string;
//   position: string;
//   gamesPlayed: number;
//   goals: number;
//   assists: number;
//   number: number;
//   psychological: number;
//   physical: number;
//   socialEmotional: number;
//   technical: number;
//   progressData: PlayerProgress[];
//   recentMatches: Match[];
// }

// // Test player data for development
// const testPlayer: Player = {
//   id: "test123",
//   name: "Test Player",
//   imageUrl: "test.com",
//   position: "Midfielder",
//   gamesPlayed: 24,
//   goals: 8,
//   assists: 12,
//   number: 10,
//   psychological: 85,
//   physical: 90,
//   socialEmotional: 80,
//   technical: 88,
//   progressData: [
//     { date: "2024-01", value: 72 },
//     { date: "2024-02", value: 78 },
//     { date: "2024-03", value: 75 },
//     { date: "2024-04", value: 82 },
//     { date: "2024-05", value: 88 },
//   ],
//   recentMatches: [
//     { id: "m1", opponent: "United FC", date: "2024-05-15", result: "W", score: "2-1", goals: 0, assists: 0, performance: 8.5 },
//     { id: "m2", opponent: "City Rangers", date: "2024-05-08", result: "D", score: "0-0", goals: 0, assists: 0, performance: 7.2 },
//     { id: "m3", opponent: "Royal Athletic", date: "2024-05-01", result: "W", score: "3-0", goals: 0, assists: 0, performance: 9.1 },
//   ]
// };

// interface PlayerProfileProps {
//   player?: Player;
// }

// // player = testPlayer => for testing
// // { player } => for prod
// export default function PlayerProfile({ player = testPlayer }: PlayerProfileProps) {
//   return (
//     <Box p={8}>
//       <Grid templateColumns={{ base: "1fr", md: "300px 1fr" }} gap={8}>
//         {/* Left sidebar with player info */}
//         <Box>
//           {/* <PlayerCard player={player} /> TODO: Fix error happening here! */}
//         </Box>

//         {/* Main content area */}
//         <Stack spacing={8}>
//           {/* Stats Overview */}
//           <Box>
//             <Heading size="lg" mb={6}>
//               Performance Statistics
//             </Heading>
//             <Grid
//               templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
//               gap={4}
//             >
//               <StatsWidget
//                 title="Games Played"
//                 value={player.gamesPlayed}
//                 icon="game"
//               />
//               <StatsWidget
//                 title="Goals Scored"
//                 value={player.goals}
//                 icon="goal"
//               />
//               <StatsWidget
//                 title="Assists"
//                 value={player.assists}
//                 icon="assist"
//               />
//             </Grid>
//           </Box>

//           {/* Progress Chart */}
//           <Box>
//             <Heading size="lg" mb={6}>
//               Development Progress
//             </Heading>
//             <ProgressChart data={player.progressData} />
//           </Box>

//           {/* Recent Matches */}
//           <Box>
//             <Heading size="lg" mb={6}>
//               Recent Matches
//             </Heading>
//             <RecentMatches matches={player.recentMatches} />
//           </Box>
//         </Stack>
//       </Grid>
//     </Box>
//   );
// }
