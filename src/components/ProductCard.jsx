import { ShoppingCart } from 'lucide-react';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';


const ProductCard = ({product}) => {
    const [isFav, setIsFav] = useState(false);
    const [counter, setCounter] = useState(0);

    const { addToCart } = useContext(CartContext);
    
    const favorite = () =>{
        isFav ? setCounter(counter-1) : setCounter(counter+1);
        setIsFav(!isFav);
    }

  return (
    <div className="shadow-md w-full bg-white rounded-xl overflow-hidden cursor-pointer hover:shadow-xl transition duration-300 flex flex-col h-full">
        <Link to={`/product/${product.id}`}>
            <div className="h-48 w-full bg-gray-100 flex items-center justify-center relative group">
                <img
                src={product.image}
                alt={product.title}
                className="absolute mix-blend-multiply inset-0 w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                />
            </div>
        </Link>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800 line-clamp-2 h-full">{product.title}</h3>
        <p className="text-md font-bold text-gray-900 mt-1">${product.price}</p>
      </div>
      <div className="px-4 pb-4 flex items-center justify-between">
        <button 
          className="px-3 py-2 text-sm font-medium rounded-full hover:bg-red-50 transition"
          onClick={favorite}
          aria-label={isFav ? "Remove from favorites" : "Add to favorites"}
        >
          <span className="text-xl">
            {isFav ? "❤️" : "🤍"}
          </span>
          {counter > 0 && (
            <span className="ml-1 text-gray-600">{counter}</span>
          )}
        </button>
        <button 
          onClick={() => addToCart(product)}
          className="px-4 py-2 bg-slate-600 text-white text-sm font-medium rounded-md hover:bg-slate-700 transition-colors duration-200"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}

export default ProductCard