import React from "react";
import Image from "next/image";

function Follow() {
  return (
    <>
      <div className="relative"> 
        <div className="hidden md:block absolute top-0 left-0 z-[-1]"> 
          <Image 
            src={"/follow.png"} 
            alt="hero" 
            objectFit="cover" 
            width={1440} 
            height={450} 
          />
        </div>

        <div className="bg-[#FAF4F4] px-[20px] py-[60px] text-center">
          <div className="font-bold lg:text-[60px] w-[454px] mx-auto">Our Instagram</div>
          <div className="text-[20px] mx-auto">Follow our store on Instagram</div>
          <button className="w-[200px] h-[64px] rounded-[50px] bg-white text-[20px] 
          font-semibold shadow-[0px_4px_4px_rgba(0,0,0,0.25)] mx-auto mt-[20px] hover:bg-black hover:text-white transition duration-300"> Follow Us</button>
        </div>
      </div>
    </>
  );
}

export default Follow;