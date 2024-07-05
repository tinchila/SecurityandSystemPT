import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import NextTopLoader from "nextjs-toploader";
import { AOSInit } from "@/components/Aos";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "User Profile",
  description:
    "A web developer user profile website with basic information, list of interest and contact section",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`bg-peach-600 ${manrope.className}`}>
        {/*Next Top Loader*/}
        <NextTopLoader color="#5700FF" showSpinner={false} />
        {/*Init AOS*/}
        <AOSInit />
        {children}
      </body>
    </html>
  );
}
