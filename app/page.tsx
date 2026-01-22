'use client'

import Link from 'next/link'
import Logo from '@/components/common/Logo'
import { Check, X } from 'lucide-react'

const packages = [
  {
    id: 'lite',
    name: 'Lite',
    fullName: 'Template Pro',
    price: 'A$890',
    description: 'Perfect for restaurants starting their online presence',
    color: 'from-blue-500 to-blue-600',
    borderColor: 'border-blue-500',
    features: [
      { name: 'Single Page Website', included: true },
      { name: 'Mobile-First Design', included: true },
      { name: 'Hero Section with CTA', included: true },
      { name: 'Simple Menu Display', included: true },
      { name: 'Basic Contact Info', included: true },
      { name: 'Order Button (1 platform)', included: true },
      { name: 'Admin Panel', included: false },
      { name: 'Multi-Page Navigation', included: false },
      { name: 'Contact Form', included: false },
      { name: 'Google Maps Embed', included: false },
    ],
    href: '/lite',
    cta: 'View Demo'
  },
  {
    id: 'standard',
    name: 'Standard',
    fullName: 'Conversion',
    price: 'A$1,490',
    description: 'Optimized for customer conversion and engagement',
    color: 'from-primary to-primary-dark',
    borderColor: 'border-primary',
    popular: true,
    features: [
      { name: 'Multi-Page Website', included: true },
      { name: 'Mobile-First Design', included: true },
      { name: 'Hero Section with CTA', included: true },
      { name: 'Categorized Menu Pages', included: true },
      { name: 'Enhanced Contact Form', included: true },
      { name: 'Order Buttons (3 platforms)', included: true },
      { name: 'Google Maps Embed', included: true },
      { name: 'Basic Admin Panel', included: true },
      { name: 'Gallery Page', included: false },
      { name: 'Advanced Animations', included: false },
    ],
    href: '/standard',
    cta: 'View Demo'
  },
  {
    id: 'plus',
    name: 'Plus',
    fullName: 'Custom',
    price: 'A$2,200',
    description: 'Full-featured website with premium experience',
    color: 'from-accent to-yellow-600',
    borderColor: 'border-accent',
    features: [
      { name: 'Multi-Page Website', included: true },
      { name: 'Mobile-First Design', included: true },
      { name: 'Animated Hero Section', included: true },
      { name: 'Menu with Filter', included: true },
      { name: 'Full Contact Form', included: true },
      { name: 'Order Buttons + QR Code', included: true },
      { name: 'Google Maps + Directions', included: true },
      { name: 'Advanced Animations', included: true },
      { name: 'Photo Gallery Page', included: true },
      { name: 'Full Admin Panel', included: true },
    ],
    href: '/plus',
    cta: 'View Demo'
  }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen animated-gradient-bg relative overflow-hidden">
      {/* Floating orbs for visual effect */}
      <div className="floating-orb floating-orb-1" />
      <div className="floating-orb floating-orb-2" />
      <div className="floating-orb floating-orb-3" />
      {/* Header */}
      <header className="py-6 px-4 relative z-10">
        <div className="container-custom flex justify-center">
          <Logo variant="light" size="lg" href={undefined} />
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4 text-center text-white relative z-10">
        <div className="container-custom max-w-4xl">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Restaurant Website Demo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Choose a package to see the demo
          </p>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Each package demonstrates different features and capabilities.
            Click on any package to explore the full demo experience.
          </p>
        </div>
      </section>

      {/* Package Cards */}
      <section className="py-12 px-4 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className={`
                  relative bg-white rounded-2xl shadow-xl overflow-hidden
                  transform hover:scale-105 transition-all duration-300
                  ${pkg.popular ? 'ring-4 ring-primary' : ''}
                `}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-primary text-white text-sm font-bold px-4 py-1 rounded-bl-lg">
                      Popular
                    </div>
                  </div>
                )}

                {/* Header */}
                <div className={`bg-gradient-to-r ${pkg.color} text-white p-6`}>
                  <div className="text-sm opacity-80">{pkg.fullName}</div>
                  <h3 className="font-heading text-3xl font-bold">{pkg.name}</h3>
                  <div className="mt-2">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                  </div>
                </div>

                {/* Description */}
                <div className="p-6 border-b">
                  <p className="text-gray-600">{pkg.description}</p>
                </div>

                {/* Features */}
                <div className="p-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-green-600" strokeWidth={3} />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                            <X className="w-3 h-3 text-gray-400" strokeWidth={3} />
                          </div>
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400'}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <div className="p-6 pt-0">
                  <Link
                    href={pkg.href}
                    className={`
                      block w-full py-4 text-center font-bold rounded-lg
                      bg-gradient-to-r ${pkg.color} text-white
                      hover:opacity-90 transition-opacity
                      shadow-lg hover:shadow-xl
                    `}
                  >
                    {pkg.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 px-4 relative z-10">
        <div className="container-custom max-w-4xl">
          <h2 className="font-heading text-3xl font-bold text-center text-white mb-8">
            Feature Comparison
          </h2>
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="text-left py-4 px-6 font-semibold">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-blue-600">Lite</th>
                    <th className="text-center py-4 px-4 font-semibold text-primary">Standard</th>
                    <th className="text-center py-4 px-4 font-semibold text-accent">Plus</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {[
                    { feature: 'หน้าแรก (Hero + CTA)', lite: true, standard: true, plus: true },
                    { feature: 'Mobile-first Design', lite: true, standard: true, plus: true },
                    { feature: 'Menu Display', lite: 'Basic', standard: 'Categories', plus: 'Filter' },
                    { feature: 'Gallery Page', lite: false, standard: false, plus: true },
                    { feature: 'About Us Page', lite: false, standard: false, plus: true },
                    { feature: 'Contact Form', lite: 'Basic', standard: 'Enhanced', plus: 'Full' },
                    { feature: 'Google Maps', lite: 'Link Only', standard: 'Embed', plus: 'Embed + Directions' },
                    { feature: 'Order Buttons', lite: '1 platform', standard: '3 platforms', plus: '3 + QR Code' },
                    { feature: 'Animations', lite: false, standard: 'Basic', plus: 'Advanced' },
                    { feature: 'Admin Panel', lite: false, standard: 'Basic', plus: 'Full' },
                  ].map((row, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-gray-700">{row.feature}</td>
                      <td className="text-center py-4 px-4">
                        {typeof row.lite === 'boolean' ? (
                          row.lite ? (
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                              <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                              <X className="w-3.5 h-3.5 text-gray-400" strokeWidth={3} />
                            </div>
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{row.lite}</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {typeof row.standard === 'boolean' ? (
                          row.standard ? (
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                              <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                              <X className="w-3.5 h-3.5 text-gray-400" strokeWidth={3} />
                            </div>
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{row.standard}</span>
                        )}
                      </td>
                      <td className="text-center py-4 px-4">
                        {typeof row.plus === 'boolean' ? (
                          row.plus ? (
                            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mx-auto">
                              <Check className="w-3.5 h-3.5 text-green-600" strokeWidth={3} />
                            </div>
                          ) : (
                            <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
                              <X className="w-3.5 h-3.5 text-gray-400" strokeWidth={3} />
                            </div>
                          )
                        ) : (
                          <span className="text-sm text-gray-600">{row.plus}</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-400 relative z-10">
        <p className="text-sm">
          This is a demo website for BD presentation purposes.
        </p>
        <p className="text-xs mt-2">
          © {new Date().getFullYear()} Devio - www.devio.co.th
        </p>
      </footer>
    </div>
  )
}
