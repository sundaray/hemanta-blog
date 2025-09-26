import { QueryClient } from "@tanstack/react-query";
import { cache } from "react";

// cache() is scoped to per request on the server, and is a singleton on the client.
const getQueryClient = cache(
  () =>
    new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 60 * 24 * 7, // 7 days
        },
      },
    }),
);

export default getQueryClient;
