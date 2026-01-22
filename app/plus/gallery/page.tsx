'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X, Instagram } from 'lucide-react'

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800',
    alt: 'Restaurant interior',
    category: 'interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800',
    alt: 'Plated dish',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800',
    alt: 'Restaurant ambiance',
    category: 'interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800',
    alt: 'Chef at work',
    category: 'kitchen'
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800',
    alt: 'Fresh ingredients',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800',
    alt: 'Bar area',
    category: 'interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800',
    alt: 'Colorful salad',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800',
    alt: 'Pad Thai',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=800',
    alt: 'Dining setup',
    category: 'interior'
  },
  {
    src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800',
    alt: 'Chef preparing sushi',
    category: 'kitchen'
  },
  {
    src: 'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800',
    alt: 'Green curry',
    category: 'food'
  },
  {
    src: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800',
    alt: 'Salmon dish',
    category: 'food'
  },
]

type CategoryType = 'all' | 'food' | 'interior' | 'kitchen'

export default function PlusGalleryPage() {
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all')
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null)

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
            alt="Gallery"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 text-center text-white pt-16">
          <span className="inline-block bg-accent/90 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
            Visual Journey
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Our Gallery</h1>
          <p className="text-xl text-gray-200 max-w-xl mx-auto">
            A glimpse into our restaurant experience
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-20 md:top-24 z-30 bg-white/95 backdrop-blur-sm shadow-md py-3 mt-4 mx-4 rounded-xl">
        <div className="container-custom">
          <div className="flex justify-center gap-2 flex-wrap">
            {[
              { key: 'all', label: 'All Photos' },
              { key: 'food', label: 'Food' },
              { key: 'interior', label: 'Interior' },
              { key: 'kitchen', label: 'Kitchen' },
            ].map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as CategoryType)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === key
                    ? 'bg-primary text-white shadow-lg'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container-custom">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="break-inside-avoid cursor-pointer group"
                onClick={() => setSelectedImage(image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="bg-white/90 text-secondary px-4 py-2 rounded-full font-medium">
                        View Image
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative max-w-5xl max-h-[80vh] w-full">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <p className="text-white text-center mt-4 font-medium">{selectedImage.alt}</p>
          </div>
        </div>
      )}

      {/* Instagram CTA */}
      <section className="bg-gradient-to-r from-purple-600 to-pink-500 py-12 px-4">
        <div className="container-custom text-center text-white">
          <h3 className="font-heading text-3xl font-bold mb-4">
            Follow Us on Instagram
          </h3>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Tag us @devio_th for a chance to be featured on our page
          </p>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-purple-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Instagram className="w-6 h-6" />
            @devio_th
          </a>
        </div>
      </section>
    </div>
  )
}
