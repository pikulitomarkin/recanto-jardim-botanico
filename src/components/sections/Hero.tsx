// WhatsApp number placeholder — update to real number when available
const WA = 'https://wa.me/5541999999999'
const WA_VISITA = `${WA}?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Recanto%20Jardim%20Bot%C3%A2nico.`
const WA_GERAL = `${WA}?text=Ol%C3%A1!%20Tenho%20interesse%20em%20conhecer%20o%20Recanto%20Jardim%20Bot%C3%A2nico.`

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#061810] via-[#1B4D2E] to-[#040e08]">
      {/* Decorative blobs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1B4D2E 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-15 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C9A227 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-3xl mx-auto animate-fadeUp">
        {/* Logo */}
        <img
          src="/logo.png"
          alt="Recanto Jardim Botânico"
          className="w-[90px] h-[90px] rounded-full object-cover border-2 border-[#C9A227] mb-6 shadow-2xl"
        />

        {/* Category badge */}
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest mb-3 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/60">
          Moradia Compartilhada para Trabalhadores e Estudantes
        </span>

        {/* Location badge */}
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest mb-6 px-3 py-1 rounded-full border border-[#C9A227]/40" style={{ color: '#C9A227' }}>
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
          </svg>
          Jardim Botânico · Curitiba – PR
        </span>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4">
          Um lugar para{' '}
          <span className="text-gold">Morar Bem.</span>
        </h1>

        {/* Subheading */}
        <p className="text-base sm:text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
          Organização, limpeza e tranquilidade a partir de{' '}
          <span className="text-white/90 font-medium">R$&nbsp;1.100/mês</span>{' '}
          com água, luz e internet inclusos. Visita mediante agendamento.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm sm:max-w-none sm:w-auto">
          <a
            href={WA_VISITA}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-green-900/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Agendar uma Visita
          </a>

          <a
            href="#diferenciais"
            className="flex items-center justify-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-8 py-3.5 rounded-full transition-colors hover:bg-white/5"
          >
            Conheça o Recanto
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 animate-pulse">
        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
