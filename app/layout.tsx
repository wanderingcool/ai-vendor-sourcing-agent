Exit code: 0
Wall time: 3.1 seconds
Output:
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "End-to-end procurement demo",
  description: "A client walkthrough for a purchase management system.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

