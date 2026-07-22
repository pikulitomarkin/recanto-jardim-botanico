import React from 'react'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { WA } from '@/lib/brand'

const ICONS: Record<string, React.ReactNode> = {
  organizacao: (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 21l-.813-5.096L3 15l5.188-.904L9 9l.813 5.096L15 15l-5.188.904zM19.071 4.929a10 10 0 00-14.142 0M20 10.5a7.5 7.5 0 00-7.5-7.5" />
    </svg>
  ),
  limpeza: (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m15 3-5 5m3-3L3 15M14 6l6 6M17 9l-9 9M9 13l3 3M6 16l3 3M3 19l3 3" />
    </svg>
  ),
  convivencia: (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ),
  wifi: (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a2 2 0 110-4 2 2 0 010 4zM6 15a8.966 8.966 0 0112 0M3 11a14.947 14.947 0 0118 0M1.05 7.05a20.934 20.934 0 0121.9 0" />
    </svg>
  ),
  tv: (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <rect x="2" y="7" width="20" height="11" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 21l-2-2H9l-2 2M7 3l5 4 5-4" />
    </svg>
  ),
  piscina: (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2 10s3-2 5-2 5 2 5 2 3-2 5-2 5 2 5 2M2 14s3-2 5-2 5 2 5 2 3-2 5-2 5 2 5 2M2 18s3-2 5-2 5 2 5 2 3-2 5-2 5 2 5 2" />
    </svg>
  ),
  cozinha: (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 8a6 6 0 00-12 0v4H4v2h16v-2h-2V8zM2 14h20M6 18h12M8 22h8" />
    </svg>
  ),
  servico: (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <rect x="4" y="3" width="16" height="18" rx="2" />
      <circle cx="12" cy="13" r="4" />
      <circle cx="8" cy="6" r="1" />
      <circle cx="12" cy="6" r="1" />
      <circle cx="16" cy="6" r="1" />
    </svg>
  ),
  banheiro: (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22V8a4 4 0 014-4h4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M18 10v.01M15 13v.01M18 14v.01M21 13v.01M18 18v.01M15 17v.01M21 17v.01" />
    </svg>
  ),
  estacionamento: (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 17V7h4a3 3 0 010 6H9" />
    </svg>
  ),
  cameras: (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <rect x="3" y="8" width="14" height="6" rx="1" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 11l4-3v6l-4-3zM7 14l-2 4h4z" />
    </svg>
  ),
  administracao: (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11l2 2 4-4" />
    </svg>
  ),
  localizacao: (
    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
}

const DIFERENCIAIS = [
  { iconKey: 'organizacao', label: 'Organização', desc: 'Ambiente cuidado e organizado em todos os espaços' },
  { iconKey: 'limpeza', label: 'Limpeza', desc: 'Higienização frequente das áreas comuns' },
  { iconKey: 'convivencia', label: 'Boa Convivência', desc: 'Ambiente tranquilo com perfil selecionado de moradores' },
  { iconKey: 'wifi', label: 'Wi-Fi Alta Velocidade', desc: 'Fibra óptica para trabalho e estudo' },
  { iconKey: 'tv', label: 'TV 300+ Canais', desc: 'TV por assinatura nas áreas comuns' },
  { iconKey: 'piscina', label: 'Piscina', desc: 'Área de lazer com piscina' },
  { iconKey: 'cozinha', label: '2 Cozinhas', desc: 'Cozinhas completas e equipadas' },
  { iconKey: 'servico', label: '2 Áreas de Serviço', desc: 'Lavanderias com máquinas de lavar' },
  { iconKey: 'banheiro', label: '8 Banheiros', desc: 'Banheiros mantidos limpos e organizados' },
  { iconKey: 'estacionamento', label: 'Estacionamento', desc: 'Vagas para carro e moto no local' },
  { iconKey: 'cameras', label: '48 Câmeras', desc: 'Monitoramento 24h nas áreas comuns' },
  { iconKey: 'administracao', label: 'Administração Responsável', desc: 'Gestão familiar presente e comprometida' },
  { iconKey: 'localizacao', label: 'Excelente Localização', desc: 'No coração do Jardim Botânico, Curitiba' },
]

export default function Diferenciais() {
  return (
    <section id="diferenciais" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Por que o Recanto?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tudo o que você precisa para morar bem
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Pensamos em cada detalhe para que você tenha conforto, segurança e tranquilidade no seu dia a dia.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-14">
          {DIFERENCIAIS.map((d) => (
            <div
              key={d.label}
              className="flex flex-col items-center text-center p-5 rounded-2xl border border-gray-100 hover:border-primary/20 hover:bg-primary/[0.02] hover:shadow-sm transition-all group"
            >
              <div className="mb-3 group-hover:scale-110 transition-transform duration-200">
                {ICONS[d.iconKey]}
              </div>
              <p className="font-semibold text-gray-900 text-sm mb-1">{d.label}</p>
              <p className="text-xs text-gray-400 leading-relaxed">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <WhatsAppButton href={WA.conhecer} label="Quero conhecer o Recanto" variant="dark" />
        </div>
      </div>
    </section>
  )
}
