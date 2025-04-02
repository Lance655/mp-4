import React from "react";
import type { Metadata } from "next";
import Header from "@/components/Header";
import "./globals.css";
import {
    Box,
} from "@mui/material";

export const metadata: Metadata = {
    title: "GameSearch",
    description: "Find information about a game",
};

export default function RootLayout(
    {children,}:
        Readonly<{children: React.ReactNode;}>
){
    return (
        <html lang="en">
            <body>
                <Box sx={{
                    bgcolor: "#1e1e1e",
                    // height: "100vh",
                }}>
                    <Header/>
                    {children}
                </Box>
            </body>
        </html>
    )
}