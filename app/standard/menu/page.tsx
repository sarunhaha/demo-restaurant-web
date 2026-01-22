import Image from 'next/image'
import { menuCategories } from '@/data/menu'
import { Star, Flame, Leaf, Nut, Shell, Wheat } from 'lucide-react'
import OrderButtons from '@/components/common/OrderButtons'

export default function StandardMenuPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[30vh] min-h-[200px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920"
            alt="Our menu"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center text-white">
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-2">Our Menu</h1>
          <p className="text-xl text-gray-200">Authentic Asian Flavors</p>
        </div>
      </section>

      {/* Order Online Banner */}
      <section className="bg-accent py-4">
        <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-semibold text-secondary">
            🚀 Order online for delivery or pickup!
          </p>
          <OrderButtons variant="horizontal" size="sm" showLabels={false} />
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 px-4">
        <div className="container-custom">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.name} className={categoryIndex > 0 ? 'mt-16' : ''}>
              {/* Category Header */}
              <div className="text-center mb-8">
                <h2 className="font-heading text-3xl font-bold text-secondary">
                  {category.name}
                </h2>
                <p className="text-gray-500 mt-2">{category.description}</p>
                <div className="w-24 h-1 bg-accent mx-auto mt-4" />
              </div>

              {/* Menu Items Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                  >
                    {/* Item Image */}
                    <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image
                        src={item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=200'}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                      {item.bestseller && (
                        <div className="absolute top-0 left-0 bg-accent text-secondary text-xs font-bold px-1.5 py-0.5 rounded-br">
                          <Star className="w-3 h-3 fill-current" />
                        </div>
                      )}
                    </div>

                    {/* Item Details */}
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-heading text-lg font-semibold text-secondary">
                          {item.name}
                        </h3>
                        <span className="text-primary font-bold whitespace-nowrap">
                          ${item.price.toFixed(2)}
                        </span>
                      </div>
                      <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                        {item.description}
                      </p>
                      <div className="flex gap-2 mt-2">
                        {item.spicy && (
                          <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded flex items-center gap-1">
                            <Flame className="w-3 h-3" /> Spicy
                          </span>
                        )}
                        {item.vegetarian && (
                          <span className="text-xs bg-green-100 text-green-600 px-2 py-0.5 rounded flex items-center gap-1">
                            <Leaf className="w-3 h-3" /> Veg
                          </span>
                        )}
                        {item.bestseller && (
                          <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded">
                            Popular
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Dietary Info */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-semibold mb-4">Dietary Information</h3>
            <p className="text-gray-600 mb-6">
              We cater to various dietary requirements. Please inform our staff of any allergies or dietary needs.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white px-4 py-2 rounded-full shadow text-sm flex items-center gap-2">
                <Flame className="w-4 h-4 text-red-500" /> Spicy
              </span>
              <span className="bg-white px-4 py-2 rounded-full shadow text-sm flex items-center gap-2">
                <Leaf className="w-4 h-4 text-green-500" /> Vegetarian
              </span>
              <span className="bg-white px-4 py-2 rounded-full shadow text-sm flex items-center gap-2">
                <Nut className="w-4 h-4 text-amber-600" /> Contains Nuts
              </span>
              <span className="bg-white px-4 py-2 rounded-full shadow text-sm flex items-center gap-2">
                <Shell className="w-4 h-4 text-blue-500" /> Shellfish
              </span>
              <span className="bg-white px-4 py-2 rounded-full shadow text-sm flex items-center gap-2">
                <Wheat className="w-4 h-4 text-yellow-600" /> Gluten-Free Options
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="bg-secondary py-12 px-4">
        <div className="container-custom text-center">
          <h3 className="font-heading text-2xl font-bold text-white mb-4">
            Ready to Order?
          </h3>
          <p className="text-gray-400 mb-6">
            Order now for delivery or pickup through our partner platforms
          </p>
          <OrderButtons variant="horizontal" size="lg" className="justify-center" />
        </div>
      </section>
    </div>
  )
}
