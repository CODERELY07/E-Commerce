import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { p } from 'framer-motion/client';

const CartPage = () => {
  const {cart, removeFromCart} = useContext(CartContext);

  return (
    <div className='p-4'>
       <h2 className='text-xl font-bold'>Cart</h2>
        {
            cart.length === 0 ? (
                <p>Cart is empty</p>
            ) : (
                cart.map(item => (
                    <div key={item.id} className='border p-2 flex justify-between'>
                        <span>{item.title}</span>
                        <button onClick={() => removeFromCart(item.id)} className='text-red-500'>Remove</button>
                    </div>
                ))
            )
        }
    </div>
  );
}

export default CartPage
