'use client'

import { useRef } from 'react'
import BrandSlogan from '@/components/ui/BrandSlogan'
import {
  ADDRESS_CITY,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  BRAND_NAME,
  BRAND_SLOGAN,
  NAV_LINKS,
} from '@/lib/brand'

export default function Footer() {
  const clickCountRef = useRef(0)
  const clickTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleLogoClick() {
    clickCountRef.current += 1
    if (clickTimerRef.current) clearTimeout(clickTimerRef.current)

    if (clickCountRef.current >= 5) {
      clickCountRef.current = 0
      window.location.href = '/admin'
      return
    }

    clickTimerRef.current = setTimeout(() => {
      clickCountRef.current = 0
    }, 2000)
  }

  return (
    <footer id="footer" className="bg-[#0a2617] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
          <div>
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-3 text-left focus:outline-none group"
              aria-label={`Logo ${BRAND_NAME}`}
            >
              <img
                src="/logo.png"
                alt={BRAND_NAME}
                className="w-10 h-10 rounded-full object-cover border border-white/20 flex-shrink-0 group-hover:opacity-80 transition-opacity"
              />
              <span className="font-semibold text-sm leading-tight uppercase tracking-wide">
                {BRAND_NAME}
              </span>
            </button>
            <div className="mt-4">
              <BrandSlogan size="sm" showDot textClassName="text-[#C9A227]" />
            </div>
            <p className="text-white/50 text-xs mt-3 leading-relaxed">
              Muito mais do que um quarto. Um lugar preparado para morar bem.
            </p>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">
              {ADDRESS_LINE1}
              <br />
              {ADDRESS_LINE2} · {ADDRESS_CITY}
            </p>
          </div>

          <div className="sm:text-center">
            <p className="text-white/50 text-xs uppercase tracking-widest mb-4 font-medium">
              Navegação
            </p>
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/70 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="sm:text-right">
            <p className="text-white/70 text-sm mb-3">
              Obrigado por visitar o site do {BRAND_NAME}. Esperamos receber você em breve.
            </p>
            <p className="text-white/40 text-xs leading-relaxed">
              © {new Date().getFullYear()} {BRAND_NAME}
            </p>
            <p className="text-white/30 text-xs mt-1">Todos os direitos reservados.</p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-[#C9A227] text-sm font-medium mb-1">🤝 {BRAND_SLOGAN}</p>
          <p className="text-white/20 text-xs">{ADDRESS_LINE2} · {ADDRESS_CITY}</p>
        </div>
      </div>
    </footer>
  )
}
