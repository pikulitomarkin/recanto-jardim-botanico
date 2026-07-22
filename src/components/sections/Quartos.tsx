'use client'

import { useEffect, useState } from 'react'
import RoomCard from '@/components/ui/RoomCard'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import BrandSlogan from '@/components/ui/BrandSlogan'
import { IconCheck, IconHome, PARKING_ICONS } from '@/components/ui/Icons'
import type { Room } from '@/types'
import {
  ROOM_CATEGORIES,
  formatCurrency,
  PARKING,
  WA,
  type RoomCategory,
} from '@/lib/brand'

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
  const [rooms, setRooms] = useState<Room[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState<RoomCategory | null>(null)

  useEffect(() => {
    fetch('/api/rooms')
      .then((r) => r.json())
      .then((data) => {
        const all = (data.priceGroups ?? []).flatMap(
          (group: { rooms: Room[] }) => group.rooms
        ) as Room[]
        // Não mostrar quartos alugados
        setRooms(all.filter((room) => room.status !== 'occupied'))
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const roomsInCategory = activeCategory
    ? rooms.filter((room) => room.price === activeCategory.price)
    : []

  return (
    <section id="quartos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Quartos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Conheça os Quartos
          </h2>
          <BrandSlogan className="justify-center mb-4" textClassName="text-primary" />
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Qualidade que Acolhe em cada detalhe. Escolha a categoria que cabe no seu orçamento.
          </p>
        </div>

        {/* Informações importantes */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 mb-10 shadow-sm">
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

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : activeCategory ? (
          <div className="mb-12">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <button
                  onClick={() => setActiveCategory(null)}
                  className="text-sm text-primary hover:underline mb-2 inline-flex items-center gap-1"
                >
                  ← Voltar às categorias
                </button>
                <h3 className="text-2xl font-bold text-gray-900">
                  Categoria {activeCategory.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  A partir de {formatCurrency(activeCategory.price)}
                </p>
              </div>
            </div>

            {roomsInCategory.length === 0 ? (
              <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
                <p className="text-gray-500 mb-4">
                  No momento não há quartos disponíveis nesta categoria.
                </p>
                <WhatsAppButton href={WA.visita} label="Consultar disponibilidade" />
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {roomsInCategory.map((room) => (
                  <RoomCard
                    key={room.id}
                    room={room}
                    categoryName={activeCategory.name}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {ROOM_CATEGORIES.map((cat) => {
              const availableCount = rooms.filter((r) => r.price === cat.price).length
              return (
                <div
                  key={cat.id}
                  className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm flex flex-col hover:shadow-md transition-shadow"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-2 inline-flex items-center gap-1.5">
                    <IconHome size={14} className="text-primary" />
                    {cat.name}
                  </p>
                  <p className="text-2xl font-bold text-gray-900 mb-1">
                    {formatCurrency(cat.price)}
                  </p>
                  <p className="text-xs text-gray-400 mb-3">Valor inicial</p>
                  <p className="text-sm text-gray-600 leading-relaxed flex-1 mb-5">
                    {cat.description}
                  </p>
                  <p className="text-xs text-gray-400 mb-4">
                    {availableCount > 0
                      ? `${availableCount} quarto${availableCount > 1 ? 's' : ''} disponível${availableCount > 1 ? 'is' : ''}`
                      : 'Consulte disponibilidade'}
                  </p>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className="w-full bg-primary hover:bg-primary/90 text-white font-semibold px-4 py-3 rounded-full transition-colors text-sm"
                  >
                    {cat.buttonLabel}
                  </button>
                </div>
              )
            })}
          </div>
        )}

        {/* Estacionamento */}
        <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 mb-10">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Estacionamento</h3>
          <p className="text-sm text-gray-600 mb-5">
            O Recanto também oferece vagas para moradores.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {PARKING.map((item) => {
              const ParkingIcon = PARKING_ICONS[item.icon]
              return (
              <div key={item.label} className="bg-gray-50 rounded-xl p-4">
                <p className="text-sm font-semibold text-gray-900 mb-1 inline-flex items-center gap-2">
                  <ParkingIcon size={16} className="text-primary" />
                  {item.label}
                </p>
                <p className="text-sm text-primary font-medium">{item.price}</p>
              </div>
              )
            })}
          </div>
        </div>

        <div className="text-center">
          <WhatsAppButton href={WA.visita} label="Agendar minha visita" />
        </div>
      </div>
    </section>
  )
}
