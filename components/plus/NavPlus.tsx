'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Logo from '@/components/common/Logo'
import { Menu, X, Phone, Settings } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/plus' },
  { name: 'Menu', href: '/plus/menu' },
  { name: 'About', href: '/plus/about' },
  { name: 'Gallery', href: '/plus/gallery' },
  { name: 'Contact', href: '/plus/contact' },
  { name: 'Admin', href: '/plus-admin', isAdmin: true },
]

export default function NavPlus() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => pathname === href

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo
            href="/plus"
            size="md"
            variant={scrolled ? 'dark' : 'light'}
            className="transition-colors duration-300"
          />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.filter(link => !link.isAdmin).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  px-4 py-2 rounded-lg font-medium transition-all duration-200
                  ${isActive(link.href)
                    ? scrolled
                      ? 'bg-primary text-white'
                      : 'bg-white/20 text-white'
                    : scrolled
                      ? 'text-secondary hover:bg-gray-100'
                      : 'text-white/90 hover:text-white hover:bg-white/10'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/plus-admin"
              className={`
                px-3 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-1.5
                ${scrolled
                  ? 'text-accent-dark hover:bg-accent/10'
                  : 'text-accent hover:bg-white/10'
                }
              `}
            >
              <Settings className="w-4 h-4" />
              Admin
            </Link>
            <a
              href="tel:0391234567"
              className={`
                ml-4 font-bold py-2 px-6 rounded-lg transition-all duration-200
                ${scrolled
                  ? 'bg-primary hover:bg-primary-dark text-white'
                  : 'bg-accent hover:bg-accent-light text-secondary'
                }
              `}
            >
              Book Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled ? 'text-secondary' : 'text-white'
            }`}
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
        <div
          className={`
            md:hidden overflow-hidden transition-all duration-300
            ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}
          `}
        >
          <div className={`mt-4 p-4 rounded-xl ${scrolled ? 'bg-gray-50' : 'bg-white/95 shadow-lg'}`}>
            {navLinks.filter(link => !link.isAdmin).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block py-4 px-4 rounded-lg transition-colors mb-2 text-base font-medium
                  ${isActive(link.href)
                    ? 'bg-primary text-white'
                    : 'text-secondary hover:bg-gray-100'
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/plus-admin"
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-2 py-4 px-4 rounded-lg transition-colors mb-2 text-base font-medium text-accent-dark hover:bg-accent/10"
            >
              <Settings className="w-5 h-5" />
              Admin Panel
            </Link>
            <a
              href="tel:0391234567"
              className="block mt-3 bg-accent text-secondary font-bold py-4 px-4 rounded-lg text-center text-base"
            >
              <Phone className="w-5 h-5 inline mr-2" /> Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
