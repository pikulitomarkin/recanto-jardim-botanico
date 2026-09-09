'use client'

import { openMoradiaCompartilhada } from '@/lib/moradia'
import { BRAND_NAME, WA } from '@/lib/brand'
import { HERO_PHOTO } from '@/lib/photos'

/**
 * A FOTO 01 já é a composição oficial completa (textos, ícones e CTA).
 * Exibir a arte sem sobrepor HTML — evita textos/botões misturados.
 */
export default function Hero() {
  return (
    <section className="relative bg-[#061810] pt-16">
      <a
        href={WA.principal}
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A227] focus-visible:ring-offset-2 focus-visible:ring-offset-[#061810]"
        aria-label="Fale pelo WhatsApp — Recanto Jardim Botânico"
      >
        <img
          src={HERO_PHOTO}
          alt={`${BRAND_NAME} — Moradia Compartilhada UNISSEX em Curitiba. Residência premium. Fale pelo WhatsApp.`}
          className="block w-full h-auto"
          fetchPriority="high"
        />
      </a>

      <div className="flex justify-center px-4 py-3 border-t border-white/10">
        <button
          type="button"
          onClick={() => openMoradiaCompartilhada()}
          className="text-white/65 hover:text-white text-sm underline underline-offset-4 decoration-white/25 hover:decoration-white/60 transition-colors"
        >
          O que é Moradia Compartilhada?
        </button>
      </div>
    </section>
  )
}
