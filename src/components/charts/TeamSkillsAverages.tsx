"use client";

import { Box, useColorModeValue } from "@chakra-ui/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const sampleData = [
  { skill: "PSYCHOLOGICAL", average: 75 },
  { skill: "PHYSICAL", average: 80 },
  { skill: "SOCIAL/EMOTIONAL", average: 70 },
  { skill: "TECHNICAL", average: 85 },
];

export default function PerformanceChart() {
  const textColor = useColorModeValue("gray.800", "white");
  const gridColor = useColorModeValue("gray.200", "gray.700");
  const barColor = useColorModeValue("blue.500", "blue.200");

  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      p={6}
      borderRadius="lg"
      boxShadow="sm"
      height="400px"
    >
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={sampleData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke={gridColor} />
          <XAxis
            dataKey="skill"
            stroke={textColor}
            tick={{ fill: textColor }}
          />
          <YAxis stroke={textColor} tick={{ fill: textColor }} />
          <Tooltip
            contentStyle={{
              backgroundColor: useColorModeValue("white", "gray.800"),
              border: "1px solid",
              borderColor: gridColor,
            }}
          />
          <Bar dataKey="average" fill={barColor} />
        </BarChart>
      </ResponsiveContainer>
    </Box>
  );
}
