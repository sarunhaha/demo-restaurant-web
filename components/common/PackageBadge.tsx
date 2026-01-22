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
    price: '$890 AUD',
    bgColor: 'bg-blue-500',
    textColor: 'text-white',
    features: ['Single Page', 'Mobile-First', 'Basic Contact']
  },
  standard: {
    name: 'Standard',
    fullName: 'Conversion',
    price: '$1,490 AUD',
    bgColor: 'bg-primary',
    textColor: 'text-white',
    features: ['Multi-Page', 'Menu Categories', 'Contact Form', 'Map Embed']
  },
  plus: {
    name: 'Plus',
    fullName: 'Custom',
    price: '$2,200 AUD',
    bgColor: 'bg-gradient-to-r from-amber-500 to-yellow-500',
    textColor: 'text-gray-900',
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
        <div className={`${pkg.bgColor} ${pkg.textColor} rounded-xl shadow-xl overflow-hidden`}>
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
            <div className={`px-4 pb-4 pt-2 border-t ${packageName === 'plus' ? 'border-gray-900/20' : 'border-white/20'}`}>
              <div className="text-sm opacity-80 mb-3">{pkg.fullName}</div>
              {showCompareLink && (
                <Link
                  href="/"
                  className={`block text-center text-sm font-bold rounded-lg py-3 px-4 transition-all duration-200 ${
                    packageName === 'plus'
                      ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-md'
                      : packageName === 'standard'
                        ? 'bg-white text-primary hover:bg-gray-50 shadow-md border border-white/50'
                        : 'bg-white text-blue-600 hover:bg-gray-50 shadow-md border border-white/50'
                  }`}
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
        <div className={`${pkg.bgColor} ${pkg.textColor} rounded-xl shadow-lg p-4 min-w-[160px]`}>
          <div className="text-xs opacity-70">Demo Package</div>
          <div className="font-bold text-xl">{pkg.name}</div>
          <div className="text-sm opacity-80">{pkg.fullName}</div>
          {showPrice && (
            <div className="font-semibold mt-1 text-base">{pkg.price}</div>
          )}
          {showCompareLink && (
            <Link
              href="/"
              className={`mt-3 block text-center text-xs font-bold rounded-lg py-2.5 px-3 transition-all duration-200 ${
                packageName === 'plus'
                  ? 'bg-gray-900 text-white hover:bg-gray-800 shadow-md'
                  : packageName === 'standard'
                    ? 'bg-white text-primary hover:bg-gray-50 shadow-md'
                    : 'bg-white text-blue-600 hover:bg-gray-50 shadow-md'
              }`}
            >
              Compare All Packages
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
