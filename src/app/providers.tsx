// REQUIRED FOR CHAKRA UI

"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const cache = createCache({ key: "css", prepend: true });

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <CacheProvider value={cache}>
      <ChakraProvider>{children}</ChakraProvider>
    </CacheProvider>
  );
}
