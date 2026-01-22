'use client'

import Image from 'next/image'
import { useState } from 'react'
import OrderButtons from '@/components/common/OrderButtons'
import { MapPin, Phone, Mail, Clock, ExternalLink, Check } from 'lucide-react'

export default function PlusContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '2',
    occasion: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: '2',
        occasion: '',
        message: ''
      })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1920"
            alt="Contact us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50" />
        </div>
        <div className="relative z-10 text-center text-white pt-16">
          <span className="inline-block bg-accent/90 text-secondary px-4 py-2 rounded-full text-sm font-bold mb-4">
            Get In Touch
          </span>
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-gray-200 max-w-xl mx-auto">
            We&apos;d love to hear from you
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 px-4">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-3xl font-bold mb-8">Visit Us</h2>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-gray-600">
                      123 Chapel Street<br />
                      South Yarra VIC 3141
                    </p>
                    <a
                      href="https://maps.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary hover:text-primary-dark mt-2 text-sm font-medium"
                    >
                      Get Directions
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:0391234567" className="text-primary hover:text-primary-dark text-lg font-medium">
                      (03) 9123 4567
                    </a>
                    <p className="text-gray-500 text-sm mt-1">For reservations and inquiries</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:hello@devio.co.th" className="text-primary hover:text-primary-dark">
                      hello@devio.co.th
                    </a>
                    <p className="text-gray-500 text-sm mt-1">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex gap-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-gray-600">
                      <div className="flex justify-between">
                        <span>Mon - Thu</span>
                        <span className="font-medium">11:30am - 9:30pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Fri - Sat</span>
                        <span className="font-medium">11:30am - 10:30pm</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span className="font-medium">12:00pm - 9:00pm</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Online */}
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <h3 className="font-heading text-xl font-semibold mb-4">Order Online</h3>
                <OrderButtons variant="vertical" size="sm" />
              </div>
            </div>

            {/* Reservation Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h2 className="font-heading text-3xl font-bold mb-2">Make a Reservation</h2>
                <p className="text-gray-500 mb-8">Fill out the form below and we&apos;ll confirm your booking shortly</p>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="w-10 h-10 text-green-500" strokeWidth={2} />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-green-600 mb-2">
                      Reservation Request Sent!
                    </h3>
                    <p className="text-gray-600">
                      We&apos;ll confirm your booking via email within 24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Name */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          placeholder="Your name"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          placeholder="your@email.com"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                          placeholder="(04) 1234 5678"
                        />
                      </div>

                      {/* Guests */}
                      <div>
                        <label htmlFor="guests" className="block text-sm font-medium text-gray-700 mb-2">
                          Number of Guests *
                        </label>
                        <select
                          id="guests"
                          name="guests"
                          value={formData.guests}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                            <option key={num} value={num}>{num} {num === 1 ? 'Guest' : 'Guests'}</option>
                          ))}
                          <option value="9+">9+ Guests (Large Party)</option>
                        </select>
                      </div>

                      {/* Date */}
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date *
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        />
                      </div>

                      {/* Time */}
                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time *
                        </label>
                        <select
                          id="time"
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                        >
                          <option value="">Select a time</option>
                          {['11:30', '12:00', '12:30', '13:00', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30'].map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Occasion */}
                    <div>
                      <label htmlFor="occasion" className="block text-sm font-medium text-gray-700 mb-2">
                        Special Occasion (Optional)
                      </label>
                      <select
                        id="occasion"
                        name="occasion"
                        value={formData.occasion}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition"
                      >
                        <option value="">Select if applicable</option>
                        <option value="birthday">Birthday</option>
                        <option value="anniversary">Anniversary</option>
                        <option value="business">Business Dinner</option>
                        <option value="date">Date Night</option>
                        <option value="other">Other Celebration</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Special Requests (Optional)
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition resize-none"
                        placeholder="Any dietary requirements, seating preferences, or special requests..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg"
                    >
                      Request Reservation
                    </button>

                    <p className="text-center text-gray-500 text-sm">
                      Need immediate assistance? Call us at{' '}
                      <a href="tel:0391234567" className="text-primary font-medium">
                        (03) 9123 4567
                      </a>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[500px] relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153186!3d-37.81627917975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sChapel%20St%2C%20South%20Yarra%20VIC%203141!5e0!3m2!1sen!2sau!4v1234567890"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Restaurant location"
        />

        {/* Floating Info Card */}
        <div className="absolute top-8 left-8 bg-white rounded-2xl shadow-2xl p-6 max-w-sm hidden md:block">
          <h3 className="font-heading text-xl font-bold mb-2">Demo Restaurant</h3>
          <p className="text-gray-600 mb-4">
            123 Chapel Street, South Yarra VIC 3141
          </p>
          <div className="flex gap-3">
            <a
              href="https://maps.google.com/maps/dir//Chapel+St,+South+Yarra+VIC+3141"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg text-center transition-colors text-sm"
            >
              Get Directions
            </a>
            <a
              href="tel:0391234567"
              className="flex-1 bg-accent hover:bg-accent-light text-secondary font-medium py-2 px-4 rounded-lg text-center transition-colors text-sm"
            >
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
