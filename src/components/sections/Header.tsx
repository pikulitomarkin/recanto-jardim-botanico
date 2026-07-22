'use client'

import { useState } from 'react'
import BrandSlogan from '@/components/ui/BrandSlogan'
import { IconWhatsApp } from '@/components/ui/Icons'
import { BRAND_NAME, NAV_LINKS, WA } from '@/lib/brand'

const HEADER_LINKS = NAV_LINKS.filter((l) => l.label !== 'Home')

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#061810]/95 backdrop-blur-sm border-b border-white/10 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3 min-w-0">
            <img
              src="/logo.png"
              alt={BRAND_NAME}
              className="w-10 h-10 rounded-full object-cover border border-white/20 flex-shrink-0"
            />
            <span className="hidden sm:flex flex-col leading-tight min-w-0">
              <span className="font-semibold text-white text-sm uppercase tracking-wide truncate">
                {BRAND_NAME}
              </span>
              <BrandSlogan size="sm" textClassName="text-[#C9A227]/90" />
            </span>
          </a>

          <nav className="hidden xl:flex items-center gap-5">
            {HEADER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/80 hover:text-white transition-colors font-medium whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={WA.visita}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
            >
              <IconWhatsApp size={16} />
              Agendar visita
            </a>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="xl:hidden p-2 rounded-md text-white hover:text-white/80 hover:bg-white/10 transition-colors"
              aria-label="Abrir menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-4 pb-4 pt-2 bg-[#061810] border-t border-white/10 flex flex-col gap-1">
          {HEADER_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm text-white/80 hover:text-white hover:bg-white/10 px-3 py-2 rounded-md transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href={WA.visita}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors"
          >
            <IconWhatsApp size={16} />
            Agendar minha visita
          </a>
        </nav>
      </div>
    </header>
  )
}
