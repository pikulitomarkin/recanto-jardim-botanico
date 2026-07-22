import BrandSlogan from '@/components/ui/BrandSlogan'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { BRAND_NAME, WA } from '@/lib/brand'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#061810] via-[#1B4D2E] to-[#040e08]">
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1B4D2E 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A227 0%, transparent 70%)' }}
      />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-3xl mx-auto animate-fadeUp">
        <img
          src="/logo.png"
          alt={BRAND_NAME}
          className="w-[90px] h-[90px] rounded-full object-cover border-2 border-[#C9A227] mb-5 shadow-2xl"
        />

        <p className="text-white/90 text-sm sm:text-base font-semibold uppercase tracking-[0.12em] mb-2">
          {BRAND_NAME}
        </p>

        <BrandSlogan size="lg" showDot className="mb-8" textClassName="text-[#C9A227]" />

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
          Muito mais do que um quarto.
          <span className="block text-gold mt-2">Um lugar preparado para morar bem.</span>
        </h1>

        <p className="text-base sm:text-lg text-white/75 max-w-xl mb-8 leading-relaxed">
          Moradia Compartilhada UNISSEX para trabalhadores e estudantes.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm sm:max-w-none sm:w-auto">
          <WhatsAppButton href={WA.visita} label="📲 Agendar minha visita" />
          <a
            href="#moradia-compartilhada"
            className="flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-full transition-colors hover:bg-white/5"
          >
            O que é Moradia Compartilhada?
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-pulse">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
