'use client';

import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CartPage() {
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();
  const totalPrice = getTotalPrice();

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center py-20">
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-4">
              购物车是空的
            </h2>
            <p className="text-gray-600 mb-8">快去挑选您喜欢的手链吧！</p>
            <Link
              href="/"
              className="inline-block bg-primary-pink text-white px-8 py-3 rounded-full font-medium hover:bg-pink-hover active:bg-pink-active transition-colors"
            >
              去逛逛
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800">购物车</h1>
            <button
              onClick={clearCart}
              className="text-sm text-gray-600 hover:text-primary-pink transition"
            >
              清空购物车
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 购物车商品列表 */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-sm p-6 flex flex-col sm:flex-row gap-4"
                >
                  {/* 商品图片 */}
                  <div className="w-full sm:w-32 h-32 bg-gradient-to-br from-primary-pink to-light-pink rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-5xl">💎</span>
                  </div>

                  {/* 商品信息 */}
                  <div className="flex-grow flex flex-col sm:flex-row sm:justify-between">
                    <div className="flex-grow">
                      <h3 className="text-xl font-medium text-gray-700 mb-2">
                        {item.name}
                      </h3>
                      <p className="text-2xl font-bold text-primary-pink mb-4">
                        ¥{item.price}
                      </p>
                    </div>

                    {/* 数量控制和删除 */}
                    <div className="flex items-center gap-4">
                      {/* 数量控制 */}
                      <div className="flex items-center border border-gray-300 rounded-full">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-600 hover:text-primary-pink transition"
                        >
                          −
                        </button>
                        <span className="px-4 py-1 text-gray-700">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-600 hover:text-primary-pink transition"
                        >
                          +
                        </button>
                      </div>

                      {/* 删除按钮 */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition"
                        aria-label="删除商品"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 订单摘要 */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">订单摘要</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>商品数量</span>
                    <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)} 件</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>运费</span>
                    <span className="text-green-600">免运费</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-lg font-bold text-gray-800">
                      <span>总计</span>
                      <span className="text-primary-pink">¥{totalPrice.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-primary-pink text-white px-6 py-3 rounded-full font-medium hover:bg-pink-hover active:bg-pink-active transition-colors mb-4">
                  去结算
                </button>
                
                <Link
                  href="/"
                  className="block w-full text-center text-gray-600 hover:text-primary-pink transition"
                >
                  继续购物
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
