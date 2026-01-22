'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/common/Logo'
import { Menu, X, Settings } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/standard' },
  { name: 'Menu', href: '/standard/menu' },
  { name: 'Contact', href: '/standard/contact' },
  { name: 'Admin', href: '/standard-admin', isAdmin: true },
]

export default function NavStandard() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-md sticky top-0 z-40">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Logo href="/standard" size="md" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.filter(link => !link.isAdmin).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-secondary hover:text-primary font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/standard-admin"
              className="flex items-center gap-1.5 text-blue-600 hover:text-blue-700 font-medium transition-colors"
            >
              <Settings className="w-4 h-4" />
              Admin
            </Link>
            <a
              href="tel:0391234567"
              className="bg-primary hover:bg-primary-dark text-white font-medium py-2 px-4 rounded-lg transition-colors"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-secondary"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col gap-2">
              {navLinks.filter(link => !link.isAdmin).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 px-4 text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/standard-admin"
                onClick={() => setIsOpen(false)}
                className="py-2 px-4 text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center gap-2"
              >
                <Settings className="w-4 h-4" />
                Admin Panel
              </Link>
              <a
                href="tel:0391234567"
                className="mt-2 bg-primary hover:bg-primary-dark text-white font-medium py-3 px-4 rounded-lg text-center transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
