import NavPlus from '@/components/plus/NavPlus'
import Footer from '@/components/common/Footer'
import PackageBadge from '@/components/common/PackageBadge'

export default function PlusLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PackageBadge packageName="plus" />
      <NavPlus />
      <main className="flex-grow">{children}</main>
      <Footer variant="full" />
    </div>
  )
}
