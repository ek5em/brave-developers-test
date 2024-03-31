"use client";
import Head from "next/head";
import { Inter } from "next/font/google";
import { Container, Header } from "@/components";

import GlobalStyles from "@/styles/global";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <Head>
                <title>Payment APP</title>
            </Head>
            <body className={inter.className}>
                <Header />
                <Container>{children}</Container>
            </body>
            <GlobalStyles />
        </html>
    );
}
