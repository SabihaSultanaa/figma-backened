import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client } from '@/sanity/lib/client';

async function Hero() {
  const res = await client.fetch(
    "*[_type=='landingPage'][0].sections[0]{'heroImg':heroImg.asset->url,'heroHeading':heroHeading,}"
  );
  const { heroImg, heroHeading } = await res;

  return (
    <div className="relative w-full xl:h-[800px] xxs:h-[400px] bg-[#FBEBB5] flex flex-col-reverse md:flex-row">
      <div className="md:w-1/2 flex flex-col items-start justify-center px-6 md:px-20 lg:px-40 xl:px-40 py-10 md:py-20 xl:py-40">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-8">
          {heroHeading}
        </h1>
        <Link href="/shop" className="inline-block text-lg font-semibold text-gray-800 hover:text-gray-600">
          Shop Now
        </Link>
        <div className="w-24 h-1 bg-black mt-4" />
      </div>
      <div className="md:w-1/2 relative">  
        <Image
          src={heroImg}
          alt="hero"
          fill
          objectFit="cover"
          className="rounded-lg hover:scale-105 transition duration-300"
        />
      </div>
    </div>
  );
}

export default Hero;

