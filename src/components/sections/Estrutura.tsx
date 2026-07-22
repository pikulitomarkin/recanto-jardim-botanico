'use client'

import { useEffect, useState } from 'react'
import { getDriveImageUrl } from '@/lib/gdrive.client'
import { Facility } from '@/types'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { IconCheck, PARKING_ICONS } from '@/components/ui/Icons'
import { PARKING, WA } from '@/lib/brand'

/** Textos de benefício por ambiente (quando o admin não personalizou). */
const BENEFIT_COPY: Record<string, string> = {
  piscina:
    'Depois de um dia de trabalho ou estudos, nada melhor do que um ambiente agradável para descansar, relaxar e aproveitar momentos de tranquilidade.',
  cozinhas:
    'O Recanto possui duas cozinhas compartilhadas, organizadas e equipadas para oferecer praticidade na preparação das refeições do dia a dia.',
  lavanderias:
    'As lavanderias foram planejadas para proporcionar mais praticidade e conforto, permitindo que cada morador cuide de suas roupas sem precisar sair da residência.',
  banheiros:
    'Os banheiros são compartilhados e recebem limpeza frequente, permanecendo organizados e preparados para proporcionar conforto e higiene aos moradores.',
  'área externa':
    'Um espaço agradável para descansar, conversar, estudar ou simplesmente aproveitar um momento de tranquilidade ao ar livre.',
  'area externa':
    'Um espaço agradável para descansar, conversar, estudar ou simplesmente aproveitar um momento de tranquilidade ao ar livre.',
  estacionamento:
    'Pensando na comodidade dos moradores, o Recanto oferece vagas para veículos e bicicletário.',
}

const INCLUSO = [
  'Piscina',
  'Cozinhas compartilhadas',
  'Lavanderias',
  'Banheiros organizados',
  'Estacionamento',
  'Bicicletário',
  'Internet de alta velocidade',
  'Água inclusa',
  'Energia elétrica inclusa',
  'Gás incluso',
]

function benefitFor(facility: Facility): string {
  const key = facility.label.toLowerCase().trim()
  return BENEFIT_COPY[key] || facility.subtitle
}

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
            Conheça a Estrutura do Recanto Jardim Botânico
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Cada ambiente foi pensado para oferecer conforto, organização, praticidade e
            qualidade de vida aos nossos moradores.
          </p>
          <p className="text-primary text-sm font-medium mt-3">
            Ambientes preparados com a qualidade que acolhe nossos moradores todos os dias.
          </p>
        </div>

        {loading ? (
          <div className="flex justify-center py-16">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {facilities.map((facility) => {
              const images = facility.images ?? []
              const isParking = facility.label.toLowerCase().includes('estacionamento')
              return (
                <div
                  key={facility.id}
                  className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  {!isParking && (
                    <div className="relative h-44 bg-gray-100 overflow-hidden flex-shrink-0">
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
                            background:
                              'repeating-linear-gradient(45deg, #e5e7eb, #e5e7eb 10px, #f3f4f6 10px, #f3f4f6 20px)',
                          }}
                        />
                      )}
                    </div>
                  )}
                  <div className="p-5 bg-white flex-1">
                    <p className="font-semibold text-gray-900 text-base mb-2">{facility.label}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{benefitFor(facility)}</p>
                    {isParking && (
                      <ul className="mt-4 space-y-2">
                        {PARKING.map((item) => {
                          const ParkingIcon = PARKING_ICONS[item.icon]
                          return (
                          <li key={item.label} className="text-sm text-gray-700">
                            <span className="font-medium inline-flex items-center gap-2">
                              <ParkingIcon size={16} className="text-primary" />
                              {item.label}
                            </span>
                            <span className="block text-primary text-xs mt-0.5 pl-6">{item.price}</span>
                          </li>
                          )
                        })}
                      </ul>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Faixa: tudo preparado */}
        <div className="bg-primary rounded-2xl p-6 sm:p-8 mb-10 text-white">
          <h3 className="text-xl font-bold mb-5 text-center">
            Tudo já está preparado para você.
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {INCLUSO.map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-white/90">
                <IconCheck size={14} className="text-green-300" />
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <WhatsAppButton href={WA.estrutura} label="Quero conhecer essa estrutura" />
        </div>
      </div>
    </section>
  )
}
