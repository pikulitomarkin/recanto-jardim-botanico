'use client'

import { useEffect, useRef, useState } from 'react'
import { getDriveImageUrl } from '@/lib/gdrive.client'
import { Room } from '@/types'
import VideoModal from './VideoModal'
import { WA, categoryByPrice } from '@/lib/brand'

interface RoomCardProps {
  room: Room
  categoryName?: string
}

export default function RoomCard({ room, categoryName }: RoomCardProps) {
  const [showVideo, setShowVideo] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const isProgrammaticScroll = useRef(false)
  const programmaticScrollTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)
  const images = (room.images ?? []).slice(0, 8)
  const waUrl = WA.quarto(room.name, room.price)
  const category = categoryName || categoryByPrice(room.price)?.name || room.priceGroup

  useEffect(() => {
    if (images.length <= 1 || isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length, isPaused])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    isProgrammaticScroll.current = true
    el.scrollTo({ left: activeIndex * el.clientWidth, behavior: 'smooth' })
    if (programmaticScrollTimeout.current) clearTimeout(programmaticScrollTimeout.current)
    programmaticScrollTimeout.current = setTimeout(() => {
      isProgrammaticScroll.current = false
    }, 600)
    return () => {
      if (programmaticScrollTimeout.current) clearTimeout(programmaticScrollTimeout.current)
    }
  }, [activeIndex])

  function handleScroll() {
    if (isProgrammaticScroll.current) return
    const el = scrollRef.current
    if (!el || el.clientWidth === 0) return
    setActiveIndex(Math.round(el.scrollLeft / el.clientWidth))
  }

  return (
    <div
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex flex-col hover:shadow-md transition-shadow relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
        {images.length > 0 ? (
          <div
            onScroll={handleScroll}
            ref={scrollRef}
            className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          >
            {images.map((img, i) => (
              <img
                key={i}
                src={getDriveImageUrl(img)}
                alt={`${room.name} - foto ${i + 1}`}
                className="w-full h-full object-cover flex-shrink-0 snap-start"
              />
            ))}
          </div>
        ) : (
          <div
            className="w-full h-full"
            style={{
              background:
                'repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 10px, #f3f4f6 10px, #f3f4f6 20px)',
            }}
          />
        )}

        {images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1 z-10">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full shadow-sm transition-all ${
                  i === activeIndex ? 'w-4 bg-white' : 'w-1.5 bg-white/60'
                }`}
              />
            ))}
          </div>
        )}

        {room.highlight && (
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#C9A227] text-white shadow-sm">
            {room.highlight}
          </span>
        )}

        {room.videoUrl && (
          <button
            onClick={() => setShowVideo(true)}
            className="absolute bottom-3 right-3 bg-black/60 hover:bg-black/85 text-white rounded-full p-2 text-xs flex items-center gap-1.5 transition-colors backdrop-blur-sm shadow-md"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Ver Vídeo</span>
          </button>
        )}

        {room.status === 'available' && (
          <span className="absolute top-3 right-3 text-xs font-medium px-2.5 py-1 rounded-full border bg-green-50 text-green-700 border-green-200">
            🟢 Disponível
          </span>
        )}
      </div>

      <div className="p-5 flex flex-col flex-1">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-primary mb-1">
          {category}
        </p>
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-semibold text-gray-900 leading-snug">{room.name}</h3>
          <span className="text-lg font-bold text-primary whitespace-nowrap ml-2">
            R$&nbsp;{room.price.toLocaleString('pt-BR')},00
            <span className="text-xs font-normal text-gray-500">/mês</span>
          </span>
        </div>

        {room.description && (
          <p className="text-xs text-gray-500 leading-relaxed mb-5 flex-1">
            {room.description}
          </p>
        )}

        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2.5 rounded-full transition-colors shadow-sm shadow-green-500/25"
        >
          📲 Quero Conhecer Este Quarto
        </a>
      </div>

      {showVideo && room.videoUrl && (
        <VideoModal videoUrl={room.videoUrl} onClose={() => setShowVideo(false)} />
      )}
    </div>
  )
}
