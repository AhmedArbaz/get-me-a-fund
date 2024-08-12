"use client"
import React, { useEffect, useState } from 'react'
import { useSession,signIn,signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'
//ya same use kar rahy hain redirect karin gay ager banda logout ho jay to dashboard valy page say redirect ho jay 

const Dashboard = () => {
  const {data: session} = useSession()
  // So ya condition bana di kay ager login nahi ho gay to login page redirect ho jay ga jasay logout karo gay to 
  const router = useRouter()
  const [form, setform] = useState({});
  
  useEffect(() => {
      if (!session) {
        router.push('/Login')
      }
  }, [router, session]);

  const handleChange = (e)=>{
    setform({...form,[e.target.name]:e.target.value})
  }

  return (
    <div>
        <div className='font-bold text-3xl text-center py-7'>
      Welcom To your DashBoard
     </div>

     <form>
    <div className="grid gap-6 mb-6 mx-24 ">
        <div>
            <label HtmlFor="name" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Name</label>
            <input type="text" value={form.name?form.name:""} onChange={handleChange} id="name" name='name' className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
        </div>
        <div>
            <label HtmlFor="username" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Username</label>
            <input type="text" value={form.username?form.username:""} onChange={handleChange} id="username" name='username' className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Name" required />
        </div>
        <div>
            <label HtmlFor="company" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Company</label>
            <input type="text" value={form.company?form.company:""} onChange={handleChange} id="company" name='company' className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
        </div>  
        <div>
            <label HtmlFor="profile" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Profile Picture</label>
            <input type="text" value={form.profile?form.profile:""} onChange={handleChange} id="profile" name='profile' className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Profile Pic" required />
        </div>  
        <div>
            <label HtmlFor="coverImage" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Cover Image</label>
            <input type="text" value={form.coverImage?form.coverImage:""} onChange={handleChange} id="coverImage" name='coverImage' className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image" required />
        </div>  
        <div>
            <label HtmlFor="phone" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Phone number</label>
            <input type="text" value={form.phone?form.phone:""} onChange={handleChange} id="phone" name='phone' className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        {/* input for razorpay credientials */}
        <div>
            <label HtmlFor="razorpay" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Razorpay Credentials</label>
            <input type="text" value={form.razorpay?form.razorpay:""} onChange={handleChange} id="razorpay" name='razorpay' className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
           {/* input for razorpay id */}
           <div>
            <label HtmlFor="razorpayid" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Razorpay ID</label>
            <input type="text" value={form.razorpayid?form.razorpayid:""} onChange={handleChange} id="razorpayid" name='razorpayid' className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
         {/* input for razorpay id */}
         <div>
            <label HtmlFor="razorpaysecret" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Razorpay Secret</label>
            <input type="text" value={form.razorpaysecret?form.razorpaysecret:""} onChange={handleChange} id="razorpaysecret" name='razorpaysecret' className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
        </div>
        <div>
            <label HtmlFor="website" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Website URL</label>
            <input type="url" value={form.website?form.website:""} onChange={handleChange} id="website" name='website' className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
        </div>
          <div>

        <label HtmlFor="email" className="block mb-2 text-sm font-medium text-slate-400 dark:text-white">Email address</label>
        <input type="email" value={form.email?form.email:""} onChange={handleChange} id="email" className="bg-slate-700 border border-gray-300 text-slate-400 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
        </div>
    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </div>
</form>
    </div>
  )
}

export default Dashboard
