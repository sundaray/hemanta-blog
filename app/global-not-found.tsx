import "@/app/styles/globals.css";

import { Geist } from "next/font/google";

import type { Metadata } from "next";

import { ArrowLink } from "@/components/ui/arrow-link";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyTitle,
} from "@/components/ui/empty";

const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 - Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={geistSans.className}>
      <body className="bg-background text-foreground flex min-h-screen flex-col items-center justify-center p-4">
        <div className="container flex max-w-7xl flex-col items-center text-center">
          <Empty>
            <EmptyTitle className="text-2xl font-semibold">
              404 - Page Not Found
            </EmptyTitle>
            <EmptyDescription className="text-base text-neutral-600">
              Oops! The page you&apos;re looking for seems to have gone on a
              little adventure.
            </EmptyDescription>
            <EmptyContent>
              <ArrowLink href="/">Return to home</ArrowLink>
            </EmptyContent>
          </Empty>
        </div>
      </body>
    </html>
  );
}
