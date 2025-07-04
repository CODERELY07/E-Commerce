import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import AddToCartModal from '../components/AddToCartModal';
import ProductCard from '../components/ProductCard';

const SearchPage = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q') || '';

  const [, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [, setCart] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAddToCart = () => {
    setCart(prev => prev + 1);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get('https://fakestoreapi.com/products');
        setProducts(res.data);

        // Filter products based on search term
        const filtered = query
          ? res.data.filter(product =>
              product.title.toLowerCase().includes(query.toLowerCase())
            )
          : res.data;

        setFilteredProducts(filtered);
      } catch (err) {
        console.error(err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [query]);

  if (isLoading) {
    return (
      <div className="mt-10 max-w-[1200px] mx-auto py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-gray-100 rounded-lg overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-4 space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-[1200px] mx-auto py-12 text-center">
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 max-w-md mx-auto">
          <p className="text-red-700">{error}</p>
        </div>
        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-gray-900 text-white rounded hover:bg-gray-800 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="mt-10 max-w-[1200px] mx-auto py-8 px-4 sm:px-6">
      <AddToCartModal />

      <div className="mb-8">
        <h1 className="text-3xl font-light text-gray-900">
          {query ? `Search Results for: "${query}"` : 'All Products'}
        </h1>
        <div className="h-px w-16 bg-gray-300 my-4"></div>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <div key={product.id} className="relative group">
              <ProductCard
                product={product}
                onAdd={() => handleAddToCart(product)}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
