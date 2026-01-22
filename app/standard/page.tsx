import Image from 'next/image'
import Link from 'next/link'
import OrderButtons from '@/components/common/OrderButtons'
import { getBestsellers } from '@/data/menu'
import { Leaf, ChefHat, Zap, Flame, Phone } from 'lucide-react'

export default function StandardHomePage() {
  const bestsellers = getBestsellers().slice(0, 6)

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[450px] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=1920"
            alt="Delicious Asian cuisine"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        </div>

        <div className="relative z-10 container-custom">
          <div className="max-w-2xl text-white">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
              Experience Authentic
              <span className="text-accent block">Asian Fusion</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8">
              Fresh ingredients, bold flavors, unforgettable taste
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/standard/menu"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center"
              >
                View Menu
              </Link>
              <Link
                href="/standard/contact"
                className="inline-block bg-white/20 hover:bg-white/30 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors text-center backdrop-blur"
              >
                Book a Table
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Order Online Section */}
      <section className="bg-secondary py-8">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-white text-center md:text-left">
              <h2 className="font-heading text-2xl font-bold">Order Online</h2>
              <p className="text-gray-400">Available for delivery & pickup</p>
            </div>
            <OrderButtons variant="horizontal" size="md" />
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-16 px-4">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-primary">Bestsellers</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover the dishes our guests love most. Each one crafted with passion and the finest ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestsellers.map((item) => (
              <div key={item.name} className="card-hover">
                <div className="relative h-48">
                  <Image
                    src={item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-secondary text-sm font-bold px-3 py-1 rounded-full">
                      Bestseller
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-heading text-xl font-semibold">{item.name}</h3>
                    <span className="text-primary font-bold text-lg">${item.price.toFixed(2)}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                  <div className="flex gap-2 mt-3">
                    {item.spicy && (
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded flex items-center gap-1"><Flame className="w-3 h-3" /> Spicy</span>
                    )}
                    {item.vegetarian && (
                      <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded flex items-center gap-1"><Leaf className="w-3 h-3" /> Vegetarian</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/standard/menu"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="container-custom">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Why <span className="text-primary">Choose Us</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Fresh Ingredients</h3>
                <p className="text-gray-600">We source the finest local and imported ingredients daily for authentic flavors.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-orange-100 rounded-full flex items-center justify-center">
                  <ChefHat className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Expert Chefs</h3>
                <p className="text-gray-600">Our chefs bring decades of experience from across Asia to your plate.</p>
              </div>
              <div className="text-center p-8 bg-white rounded-xl shadow-lg">
                <div className="w-16 h-16 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-yellow-600" />
                </div>
                <h3 className="font-heading text-xl font-semibold mb-3">Quick Service</h3>
                <p className="text-gray-600">Enjoy fast delivery or dine-in service without compromising quality.</p>
              </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 px-4">
        <div className="container-custom text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Experience Our Cuisine?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Visit us today or order online. Your taste buds will thank you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/standard/contact"
              className="inline-block bg-white text-primary hover:bg-gray-100 font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Reserve a Table
            </Link>
            <a
              href="tel:0391234567"
              className="inline-block bg-accent hover:bg-accent-light text-secondary font-bold py-4 px-8 rounded-lg transition-colors"
            >
              <Phone className="w-5 h-5 inline mr-1" /> (03) 9123 4567
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
