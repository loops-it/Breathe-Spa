import type { Metadata } from "next";
import { Inria_Sans, Scheherazade_New } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';


const inriaSans = Inria_Sans({
  variable: "--font-inria-sans",
  weight: "300",
  subsets: ["latin"], 
});

const scheherazadeNew = Scheherazade_New({
  variable: "--font-scheherazade-new",
  weight: "400",
  subsets: ["arabic", "latin"], 
});

export const metadata: Metadata = {
  title: "Breathe Spa",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${scheherazadeNew.variable} ${inriaSans.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}


