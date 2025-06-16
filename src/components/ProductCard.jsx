import React, { useState } from 'react'

const ProductCard = ({prodName, price , imgPath, count}) => {
    const [isFav, setIsFav] = useState(false);
    const [counter, setCounter] = useState(count);
    
    const favorite = () =>{
        isFav ? setCounter(counter-1) : setCounter(counter+1);
         setIsFav(!isFav);
    }

  return (
    <div className="shadow-md w-full max-w-[250px] bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition duration-300">
    <div className="h-48 w-full bg-gray-100 flex items-center justify-center relative">
        <img
        src={imgPath}
        alt={prodName}
        className="absolute inset-0 w-full h-full object-cover"
        />
    </div>
    <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{prodName}</h3>
        <p className="text-md text-gray-600 mt-1">${price}</p>
    </div>
    <button  className="mt-2 px-4 py-2 text-sm font-medium text-red-500 hover:text-red-600 transition" onClick={favorite}>
        {isFav ? "❤️" : "🤍"} {counter}
    </button>
    </div>
  )
}

export default ProductCard