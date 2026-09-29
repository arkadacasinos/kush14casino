import Kz14Hero from '@/components/kz14-hero'
import Kz14Sections from '@/components/kz14-sections'
import Kz14Footer from '@/components/kz14-footer'

export default function Page() {
  return (
    <main className="kz14-shell">
      <Kz14Hero />
      <Kz14Sections />
      <Kz14Footer />
    </main>
  )
}
