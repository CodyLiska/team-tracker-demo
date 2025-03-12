// "use client";

// import { Box, useColorModeValue } from "@chakra-ui/react";
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// export default function ProgressChart({ data }) {
//   const chartColor = useColorModeValue("gray.800", "white");

//   return (
//     <Box
//       bg={useColorModeValue("white", "gray.700")}
//       p={6}
//       borderRadius="lg"
//       boxShadow="sm"
//       h="400px"
//     >
//       <ResponsiveContainer width="100%" height="100%">
//         <LineChart
//           data={data}
//           margin={{
//             top: 5,
//             right: 30,
//             left: 20,
//             bottom: 5,
//           }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="date" stroke={chartColor} />
//           <YAxis stroke={chartColor} />
//           <Tooltip />
//           <Line
//             type="monotone"
//             dataKey="performance"
//             stroke="#4299E1"
//             strokeWidth={2}
//             dot={{ r: 4 }}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </Box>
//   );
// }
