import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from './../components/ProductCard';
import LoginForm from './../components/LoginForm';
import Users from '../components/Users';
import Banner from '../components/Banner';
import MarqueeComponent from '../components/MarqueeComponent';
import axios from 'axios';
import AddToCartModal from '../components/AddToCartModal';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState(0);
  
  // Fetch api fake store
  const [products, setProducts] = useState([]);
  
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);
 
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
      <AddToCartModal/>
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Banner/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product}
              onAdd={() => handleAddToCart(product)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default Home
