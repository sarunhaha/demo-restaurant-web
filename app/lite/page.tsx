import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/components/common/Logo'
import Footer from '@/components/common/Footer'
import PackageBadge from '@/components/common/PackageBadge'
import { menuCategories } from '@/data/menu'
import { Flame, Leaf, Phone, MapPin } from 'lucide-react'

export default function LitePage() {
  return (
    <div className="min-h-screen bg-background">
      <PackageBadge packageName="lite" />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920"
            alt="Restaurant interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <Logo variant="light" size="lg" href={undefined} className="mb-6" />
          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Authentic Asian Fusion
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Where East Meets West
          </p>
          <a
            href="https://ubereats.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
          >
            Order Now on UberEats
          </a>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 px-4">
        <div className="container-custom">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">
            Our Menu
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Discover our selection of authentic Asian dishes, crafted with fresh ingredients and traditional recipes.
          </p>

          {/* Simple Menu List */}
          <div className="max-w-3xl mx-auto space-y-8">
            {menuCategories.map((category) => (
              <div key={category.name}>
                <h3 className="font-heading text-2xl font-semibold text-primary mb-4 border-b-2 border-accent pb-2">
                  {category.name}
                </h3>
                <div className="space-y-4">
                  {category.items.slice(0, 4).map((item) => (
                    <div key={item.name} className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-secondary">{item.name}</span>
                          {item.bestseller && (
                            <span className="bg-accent text-secondary text-xs px-2 py-0.5 rounded-full font-medium">
                              Popular
                            </span>
                          )}
                          {item.spicy && (
                            <Flame className="w-4 h-4 text-red-500" title="Spicy" />
                          )}
                          {item.vegetarian && (
                            <Leaf className="w-4 h-4 text-green-500" title="Vegetarian" />
                          )}
                        </div>
                        <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                      </div>
                      <span className="font-semibold text-primary ml-4">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href="https://ubereats.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              View Full Menu & Order
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-secondary text-white py-16 px-4">
        <div className="container-custom">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">
            Visit Us
          </h2>
          <div className="max-w-xl mx-auto text-center">
            <div className="space-y-4">
              <div>
                <h3 className="text-accent font-semibold text-lg mb-2">Address</h3>
                <p className="text-gray-300">
                  123 Chapel Street<br />
                  South Yarra VIC 3141
                </p>
              </div>
              <div>
                <h3 className="text-accent font-semibold text-lg mb-2">Phone</h3>
                <a href="tel:0391234567" className="text-gray-300 hover:text-white">
                  (03) 9123 4567
                </a>
              </div>
              <div>
                <h3 className="text-accent font-semibold text-lg mb-2">Hours</h3>
                <p className="text-gray-300">
                  Mon - Sat: 11:30am - 10:00pm<br />
                  Sunday: 12:00pm - 9:00pm
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0391234567"
                className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
              >
                <Phone className="w-4 h-4 inline mr-1" /> Call Us
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent-light text-secondary font-bold py-3 px-6 rounded-lg transition-colors"
              >
                <MapPin className="w-4 h-4 inline mr-1" /> Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="simple" />
    </div>
  )
}
