"use client"
import React, { useEffect, useState } from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
//ya same use kar rahy hain redirect karin gay ager banda logout ho jay to dashboard valy page say redirect ho jay 

const Dashboard = () => {
  const {data: session} = useSession()
  // So ya condition bana di kay ager login nahi ho gay to login page redirect ho jay ga jasay logout karo gay to 
  const router = useRouter()
  const [from, setfrom] = useState({});
  
  useEffect(() => {
      if (!session) {
        router.push('/Login')
      }
  }, [router, session]);

  const handleChange = (e)=>{
    setfrom({...from,[e.target.name]:e.target.value})
  }

  return (
    <div>
        <div className='font-bold text-3xl text-center py-7'>
      Welcom To your DashBoard
     </div>

     <form>
    <div className="grid gap-6 mb-6 mx-24 ">
        <div>
            <label HtmlFor="first_name" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">First name</label>
            <input type="text" id="first_name" className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div>
            <label HtmlFor="last_name" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Last name</label>
            <input type="text" id="last_name" className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
        </div>
        <div>
            <label HtmlFor="company" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Company</label>
            <input type="text" id="company" className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
        </div>  
        <div>
            <label HtmlFor="company" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Profile Picture</label>
            <input type="text" id="company" className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Profile Pic" required />
        </div>  
        <div>
            <label HtmlFor="company" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Cover Image</label>
            <input type="text" id="company" className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image" required />
        </div>  
        <div>
            <label HtmlFor="phone" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Phone number</label>
            <input type="number" id="phone" className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label HtmlFor="website" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Website URL</label>
            <input type="url" id="website" className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
        </div>
          <div>

        <label HtmlFor="email" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Email address/Username</label>
        <input type="email" id="email" className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
        </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </div>
</form>
    </div>
  )
}

export default Dashboard
