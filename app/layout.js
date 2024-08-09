import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import SessionWrapper from "@/Components/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Get me a Chai - Fund your porject with chai",
  description: "This website is a crowdFunding platForm for ChaiLovers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>

      <Navbar/>
     {/* ya navbar pay vo shading vala color la raha hay */}
      <div className="min-h-[87vh] relative h-full w-full bg-slate-900 text-white">  
      {children}
      
      </div>
    
    <Footer/>
        </SessionWrapper> 
        {/* ya sessionWrapper say puri app ko wrap kar dia ya ham nay banaya components may tha ya authentication data hay app ko ab jaha session ko use karna hay aus may import kar lo  */}
      </body>
    </html>
  );
}
