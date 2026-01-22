import Image from 'next/image'
import Link from 'next/link'
import { Leaf, Flame, Sparkles, Trophy } from 'lucide-react'

export default function PlusAboutPage() {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920"
            alt="Our kitchen"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 text-center text-white pt-16">
          <span className="inline-block bg-accent/90 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
            Since 2009
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-gray-200 max-w-xl mx-auto">
            Where tradition meets innovation in every dish
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-primary font-semibold">The Beginning</span>
              <h2 className="font-heading text-4xl font-bold mt-2 mb-6">
                A Journey of <span className="text-primary">Passion</span>
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  This restaurant was born from a simple dream: to bring the authentic flavors of Asia to Melbourne&apos;s vibrant food scene. Founded in 2009 by Chef Michael Chen, our restaurant started as a small family-run eatery on Chapel Street.
                </p>
                <p>
                  Growing up in a multicultural household with Thai and Chinese heritage, Chef Michael was exposed to diverse culinary traditions from an early age. His grandmother&apos;s secret recipes and his father&apos;s innovative cooking techniques laid the foundation for what would become our signature style.
                </p>
                <p>
                  After training in Bangkok, Singapore, and Tokyo, Chef Michael returned to Melbourne with a vision: to create dishes that honor traditional Asian cooking while embracing modern Australian produce and techniques.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800"
                  alt="Chef preparing food"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-xl shadow-xl">
                <p className="font-heading text-4xl font-bold">15+</p>
                <p className="font-medium">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold">What We Believe</span>
            <h2 className="font-heading text-4xl font-bold mt-2">
              Our <span className="text-primary">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4">Fresh & Local</h3>
                <p className="text-gray-600">We source the finest local Australian produce daily, ensuring every dish bursts with freshness and supports local farmers.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center">
                  <Flame className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4">Authentic Flavors</h3>
                <p className="text-gray-600">Our recipes have been perfected over generations, bringing you the true taste of Asia with no shortcuts or compromises.</p>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 mx-auto mb-4 bg-purple-100 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="font-heading text-2xl font-semibold mb-4">Exceptional Service</h3>
                <p className="text-gray-600">Every guest is family. We strive to create memorable dining experiences through warm hospitality and attention to detail.</p>
              </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-primary font-semibold">The People Behind The Food</span>
            <h2 className="font-heading text-4xl font-bold mt-2">
              Meet Our <span className="text-primary">Team</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: 'Michael Chen',
                role: 'Head Chef & Founder',
                image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400',
                bio: '20+ years of culinary experience across Asia and Australia'
              },
              {
                name: 'Sarah Wong',
                role: 'Sous Chef',
                image: 'https://images.unsplash.com/photo-1595273670150-bd0c3c392e46?w=400',
                bio: 'Specializes in traditional Thai and Vietnamese cuisine'
              },
              {
                name: 'David Park',
                role: 'Pastry Chef',
                image: 'https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?w=400',
                bio: 'Creates fusion desserts that blend East and West'
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="font-heading text-xl font-semibold">{member.name}</h3>
                <p className="text-primary font-medium mb-2">{member.role}</p>
                <p className="text-gray-500 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="bg-secondary py-20 px-4">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-accent font-semibold">Recognition</span>
            <h2 className="font-heading text-4xl font-bold text-white mt-2">
              Awards & Accolades
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { year: '2023', award: 'Best Asian Restaurant', org: 'Melbourne Food Awards' },
              { year: '2022', award: "Chef's Hat", org: 'Good Food Guide' },
              { year: '2021', award: 'Excellence in Service', org: 'Hospitality Awards' },
              { year: '2020', award: 'Top 50 Restaurants', org: 'Time Out Melbourne' }
            ].map((award, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-accent/20 rounded-full flex items-center justify-center">
                  <Trophy className="w-8 h-8 text-accent" />
                </div>
                <p className="text-accent font-bold">{award.year}</p>
                <p className="text-white font-semibold">{award.award}</p>
                <p className="text-gray-400 text-sm">{award.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <div className="container-custom text-center">
          <h2 className="font-heading text-4xl font-bold mb-6">
            Come Experience the <span className="text-primary">Difference</span>
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            We&apos;d love to welcome you to our family. Book your table today and taste the passion that goes into every dish.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/plus/contact"
              className="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-4 px-8 rounded-lg transition-colors"
            >
              Reserve a Table
            </Link>
            <Link
              href="/plus/menu"
              className="inline-block bg-accent hover:bg-accent-light text-secondary font-bold py-4 px-8 rounded-lg transition-colors"
            >
              View Our Menu
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
