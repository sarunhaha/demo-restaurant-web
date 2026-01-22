import NavStandard from '@/components/standard/NavStandard'
import Footer from '@/components/common/Footer'
import PackageBadge from '@/components/common/PackageBadge'

export default function StandardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PackageBadge packageName="standard" />
      <NavStandard />
      <main className="flex-grow">{children}</main>
      <Footer variant="standard" />
    </div>
  )
}
