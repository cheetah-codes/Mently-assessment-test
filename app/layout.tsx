import type { Metadata } from "next";
import { Chivo } from "next/font/google";
import "./globals.css";
import Sidebar from "./components/Sidebar";

const chivo = Chivo({
  variable: "--font-chivo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Mently",
  description:
    "Mently automates many tasks involved in setting up a mentorship program, allowing you to easily facilitate boot camps, masterclasses, etc",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${chivo.variable} antialiased`}>
        <div className="flex h-screen">
          <Sidebar />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
