'use client';

import { Box, Spinner, Center } from '@chakra-ui/react';

export default function Loading() {
  return (
    <Center h="100vh">
      <Spinner size="xl" color="blue.500" />
    </Center>
  );
} 