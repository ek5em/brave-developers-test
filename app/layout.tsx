"use client";
import { createContext } from "react";
import Head from "next/head";
import { Inter } from "next/font/google";
import { IOperator } from "@/interfaces";
import { Operators } from "@/constants";
import { Container, Header } from "@/components";

import GlobalStyles from "@/styles/global";

const inter = Inter({ subsets: ["latin"] });

export const OperatorsContext = createContext<IOperator[]>([]);

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
                <OperatorsContext.Provider value={Operators}>
                    <Header />
                    <Container>{children}</Container>
                </OperatorsContext.Provider>
            </body>
            <GlobalStyles />
        </html>
    );
}
