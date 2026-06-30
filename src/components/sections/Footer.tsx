'use client'

import { useRef } from 'react'

const NAV_LINKS = [
  { label: 'Quartos', href: '#quartos' },
  { label: 'Estrutura', href: '#estrutura' },
  { label: 'Valores', href: '#valores' },
  { label: 'Como Funciona', href: '#como-funciona' },
  { label: 'Regras', href: '#regras' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contato', href: '#contato' },
]

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
          {/* Logo */}
          <div>
            <button
              onClick={handleLogoClick}
              className="flex items-center gap-3 text-left focus:outline-none group"
              aria-label="Logo Recanto Jardim Botânico"
            >
              <div className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0 group-hover:bg-white/20 transition-colors">
                <span className="text-white font-bold text-xs">RJB</span>
              </div>
              <span className="font-semibold text-sm leading-tight">
                Recanto<br />Jardim Botânico
              </span>
            </button>
            <p className="text-white/40 text-xs mt-4 leading-relaxed">
              Jardim Botânico · Brasília · DF
            </p>
          </div>

          {/* Quick links */}
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

          {/* Copyright */}
          <div className="sm:text-right">
            <p className="text-white/40 text-xs leading-relaxed">
              © {new Date().getFullYear()} Recanto Jardim Botânico
            </p>
            <p className="text-white/30 text-xs mt-1">
              Todos os direitos reservados.
            </p>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="text-white/20 text-xs">
            Jardim Botânico · Brasília · DF
          </p>
        </div>
      </div>
    </footer>
  )
}
