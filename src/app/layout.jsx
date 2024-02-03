import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";


export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}> 
          <Toaster/>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
