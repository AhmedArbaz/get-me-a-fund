import React from 'react'
// ya ham tab [username] banaty hain [] ais may jab dynamic routing karni ho to dakho params ko use kar kay ham aus ka name lay rahy hain 
const Username = ({params}) => {
  return (
    <>
    <div className='cover'>
      <img className='object-cover w-full h-[350px] opacity-70 relative' src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/12401345/de5d5d84bfc74be7aa27fc70bec2999f/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/2.PNG?token-time=1725408000&token-hash=iwd0Vcj2YqDtHW0j3p7xzwJoYBvKI5RlizLEbVP26VM%3D" alt="beachImage" />

      {/* image of profile */}
      <div className="absolute bottom-[62%] right-[46%] border-black border-4 rounded-2xl">
        <img className='rounded-2xl opacity-80' src="https://th.bing.com/th/id/OIP.FcgiYvwemC0qpgzdCVBJEQHaHa?w=162&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" width={100} height={100} alt="cash image" />
      </div>
    </div>
    
    <div className="info flex justify-center items-center flex-col  my-16 gap-2">
     <div className='font-bold '>
      @{params.username}
     </div>

      <div className='text-slate-500'>
        Creating Animated art for VTT&apos;s
        {/* &apos; is used for add ' this */}
      </div>
      <div className='text-slate-500'>
        9,719 . members 220 . posts$50,900/release
      </div>


{/* supporters section */}
        <div className="payment flex gap-3 w-[80%] mt-16">
          <div className="supporters w-1/2  bg-slate-700 rounded-lg p-10">
        {/* Show list of all the supporters as a leaderBoard  */}
        <h2 className='text-2xl text-center font-bold my-5'>Supporters</h2>
                <ul className='mx-5'>
                  <li className='my-2 text-slate-200'>Ali Donated $30 with a message &apos;&apos;&apos; </li>
                  <li className='my-2 text-slate-200'>Ali Donated $30 with a message &apos;&apos;&apos;</li>
                  <li className='my-2 text-slate-200'>Ali Donated $30 with a message &apos;&apos;&apos;</li>
                  <li className='my-2 text-slate-200'>Ali Donated $30 with a message &apos;&apos;&apos;</li>
                  <li className='my-2 text-slate-200'>Ali Donated $30 with a message &apos;&apos;&apos;</li>
                  <li className='my-2 text-slate-200'>Ali Donated $30 with a message &apos;&apos;&apos;</li>
                  <li className='my-2 text-slate-200'>Ali Donated $30 with a message &apos;&apos;&apos;</li>
                </ul>
          </div>
          
      {/* payment section */}
      <div className="makepayment w-1/2 bg-slate-700 rounded-lg text-white p-10">
      <h2 className='text-2xl text-center font-bold my-5'>Make a Payment</h2>
      <div className="flex flex-col gap-2">
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800'  placeholder='Enter Name'/>
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800'  placeholder='Enter Message'/>
        <input type="text" className='w-full p-3 rounded-lg bg-slate-800'  placeholder='Enter Amount'/>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-600 group-hover:to-orange-600  dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 hover:text-white hover:to-orange-500 hover:from-pink-600">
        <span class="relative px-5 py-2.5 transition-all ease-in duration-75 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
        Pay
        </span>
        </button>
      </div>

      {/* Or choose from these amounts */}
      <div className="flex gap-2 mt-5">

        <button className=" bg-slate-800 p-3 rounded-lg">Pay $10</button>
        <button className=" bg-slate-800 p-3 rounded-lg">Pay $20</button>
        <button className=" bg-slate-800 p-3 rounded-lg">Pay $30</button>
          </div>
        </div>
      </div>
    </div>

     
    </>    
  )
}

export default Username
