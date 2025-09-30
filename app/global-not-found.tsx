import "@/app/globals.css";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import Link from "next/link";
import { ArrowLink } from "@/components/ui/arrow-link";

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
      <body className="flex min-h-screen flex-col items-center justify-center bg-background p-4 text-foreground">
        <div className="container flex max-w-7xl flex-col items-center gap-4 text-center">
          <h1 className="font-mono text-8xl font-bold tracking-tight text-primary">
            404
          </h1>
          <h2 className="text-3xl font-semibold tracking-tight">
            Page Not Found
          </h2>
          <p className="text-pretty text-neutral-600">
            Oops! The page you're looking for seems to have gone on a little
            adventure.
          </p>
          <ArrowLink href="/">Return to home</ArrowLink>
        </div>
      </body>
    </html>
  );
}
