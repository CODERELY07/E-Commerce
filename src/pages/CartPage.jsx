import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { X, Plus, Minus } from 'lucide-react'; // Import Lucide icons

const CartPage = () => {
  const { cart, removeFromCart, addToCart, decProdQuan } = useContext(CartContext);
    
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  };

  return (
    <div className="mt-10 max-w-4xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-light text-gray-900 mb-8">Your Cart</h2>
      
      {cart.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center border-b py-6">
              <div className="w-20 h-20 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
                <img 
                  src={item.image || 'https://via.placeholder.com/100'} 
                  alt={item.title}
                  className="w-full h-full object-contain p-2"
                />
              </div>
              
              <div className="ml-4 flex-grow">
                <h3 className="font-normal text-gray-900 line-clamp-1">{item.title}</h3>
                <p className="text-gray-500 mt-1">${item.price.toFixed(2)}</p>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center border rounded-md">
                  <button 
                    onClick={() => decProdQuan(item)}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-8 text-center text-gray-900">
                    {item.quantity}
                  </span>
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-8 h-8 flex items-center justify-center text-gray-500 hover:bg-gray-50"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                
                <p className="w-20 text-right font-medium text-gray-900">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-gray-400 hover:text-gray-600 ml-2"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          ))}
          
          <div className="border-t pt-6 mt-4">
            <div className="flex justify-between items-center">
              <p className="text-gray-600">Subtotal</p>
              <p className="text-lg font-medium text-gray-900">${calculateTotal()}</p>
            </div>
            <button className="w-full mt-6 bg-gray-900 text-white py-3 rounded-md hover:bg-gray-800 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;