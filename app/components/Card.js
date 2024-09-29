import { HeartPulse, ArrowRight } from "lucide-react";

export default function Card() {
  return (
    // Main container for the card
    <div className="flex flex-col gap-4 justify-center items-center cursor-default select-none">
      {/* Card wrapper with hover effects */}
      <div
        className={`relative group h-[9rem] w-[13rem] rounded-[1.3rem] overflow-clip bg-neutral-300 flex justify-center items-center shadow-md transition-all duration-300 ease-in-out`}
      >
        {/* Inner card content */}
        <div className="relative shadow-[inset_0_0_0_1px] group-hover:shadow-[inset_0_0_0_2px] transition-all duration-300 ease-in-out group-hover:shadow-hotpink-100/20 shadow-slate-200 h-full w-full rounded-[1.3rem] bg-white p-4 overflow-clip flex flex-col">
          {/* Card header with icon and text */}
          <div className="flex flex-col z-50">
            <HeartPulse className="w-8 h-8 mb-6 mt-2 group-hover:text-hotpink group-hover:w-6 group-hover:h-6 group-hover:mt-0 group-hover:mb-2 ease-in-out transition-all duration-300" />
            <h1 className="text-lg transition-all ease-in-out group-hover:text-hotpink duration-300 font-bold">
              Health
            </h1>
            <div className="text-sm text-slate-500 font-normal group-hover:text-hotpink/75 ease-in-out transition-all duration-300">
              68k+ Videos
            </div>
          </div>
          {/* "Detail" text and arrow that appear on hover */}
          <div
            className={`opacity-0 z-50 group-hover:opacity-100 mt-3 transition-all ease-in-out group-hover:text-hotpink duration-300 flex items-center justify-between relative`}
          >
            Detail
            <ArrowRight className="w-4 h-4 translate-x-8 group-hover:text-hotpink group-hover:translate-x-0 flex items-center justify-center ease-in-out transition-all duration-300" />
          </div>
        </div>
        {/* Decorative background circles with hover animations */}
        <div className="absolute aspect-square w-[200%] rounded-full bg-hotpink-100/10 -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-[400ms] ease-in-out"></div>
        <div className="absolute aspect-square w-[200%] rounded-full bg-hotpink-100/10 translate-x-3/4 translate-y-3/4 group-hover:translate-x-[60%] group-hover:translate-y-[22%] transition-all duration-300 ease-in-out"></div>
        <div className="absolute aspect-square w-[200%] rounded-full bg-hotpink-100/10 translate-x-[75%] translate-y-[75%] group-hover:translate-x-[65%] group-hover:translate-y-[22%] transition-all duration-300 ease-in-out"></div>
      </div>
    </div>
  );
}
