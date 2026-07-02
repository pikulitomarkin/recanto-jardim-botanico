'use client'

import { useState } from 'react'

const WHATSAPP_URL =
  'https://wa.me/5541999999999?text=Olá!%20Tenho%20dúvidas%20sobre%20os%20quartos%20do%20Recanto%20Jardim%20Botânico.'

const FAQ_ITEMS = [
  {
    question: 'Aceita casal?',
    answer: 'Não. Todos os nossos quartos são estritamente para uso individual, visando garantir a tranquilidade e privacidade de todos os moradores.',
  },
  {
    question: 'Aceita visitantes?',
    answer: 'Sim, visitas diurnas são permitidas nas áreas comuns. Contudo, para preservar o espaço e a privacidade coletiva, não é permitida a pernoite de visitantes.',
  },
  {
    question: 'Como funciona a taxa?',
    answer: 'Cobramos uma taxa única de ingresso (adesão/limpeza) no ato da contratação. Não cobramos taxas adicionais de condomínio ou manutenção.',
  },
  {
    question: 'Como faço a reserva?',
    answer: 'A reserva é feita diretamente com a gente pelo WhatsApp, mediante o pagamento antecipado do valor de reserva para segurar a vaga.',
  },
  {
    question: 'Os banheiros são compartilhados?',
    answer: 'Sim, possuímos banheiros compartilhados em número suficiente para todos os moradores, higienizados frequentemente e mantidos organizados.',
  },
  {
    question: 'O quarto é individual?',
    answer: 'Sim, todos os nossos quartos são totalmente individuais, mobiliados e privativos para que você possa estudar ou trabalhar em paz.',
  },
  {
    question: 'Existe garagem?',
    answer: 'Sim, possuímos estacionamento para carros e motos no local. Consulte valores adicionais e disponibilidade ao falar conosco.',
  },
  {
    question: 'Qual o tempo mínimo de permanência?',
    answer: 'O tempo mínimo estipulado em contrato de locação é de 3 meses, com renovação automática após esse período.',
  }
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Tire suas dúvidas antes de entrar em contato.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 mb-12">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-gray-900">
                    {item.question}
                  </span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  style={{ maxHeight: isOpen ? '200px' : '0px' }}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <p className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA WhatsApp */}
        <div className="max-w-3xl mx-auto bg-primary rounded-2xl p-8 text-center shadow-lg shadow-primary/20">
          <p className="text-white text-lg font-semibold mb-2">
            Ainda tem dúvidas?
          </p>
          <p className="text-white/70 text-sm mb-6">
            Fale diretamente com a gente pelo WhatsApp — respondemos na hora!
          </p>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-green-900/30"
          >
            <WhatsAppIcon />
            Tirar dúvidas pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
