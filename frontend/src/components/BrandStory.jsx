export default function BrandStory() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-primary-pink to-light-pink flex items-center justify-center">
              <span className="text-9xl">✨</span>
            </div>
          </div>

          {/* Text Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              品牌故事
            </h2>
            <div className="space-y-4 text-base text-gray-600 leading-relaxed">
              <p>
                我们致力于打造精致优雅的轻奢手链，每一件作品都经过精心设计与打磨。
                从选材到制作，我们严格把控每一个环节，只为呈现最完美的品质。
              </p>
              <p>
                我们的设计理念源于对美的追求和对细节的执着。每一款手链都承载着独特的寓意，
                见证您人生中的重要时刻，成为您最珍贵的记忆。
              </p>
              <p>
                无论是日常佩戴还是特殊场合，我们的手链都能为您的整体造型增添一抹优雅与魅力。
              </p>
            </div>
            <button className="mt-8 bg-primary-pink text-white px-8 py-3 rounded-full font-medium hover:bg-pink-hover active:bg-pink-active transition-colors">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
