// "use client";

// import {
//   Box,
//   Stat,
//   StatLabel,
//   StatNumber,
//   Icon,
//   useColorModeValue,
// } from "@chakra-ui/react";
// import { FaFutbol, FaHandshake, FaRunning } from "react-icons/fa";

// const icons = {
//   game: FaRunning,
//   goal: FaFutbol,
//   assist: FaHandshake,
// };

// interface StatsWidgetProps {
//   title: string;
//   value: number | string;
//   icon: keyof typeof icons;
// }

// export default function StatsWidget({ title, value, icon }: StatsWidgetProps) {
//   const bgColor = useColorModeValue("white", "gray.700");
//   const IconComponent = icons[icon];

//   return (
//     <Box
//       p={6}
//       bg={bgColor}
//       borderRadius="lg"
//       boxShadow="sm"
//       transition="all 0.3s"
//       _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
//     >
//       <Stat>
//         <StatLabel fontSize="md" color="gray.500" mb={2}>
//           <Icon as={IconComponent} mr={2} />
//           {title}
//         </StatLabel>
//         <StatNumber fontSize="3xl" fontWeight="bold">
//           {value}
//         </StatNumber>
//       </Stat>
//     </Box>
//   );
// }
