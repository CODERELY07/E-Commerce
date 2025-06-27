import React from 'react'
import FeaturedCompanies from '../components/FeaturedCompanies';
const Banner = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl overflow-hidden shadow-lg'>
      <div className="flex flex-col md:flex-row items-center w-full ">
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
          WataShop Offers <span className="text-blue-600">Quality</span> And <span className="text-blue-600">Affordable</span> Products
        </h2>
        <h3 className="text-lg md:text-xl font-medium text-gray-600">
          <span className="bg-yellow-100 px-2 py-1 rounded-md">30% Off</span> for Wata Members
        </h3>
        <button className="w-fit uppercase bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
          Shop Now
        </button>
      </div>

      {/* Image */}
      <div className="w-full md:w-1/2 h-64 md:h-auto">
        <img 
          src="./woman-shopping.png" 
          alt="Happy woman shopping with WataShop" 
          className="w-full h-full object-cover object-center mix-blend-multiply"
        />
      </div>
    
    </div>
      <FeaturedCompanies/>
    </div>

  )
}

export default Banner
