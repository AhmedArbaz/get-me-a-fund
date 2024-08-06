import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a Chai - Fund your porject with chai",
  description: "This website is a crowdFunding platForm for ChaiLovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navbar/>
      <div className="min-h-screen">  
        {/* ais say ham apni height screen kay according rakh sakty hain */}
      {children}
      </div>
    <Footer/>
      </body>
    </html>
  );
}
