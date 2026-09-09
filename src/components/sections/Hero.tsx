'use client'

import BrandSlogan from '@/components/ui/BrandSlogan'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { openMoradiaCompartilhada } from '@/lib/moradia'
import { BRAND_NAME, WA } from '@/lib/brand'
import { HERO_PHOTO } from '@/lib/photos'

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-end sm:items-center overflow-hidden">
      <img
        src={HERO_PHOTO}
        alt={`${BRAND_NAME} — abertura oficial`}
        className="absolute inset-0 w-full h-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/25" />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-28 sm:py-24">
        <div className="max-w-2xl animate-fadeUp">
          <div className="flex items-center gap-3 mb-5">
            <img
              src="/logo.png"
              alt={BRAND_NAME}
              className="w-14 h-14 rounded-full object-cover border-2 border-[#C9A227] shadow-xl"
            />
            <div>
              <p className="text-white font-semibold text-sm sm:text-base uppercase tracking-[0.14em]">
                {BRAND_NAME}
              </p>
              <BrandSlogan size="md" textClassName="text-[#C9A227] italic" />
            </div>
          </div>

          <p className="text-[#C9A227] text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] mb-3">
            Moradia Compartilhada UNISSEX
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-[3.25rem] font-bold text-white leading-[1.1] mb-4">
            Quartos individuais para locação mensal em Curitiba
          </h1>

          <p className="text-white/85 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
            Residência premium no Jardim Botânico — organizada, limpa e preparada para morar bem.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 items-start">
            <WhatsAppButton href={WA.principal} label="Fale pelo WhatsApp" />
            <button
              type="button"
              onClick={() => openMoradiaCompartilhada()}
              className="text-white/70 hover:text-white text-sm underline underline-offset-4 decoration-white/30 hover:decoration-white/70 transition-colors px-1 py-2"
            >
              O que é Moradia Compartilhada?
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
