// "use client";

// import {
//   Table as ChakraTable,
//   Thead,
//   Tbody,
//   Tr,
//   Th,
//   Td,
//   Box,
//   useColorModeValue,
//   Text,
//   Flex,
//   Select,
//   Input,
//   IconButton,
//   InputLeftElement,
// } from "@chakra-ui/react";
// import {
//   ChevronLeftIcon,
//   ChevronRightIcon,
//   SearchIcon,
// } from "@chakra-ui/icons";
// import { useState } from "react";

// export default function Table({
//   columns,
//   data,
//   searchable = false,
//   pagination = false,
//   pageSize = 10,
// }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const [rowsPerPage, setRowsPerPage] = useState(pageSize);

//   const bgColor = useColorModeValue("white", "gray.800");
//   const borderColor = useColorModeValue("gray.200", "gray.700");

//   // Filter data based on search query
//   const filteredData = searchable
//     ? data.filter((item) =>
//         Object.values(item).some((value) =>
//           String(value).toLowerCase().includes(searchQuery.toLowerCase())
//         )
//       )
//     : data;

//   // Paginate data
//   const paginatedData = pagination
//     ? filteredData.slice(
//         (currentPage - 1) * rowsPerPage,
//         currentPage * rowsPerPage
//       )
//     : filteredData;

//   const totalPages = Math.ceil(filteredData.length / rowsPerPage);

//   return (
//     <Box
//       bg={bgColor}
//       borderWidth="1px"
//       borderColor={borderColor}
//       borderRadius="lg"
//       overflow="hidden"
//     >
//       {searchable && (
//         <Flex p={4} borderBottomWidth="1px" borderColor={borderColor}>
//           <InputLeftElement>
//             <SearchIcon color="gray.300" />
//           </InputLeftElement>
//           <Input
//             placeholder="Search..."
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             maxW="300px"
//           />
//         </Flex>
//       )}

//       <ChakraTable variant="simple">
//         <Thead>
//           <Tr>
//             {columns.map((column) => (
//               <Th key={column.key}>{column.label}</Th>
//             ))}
//           </Tr>
//         </Thead>
//         <Tbody>
//           {paginatedData.map((row, index) => (
//             <Tr key={index}>
//               {columns.map((column) => (
//                 <Td key={column.key}>
//                   {column.render ? column.render(row) : row[column.key]}
//                 </Td>
//               ))}
//             </Tr>
//           ))}
//         </Tbody>
//       </ChakraTable>

//       {pagination && (
//         <Flex p={4} justify="space-between" align="center">
//           <Select
//             value={rowsPerPage}
//             onChange={(e) => {
//               setRowsPerPage(Number(e.target.value));
//               setCurrentPage(1);
//             }}
//             width="100px"
//           >
//             <option value={5}>5 / page</option>
//             <option value={10}>10 / page</option>
//             <option value={20}>20 / page</option>
//           </Select>

//           <Flex align="center" gap={2}>
//             <IconButton
//               icon={<ChevronLeftIcon />}
//               onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
//               isDisabled={currentPage === 1}
//               aria-label="Previous Page"
//             />
//             <Text>
//               Page {currentPage} of {totalPages}
//             </Text>
//             <IconButton
//               icon={<ChevronRightIcon />}
//               onClick={() =>
//                 setCurrentPage((prev) => Math.min(totalPages, prev + 1))
//               }
//               isDisabled={currentPage === totalPages}
//               aria-label="Next Page"
//             />
//           </Flex>
//         </Flex>
//       )}
//     </Box>
//   );
// }
