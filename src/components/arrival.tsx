import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

async function Arrival() {
  const res = await client.fetch("*[_type=='landingPage'][0].sections[3]{'arrivalImg':arrivalImg.asset->url,'arrivalHeading':arrivalHeading,}");
  const { arrivalImg, arrivalHeading } = await res;

  return (
    <>
      <div className='w-full h-[600px] flex flex-col-reverse md:flex-row justify-center items-center gap-[60px] px-[100px] bg-[#FFF9E5]'> 
        <div className='md:w-1/2'>
          <div className='relative'>
            <Image src={arrivalImg} alt='hero' objectFit='cover' width={750} height={650} className='rounded-lg hover:scale-105 transition duration-300' /> 
          </div>
        </div>
        <div className='md:w-1/4 text-center'>
          <div className='text-[24px] font-semibold'>New Arrivals</div>
          <div className='text-[48px] font-bold'>{arrivalHeading}</div>
          <Link href="/shop">
          <button className='text-[20px] w-[235px] h-[64px] ml-[20px] font-semibold mt-[30px] border-2 flex items-center justify-center
           border-black hover:bg-black hover:text-white transition duration-300'>Order Now</button></Link>
        </div>
      </div>
    </>
  )
}

export default Arrival