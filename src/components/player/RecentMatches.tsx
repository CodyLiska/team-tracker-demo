// "use client";

// import {
//   Table,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Box,
//   Badge,
//   useColorModeValue,
// } from "@chakra-ui/react";

// export interface Match {
//   id: string;
//   date: string;
//   opponent: string;
//   result: "W" | "L" | "D";
//   score: string;
//   goals: number;
//   assists: number;
//   performance: number;
// }

// interface RecentMatchesProps {
//   matches: Match[];
// }

// export default function RecentMatches({ matches }: RecentMatchesProps) {
//   const bgColor = useColorModeValue("white", "gray.700");

//   return (
//     <Box bg={bgColor} borderRadius="lg" boxShadow="sm" overflow="hidden">
//       <Table variant="simple">
//         <Thead>
//           <Tr>
//             <Th>Date</Th>
//             <Th>Opponent</Th>
//             <Th>Result</Th>
//             <Th>Goals</Th>
//             <Th>Assists</Th>
//             <Th>Performance</Th>
//           </Tr>
//         </Thead>
//         <Tbody>
//           {matches?.map((match) => (
//             <Tr key={match.id}>
//               <Td>{match.date}</Td>
//               <Td>{match.opponent}</Td>
//               <Td>
//                 <Badge
//                   colorScheme={
//                     match.result === "W"
//                       ? "green"
//                       : match.result === "L"
//                       ? "red"
//                       : "yellow"
//                   }
//                 >
//                   {match.score}
//                 </Badge>
//               </Td>
//               <Td>{match.goals}</Td>
//               <Td>{match.assists}</Td>
//               <Td>
//                 <Badge
//                   colorScheme={
//                     match.performance >= 8
//                       ? "green"
//                       : match.performance >= 6
//                       ? "blue"
//                       : "orange"
//                   }
//                 >
//                   {match.performance}/10
//                 </Badge>
//               </Td>
//             </Tr>
//           ))}
//         </Tbody>
//       </Table>
//     </Box>
//   );
// }
