'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import OrderButtons from '@/components/common/OrderButtons'
import { getBestsellers, menuCategories } from '@/data/menu'
import { ArrowRight, ChevronDown, Star, Phone } from 'lucide-react'

function useInView(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isInView }
}

function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up'
}: {
  children: React.ReactNode
  className?: string
  animation?: 'fade-up' | 'fade-in' | 'scale-in'
}) {
  const { ref, isInView } = useInView()

  const animationClasses = {
    'fade-up': isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
    'fade-in': isInView ? 'opacity-100' : 'opacity-0',
    'scale-in': isInView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
  }

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${animationClasses[animation]} ${className}`}
    >
      {children}
    </div>
  )
}

export default function PlusHomePage() {
  const bestsellers = getBestsellers().slice(0, 4)
  const [currentSlide, setCurrentSlide] = useState(0)

  const heroImages = [
    'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920',
    'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1920',
    'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [heroImages.length])

  return (
    <div className="overflow-hidden">
      {/* Parallax Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center">
        {/* Background Slideshow */}
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image}
              alt={`Hero image ${index + 1}`}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-accent w-8' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 container-custom">
          <div className="max-w-3xl">
            <div className="animate-fade-in">
              <span className="inline-block bg-accent/90 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-6">
                <Star className="w-4 h-4 inline fill-current" /> Award-Winning Cuisine
              </span>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-slide-up">
              A Culinary Journey Through
              <span className="text-accent block mt-2">Asia</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Where tradition meets innovation. Experience the finest Asian fusion cuisine crafted with passion and precision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <Link
                href="/plus/menu"
                className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg text-lg transition-all hover:scale-105 shadow-lg"
              >
                <span>Explore Menu</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/plus/contact"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all border border-white/30"
              >
                <span>Reserve Table</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-24 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 text-white" />
        </div>
      </section>

      {/* Order Online Strip */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-6">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-white text-center lg:text-left">
              <h2 className="font-heading text-2xl font-bold">Order Online</h2>
              <p className="text-white/80">Delivery & pickup available</p>
            </div>
            <OrderButtons variant="horizontal" size="md" showQR />
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <div className="relative">
                <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800"
                    alt="Our chef preparing food"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-accent text-secondary p-6 rounded-xl shadow-xl">
                  <p className="font-heading text-4xl font-bold">15+</p>
                  <p className="font-medium">Years of Excellence</p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" className="lg:pl-8">
              <span className="text-primary font-semibold">Our Story</span>
              <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2 mb-6">
                A Passion for
                <span className="text-primary"> Asian Flavors</span>
              </h2>
              <p className="text-gray-600 text-lg mb-6">
                Founded in 2009, this restaurant has been Melbourne&apos;s premier destination for authentic Asian cuisine. Our chefs bring together the best of Thai, Vietnamese, Japanese, and Chinese culinary traditions.
              </p>
              <p className="text-gray-600 mb-8">
                Every dish tells a story of heritage, crafted with locally-sourced ingredients and time-honored techniques passed down through generations.
              </p>
              <Link
                href="/plus/about"
                className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors group"
              >
                Learn More About Us
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold">Chef&apos;s Selection</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2">
              Signature <span className="text-primary">Dishes</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Handpicked favorites that showcase the essence of our culinary expertise
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {bestsellers.map((item, index) => (
              <AnimatedSection key={item.name} animation="scale-in" className={`delay-${index * 100}`}>
                <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={item.image || 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400'}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-secondary text-xs font-bold px-3 py-1 rounded-full shadow">
                        <Star className="w-3 h-3 inline fill-current" /> Bestseller
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="bg-white/90 text-primary font-bold px-4 py-2 rounded-lg shadow">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold mb-2">{item.name}</h3>
                    <p className="text-gray-500 text-sm line-clamp-2">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-12">
            <Link
              href="/plus/menu"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-all hover:scale-105 shadow-lg"
            >
              View Full Menu
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-primary font-semibold">Visual Journey</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mt-2">
              Our <span className="text-primary">Gallery</span>
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600',
                'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600',
                'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600',
                'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600',
                'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600',
              ].map((image, index) => (
                <div
                  key={index}
                  className={`relative overflow-hidden rounded-xl ${
                    index === 0 ? 'col-span-2 row-span-2 h-80' : 'h-36 md:h-40'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="text-center mt-8">
            <Link
              href="/plus/gallery"
              className="inline-flex items-center gap-2 text-primary hover:text-primary-dark font-semibold transition-colors"
            >
              View Full Gallery
              <ArrowRight className="w-5 h-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary py-20 px-4">
        <div className="container-custom">
          <AnimatedSection className="text-center mb-12">
            <span className="text-accent font-semibold">What People Say</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mt-2">
              Customer Reviews
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Sarah M.',
                review: 'Absolutely incredible! The Pad Thai here is the best I\'ve ever had. The flavors are authentic and the service is impeccable.',
                rating: 5
              },
              {
                name: 'James L.',
                review: 'A hidden gem in Melbourne. Every dish is a masterpiece. The crispy duck is to die for!',
                rating: 5
              },
              {
                name: 'Emily W.',
                review: 'Perfect for date night. Beautiful ambiance, delicious food, and wonderful staff. Highly recommend!',
                rating: 5
              }
            ].map((testimonial, index) => (
              <AnimatedSection key={index} animation="scale-in">
                <div className="bg-white/10 backdrop-blur rounded-2xl p-8 h-full">
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-accent fill-accent" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-6 italic">&ldquo;{testimonial.review}&rdquo;</p>
                  <p className="text-accent font-semibold">{testimonial.name}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920"
            alt="Restaurant atmosphere"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 container-custom text-center text-white">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6">
              Ready for an <span className="text-accent">Unforgettable</span> Experience?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your table today and embark on a culinary journey through Asia
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/plus/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent hover:bg-accent-light text-secondary font-bold py-4 px-8 rounded-lg text-lg transition-all hover:scale-105"
              >
                Reserve Your Table
              </Link>
              <a
                href="tel:0391234567"
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur hover:bg-white/20 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all border border-white/30"
              >
                <Phone className="w-5 h-5" /> (03) 9123 4567
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
