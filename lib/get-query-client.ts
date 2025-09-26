"use client";

// We have to import `isServer` from a client component to check if we are on the server or not.
import { isServer, QueryClient } from "@tanstack/react-query";

//`makeQueryClient` creates a new QueryClient instance with default options.
function makeQueryClient() {
  return new QueryClient({
    defaultOptions: {
      queries: {
        // With SSR, we usually want to set some default staleTime
        // above 0 to avoid refetching immediately on the client
        staleTime: 1000 * 60 * 5, // 5 minutes
      },
    },
  });
}

// `browserQueryClient` will be a singleton instance of the QueryClient on the browser.
let browserQueryClient: QueryClient | undefined = undefined;

// `getQueryClient` returns a QueryClient instance.
// If we are on the server, it creates a new instance for each request.
// If we are on the browser, it creates a singleton instance.
function getQueryClient() {
  if (isServer) {
    // Server: always make a new query client
    return makeQueryClient();
  }
  // Browser: make a new query client if we don't already have one
  // This is very important so we don't re-make a new client if React
  // suspends during the initial render.
  if (!browserQueryClient) browserQueryClient = makeQueryClient();
  return browserQueryClient;
}

export { getQueryClient };
