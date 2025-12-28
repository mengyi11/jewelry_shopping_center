'use client';

import { useState } from 'react';
import { useCart } from '@/context/CartContext';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showAdded, setShowAdded] = useState(false);
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
    setShowAdded(true);
    setTimeout(() => setShowAdded(false), 2000);
  };

  return (
    <div
      className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative h-64 bg-gray-100 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-primary-pink to-light-pink flex items-center justify-center">
          <span className="text-6xl">💎</span>
        </div>
        {/* Hover overlay */}
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center transition-opacity">
            <button className="bg-white text-primary-pink px-6 py-2 rounded-full font-medium hover:bg-primary-pink hover:text-white transition">
              查看详情
            </button>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-700 mb-2 line-clamp-1">
          {product.name}
        </h3>
        <p className="text-2xl font-bold text-primary-pink mb-4">
          ¥{product.price}
        </p>
        <button 
          onClick={handleAddToCart}
          className={`w-full px-6 py-2 rounded-full font-medium transition-colors ${
            showAdded
              ? 'bg-green-500 text-white'
              : 'bg-primary-pink text-white hover:bg-pink-hover active:bg-pink-active'
          }`}
        >
          {showAdded ? '✓ 已添加' : '加入购物车'}
        </button>
      </div>
    </div>
  );
}
