import axios from "axios";
import { ShoppingCart } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import AddToCartModal from '../components/AddToCartModal';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-8 h-8 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-gray-500">
        Product not found
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 mt-10 py-12">
      <AddToCartModal />
      
      <div className="bg-white rounded-lg overflow-hidden shadow-sm">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2 bg-gray-50 flex items-center justify-center p-8">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-96 object-contain"
            />
          </div>

          {/* Product Info */}
          <div className="md:w-1/2 p-8 flex flex-col">
            <h1 className="text-2xl font-light text-gray-900 mb-4">
              {product.title}
            </h1>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description}
            </p>

            <div className="mt-auto pt-4 border-t border-gray-100">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-medium text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
                
                <button
                  onClick={() => addToCart(product)}
                  className="flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
                >
                  <ShoppingCart size={18} />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;