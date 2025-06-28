import React from "react";
import { Truck, ShieldCheck, Tag } from "lucide-react";
const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-50 to-blue-50  overflow-hidden">
      <div className=" max-w-[1200px]  mx-auto">
        <div className="flex flex-col py-25 justify-center md:flex-row relative items-center">
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center space-y-4">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 leading-tight">
              WataShop Offers <span className="text-blue-600">Quality</span> And{" "}
              <span className="text-blue-600">Affordable</span> Products
            </h2>
            <h3 className="text-lg md:text-xl font-medium text-gray-600">
              <span className="bg-yellow-100 px-2 py-1 rounded-md">
                30% Off
              </span>{" "}
              for Wata Members
            </h3>
            <button className="w-fit uppercase bg-blue-600 hover:bg-blue-700 text-white font-semibold mt-2 px-6 py-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer">
              Shop Now
            </button>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 h-64 md:h-auto">
            <img
              src="./shopping-cart.png"
              alt="Happy woman shopping with WataShop"
              className="absolute object-cover -right-140 h-100 -bottom-10 object-center"
            />
            
            <img
              src="./shoes.png"
              alt="Happy woman shopping with WataShop"
            className="w-full h-full object-cover object-center mix-blend-multiply"
            />
            
          </div>
        </div>
        <div className="grid -mt-30 max-w-[1000px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Truck className="h-5 w-5 text-blue-600" />
              <h5 className="text-lg font-semibold">Fast Delivery</h5>
            </div>
            <p className="text-gray-600">
              Get your order quickly with our efficient and reliable shipping
              service.
            </p>
          </div>

          <div className="p-6">
            <div className="flex items-center space-x-3 mb-2">
              <ShieldCheck className="h-5 w-5 text-blue-600" />
              <h5 className="text-lg font-semibold">Quality Guarantee</h5>
            </div>
            <p className="text-gray-600">
              We stand behind the quality of our products. 
            </p>
          </div>

          <div className="p-6">
            <div className="flex items-center space-x-3 mb-2">
              <Tag className="h-5 w-5 text-blue-600" />
              <h5 className="text-lg font-semibold">Daily Offers</h5>
            </div>
            <p className="text-gray-600">
              Save more with our special daily deals! 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
