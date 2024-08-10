"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
// puri app ko layout ko ham nay sessionwrapper say wrap kia tha ab phir jaha session ki need hay use kar rahay hain

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false);
  // ya next auth say copy kia hay 
  const { data: session } = useSession()
  // if(session) {
  //   return <>
  //     Signed in as {session.user.email} <br/>
  //     <button onClick={() => signOut()}>Sign out</button>
  //   </>
  // }
  return (
    <nav className="bg-slate-700 text-white flex justify-between items-center px-4 h-16">
      
        <Link className="logo font-bold text-lg flex justify-center items-center" href="/">
          <Image src="/navChai.gif" alt="chai" width={40} height={40} />
        <span>
        GetMeAChai!
        </span>
        </Link>
      

      <div className="relative">
      {/* Adding dropdown copy from flowbite.com  */}
      {session && <><button onClick={()=>setShowDropDown(!showDropDown)} onBlur={()=>{setTimeout(() => {
        setShowDropDown(false)
      }, 100);}} //ya ham nay onBlur event use kia ya kia kary ga ager ham dropdown kay bhar click karin gay to ya dropdown ko close kar day ga ab settimeout use kia hay kay kuch dair bad ho band
      
      id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className="text-white mx-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
        
        {session.user.email}

        <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
      </svg>
      </button>

{/* yaha ham nay {``} ya lagaya phir ternary operator ko use kia  */}
      <div id="dropdown" className={`z-10 ${showDropDown?"":"hidden"} absolute left-[125px] bg-slate-700 divide-y divide-gray-600 rounded-lg shadow w-44 dark:bg-gray-700`}>
          <ul className="py-2 text-sm text-white " aria-labelledby="dropdownDefaultButton">
            <li>
              <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
            </li>
            <li>
              <Link href="#" className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
            </li>
           
            <li>
              <Link href="#" onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-600 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</Link>
            </li>
          </ul>
      </div>
      </>
      }


       

        {/* making logout button if login it helps to logout */}
        {session && <button className="text-white bg-gradient-to-r from-cyan-900 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer" onClick={() =>{signOut()}}>Logout</button>}


        {/* Adding condtion in login button */}
        {!session &&
        <Link href={"/Login"}>
        <button type="button" className="text-white bg-gradient-to-r from-cyan-900 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 cursor-pointer">Login</button>
        </Link>}

      </div>
    </nav>
  );
};

export default Navbar;
