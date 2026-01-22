import Logo from './Logo'
import { MapPin, Phone, Mail, Clock, ArrowRight, Facebook, Instagram, Twitter } from 'lucide-react'

interface FooterProps {
  variant?: 'simple' | 'standard' | 'full'
  className?: string
}

export default function Footer({ variant = 'standard', className = '' }: FooterProps) {
  const currentYear = new Date().getFullYear()

  if (variant === 'simple') {
    return (
      <footer className={`bg-secondary text-white py-6 ${className}`}>
        <div className="container-custom text-center">
          <Logo href="/" variant="light" size="sm" />
          <p className="text-gray-400 text-sm mt-2">
            © {currentYear} Devio. All rights reserved.
          </p>
        </div>
      </footer>
    )
  }

  if (variant === 'standard') {
    return (
      <footer className={`bg-secondary text-white py-12 ${className}`}>
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Logo & About */}
            <div>
              <Logo href="/" variant="light" size="md" />
              <p className="text-gray-400 mt-4">
                Experience authentic Asian fusion cuisine in the heart of Melbourne.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-accent mb-4">Contact Us</h4>
              <div className="space-y-2 text-gray-400">
                <p className="flex items-center gap-2"><MapPin className="w-4 h-4" /> 123 Chapel Street, South Yarra VIC 3141</p>
                <p className="flex items-center gap-2"><Phone className="w-4 h-4" /> (03) 9123 4567</p>
                <p className="flex items-center gap-2"><Mail className="w-4 h-4" /> hello@devio.co.th</p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-accent mb-4">Opening Hours</h4>
              <div className="space-y-2 text-gray-400">
                <p>Mon - Thu: 11:30am - 9:30pm</p>
                <p>Fri - Sat: 11:30am - 10:30pm</p>
                <p>Sunday: 12:00pm - 9:00pm</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© {currentYear} Devio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }

  // Full variant
  return (
    <footer className={`bg-secondary text-white ${className}`}>
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="lg:col-span-1">
            <Logo href="/" variant="light" size="md" />
            <p className="text-gray-400 mt-4">
              Where East meets West. Experience the finest Asian fusion cuisine crafted with passion and tradition.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <span className="sr-only">facebook</span>
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <span className="sr-only">instagram</span>
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <span className="sr-only">twitter</span>
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-accent mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Menu', 'About Us', 'Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-accent mb-4">Contact Us</h4>
            <div className="space-y-3 text-gray-400">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>123 Chapel Street<br />South Yarra VIC 3141</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <a href="tel:0391234567" className="hover:text-white transition-colors">
                  (03) 9123 4567
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:hello@devio.co.th" className="hover:text-white transition-colors">
                  hello@devio.co.th
                </a>
              </p>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-heading text-lg font-semibold text-accent mb-4">Opening Hours</h4>
            <div className="space-y-2 text-gray-400">
              <div className="flex justify-between">
                <span>Mon - Thu</span>
                <span>11:30am - 9:30pm</span>
              </div>
              <div className="flex justify-between">
                <span>Fri - Sat</span>
                <span>11:30am - 10:30pm</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday</span>
                <span>12:00pm - 9:00pm</span>
              </div>
            </div>
            <div className="mt-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors"
              >
                <span>Get Directions</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="container-custom py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">
          <p>© {currentYear} Devio. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
