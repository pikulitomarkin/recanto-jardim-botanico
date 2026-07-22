import type { ReactNode } from 'react'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import BrandSlogan from '@/components/ui/BrandSlogan'
import { IconCheck, PARKING_ICONS } from '@/components/ui/Icons'
import { PARKING, WA } from '@/lib/brand'

const BLOCKS: { title: string; body: ReactNode; highlight?: boolean }[] = [
  {
    title: 'Permanência mínima',
    body: <p>A permanência mínima no Recanto Jardim Botânico é de 1 mês.</p>,
  },
  {
    title: 'Caução',
    body: (
      <p>
        Não exigimos caução. Este é um dos diferenciais do Recanto Jardim Botânico.
      </p>
    ),
  },
  {
    title: 'Forma de pagamento',
    body: (
      <p>O aluguel é pago antecipadamente, conforme previsto no contrato de locação.</p>
    ),
  },
  {
    title: 'Locação mensal',
    body: (
      <p>
        A locação possui natureza exclusivamente mensal. Não existe cobrança proporcional de
        aluguel durante o mês. Cada período contratado corresponde a uma mensalidade completa.
      </p>
    ),
  },
  {
    title: 'Taxa de ingresso',
    body: (
      <div className="space-y-3">
        <p>
          Existe uma taxa única de ingresso no valor de <strong>R$ 350,00</strong>, composta por
          duas partes:
        </p>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="font-semibold text-gray-900 text-sm">Limpeza e manutenção — R$ 250,00</p>
          <p className="text-sm text-gray-600 mt-1">
            Destinados à limpeza, higienização e manutenção do quarto após o encerramento da
            locação.
          </p>
        </div>
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="font-semibold text-gray-900 text-sm">Valor reembolsável — R$ 100,00</p>
          <p className="text-sm text-gray-600 mt-1">Este valor será devolvido ao morador mediante:</p>
          <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
            <li>devolução das chaves;</li>
            <li>entrega do quarto nas condições previstas no regulamento.</li>
          </ul>
        </div>
        <p className="text-sm text-amber-800 bg-amber-50 border border-amber-100 rounded-lg p-3">
          Importante: a taxa de ingresso <strong>não é caução</strong>. São conceitos diferentes.
        </p>
      </div>
    ),
  },
  {
    title: 'Período de adaptação',
    highlight: true,
    body: (
      <p>
        O Recanto Jardim Botânico oferece um período de adaptação de <strong>48 horas</strong>,
        conforme previsto em contrato. Esse período proporciona mais segurança para que o novo
        morador conheça a rotina da residência antes de confirmar definitivamente sua permanência.
      </p>
    ),
  },
  {
    title: 'O que está incluso no aluguel',
    body: (
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {[
          'Água',
          'Energia elétrica',
          'Gás',
          'Internet de alta velocidade',
          'Uso das cozinhas',
          'Uso das lavanderias',
          'Uso da piscina',
          'Uso das áreas comuns',
        ].map((item) => (
          <li key={item} className="flex items-center gap-2 text-sm text-gray-700">
            <IconCheck size={16} className="text-green-600" />
            {item}
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: 'Estacionamento',
    body: (
      <div>
        <p className="mb-4">O estacionamento é opcional.</p>
        <ul className="space-y-3">
          {PARKING.map((item) => {
            const ParkingIcon = PARKING_ICONS[item.icon]
            return (
            <li key={item.label} className="text-sm">
              <span className="font-semibold text-gray-900 inline-flex items-center gap-2">
                <ParkingIcon size={16} className="text-primary" />
                {item.label}
              </span>
              <span className="block text-primary mt-0.5 pl-6">{item.price}</span>
            </li>
            )
          })}
        </ul>
      </div>
    ),
  },
  {
    title: 'Público atendido',
    body: (
      <p>
        O Recanto Jardim Botânico é destinado principalmente a trabalhadores e estudantes que
        procuram um ambiente organizado, tranquilo e respeitoso para morar.
      </p>
    ),
  },
  {
    title: 'Moradia Compartilhada UNISSEX',
    body: (
      <p>
        A residência possui ambiente UNISSEX. Cada morador possui seu próprio quarto individual.
        As áreas comuns são compartilhadas de forma organizada entre os moradores.
      </p>
    ),
  },
]

export default function InformacoesPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col justify-between pt-16">
      <Header />

      <section className="py-20 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Informações Importantes
            </h1>
            <BrandSlogan className="justify-center mb-4" textClassName="text-primary" />
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Queremos que todas as condições da locação sejam apresentadas com total transparência
              desde o primeiro contato.
            </p>
            <p className="text-primary text-sm font-medium mt-3">
              Transparência também faz parte da Qualidade que Acolhe.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 mb-14">
            {BLOCKS.map((block) => (
              <div
                key={block.title}
                className={`rounded-2xl p-6 sm:p-8 border shadow-sm ${
                  block.highlight
                    ? 'bg-amber-50 border-amber-200'
                    : 'bg-gray-50/50 border-gray-100'
                }`}
              >
                <h2
                  className={`text-lg font-bold mb-3 ${
                    block.highlight ? 'text-amber-900' : 'text-primary'
                  }`}
                >
                  {block.title}
                </h2>
                <div
                  className={`text-sm leading-relaxed ${
                    block.highlight ? 'text-amber-900' : 'text-gray-700'
                  }`}
                >
                  {block.body}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center bg-primary rounded-2xl p-8 shadow-xl shadow-primary/10 text-white">
            <h3 className="text-lg font-bold mb-2">Pronto para o próximo passo?</h3>
            <p className="text-white/70 text-sm mb-6">
              Agora só falta conhecer o Recanto pessoalmente.
            </p>
            <WhatsAppButton href={WA.duvidas} label="Tirar dúvidas pelo WhatsApp" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
