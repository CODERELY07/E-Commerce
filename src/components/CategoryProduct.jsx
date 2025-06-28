import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const CategoryProduct = ({ category }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(res => {
        console.log(res.data);
        const productCategory = res.data.filter((item) => item.category === category);
        setProduct(productCategory);
      })
      .catch(err => console.log(err));
  }, [category]);

  return (
    <div className='my-30 mx-5'>
      <h2 className='font-bold uppercase my-4 text-lg md:text-4xl'>
        {category}
      </h2>
      
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        modules={[Navigation, Pagination]}
      >
        {product.map((prod) => (
          <SwiperSlide className=" !h-[350px]" key={prod.id}>
            <ProductCard product={prod} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CategoryProduct;
