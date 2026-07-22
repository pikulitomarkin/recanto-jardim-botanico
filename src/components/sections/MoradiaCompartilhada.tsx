'use client'

import { useEffect, useRef, useState } from 'react'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { IconCheck } from '@/components/ui/Icons'
import { OPEN_MORADIA_EVENT } from '@/lib/moradia'
import { WA } from '@/lib/brand'

const EXCLUSIVO = ['Seu quarto', 'Sua cama', 'Seu armário', 'Sua privacidade']
const COMPARTILHA = ['Cozinhas', 'Lavanderias', 'Banheiros', 'Piscina', 'Jardim']

export default function MoradiaCompartilhada() {
  const [open, setOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    function expand() {
      setOpen(true)
    }

    window.addEventListener(OPEN_MORADIA_EVENT, expand)
    return () => window.removeEventListener(OPEN_MORADIA_EVENT, expand)
  }, [])

  useEffect(() => {
    if (!open) return
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [open])

  return (
    <section
      ref={sectionRef}
      id="moradia-compartilhada"
      className={open ? 'py-20 bg-white animate-fadeUp' : 'hidden'}
      hidden={!open}
      aria-hidden={!open}
    >
      {open && (
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
              Conceito
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              O que é uma Moradia Compartilhada?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
              Cada morador possui seu próprio quarto individual e privativo. As áreas comuns,
              como cozinhas, lavanderias, banheiros, piscina e jardim, são compartilhadas de forma
              organizada e respeitosa.
            </p>
            <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed mt-3">
              O Recanto foi desenvolvido especialmente para trabalhadores e estudantes que
              procuram um ambiente limpo, tranquilo e seguro.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-12">
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <p className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                Você possui exclusivamente
              </p>
              <ul className="space-y-2.5">
                {EXCLUSIVO.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <IconCheck size={16} className="text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6">
              <p className="text-sm font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                Você compartilha
              </p>
              <ul className="space-y-2.5">
                {COMPARTILHA.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <IconCheck size={16} className="text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center">
            <WhatsAppButton href={WA.conhecer} label="Quero conhecer o Recanto" />
          </div>
        </div>
      )}
    </section>
  )
}
