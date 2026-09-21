import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Professional Portfolio | Senior Software Engineer",
  description:
    "Portfolio of a senior software engineer specializing in distributed systems, cloud architecture, and technical leadership.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
