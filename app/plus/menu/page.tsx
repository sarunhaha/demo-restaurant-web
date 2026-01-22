'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'
import { menuCategories, MenuItem } from '@/data/menu'
import OrderButtons from '@/components/common/OrderButtons'
import { Star, Flame, Leaf, Nut, Shell, Wheat, Vegan } from 'lucide-react'

type FilterType = 'all' | 'bestseller' | 'spicy' | 'vegetarian'

export default function PlusMenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState('')
  const [filter, setFilter] = useState<FilterType>('all')

  const allItems = useMemo(() => {
    return menuCategories.flatMap(cat =>
      cat.items.map(item => ({ ...item, category: cat.name }))
    )
  }, [])

  const filteredItems = useMemo(() => {
    let items = activeCategory === 'all'
      ? allItems
      : allItems.filter(item => item.category === activeCategory)

    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      items = items.filter(item =>
        item.name.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term)
      )
    }

    if (filter !== 'all') {
      items = items.filter(item => item[filter])
    }

    return items
  }, [activeCategory, searchTerm, filter, allItems])

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920"
            alt="Our menu"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 text-center text-white pt-16">
          <span className="inline-block bg-accent/90 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
            Explore Our Selection
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
          <p className="text-xl text-gray-200 max-w-xl mx-auto">
            Discover the finest Asian fusion cuisine, crafted with passion
          </p>
        </div>
      </section>

      {/* Sticky Filter Bar */}
      <section className="sticky top-20 md:top-24 z-30 bg-white/95 backdrop-blur-sm shadow-md py-3 mt-4 mx-4 rounded-xl">
        <div className="container-custom">
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === 'all'
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                All
              </button>
              {menuCategories.map((cat) => (
                <button
                  key={cat.name}
                  onClick={() => setActiveCategory(cat.name)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    activeCategory === cat.name
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="hidden md:block w-px h-8 bg-gray-300" />

            {/* Filter Pills */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter('bestseller')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                  filter === 'bestseller'
                    ? 'bg-accent text-secondary'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Star className="w-3 h-3" /> Popular
              </button>
              <button
                onClick={() => setFilter('spicy')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                  filter === 'spicy'
                    ? 'bg-accent text-secondary'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Flame className="w-3 h-3" /> Spicy
              </button>
              <button
                onClick={() => setFilter('vegetarian')}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1 ${
                  filter === 'vegetarian'
                    ? 'bg-accent text-secondary'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Leaf className="w-3 h-3" /> Veg
              </button>
              {filter !== 'all' && (
                <button
                  onClick={() => setFilter('all')}
                  className="px-3 py-1.5 rounded-full text-sm font-medium transition-all bg-red-100 text-red-600 hover:bg-red-200"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-12 px-4 bg-gray-50 min-h-[60vh]">
        <div className="container-custom">
          {/* Results Count */}
          <div className="mb-6 text-gray-500">
            Showing {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'}
            {searchTerm && ` for "${searchTerm}"`}
          </div>

          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-2xl text-gray-400 mb-4">No items found</p>
              <button
                onClick={() => {
                  setSearchTerm('')
                  setFilter('all')
                  setActiveCategory('all')
                }}
                className="text-primary hover:text-primary-dark font-medium"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item, index) => (
                <div
                  key={`${item.category}-${item.name}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                      {item.bestseller && (
                        <span className="bg-accent text-secondary text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                          <Star className="w-3 h-3 fill-current" /> Popular
                        </span>
                      )}
                      {item.spicy && (
                        <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                          <Flame className="w-3 h-3" /> Spicy
                        </span>
                      )}
                      {item.vegetarian && (
                        <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
                          <Leaf className="w-3 h-3" /> Veg
                        </span>
                      )}
                    </div>

                    {/* Category Badge */}
                    <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-white/90 text-secondary text-xs font-medium px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-heading text-xl font-semibold text-secondary pr-4">
                        {item.name}
                      </h3>
                      <span className="text-primary font-bold text-xl whitespace-nowrap">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="text-gray-500 text-sm line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Dietary Info */}
      <section className="bg-white py-12 px-4">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-heading text-2xl font-semibold mb-4">Dietary Information</h3>
            <p className="text-gray-600 mb-6">
              We understand that everyone has different dietary needs. Our kitchen can accommodate most requests.
              Please inform our staff of any allergies or dietary requirements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Flame className="w-4 h-4 text-red-500" /> Spicy Options
              </span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Leaf className="w-4 h-4 text-green-500" /> Vegetarian
              </span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Vegan className="w-4 h-4 text-green-600" /> Vegan Available
              </span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Wheat className="w-4 h-4 text-yellow-600" /> Gluten-Free
              </span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Nut className="w-4 h-4 text-amber-600" /> Nut-Free
              </span>
              <span className="bg-gray-100 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                <Shell className="w-4 h-4 text-blue-500" /> Shellfish-Free
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-12 px-4">
        <div className="container-custom text-center">
          <h3 className="font-heading text-3xl font-bold text-white mb-4">
            Ready to Order?
          </h3>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Order now for delivery or pickup through our partner platforms
          </p>
          <OrderButtons variant="horizontal" size="lg" showQR className="justify-center" />
        </div>
      </section>
    </div>
  )
}
