import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 text-white flex justify-between items-center px-4 h-16">
      <div className="logo font-bold text-lg flex justify-center items-center">
        <span>
          <Image src="/navChai.gif" alt="chai" width={40} height={40} />
        </span>
        GetMeAChai!
      </div>

      <div>
        <Link href={"/Login"}>
        <button type="button" className="text-white bg-gradient-to-r from-cyan-900 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Login</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
