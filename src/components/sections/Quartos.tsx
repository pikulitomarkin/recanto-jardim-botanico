'use client'

import { useState } from 'react'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import BrandSlogan from '@/components/ui/BrandSlogan'
import { IconCheck } from '@/components/ui/Icons'
import { ROOM_CATEGORIES, formatCurrency, WA } from '@/lib/brand'
import { briefingPhotos } from '@/lib/photos'

const IMPORTANTES = [
  'Quartos individuais mobiliados.',
  'Moradia Compartilhada UNISSEX.',
  'Água, luz, gás e internet já inclusos.',
  'Permanência mínima de 1 mês.',
  'Não exigimos caução.',
  'Aluguel pago antecipadamente.',
  'Período de adaptação de 48 horas.',
]

export default function Quartos() {
  const [activeId, setActiveId] = useState(ROOM_CATEGORIES[0].id)

  const active = ROOM_CATEGORIES.find((c) => c.id === activeId) ?? ROOM_CATEGORIES[0]
  const photos = briefingPhotos(active.photoIndexes)

  return (
    <section id="quartos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Showroom
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Conheça os Quartos
          </h2>
          <BrandSlogan className="justify-center mb-4" textClassName="text-primary italic" />
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Cinco categorias com fotos reais. Disponibilidade atual é confirmada pelo WhatsApp.
          </p>
        </div>

        <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 mb-10">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
            Informações importantes
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {IMPORTANTES.map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                <IconCheck size={16} className="text-green-600" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {ROOM_CATEGORIES.map((cat) => {
            const selected = cat.id === activeId
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveId(cat.id)}
                className={`px-4 py-2 text-sm font-semibold transition-colors border ${
                  selected
                    ? 'bg-primary text-white border-primary'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-primary/40'
                }`}
              >
                {cat.name}
                <span className="ml-2 opacity-80 font-normal">{formatCurrency(cat.price)}</span>
              </button>
            )
          })}
        </div>

        <div className="mb-8">
          <div className="relative aspect-[16/10] sm:aspect-[21/9] overflow-hidden bg-gray-200 mb-4">
            {photos[0] && (
              <img
                src={photos[0]}
                alt={`Categoria ${active.name} — destaque`}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 sm:p-8">
              <p className="text-[#C9A227] text-xs font-semibold uppercase tracking-widest mb-1">
                Categoria
              </p>
              <h3 className="text-white text-2xl sm:text-3xl font-bold">
                {active.name}
                <span className="ml-3 text-lg sm:text-xl font-medium text-white/85">
                  {formatCurrency(active.price)}/mês
                </span>
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3 mb-6">
            {photos.map((src, i) => (
              <div key={src} className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={src}
                  alt={`${active.name} — foto ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-3xl mb-6">
            {active.description}
          </p>

          <WhatsAppButton
            href={WA.categoria(active.name, active.price)}
            label="Fale pelo WhatsApp"
          />
        </div>
      </div>
    </section>
  )
}
