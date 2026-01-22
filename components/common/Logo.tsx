import Link from 'next/link'

interface LogoProps {
  className?: string
  href?: string
  size?: 'sm' | 'md' | 'lg'
  variant?: 'light' | 'dark'
}

export default function Logo({
  className = '',
  href = '/',
  size = 'md',
  variant = 'dark'
}: LogoProps) {
  const sizeClasses = {
    sm: 'text-xl',
    md: 'text-2xl md:text-3xl',
    lg: 'text-3xl md:text-4xl'
  }

  const colorClasses = {
    light: 'text-white',
    dark: 'text-secondary'
  }

  const content = (
    <div className={`font-body font-bold ${sizeClasses[size]} ${colorClasses[variant]} ${className}`}>
      Devio
    </div>
  )

  if (href) {
    return (
      <Link href={href} className="inline-block hover:opacity-80 transition-opacity">
        {content}
      </Link>
    )
  }

  return content
}
