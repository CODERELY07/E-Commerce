import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import AddToCartModal from '../components/AddToCartModal';
import ProductCard from './../components/ProductCard';
import { Heart } from 'lucide-react'; // Import the Heart icon from Lucide

const ShopPage = () => {
    const [cart, setCart] = useState(0);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (err) {
                console.error(err);
                setError('Failed to load products. Please try again later.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = () => {
        setCart(prev => prev + 1);
    };

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
                <h1 className="text-3xl font-light text-gray-900">Shop</h1>
                <div className="h-px w-16 bg-gray-300 my-4"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map(product => (
                    <div key={product.id} className="relative group">
            
                        <ProductCard 
                            product={product}
                            onAdd={() => handleAddToCart(product)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShopPage;