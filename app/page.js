import Image from "next/image";

export default function Home() {
  return (
    <>
  <div className="text-white flex flex-col justify-center items-center h-[44vh] gap-4">
    <div className="font-bold text-5xl flex justify-center items-center">Buy me a Chai
    <span>
  <Image src="/hot-coffee.gif" width={80} height={80} alt="gif"/>
    </span></div>
    <p>
      A crowdFunding platform for creators. Get funded by your fans and followers. Start now!
    </p>
    <div>
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-900 text-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Start Now
</span>
</button>
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-slate-900 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 text-white">
Signup Now
</span>
</button>
      
      
    </div>
  </div>
  <div className="bg-white h-1 opacity-10">

  </div>

<div className="text-white container mx-auto">

  <h1 className="text-2xl font-bold text-center my-14">Your fans can buy you a Chai</h1>
  <div className="flex gap-5 justify-around">
    <div className="item flex flex-col justify-center items-center">
      <Image className="bg-slate-500 rounded-full p-2" src="/payment.gif" width={88} height={88} alt="hello"/>
    <p className="font-bold">Fund Yourself</p>
    <p>Your fans are available to pay you</p>
    </div>

    <div className="item flex flex-col justify-center items-center">
      <Image className="bg-slate-500 rounded-full p-2" src="/coin.gif" width={88} height={88} alt="hello"/>
    <p className="font-bold">Fund Yourself</p>
    <p>Your fans are available to pay you</p>
    </div>

    <div className="item flex flex-col justify-center items-center">
      <Image className="bg-slate-500 rounded-full p-2" src="/groupPayment.gif" width={88} height={88} alt="hello"/>
    <p className="font-bold">Fans want to help</p>
    <p>Your fans are available to pay you</p>
    </div>

    
  </div>
</div>
    </>
  );
}
