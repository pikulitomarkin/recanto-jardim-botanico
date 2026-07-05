'use client'

import { useEffect, useRef, useState } from 'react'
import { getDriveImageUrl } from '@/lib/gdrive.client'
import { Room, RoomStatus } from '@/types'
import VideoModal from './VideoModal'

const STATUS_CONFIG: Record<RoomStatus, { label: string; classes: string }> = {
  available: { label: 'Disponível', classes: 'bg-green-100 text-green-700 border-green-200' },
  occupied:  { label: 'Alugado',    classes: 'bg-red-100 text-red-700 border-red-200' },
  reserved:  { label: 'Reservado',  classes: 'bg-yellow-100 text-yellow-700 border-yellow-200' },
}

const FEATURES = [
  { icon: '📶', label: 'Wi-Fi Fibra' },
  { icon: '📺', label: 'TV' },
  { icon: '🛏️', label: 'Cama confortável' },
  { icon: '🗄️', label: 'Armário' },
]

interface RoomCardProps {
  room: Room
}

export default function RoomCard({ room }: RoomCardProps) {
  const [showVideo, setShowVideo] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const status = STATUS_CONFIG[room.status]
  const images = room.images ?? []
  const waUrl = `https://wa.me/5541999999999?text=${encodeURIComponent(room.whatsappMsg)}`

  // Auto-advance the carousel when the room has more than one photo
  useEffect(() => {
    if (images.length <= 1 || isPaused) return
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length, isPaused])

  // Keep the scroll position in sync with the active index
  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    el.scrollTo({ left: activeIndex * el.clientWidth, behavior: 'smooth' })
  }, [activeIndex])

  function handleScroll() {
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
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100 flex-shrink-0">
        {images.length > 0 ? (
          <div
            ref={scrollRef}
            onScroll={handleScroll}
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
              background: 'repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 10px, #f3f4f6 10px, #f3f4f6 20px)',
            }}
          />
        )}

        {/* Multi-photo dots indicator */}
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

        {/* Highlights label */}
        {room.highlight && (
          <span className="absolute top-3 left-3 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded bg-[#C9A227] text-white shadow-sm border border-[#C9A227]/25">
            {room.highlight}
          </span>
        )}

        {/* Video button overlay */}
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

        {/* Status badge */}
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full border ${status.classes}`}
        >
          {status.label}
        </span>
      </div>

      {/* Body */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-base font-semibold text-gray-900 leading-snug">{room.name}</h3>
          <span className="text-lg font-bold text-primary whitespace-nowrap ml-2">
            R${room.price.toLocaleString('pt-BR')}
            <span className="text-xs font-normal text-gray-500">/mês</span>
          </span>
        </div>

        {/* Description */}
        {room.description && (
          <p className="text-xs text-gray-500 leading-relaxed mb-4 flex-grow-0">
            {room.description}
          </p>
        )}

        {/* Features */}
        <ul className="grid grid-cols-2 gap-1.5 mb-5 mt-auto">
          {FEATURES.map((f) => (
            <li key={f.label} className="flex items-center gap-1.5 text-xs text-gray-600">
              <span>{f.icon}</span>
              {f.label}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium px-4 py-2.5 rounded-full transition-colors shadow-sm shadow-green-500/25"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Tenho interesse
        </a>
      </div>

      {/* Video player modal overlay */}
      {showVideo && room.videoUrl && (
        <VideoModal videoUrl={room.videoUrl} onClose={() => setShowVideo(false)} />
      )}
    </div>
  )
}
