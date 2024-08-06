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
     <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_40%_300px,#d09e07,transparent)]"></div> 
     {/* ya navbar pay vo shading vala color la raha hay */}
      <div className="min-h-[87vh] relative h-full w-full bg-slate-900">  
      {children}
      
      </div>
    
    <Footer/>
      </body>
    </html>
  );
}
