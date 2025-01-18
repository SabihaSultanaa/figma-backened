'use client'

import React, { use } from 'react'
import Image from 'next/image'
import { Star } from 'lucide-react'
import Header from '@/components/header'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'


// declare global {
//   interface Window {
//     Snipcart: any;
//   } 
// }
export default async function sigleProductDynamic() {
  // const { heading, image, price } = await searchParams;
  const searchParams=useSearchParams() 
  const name = searchParams.get('name')
  const image = searchParams.get('image')
  const price = searchParams.get('price')



// additinal information sanity data 
  const res1= await client.fetch(`*[_type=='productPage'][0].sections[2]
{'dynamicDescription':dynamicDescription,
  'dynamicImg':dynamicImg.asset->url,
  'dynamicImg2':dynamicImg2.asset->url
  }`)
  const { dynamicDescription, dynamicImg, dynamicImg2 } = await res1;
//   additional info data ends

// again fetching of four products data 
 interface ProductCard {
    cardHeading: string;
    cardImg: string;
    cardPrice: number;
  }

  const res = await client.fetch(
    "*[_type=='productPage'][0].sections[0].card[]{'cardHeading':cardHeading,'cardImg':cardImg.asset->url,'cardPrice':cardPrice,}"
  );
  const { cardHeading, cardImg, cardPrice } = await res;

// again fetching of four products data ends
// const handleAddToCart = () => {
//   window.Snipcart.api.cart.items.add({
//     id:name,
//     name:name,
//     price:price,    
//     image:image,
//     url:`/shop/proId?name=${name}&image=${image}&price=${price}`
   
// });}
  return (
    <>
      <Header />

      <div className="container mx-auto px-4"> 
        <div className="xl:mx-0 my-[80px]"> 
          <div className="w-[363px] h-[21px] text-gray-500 text-14px">
            Home &nbsp; / &nbsp; Shop &nbsp; / &nbsp;{" "}
            <span className="text-black font-normal">
              {name}
            </span>
          </div>
        </div>

        <section className="flex flex-col md:flex-row gap-[16px] my-[80px]"> 
          <div className="flex flex-col gap-[16px]">
            <div className="w-[170px] h-[138px] bg-[#FFF9E5] relative rounded-[4px] flex justify-center items-center">
             
  {image && <Image src={image} alt="image" width={121} height={114} />}

            </div>
            <div className="w-[170px] h-[138px] bg-[#FFF9E5] relative rounded-[4px] flex justify-center items-center">
         
   {image && <Image src={image} alt="image" width={121} height={114} />}

            </div>
            <div className="w-[170px] h-[138px] bg-[#FFF9E5] relative rounded-[4px] flex justify-center items-center">
            {image && <Image src={image} alt="image" width={121} height={114} />}
            </div>
            <div className="w-[170px] h-[138px] bg-[#FFF9E5] relative rounded-[4px] flex justify-center items-center">
            {image && <Image src={image} alt="image" width={121} height={114} />}
            </div>
          </div>
          <div className="w-[500px] h-[600px] relative bg-[#FFF9E5] rounded-[4px] flex justify-center items-center">
        
          {image && <Image src={image} alt="image" width={446} height={315} />}

          </div>
          {/* third new div corner */}
          <div className="xl:w-[500px] xxs:w-[200px] h-[600px] xl:ml-[60px] xxs:ml-[0px]">
            <div className="text-[24px] font-semibold tracking-[1px]">
              {name}
            </div>
            <div className="text-[24px] font-normal tracking-[1px]">
              Rs. {price}
            </div>
           
            <div className="flex gap-1 mt-[16px]">
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#FFAD33" color="#FFAD33" />
              <Star size={16} fill="#bebebe" color="#bebebe" />
              <div className="text-gray-500 relative bottom-[5px] left-[5px] text-[16px]">
                5 Customer Review
              </div>
            </div>

            <div className="text-[14px] mt-[10px] w-[373px] xxs:hidden lg:inline-block h-[63px] text-justify">
              {name}

              Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact,
              stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
            </div>

            <div className="mt-[24px] border-t-[1px] border-t-gray-400 w-[390px]"></div>

            {/* colours */}
            <div className="text-[14px] mr-[8px] xl:mt-[20px] xxs:mt-[40px] text-[#9F9F9F]">Colours:</div>
            <div className="flex gap-[10px] w-[455px] h-[20px] border-3 items-center mt-[10px]">
              <div className="rounded-full h-[20px] w-[20px] bg-[#816DFA] cursor-pointer"></div>
              <div className="rounded-full h-[20px] w-[20px] bg-black cursor-pointer"></div>
              <div className="rounded-full h-[20px] w-[20px] bg-[#CDBA7B] cursor-pointer"></div>
            </div>

            {/* size */}
            <div className="text-[14px] text-[#9F9F9F] mt-[20px]">Size:</div>
            <div className="mt-[10px] w-[296px] h-[32px] flex gap-[16px] items-center text-center">
              <div
                className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] border-2 border-[#FBEBB5]
                pt-[3px] bg-[#FBEBB5] cursor-pointer
                transition ease-in-out delay-50 font-semibold"
              >
                L
              </div>
              <div className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] bg-[#FAF4F4] pt-[3px] hover:bg-[#FBEBB5] cursor-pointer transition ease-in-out delay-50 font-semibold">
                XL
              </div>
              <div className="w-[32px] h-[32px] border-1 rounded-[4px] text-[14px] bg-[#FAF4F4] pt-[3px] hover:bg-[#FBEBB5] cursor-pointer font-semibold ">
                XS
              </div>
            </div>

            {/* 1 2 3 , buynow, heart */}
            <div className="mt-[24px] text-[24px] font-semibold w-[350px] h-[50px] gap-[16px]
          flex justify-center items-center ">
              {/* 1 2 + */}
              <div className="rounded-[10px] flex border-2 border-gray-400">
                <div className="w-[40px] h-[44px] text-[30px] flex items-center 
              justify-center pb-[35px] font-bold ">_</div>
                <div className="w-[80px] h-[44px] flex items-center justify-center">1</div>
                <div className="w-[41px] h-[44px] text-black text-[30px] flex items-center 
              justify-center pb-[8px] rounded-tr-[3px] ">+</div>
              </div>

              {/* buy now */}
              <button className="w-[180px] p-[20px] border-2 border-black text-[16px] text-center
               rounded-[10px] hover:bg-black hover:text-white transition duration-300" >Add To Cart</button>
               {/* onClick={handleAddToCart} */}
            </div>

            {/* free delivery */}
            <div className="mt-[40px] h-[90px] w-[400px] rounded-t-[4px] flex gap-[16px] items-center leading-8">
              <div className="w-[250] h-[40px] ml-[12px] mt-[10px] text-[#9F9F9F]"> SKU : SS001 <br />Category : Sofas <br /> Tags : Sofa , Chair , Home , Shop</div>
            </div>
          </div>
        </section>
        
      <div className=""> 

        <div className="font-semibold text-center mt-[180px] text-[18px]"> 
            Description  &nbsp; &nbsp;   
            <span  className="text-[#9F9F9F]"> &nbsp; &nbsp; Additional Information</span> 
            &nbsp; &nbsp;  <span className="text-[#9F9F9F]">Reviews [5]</span> 
          </div>

          <div className="text-[16px] text-[#9F9F9F] mt-[25px]">
           {dynamicDescription}
          </div>
          <div className='flex flex-wrap justify-between  w-full '>
          <div className="relative w-[700px] h-[300px] mt-[50px]"> 
            <Image src={dynamicImg} alt='hero' objectFit='cover' layout='fill' />
           

          </div>
          <div className="relative w-[700px] h-[300px] mt-[50px]"> 
            <Image src={dynamicImg2} alt='hero' objectFit='cover' layout='fill' />
           

          </div>
          </div>
        </div>

        <div className='text-[36px] font-semibold text-center pt-[10px] mt-[150px]'>Related Products</div>
 
        {/* picks card */}
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-20'> 
          {res.slice(0, 4).map((item: ProductCard, index: number) => (
            <div key={index}>
             
                <div className='w-full h-[250px] mt-4 relative'>
                <Link
                href={`/shop/proId?heading=${item.cardHeading}&image=${item.cardImg}&price=${item.cardPrice}`}
              >
                  <Image src={item.cardImg} alt='hero' objectFit='cover' layout='fill' className='hover:scale-105 transition duration-300' />
                </Link>
                </div>
              
            
                 <div className='text-[16px] mt-[16px]'>
                 <Link
                href={`/shop/proId?heading=${item.cardHeading}&image=${item.cardImg}&price=${item.cardPrice}`}>
                  {item.cardHeading}
              
                  </Link>

                 </div>
                
            <div className='text-[24px] font-semibold mt-[6px]'> <Link
                href={`/shop/proId?heading=${item.cardHeading}&image=${item.cardImg}&price=${item.cardPrice}`}>
                  Rs. {item.cardPrice}.00 </Link> </div>
            </div> 
          ))}
        </div>


        <div className='h-[50px] w-[104px] flex flex-col gap-[3px] mt-[70px] mx-auto mb-[51px]'>
          <div className='text-[20px] font-semibold cursor-pointer hover:text-gray-600 '> <Link href={"/shop"}>View More</Link></div>
          <div className='border-b-[2px] border-black w-[100px] h-[10px] '></div>
        </div> 

      </div> 
    </>
  )
}