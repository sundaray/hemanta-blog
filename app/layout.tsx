import { Geist_Mono, Inter, Noto_Serif } from "next/font/google";

import type { Metadata } from "next";
import NextTopLoader from "nextjs-toploader";

import { Footer } from "@/components/footer";
import { RouterProvider } from "@/components/router-provider";

import "@/app/styles/globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
        className={`${inter.variable} ${geistMono.variable} ${notoSerif.variable} flex min-h-screen flex-col antialiased`}
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
