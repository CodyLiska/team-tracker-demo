'use client';

import { Box, Heading, Text, Button } from '@chakra-ui/react';

export default function Error({ error, reset }) {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading display="inline-block" as="h2" size="2xl" color="red.500">
        Oops!
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        {error.message}
      </Text>
      <Text color={'gray.500'} mb={6}>
        Something went wrong. Please try again later.
      </Text>

      <Button
        colorScheme="red"
        onClick={reset}
      >
        Try again
      </Button>
    </Box>
  );
} 