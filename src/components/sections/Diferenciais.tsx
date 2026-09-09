import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { WA } from '@/lib/brand'
import { briefingPhoto } from '@/lib/photos'

type Item = {
  label: string
  desc: string
  photo?: number
  icon?: 'wifi' | 'tv' | 'cameras' | 'admin' | 'org' | 'clean' | 'people' | 'park' | 'pin'
}

const DIFERENCIAIS: Item[] = [
  { label: 'Organização', desc: 'Ambiente cuidado em todos os espaços', icon: 'org' },
  { label: 'Limpeza', desc: 'Higienização frequente das áreas comuns', icon: 'clean' },
  { label: 'Boa Convivência', desc: 'Ambiente tranquilo e respeitoso', icon: 'people' },
  { label: 'Wi-Fi Alta Velocidade', desc: 'Fibra para trabalho e estudo', icon: 'wifi' },
  { label: 'TV 300+ Canais', desc: 'TV por assinatura nas áreas comuns', icon: 'tv' },
  { label: 'Piscina', desc: 'Área de lazer para relaxar', photo: 22 },
  { label: '2 Cozinhas', desc: 'Cozinhas completas e equipadas', photo: 27 },
  { label: '2 Áreas de Serviço', desc: 'Lavanderias práticas', photo: 32 },
  { label: '8 Banheiros', desc: 'Organizados e limpos com frequência', photo: 37 },
  { label: 'Estacionamento', desc: 'Vagas para carro e moto', icon: 'park' },
  { label: '48 Câmeras', desc: 'Monitoramento 24h nas áreas comuns', icon: 'cameras' },
  { label: 'Administração Responsável', desc: 'Gestão presente e comprometida', icon: 'admin' },
  { label: 'Excelente Localização', desc: 'No Jardim Botânico, Curitiba', icon: 'pin' },
]

function MiniIcon({ type }: { type: NonNullable<Item['icon']> }) {
  const common = 'w-7 h-7 text-primary'
  switch (type) {
    case 'wifi':
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a2 2 0 110-4 2 2 0 010 4zM6 15a8.966 8.966 0 0112 0M3 11a14.947 14.947 0 0118 0" />
        </svg>
      )
    case 'tv':
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <rect x="2" y="7" width="20" height="11" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 21l-2-2H9l-2 2" />
        </svg>
      )
    case 'cameras':
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <rect x="3" y="8" width="14" height="6" rx="1" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 11l4-3v6l-4-3z" />
        </svg>
      )
    case 'admin':
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    case 'org':
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h10M4 18h14" />
        </svg>
      )
    case 'clean':
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      )
    case 'people':
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      )
    case 'park':
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7h4a3 3 0 010 6H9" />
        </svg>
      )
    case 'pin':
      return (
        <svg className={common} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        </svg>
      )
  }
}

export default function Diferenciais() {
  const withPhoto = DIFERENCIAIS.filter((d) => d.photo)
  const withIcon = DIFERENCIAIS.filter((d) => !d.photo)

  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Por que o Recanto?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tudo o que você precisa para morar bem
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Diferenciais reais — mostrados por foto quando o ambiente fala por si.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {withPhoto.map((d) => {
            const src = briefingPhoto(d.photo!)
            return (
              <div key={d.label} className="relative aspect-[4/5] overflow-hidden bg-gray-100 group">
                {src && (
                  <img
                    src={src}
                    alt={d.label}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                <div className="absolute bottom-0 inset-x-0 p-4">
                  <p className="text-white font-semibold text-base">{d.label}</p>
                  <p className="text-white/75 text-xs mt-0.5">{d.desc}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-5 mb-12">
          {withIcon.map((d) => (
            <div key={d.label} className="flex items-start gap-3">
              <div className="mt-0.5">{d.icon && <MiniIcon type={d.icon} />}</div>
              <div>
                <p className="font-semibold text-gray-900 text-sm">{d.label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <WhatsAppButton href={WA.principal} label="Fale pelo WhatsApp" variant="dark" />
        </div>
      </div>
    </section>
  )
}
