import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import { NextAuthProvider } from "@/components/universal/Providers";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
        <div>
          <Navbar />
          <main>{children}</main>
        </div>
        </NextAuthProvider>
      </body>
    </html>
  );
}
