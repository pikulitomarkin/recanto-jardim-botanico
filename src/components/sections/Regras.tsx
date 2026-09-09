import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { IconCheck } from '@/components/ui/Icons'
import { WA } from '@/lib/brand'

const REGRAS = [
  'Sem casais — ocupação individual.',
  'Sem pets.',
  'Sem visitantes.',
  'Sem álcool, fumo dentro ou drogas.',
  'Silêncio das 22h às 06h.',
  'Permanência mínima de 1 mês.',
  'Aluguel pago antecipadamente.',
]

export default function Regras() {
  return (
    <section id="regras" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Convivência
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Regras objetivas
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Para manter um ambiente seguro, limpo e respeitoso para todos.
          </p>
        </div>

        <ul className="max-w-xl mx-auto space-y-3 mb-10">
          {REGRAS.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-gray-800">
              <IconCheck size={18} className="text-green-600 mt-0.5" />
              {item}
            </li>
          ))}
        </ul>

        <div className="text-center flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="/regras"
            className="inline-flex items-center justify-center border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm"
          >
            Ver regras completas
          </a>
          <WhatsAppButton href={WA.principal} label="Fale pelo WhatsApp" />
        </div>
      </div>
    </section>
  )
}
