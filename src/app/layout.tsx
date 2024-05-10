import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/theme.context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cauch4mar - Next Level Development Services",
  description:
    "Unlock the power of cutting-edge development services with Cauch4mar. Our team specializes in creating innovative solutions for your digital needs. Get started today!"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
