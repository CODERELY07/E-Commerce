import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react'

import AddToCartModal from '../components/AddToCartModal';
import ProductCard from './../components/ProductCard';


const ShopPage = () => {
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
    
    return (
        <div className='max-w-[1200px] mx-auto'>
            <AddToCartModal/>
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
    )
}

export default ShopPage
