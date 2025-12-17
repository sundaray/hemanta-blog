import { Geist, Geist_Mono, Merriweather } from "next/font/google";

import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

import { Footer } from "@/components/footer";
import { RouterProvider } from "@/components/router-provider";

import "@/app/styles/globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  style: ["italic", "normal"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Hemanta Sundaray | Full-Stack Developer",
    template: "%s | Hemanta Sundaray",
  },
  description:
    "Full-stack developer specializing in TypeScript, React, Node.js, and PostgreSQL. Explore my blog and personal projects.",
  keywords: [
    "Hemanta Sundaray",
    "Full-Stack Developer",
    "TypeScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "Web Development",
  ],
  authors: [{ name: "Hemanta Sundaray" }],
  creator: "Hemanta Sundaray",
  metadataBase: new URL("https://hemantasundaray.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://hemantasundaray.com",
    siteName: "Hemanta Sundaray",
    title: "Hemanta Sundaray | Full-Stack Developer",
    description:
      "Full-stack developer specializing in TypeScript, React, Node.js, and PostgreSQL.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hemanta Sundaray | Full-Stack Developer",
    description:
      "Full-stack developer specializing in TypeScript, React, Node.js, and PostgreSQL.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout(props: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="scroll-smooth"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${merriweather.variable} flex min-h-screen flex-col antialiased`}
      >
        <NextTopLoader showSpinner={false} color="#0284c7" shadow={false} />
        <RouterProvider>
          <NuqsAdapter>{props.children}</NuqsAdapter>
        </RouterProvider>
        <Footer />
      </body>
    </html>
  );
}
