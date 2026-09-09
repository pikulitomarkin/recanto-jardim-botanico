'use client'

import { useState } from 'react'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { IconCheck, PARKING_ICONS } from '@/components/ui/Icons'
import { PARKING, WA } from '@/lib/brand'
import { ESTRUTURA_GALLERIES, briefingPhotos } from '@/lib/photos'

const INCLUSO = [
  'Piscina',
  '2 cozinhas completas',
  '2 lavanderias',
  '8 banheiros + 1 exclusivo feminino',
  'Wi-Fi de alta velocidade',
  'Água, luz e gás inclusos',
  'TV 300+ canais',
  '48 câmeras / monitoramento 24h',
]

export default function Estrutura() {
  const [active, setActive] = useState(0)
  const gallery = ESTRUTURA_GALLERIES[active]
  const photos = briefingPhotos([...gallery.indexes])

  return (
    <section id="estrutura" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Ambientes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Conheça a Estrutura
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Fotos reais dos ambientes compartilhados — preparados para o dia a dia.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {ESTRUTURA_GALLERIES.map((g, i) => (
            <button
              key={g.id}
              type="button"
              onClick={() => setActive(i)}
              className={`px-4 py-2 text-sm font-semibold border transition-colors ${
                i === active
                  ? 'bg-primary text-white border-primary'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-primary/40'
              }`}
            >
              {g.title}
            </button>
          ))}
        </div>

        <div className="mb-10">
          <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 mb-3">
            {photos[0] && (
              <img
                src={photos[0]}
                alt={gallery.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute bottom-0 inset-x-0 p-5 bg-gradient-to-t from-black/70 to-transparent">
              <h3 className="text-white text-xl sm:text-2xl font-bold">{gallery.title}</h3>
              <p className="text-white/80 text-sm">{gallery.subtitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2">
            {photos.map((src, i) => (
              <div key={src} className="aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={src}
                  alt={`${gallery.title} ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 mb-10 max-w-3xl mx-auto">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
            Tudo já está preparado para você
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
            {INCLUSO.map((item) => (
              <div key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                <IconCheck size={16} className="text-green-600" />
                {item}
              </div>
            ))}
          </div>

          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
            Estacionamento
          </h3>
          <p className="text-xs text-gray-500 mb-3">
            Informação textual — área em obra; fotos serão adicionadas quando disponíveis.
          </p>
          <ul className="space-y-2">
            {PARKING.map((item) => {
              const Icon = PARKING_ICONS[item.icon]
              return (
                <li key={item.label} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <Icon size={16} className="text-primary" />
                  <span>
                    {item.label}: <strong>{item.price}</strong>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="text-center">
          <WhatsAppButton href={WA.estrutura} label="Fale pelo WhatsApp" />
        </div>
      </div>
    </section>
  )
}
