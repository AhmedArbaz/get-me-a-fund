import Image from "next/image";

export default function Home() {
  return (
  <div className="text-white flex flex-col justify-center items-center h-[44vh] ">
    <div className="font-bold text-3xl">Buy me a Chai</div>
    <p>
      A crowdFunding platform for creators. Get funded by your fans and followers. Start now!
    </p>
    <div>
      <button type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
      
      
    </div>
  </div>
  );
}
