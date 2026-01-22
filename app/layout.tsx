import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Demo Restaurant Website by Devio',
  description: 'Demo restaurant website showcasing different package tiers. Built by Devio - www.devio.co.th',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
