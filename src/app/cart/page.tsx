'use client'

import { User, Search, Heart, ShoppingCart, Trash2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Header from '@/components/header'
import Image from 'next/image'

export default function CartPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header/>
      {/* Hero Section */}
      <section className="relative h-[316px] bg-gray-100 flex flex-col items-center justify-center">
        <Image src="/blog.png" alt="Hero Image" layout="fill" objectFit="cover" />
        <div className="text-center space-y-4 z-[1]">
          <img src="/log.png" alt="Logo" className="mx-auto mb-4" />
          <h1 className="text-4xl md:text-5xl font-medium">Cart</h1>
          <div className="flex items-center gap-2 text-sm">
            <span className="font-medium">Home</span>
            <span className="text-gray-400">/</span>
            <span className="font-light">Cart</span>
          </div>
        </div>
      </section>

      {/* Cart Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-[#FFF9E6] p-4  grid grid-cols-4 font-medium mb-4">
              <div>Product</div>
              <div className='xxs:hidden xl:inline-block'>Price</div>
              <div className=' xxs:ml-[25px] xl:ml-[0px]' >Quantity</div>
              <div className='xxs:ml-[55px] xl:ml-[0px]'>Subtotal</div>
            </div>

            <div className="flex items-center py-8 border-b">
              <div className="grid grid-cols-4 flex-1 items-center">
                <div className="flex items-center gap-4">
                  <div className="w-[106px] h-[106px] bg-[#FBEBB5] rounded-lg flex items-center justify-center">
                    <img src="/asgaard.png" alt="Asgaard sofa" className="w-28" />
                  </div>
                  <span className="text-gray-500 xxs:hidden xl:inline-block">Asgaard sofa</span>
                </div>
                <div className="text-gray-500">Rs. 250,000.00</div>
                <div className='xxs:ml-[30px] xl:ml-[0px]'>
                  <div className="w-8 h-8 border border-gray-400 rounded flex items-center justify-center">
                    1
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className='xxs:hidden xl:inline-block'>Rs. 250,000.00</span>
                  <button className="text-gray-500 hover:text-gray-700">
                    <Trash2 className="w-7 h-7 xxs:ml-[30px] xl:ml-[0px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Totals */}
          <div className="lg:w-1/3">
            <div className="bg-[#FFF9E5] p-8 rounded-lg">
              <h2 className="text-3xl font-semibold mb-8">Cart Totals</h2>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="font-medium">Subtotal</span>
                  <span className="text-gray-500 xxs:hidden md:inline-block">Rs. 250,000.00</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-medium">Total</span>
                  <span className="text-xl text-[#B88E2F] xxs:hidden md:inline-block">Rs. 250,000.00</span>
                </div>
              </div>
              <Button 
                className="w-full h-[59px] rounded-xl border border-black bg-white text-black hover:bg-black hover:text-white transition-colors text-xl"
              >
                Check Out
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-[#FAF4F4] py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-3xl font-medium mb-4">Free Delivery</h3>
              <p className="text-gray-500 text-lg">For all oders over $50, consectetur adipim scing elit.</p>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4">90 Days Return</h3>
              <p className="text-gray-500 text-lg">If goods have problems, consectetur adipim scing elit.</p>
            </div>
            <div>
              <h3 className="text-3xl font-medium mb-4">Secure Payment</h3>
              <p className="text-gray-500 text-lg">100% secure payment, consectetur adipim scing elit.</p>
            </div>
          </div>
        </div>
      </section>

      
    </div>
  )
}

