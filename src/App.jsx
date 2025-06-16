import { useState } from 'react'
import './App.css'
import ProductCard from './components/ProductCard'

const products = [
  {id: 1 , prodName:"Iphone 15", price: 1500, imgPath:'./products/15.jpg',count:0},
  {id: 2 , prodName: "Iphone 16", price:2000, imgPath: './products/16.jpg',count:0},
  {id: 3, prodName: "Iphone 17", price:1200, imgPath: './products/17.jpg',count:0},
  {id: 4, prodName: "Iphone 18", price:1200,
    imgPath: './products/18.jpg',count:0
  },
];

function App() {

  return (
    <>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-6'>
        {products.map(product => (
          <ProductCard key={product.id} prodName={product.prodName} price={product.price} 
          imgPath={product.imgPath} count={product.count}/>
        ))}
      </div>
    </>
  )
}

export default App
