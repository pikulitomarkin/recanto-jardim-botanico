'use client'

import { useEffect, useState } from 'react'
import RoomCard from '@/components/ui/RoomCard'
import { Room } from '@/types'

interface PriceGroup {
  label: string
  price: number
  rooms: Room[]
}

export default function Quartos() {
  const [priceGroups, setPriceGroups] = useState<PriceGroup[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/rooms')
      .then((r) => r.json())
      .then((data) => {
        setPriceGroups(data.priceGroups ?? [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  // Flatten all rooms from all price groups and sort by price ascending
  const allRoomsSorted = priceGroups
    .flatMap((group) => group.rooms)
    .sort((a, b) => a.price - b.price)

  return (
    <section id="quartos" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
            </span>
            <span className="text-xs font-semibold uppercase tracking-widest text-green-600">
              Disponibilidade em Tempo Real
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Nossos Quartos
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Ambientes confortáveis com tudo incluso — água, luz e internet.
          </p>
        </div>

        {/* 3-column grid sorted by price: cheapest first, most expensive last */}
        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {allRoomsSorted.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
