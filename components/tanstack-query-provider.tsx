"use client";

import { ReactNode } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import getQueryClient from "@/lib/get-query-client";

export function TanstackQueryprovider({ children }: { children: ReactNode }) {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
