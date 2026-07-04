'use client'

import { useEffect, useState } from 'react'
import { getDriveImageUrl } from '@/lib/gdrive.client'
import { Facility } from '@/types'

export default function Estrutura() {
  const [facilities, setFacilities] = useState<Facility[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/config')
      .then((r) => r.json())
      .then((data) => {
        setFacilities(data.facilities ?? [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <section id="estrutura" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Estrutura da Residência
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Espaços pensados para o seu conforto e bem-estar.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility) => {
              const images = facility.images ?? []
              return (
                <div key={facility.id} className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                  <div className="relative h-40 bg-gray-100 overflow-hidden flex-shrink-0">
                    {images.length > 0 ? (
                      <div className="flex h-full w-full overflow-x-auto snap-x snap-mandatory scrollbar-hide">
                        {images.map((img, i) => (
                          <img
                            key={i}
                            src={getDriveImageUrl(img)}
                            alt={`${facility.label} - foto ${i + 1}`}
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

                    {images.length > 1 && (
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
                        {images.map((_, i) => (
                          <span key={i} className="w-1.5 h-1.5 rounded-full bg-white/80 shadow-sm" />
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-4 bg-white flex-1">
                    <p className="font-semibold text-gray-900 text-sm mb-1">{facility.label}</p>
                    <p className="text-xs text-gray-500 leading-relaxed">{facility.subtitle}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>
    </section>
  )
}
