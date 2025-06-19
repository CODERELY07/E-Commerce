import React from 'react'

import { useEffect, useState } from 'react'
import ProductCard from './../components/ProductCard';
import LoginForm from './../components/LoginForm';
import Users from '../components/Users';
import MarqueeComponent from '../components/MarqueeComponent';

const products = [
  {id: 1 , prodName:"Iphone 15", price: 1500, imgPath:'./products/15.jpg',count:0},
  {id: 2 , prodName: "Iphone 16", price:2000, imgPath: './products/16.jpg',count:0},
  {id: 3, prodName: "Iphone 17", price:1200, imgPath: './products/17.jpg',count:0},
  {id: 4, prodName: "Iphone 18", price:1200,
    imgPath: './products/18.jpg',count:0
  },
];

// const loadingAnimation = (loadings) =>{
//   if(loadings)
//   return(
//     <div className='absolute left-0 top-0 z-99 flex justify-center items-center h-full  w-full bg-white'>Loading...</div>  
//   );

//   return ;
// }

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(0);
  const handleAddToCart  = () =>{
    setCart(prev => prev+1);
  }

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 2000)
  }, [loading]);

  return (
    <>
      
      {/* <div>
        {loadingAnimation(loading)}
      </div>
      <div className='absolute right-5 top-5'>
        Cart: {cart > 0 && <p>{cart}</p> }
      </div>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-6'>
        {products.map(product => (
          <ProductCard key={product.id} prodName={product.prodName} price={product.price} 
          imgPath={product.imgPath} count={product.count} onAdd={handleAddToCart }/>
        ))}
      </div>
      <LoginForm/>
      <Users/> */}
    </>
  )
}

export default Home
