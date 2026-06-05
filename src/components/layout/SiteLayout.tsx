import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SearchOverlay from '@/components/search/SearchOverlay'
import { SideBannerColumn } from '@/components/layout/SideBanners'

export default function SiteLayout() {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <Header onOpenSearch={() => setSearchOpen(true)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />

      <div className="mx-auto w-full max-w-[1400px] px-4">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_260px]">
          <main className="py-8">
            <Outlet />
          </main>

          <aside className="sticky top-24 hidden h-fit space-y-4 lg:block">
            <SideBannerColumn />
          </aside>
        </div>
      </div>

      <Footer />
    </div>
  )
}

