'use client'

import { useState } from 'react'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { WA } from '@/lib/brand'

const FAQ_ITEMS = [
  {
    question: 'O quarto possui banheiro privativo?',
    answer:
      'Não. Cada morador possui seu quarto individual, porém os banheiros são compartilhados e recebem limpeza frequente para manter o ambiente organizado e agradável.',
  },
  {
    question: 'O Recanto aceita casais?',
    answer:
      'Não. A residência é destinada exclusivamente para ocupação individual.',
  },
  {
    question: 'O Recanto aceita animais de estimação?',
    answer:
      'Não. Atualmente não é permitida a permanência de animais na residência.',
  },
  {
    question: 'Existe estacionamento?',
    answer:
      'Sim. O Recanto oferece: vaga descoberta para carro (R$ 250,00 por mês), vaga coberta para moto (R$ 150,00 por mês) e bicicletário gratuito para moradores.',
  },
  {
    question: 'Posso receber visitantes?',
    answer:
      'Não. Para garantir a segurança, privacidade e tranquilidade dos moradores, não é permitida a entrada de visitantes.',
  },
  {
    question: 'O aluguel já inclui água, energia, gás e internet?',
    answer: 'Sim. Esses serviços já estão incluídos no valor do aluguel.',
  },
  {
    question: 'É necessário pagar caução?',
    answer: 'Não. O Recanto Jardim Botânico não exige caução.',
  },
  {
    question: 'Como funciona a taxa de ingresso?',
    answer:
      'Existe uma taxa única de R$ 350,00. Desse valor: R$ 250,00 destinam-se à limpeza, higienização e manutenção do quarto após o encerramento da locação; R$ 100,00 são reembolsáveis mediante devolução das chaves e entrega do quarto nas condições previstas.',
  },
  {
    question: 'Existe período de adaptação?',
    answer:
      'Sim. O Recanto oferece um período de adaptação de 48 horas, conforme previsto em contrato. Esse é um dos diferenciais da residência.',
  },
  {
    question: 'Como funciona o pagamento do aluguel?',
    answer:
      'O aluguel é pago antecipadamente. A locação possui natureza exclusivamente mensal. Não existe cobrança proporcional de aluguel durante o mês.',
  },
  {
    question: 'Qual é a permanência mínima?',
    answer: 'A permanência mínima é de 1 mês.',
  },
  {
    question: 'Quem pode morar no Recanto?',
    answer:
      'O Recanto é destinado principalmente a trabalhadores e estudantes que procuram um ambiente organizado, limpo, seguro e tranquilo para morar.',
  },
  {
    question: 'Como faço para conhecer o Recanto?',
    answer:
      'Basta entrar em contato pelo WhatsApp para agendar uma visita. Será um prazer apresentar a estrutura da residência e esclarecer todas as suas dúvidas.',
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

  function toggle(index: number) {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Reunimos as dúvidas mais comuns para que você conheça melhor o funcionamento do
            Recanto Jardim Botânico antes mesmo da sua visita.
          </p>
          <p className="text-primary text-sm font-medium mt-3">
            Respondemos às principais dúvidas para que você conheça melhor a Qualidade que Acolhe
            do Recanto Jardim Botânico.
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
          <p className="text-white text-lg font-semibold mb-2">Pronto para conhecer o Recanto?</p>
          <p className="text-white/70 text-sm mb-6">
            Será um prazer apresentar a residência e esclarecer suas dúvidas.
          </p>
          <WhatsAppButton
            href={WA.visita}
            label="Agendar minha visita pelo WhatsApp"
          />
        </div>
      </div>
    </section>
  )
}
