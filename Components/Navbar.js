import React from 'react';
import Image from 'next/image';

const Navbar = () => {
  return (
    <nav className='bg-slate-700 text-white flex justify-between items-center px-4 h-16'>
      <div className="logo font-bold text-lg flex justify-center items-center">
        <span><Image src="/navChai.gif" alt="chai" width={40} height={40} /></span>
        GetMeAChai!</div>
      <ul className='flex justify-between gap-4' >
      <li>Home</li>
      <li>About</li>
      <li>Projects</li>
      <li>Sign Up</li>
      <li>Login</li>
      </ul>
    </nav>
  )
}

export default Navbar
