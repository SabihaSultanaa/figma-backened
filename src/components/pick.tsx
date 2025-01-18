import React from 'react'
import Image from 'next/image'
import { client } from '@/sanity/lib/client';
import Link from 'next/link';

async function Pick() {
  interface ProductCard {
    cardHeading: string;
    cardImg: string;
    cardPrice: number;
  }

  const res = await client.fetch(
    "*[_type=='productPage'][0].sections[0].card[]{'cardHeading':cardHeading,'cardImg':cardImg.asset->url,'cardPrice':cardPrice,}"
  );
  const { cardHeading, cardImg, cardPrice } = await res;

  return (
    <>
      <div className='w-full'>
        <div className='text-[36px] font-semibold text-center pt-[55px]'>Top Picks For You</div>

        <div className='text-[#9F9F9F] text-[16px] font-semibold text-center pt-[13px]'>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</div>

        {/* picks card */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20'> {/* Responsive grid columns */}
          {res.slice(0, 4).map((item: ProductCard, index: number) => (
            <div key={index}>
             
                <div className='w-full h-[250px] mt-4 relative'>
              
                  <Image src={item.cardImg} alt='hero' objectFit='cover' layout='fill' className='hover:scale-105 transition duration-300' />
                </div>
              
            
                 <div className='text-[16px] mt-[16px]'>
               
                  {item.cardHeading}
                

                 </div>
                
            <div className='text-[24px] font-semibold mt-[6px]'> <Link
                href={`/shop/proId?heading=${item.cardHeading}&image=${item.cardImg}&price=${item.cardPrice}`}
              >Rs. {item.cardPrice}.00 </Link> </div>
            </div> 
          ))}
        </div>

        <div className='h-[50px] w-[104px] flex flex-col gap-[3px] mt-[70px] mx-auto mb-[51px]'>
          <div className='text-[20px] font-semibold cursor-pointer'> <Link href={'/shop'} className='hover:text-gray-600'>View More</Link></div>
          <div className='border-b-[2px] border-black w-[100px] h-[10px] '></div>
        </div>
      </div>
    </>
  )
}

export default Pick
