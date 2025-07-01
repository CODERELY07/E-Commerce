import React from 'react'
import Marquee from "react-fast-marquee";
import { User } from 'lucide-react';
import { Link } from 'react-router-dom';

const promoTexts = [
  "Big Summer Sale - Up to 50% OFF!",
  "Free shipping on orders over $50!",
  "New arrivals dropping every week!",
  "Sign up & get 10% off your first order!",
  "Rated 5 stars by over 10,000 customers!",
  "Secure payments & easy returns!",
  "Limited-time offers – don’t miss out!",
];

const MarqueTextComponent = ({promoTexts}) => (
  <div className='marque text-xs justify-center items-center md:hidden flex gap-10 text-white'>
      {promoTexts.map((marque, index) =>(
            <span key={index}>{marque}</span>
        ))}
  </div>
);

const MarqueeComponent = () => {
  return (
    <div className="w-full bg-black h-8 p-2 overflow-hidden relative whitespace-nowrap flex justify-between">
      <div className='w-full px-2 -ml-13 '>
        <Marquee>
          <MarqueTextComponent promoTexts={promoTexts}/>
        </Marquee>
        <div className='hidden md:block text-center text-xs text-white'>
          <p>Free Shipping For Watch Member</p>
        </div>
      </div>
      <div className=' border-l border-gray-400 p-0 m-0 flex items-center'>
        <button className='text-white text-xs px-2 py-2 cursor-pointer rounded-sm'> 
          <Link to='/login' className="p-2 text-white hover:text-gray-200">
            <User className="h-4 w-4" />
          </Link>
        </button>
      </div>
    </div>
  )
}

export default MarqueeComponent
