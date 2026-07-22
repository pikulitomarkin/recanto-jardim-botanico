import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { IconCheck } from '@/components/ui/Icons'
import { WA } from '@/lib/brand'

const BLOCKS = [
  {
    title: 'Segurança',
    items: [
      'Não realizamos locação para casais.',
      'Não é permitida a entrada de visitantes.',
      'Não é permitido o consumo de drogas ilícitas.',
      'Não é permitido armazenar ou consumir bebidas alcoólicas na residência.',
      'Todos os moradores devem manter respeito e boa convivência.',
    ],
  },
  {
    title: 'Organização',
    items: [
      'Manter cozinhas organizadas após o uso.',
      'Manter lavanderias organizadas.',
      'Colaborar com a limpeza dos ambientes compartilhados.',
      'Utilizar corretamente os equipamentos da residência.',
    ],
  },
  {
    title: 'Boa convivência',
    items: [
      'Respeitar o horário de silêncio.',
      'Respeitar a privacidade dos demais moradores.',
      'Colaborar para manter um ambiente tranquilo.',
      'Utilizar vestimenta adequada nas áreas comuns.',
    ],
  },
]

export default function Regras() {
  return (
    <section id="regras" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Regras de Convivência
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            As regras existem para garantir um ambiente organizado, seguro, limpo e respeitoso.
          </p>
          <p className="text-primary text-sm font-medium mt-3">
            As regras existem para preservar a Qualidade que Acolhe todos os moradores.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
          {BLOCKS.map((block) => (
            <div
              key={block.title}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
            >
              <h3 className="font-bold text-primary mb-4">{block.title}</h3>
              <ul className="space-y-2.5">
                {block.items.slice(0, 3).map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                    <IconCheck size={16} className="text-green-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="/regras"
            className="inline-flex items-center justify-center bg-white border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-3.5 rounded-full transition-colors text-sm mr-0 sm:mr-3 mb-3 sm:mb-0"
          >
            Ver regras completas
          </a>
          <WhatsAppButton href={WA.visita} label="Agendar minha visita" className="align-middle" />
        </div>
      </div>
    </section>
  )
}
