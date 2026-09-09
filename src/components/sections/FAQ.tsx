'use client'

import { useState } from 'react'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { ENTRADA, WA, formatCurrency } from '@/lib/brand'

/** Ordem: quartos → valores/condições → convivência → estrutura → visita */
const FAQ_ITEMS = [
  {
    question: 'O quarto possui banheiro privativo?',
    answer:
      'Não. Cada morador possui seu quarto individual; os banheiros são compartilhados e recebem limpeza frequente.',
  },
  {
    question: 'Quem pode morar no Recanto?',
    answer:
      'Trabalhadores e estudantes que procuram um ambiente organizado, limpo, seguro e tranquilo. Moradia Compartilhada UNISSEX, ocupação individual.',
  },
  {
    question: 'Qual é a permanência mínima?',
    answer: 'A permanência mínima é de 1 mês.',
  },
  {
    question: 'É necessário pagar caução?',
    answer: 'Não. O Recanto Jardim Botânico não exige caução de aluguel.',
  },
  {
    question: 'Como funciona a entrada (valores)?',
    answer: `Além do primeiro mês de aluguel: ${ENTRADA.labelHigienizacao} ${formatCurrency(ENTRADA.higienizacao)} e ${ENTRADA.labelDeposito.toLowerCase()} ${formatCurrency(ENTRADA.depositoChave)}. Não há caução de aluguel.`,
  },
  {
    question: 'Como funciona o pagamento do aluguel?',
    answer:
      'O aluguel é pago antecipadamente. Locação exclusivamente mensal — sem cobrança proporcional durante o mês.',
  },
  {
    question: 'Existe período de adaptação?',
    answer:
      'Sim. Período de adaptação de 48 horas, conforme contrato — um dos diferenciais da residência.',
  },
  {
    question: 'O Recanto aceita casais?',
    answer: 'Não. A residência é destinada exclusivamente para ocupação individual.',
  },
  {
    question: 'O Recanto aceita animais de estimação?',
    answer: 'Não. Não é permitida a permanência de animais na residência.',
  },
  {
    question: 'Posso receber visitantes?',
    answer:
      'Não. Para segurança, privacidade e tranquilidade, não é permitida a entrada de visitantes.',
  },
  {
    question: 'O aluguel já inclui água, energia, gás e internet?',
    answer: 'Sim. Esses serviços já estão incluídos no valor do aluguel.',
  },
  {
    question: 'Existe estacionamento?',
    answer:
      'Sim: carro descoberto R$ 250/mês, moto coberta R$ 150/mês e bicicletário gratuito.',
  },
  {
    question: 'Como faço para conhecer o Recanto?',
    answer:
      'Fale pelo WhatsApp para agendar uma visita. Será um prazer apresentar a residência.',
  },
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

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Dúvidas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Respostas objetivas para decidir com tranquilidade.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-3 mb-12">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={item.question}
                className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex((prev) => (prev === index ? null : index))}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left hover:bg-gray-100/80 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-gray-900">{item.question}</span>
                  <ChevronIcon open={isOpen} />
                </button>
                <div
                  style={{ maxHeight: isOpen ? '320px' : '0px' }}
                  className="overflow-hidden transition-all duration-300 ease-in-out"
                >
                  <p className="px-6 pb-4 text-sm text-gray-600 leading-relaxed">{item.answer}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="max-w-3xl mx-auto bg-primary rounded-2xl p-8 text-center shadow-lg shadow-primary/20">
          <p className="text-white text-lg font-semibold mb-2">Ainda tem dúvidas?</p>
          <p className="text-white/70 text-sm mb-6">
            Fale conosco pelo WhatsApp — respondemos com fotos e disponibilidade.
          </p>
          <WhatsAppButton href={WA.duvidas} label="Fale pelo WhatsApp" />
        </div>
      </div>
    </section>
  )
}
