import BrandSlogan from '@/components/ui/BrandSlogan'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import {
  ADDRESS_CITY,
  ADDRESS_LINE1,
  ADDRESS_LINE2,
  ADDRESS_NOTE,
  BRAND_NAME,
  INSTAGRAM_HANDLE,
  INSTAGRAM_URL,
  WA,
  WHATSAPP_DISPLAY,
} from '@/lib/brand'

export default function Contato() {
  return (
    <section id="contato" className="relative py-20 overflow-hidden bg-[#0a2617]">
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 20% 20%, #1B4D2E 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, #C9A22733 0%, transparent 45%)',
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-[0.18em] mb-3">
            Próximo passo
          </p>
          <h2 className="text-3xl sm:text-5xl font-bold text-white mb-4 leading-tight">
            Fale pelo WhatsApp
          </h2>
          <p className="text-white/70 text-base leading-relaxed mb-2">
            Tire dúvidas, peça mais fotos, consulte categorias e agende sua visita.
          </p>
          <BrandSlogan className="justify-center mb-8" textClassName="text-[#C9A227] italic" />
          <WhatsAppButton href={WA.principal} label="Fale pelo WhatsApp" />
          <p className="text-white/50 text-sm mt-4">{WHATSAPP_DISPLAY}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-colors p-8 sm:p-10 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <p className="text-white/50 text-xs uppercase tracking-[0.2em] mb-4">Instagram</p>
              <p className="text-white text-2xl sm:text-3xl font-bold mb-2 group-hover:text-[#C9A227] transition-colors">
                {INSTAGRAM_HANDLE}
              </p>
              <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                Acompanhe o dia a dia do Recanto — fotos, ambientes e a Qualidade que Acolhe!
              </p>
            </div>
            <p className="text-[#C9A227] text-sm font-semibold mt-8 inline-flex items-center gap-2">
              Seguir no Instagram
              <span aria-hidden>→</span>
            </p>
          </a>

          <div className="border border-white/10 bg-white/5 p-8 sm:p-10 flex flex-col justify-between min-h-[220px]">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <img
                  src="/logo.png"
                  alt={BRAND_NAME}
                  className="w-12 h-12 rounded-full object-cover border border-[#C9A227]/60"
                />
                <div>
                  <p className="text-white font-bold text-sm uppercase tracking-wide">{BRAND_NAME}</p>
                  <BrandSlogan size="sm" textClassName="text-[#C9A227] italic" />
                </div>
              </div>
              <p className="text-white font-semibold text-lg mb-1">{ADDRESS_LINE1}</p>
              <p className="text-white/70 text-sm">
                {ADDRESS_LINE2} · {ADDRESS_CITY}
              </p>
              <p className="text-white/45 text-xs mt-3">{ADDRESS_NOTE}</p>
            </div>
            <div className="mt-6 rounded-xl overflow-hidden border border-white/10 h-[160px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.812239474776!2d-49.244304624795325!3d-25.444583877553535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4fa4c66ff73%3A0x8e8a609d6f30a2!2sAv.%20Comendador%20Franco%2C%20553%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização no Google Maps"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
