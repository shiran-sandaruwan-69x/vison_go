import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import {ThemeProvider} from "next-themes";
import Header from "@/app/_components/verticalLayout/Header";
import React from "react";
import Sidebar from "@/app/_components/verticalLayout/Sidebar";
import PageWrapper from "@/app/_components/verticalLayout/PageWrapper";

const karla = Karla({
    weight:["200","300","400","500","600","700","800"],
    subsets: ["latin"],
    variable:"--font-karla"
});

export const metadata: Metadata = {
  title: "vision go",
  description: "vision go",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={karla.className}>
      <Sidebar/>
          <Header  />
          <PageWrapper>
              {children}
          </PageWrapper>
      </body>
    </html>
  );
}
