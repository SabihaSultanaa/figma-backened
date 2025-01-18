import React from "react";
import Image from "next/image";
import Link from "next/link";
import { client } from "@/sanity/lib/client";


async function Side() {
  interface Side {
    sideHeading: string;
    sideImg: string;
   
  }
  const res = await client.fetch("*[_type=='landingPage'][0].sections[1].sideCards[]{'sideImg':sideImg.asset->url,'sideHeading':sideHeading,}");
  const { sideImg,sideHeading } = await res;

  return (
    <>
      <div className="flex flex-wrap justify-center">
        {res.map((item:Side, index:number) => {
          return (
            <div
              key={index}
              className="w-full md:w-1/2 lg:w-1/2 px-[20px] py-[40px] bg-[#FAF4F4] "
            >
               
              <Image
                src={item.sideImg}
                alt="side"
                width={650}
                height={650}
                objectFit="cover"
                className="rounded-lg hover:scale-105 transition duration-300"
              />
              <div className="flex justify-between pt-[0px] px-[20px]">
                <div>
                  <div className="text-[20px] md:text-[24px] lg:text-[36px] font-semibold w-[170px]">
                    {item.sideHeading}
                  </div>
                  <div className="mt-[10px]">
                    <Link
                      href={"/shop"}
                      className="font-semibold text-[16px] md:text-[18px] lg:text-[24px] hover:text-gray-600"
                    >
                      View More
                    </Link>
                  </div>
                  <div className="w-[120px] h-[3px] bg-black leading-0"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Side;