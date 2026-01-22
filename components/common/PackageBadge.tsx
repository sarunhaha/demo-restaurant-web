'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface PackageBadgeProps {
  packageName: 'lite' | 'standard' | 'plus'
  showPrice?: boolean
  showCompareLink?: boolean
}

const packageInfo = {
  lite: {
    name: 'Lite',
    fullName: 'Template Pro',
    price: 'A$890',
    color: 'bg-blue-500',
    features: ['Single Page', 'Mobile-First', 'Basic Contact']
  },
  standard: {
    name: 'Standard',
    fullName: 'Conversion',
    price: 'A$1,490',
    color: 'bg-primary',
    features: ['Multi-Page', 'Menu Categories', 'Contact Form', 'Map Embed']
  },
  plus: {
    name: 'Plus',
    fullName: 'Custom',
    price: 'A$2,200',
    color: 'bg-accent',
    features: ['All Features', 'Animations', 'Gallery', 'Menu Filter', 'QR Ordering']
  }
}

export default function PackageBadge({
  packageName,
  showPrice = true,
  showCompareLink = true
}: PackageBadgeProps) {
  const pkg = packageInfo[packageName]
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <>
      {/* Mobile: Bottom badge - collapsible */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 z-50">
        <div className={`${pkg.color} text-white rounded-xl shadow-lg overflow-hidden`}>
          {/* Collapsed header - always visible */}
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between p-3"
          >
            <div className="flex items-center gap-3">
              <div className="font-bold">{pkg.name}</div>
              <div className="text-sm opacity-80">{pkg.price}</div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs opacity-80">Demo</span>
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronUp className="w-4 h-4" />
              )}
            </div>
          </button>

          {/* Expanded content */}
          {isExpanded && (
            <div className="px-3 pb-3 pt-0 border-t border-white/20">
              <div className="text-sm opacity-90 mb-2">{pkg.fullName}</div>
              {showCompareLink && (
                <Link
                  href="/"
                  className="block text-center text-sm bg-white/20 hover:bg-white/30 rounded-lg py-2 transition-colors"
                >
                  Compare All Packages
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Desktop: Top-right badge */}
      <div className="hidden md:block fixed top-4 right-4 z-50">
        <div className={`${pkg.color} text-white rounded-lg shadow-lg p-3 min-w-[140px]`}>
          <div className="text-xs opacity-80">Demo Package</div>
          <div className="font-bold text-lg">{pkg.name}</div>
          <div className="text-sm opacity-90">{pkg.fullName}</div>
          {showPrice && (
            <div className="font-semibold mt-1">{pkg.price}</div>
          )}
          {showCompareLink && (
            <Link
              href="/"
              className="mt-2 block text-center text-xs bg-white/20 hover:bg-white/30 rounded py-1 transition-colors"
            >
              Compare All Packages
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
