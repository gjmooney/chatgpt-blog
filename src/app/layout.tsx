import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "./globals.css";
//import { Inter } from "next/font/google";
import { Open_Sans } from "next/font/google";

//const inter = Inter({ subsets: ["latin"] });
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "AI Powered Blog",
  description: "Blog built in Next.js with crazy AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
