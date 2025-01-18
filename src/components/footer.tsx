
import { Input } from "./ui/input";
import { Button } from "./ui/button";




export default function Footer() {
  return (
    <footer className="bg-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <p className="text-gray-500">400 University Drive Suite 200 Coral Gables, FL 33134 USA</p>
        </div>
        <div>
          <h4 className="text-gray-500 mb-4">Links</h4>
          <nav className="space-y-4 font-semibold">
            <a href="#" className="block">Home</a>
            <a href="#" className="block">Shop</a>
            <a href="#" className="block">About</a>
            <a href="#" className="block">Contact</a>
          </nav>
        </div>
        <div>
          <h4 className="text-gray-500 mb-4">Help</h4>
          <nav className="space-y-4 font-semibold">
            <a href="#" className="block">Payment Options</a>
            <a href="#" className="block">Returns</a>
            <a href="#" className="block">Privacy Policies</a>
          </nav>
        </div>
        <div>
          <h4 className="text-gray-500 mb-4">Newsletter</h4>
          <div className="flex gap-4 mt-4">
            <Input 
              type="email" 
              placeholder="Enter Your Email Address"
              className="border-b-black border-t-0 border-l-0 border-r-0 rounded-none  px-0 focus-visible:ring-0" 
            />
            <Button variant="ghost" className="font-medium">
              SUBSCRIBE
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t font-semibold">
        <p>2022 Meubel House. All rights reserved</p>
      </div>
    </div>
  </footer>
  )
}