import axios from 'axios';
import { ShoppingCart } from 'lucide-react';
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext } from '../../context/CartContext';

const ProductDetails = () => {
    const {id} = useParams();
    const [product, setProducts] = useState(null);
    const {addToCart} = useContext(CartContext);

    useEffect(() =>{
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(res => setProducts(res.data));
    }, [id]);

    if (!product) return (
    <div className="flex justify-center items-center h-180">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
    </div>
    );


    return (
        <div className='flex justify-center items-center mt-50 mx-5'>
            <div className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col md:flex-row h-full max-w-[600px]">
            <div className="w-full md:w-2/5 bg-gray-50 flex items-center justify-center p-4">
                <img 
                src={product.image} 
                alt={product.title} 
                className="h-68 w-full object-contain"
                />
            </div>

            <div className="w-full md:w-3/5 p-4 flex flex-col">
                <div className="flex justify-between items-start mb-2">
                <h2 className="text-lg font-semibold text-gray-800 line-clamp-2 pr-2">
                    {product.title}
                </h2>
                
                </div>

                <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-grow">
                {product.description}
                </p>


                <div className="flex items-center justify-between mt-auto">
                <p className="text-lg font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                </p>
                <button 
                    className="bg-slate-600 hover:bg-slate-700 text-white px-4 py-2 rounded-md flex items-center gap-2 transition-colors cursor-pointer duration-200"
                    onClick={() => addToCart(product)}
                >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Add</span>
                </button>
                </div>
            </div>
            </div>
        </div>
   
    );
}

export default ProductDetails
