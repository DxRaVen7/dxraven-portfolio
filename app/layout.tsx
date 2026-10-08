import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.shortBio,
  keywords: [
    "IT student",
    "web developer",
    "Next.js",
    "React",
    "C#",
    ".NET",
    "MySQL",
    "portfolio",
  ],
  authors: [{ name: profile.name }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
