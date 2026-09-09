import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { IconCheck, PARKING_ICONS } from '@/components/ui/Icons'
import { ENTRADA, PARKING, WA, formatCurrency } from '@/lib/brand'

const ITENS = [
  'Permanência mínima de 1 mês.',
  'Não exigimos caução de aluguel.',
  'Aluguel pago antecipadamente.',
  'Locação exclusivamente mensal (sem proporcional).',
  'Período de adaptação de 48 horas, conforme contrato.',
]

export default function Condicoes() {
  return (
    <section id="condicoes" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Condições
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Condições de entrada
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Transparência desde o primeiro contato — valores oficiais do Recanto.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8">
            <h3 className="font-bold text-gray-900 mb-4">Na entrada você paga</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <IconCheck size={18} className="text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">Primeiro mês de aluguel</p>
                  <p className="text-sm text-gray-500">Conforme a categoria escolhida</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconCheck size={18} className="text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {ENTRADA.labelHigienizacao} — {formatCurrency(ENTRADA.higienizacao)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Limpeza, higienização e preparação do quarto
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <IconCheck size={18} className="text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {ENTRADA.labelDeposito} — {formatCurrency(ENTRADA.depositoChave)}
                  </p>
                  <p className="text-sm text-gray-500">
                    Devolvido com a entrega das chaves e do quarto nas condições previstas
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8">
            <h3 className="font-bold text-gray-900 mb-4">Também importante</h3>
            <ul className="space-y-2.5 mb-6">
              {ITENS.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                  <IconCheck size={16} className="text-green-600 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-3">
              Estacionamento (opcional)
            </h4>
            <ul className="space-y-2">
              {PARKING.map((item) => {
                const Icon = PARKING_ICONS[item.icon]
                return (
                  <li key={item.label} className="flex items-center gap-2.5 text-sm text-gray-700">
                    <Icon size={16} className="text-primary" />
                    {item.label}: <strong className="ml-1">{item.price}</strong>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-5 sm:p-6 mb-8 max-w-3xl mx-auto text-center">
          <p className="text-amber-950 text-sm sm:text-base font-semibold">
            Período de adaptação de 48 horas
          </p>
          <p className="text-amber-900/80 text-sm mt-1 leading-relaxed">
            Mais segurança para conhecer a rotina da residência antes de confirmar a permanência.
          </p>
        </div>

        <div className="text-center">
          <WhatsAppButton href={WA.principal} label="Fale pelo WhatsApp" />
        </div>
      </div>
    </section>
  )
}
