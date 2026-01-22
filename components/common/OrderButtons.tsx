'use client'

interface OrderButtonsProps {
  variant?: 'horizontal' | 'vertical' | 'grid'
  size?: 'sm' | 'md' | 'lg'
  showLabels?: boolean
  showQR?: boolean
  className?: string
}

const orderPlatforms = [
  {
    name: 'UberEats',
    url: 'https://ubereats.com',
    color: 'bg-[#06C167]',
    hoverColor: 'hover:bg-[#05a858]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.4c5.302 0 9.6 4.298 9.6 9.6s-4.298 9.6-9.6 9.6S2.4 17.302 2.4 12 6.698 2.4 12 2.4zm0 3.6a6 6 0 100 12 6 6 0 000-12z"/>
      </svg>
    )
  },
  {
    name: 'DoorDash',
    url: 'https://doordash.com',
    color: 'bg-[#FF3008]',
    hoverColor: 'hover:bg-[#e62b07]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M23.071 8.409a6.09 6.09 0 00-5.396-3.228H.584A.589.589 0 00.17 6.184L3.894 9.93a1.752 1.752 0 001.242.516h12.049a1.554 1.554 0 11.031 3.108H8.91a.589.589 0 00-.415 1.003l3.725 3.747a1.75 1.75 0 001.242.516h3.757c4.887 0 8.584-5.225 5.852-10.41z"/>
      </svg>
    )
  },
  {
    name: 'Menulog',
    url: 'https://menulog.com.au',
    color: 'bg-[#FF8000]',
    hoverColor: 'hover:bg-[#e67300]',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
      </svg>
    )
  }
]

export default function OrderButtons({
  variant = 'horizontal',
  size = 'md',
  showLabels = true,
  showQR = false,
  className = ''
}: OrderButtonsProps) {
  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-6 py-4 text-lg'
  }

  const containerClasses = {
    horizontal: 'flex flex-wrap gap-3 justify-center',
    vertical: 'flex flex-col gap-3',
    grid: 'grid grid-cols-1 sm:grid-cols-3 gap-3'
  }

  return (
    <div className={className}>
      <div className={containerClasses[variant]}>
        {orderPlatforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`
              ${platform.color} ${platform.hoverColor}
              text-white font-medium rounded-lg
              transition-all duration-200 transform hover:scale-105
              inline-flex items-center justify-center gap-2
              ${sizeClasses[size]}
              shadow-md hover:shadow-lg
            `}
          >
            {platform.icon}
            {showLabels && <span>Order on {platform.name}</span>}
          </a>
        ))}
      </div>

      {showQR && (
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500 mb-2">Or scan to order</p>
          <div className="inline-block bg-white p-4 rounded-lg shadow-md">
            <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded">
              <span className="text-xs text-gray-400">QR Code</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
