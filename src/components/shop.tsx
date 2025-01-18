import React from 'react'
import Image from 'next/image'
import { AlignVerticalSpaceAround, Grip, SlidersHorizontal } from 'lucide-react'


function Shop() {
  return (
    <>
      <div className='w-full'>
        {/* Hero Section */}
        <section className="relative h-[316px] bg-gray-100 flex flex-col items-center justify-center">
          <Image src="/blog.png" alt="Hero Image" layout="fill" objectFit="cover" />
          <div className="text-center space-y-4 z-[1]">
            <img src="/log.png" alt="Logo" className="mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-medium">Shop</h1>
            <div className="flex items-center gap-2 text-sm">
              <span className="font-medium">Home</span>
              <span className="text-gray-400">/</span>
              <span className="font-light"> Shop</span>
            </div>
          </div>
        </section>

        <div className='flex flex-col md:flex-row justify-between items-center w-full px-4 py-4 bg-[#FAF4F4] mt-[50px]'> 
          {/* filter */}
          <div className='flex gap-[20px] items-center w-full md:w-1/2 mb-4 md:mb-0'>
            <SlidersHorizontal  size={18}/>
            <div className='text-[20px]'>Filter</div>
            <Grip size={22}/>
            <AlignVerticalSpaceAround strokeWidth={1.75} size={18} />
            <div className='hidden xl:inline-block'>|</div>
            <div className='text-[18px] w-[250px] hidden xl:inline-block'>Showing 1–16 of 32 results</div>
          </div>

          {/* show */}
          <div className='flex gap-[5px] items-center w-full md:w-1/2'>
            <div className='text-[20px] '>Show</div>
            <button className='w-[55px] h-[55px] text-[20px] bg-white'>16</button>
            <div className='text-[20px] w-[100px] '>Short By</div>
            <button className='w-[188px] h-[55px] text-[20px] bg-white'>Default</button>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Shop