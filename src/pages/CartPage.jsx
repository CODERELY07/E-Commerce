import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { p } from 'framer-motion/client';

const CartPage = () => {
  const {cart, removeFromCart, addToCart, decProdQuan} = useContext(CartContext);
    
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

 return (
     <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h2 className="text-2xl font-bold mb-6">Your Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Your cart is empty.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="w-24 h-24 flex-shrink-0">
                <img 
                  src={item.image || 'https://via.placeholder.com/100'} 
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="ml-4 flex-grow">
                <h3 className="font-medium text-lg">{item.title}</h3>
                <p className="text-gray-600">${item.price.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center">
                <button 
                  onClick={() => decProdQuan(item)}
                  className="w-8 h-8 flex items-center justify-center border rounded-l bg-gray-100 hover:bg-gray-200"
                >
                  -
                </button>
                <span className="w-10 h-8 flex items-center justify-center border-t border-b bg-white">
                  {item.quantity}
                </span>
                <button 
                  onClick={() => addToCart(item)}
                  className="w-8 h-8 flex items-center justify-center border rounded-r bg-gray-100 hover:bg-gray-200"
                >
                  +
                </button>
              </div>
              
              <div className="ml-6 w-24 text-right">
                <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
              </div>
              
              <button
                onClick={() => removeFromCart(item.id)}
                className="ml-4 text-red-500 hover:text-red-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
            </div>
          ))}
          
          <div className="border-t pt-4 mt-6">
            <div className="flex justify-end">
              <div className="text-right">
                <p className="text-lg font-semibold">Total: ${calculateTotal()}</p>
                <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage
