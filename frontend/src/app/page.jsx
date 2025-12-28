import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Carousel from '@/components/Carousel';
import ProductSection from '@/components/ProductSection';
import BrandStory from '@/components/BrandStory';

// 示例商品数据
const newProducts = [
  { id: 1, name: '春季限定粉色手链', price: '299' },
  { id: 2, name: '优雅珍珠手链', price: '399' },
  { id: 3, name: '简约金色手链', price: '259' },
  { id: 4, name: '浪漫蝴蝶结手链', price: '329' },
];

const hotProducts = [
  { id: 5, name: '经典银色手链', price: '279' },
  { id: 6, name: '精致钻石手链', price: '599' },
  { id: 7, name: '清新花朵手链', price: '349' },
  { id: 8, name: '时尚链条手链', price: '269' },
];

const saleProducts = [
  { id: 9, name: '特价玫瑰金手链', price: '199' },
  { id: 10, name: '促销双色手链', price: '179' },
  { id: 11, name: '限时优惠手链', price: '229' },
  { id: 12, name: '折扣简约手链', price: '159' },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* 轮播图 */}
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Carousel />
          </div>
        </section>

        {/* 新品推荐 */}
        <ProductSection title="新品推荐" products={newProducts} />

        {/* 品牌故事 */}
        <BrandStory />

        {/* 热销推荐 */}
        <ProductSection title="热销推荐" products={hotProducts} />

        {/* 特惠商品 */}
        <div className="bg-gray-50">
          <ProductSection title="特惠商品" products={saleProducts} />
        </div>
      </main>

      <Footer />
    </div>
  );
}