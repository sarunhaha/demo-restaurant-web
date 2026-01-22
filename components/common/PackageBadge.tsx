import Link from 'next/link'

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

  return (
    <div className="fixed top-4 right-4 z-50">
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
  )
}
