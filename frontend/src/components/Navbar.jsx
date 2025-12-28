'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalQuantity } = useCart();
  const cartQuantity = getTotalQuantity();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-primary-pink">Bracelet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {/* Categories */}
            <div className="relative group">
              <button className="text-gray-600 hover:text-primary-pink px-3 py-2 text-sm font-medium transition">
                商品分类
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link href="/category/material" className="block px-4 py-2 text-sm text-gray-600 hover:bg-light-pink hover:text-primary-pink">
                    按材质分类
                  </Link>
                  <Link href="/category/style" className="block px-4 py-2 text-sm text-gray-600 hover:bg-light-pink hover:text-primary-pink">
                    按风格分类
                  </Link>
                </div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="搜索手链..."
                className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-pink focus:border-transparent"
              />
              <svg
                className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Shopping Cart */}
            <Link href="/cart" className="relative text-gray-600 hover:text-primary-pink transition">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {cartQuantity > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-pink text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartQuantity}
                </span>
              )}
            </Link>

            {/* User Center */}
            <Link href="/user" className="text-gray-600 hover:text-primary-pink transition">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-600 hover:text-primary-pink"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link href="/category/material" className="block px-4 py-2 text-gray-600 hover:bg-light-pink hover:text-primary-pink">
              按材质分类
            </Link>
            <Link href="/category/style" className="block px-4 py-2 text-gray-600 hover:bg-light-pink hover:text-primary-pink">
              按风格分类
            </Link>
            <div className="px-4 py-2">
              <input
                type="text"
                placeholder="搜索手链..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-primary-pink"
              />
            </div>
            <Link href="/cart" className="block px-4 py-2 text-gray-600 hover:bg-light-pink hover:text-primary-pink">
              购物车
            </Link>
            <Link href="/user" className="block px-4 py-2 text-gray-600 hover:bg-light-pink hover:text-primary-pink">
              用户中心
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
