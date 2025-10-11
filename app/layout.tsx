import React from "react";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100","200","300","400", "500", "600", "700","800","900"],
});

export const metadata: Metadata = {
    title: "Agentic",
    description: "Flow-based backend creation and orchestration platform",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
    return (
        <html lang="en">
            <body
                className={`${inter.className} font-sans antialiased`}
            >
                {children}
            </body>
        </html>
    );
}
