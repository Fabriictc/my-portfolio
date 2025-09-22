import Footer from "./components/Footer";
import Header from "./components/Header";
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "Emmanuel Amanga - Software Developer",
    description: "Portfolio of Emmanuel Amanga, a software developer specializing in building scalable web applications and services.",
};

export default function RootLayout({ children }) {


    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="min-h-screen bg-gradient-to-tr from-teal-600 via-sky-600 to-orange-400 text-gray-900 antialiased">
                    <Header />
                    <main className="max-w-6xl mx-auto px-6 py-12">
                        {children}
                        <SpeedInsights/>
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}