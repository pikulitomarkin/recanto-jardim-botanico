import {
  IconCar,
  IconCheck,
  IconClipboard,
  IconWarning,
  IconX,
} from '@/components/ui/Icons'

const INCLUDES = [
  'Água e energia elétrica',
  'Internet fibra óptica',
  'Condomínio',
  'Manutenção das áreas comuns',
  'Segurança 24 horas',
]

const NOT_INCLUDES = [
  'Gás de cozinha (individual)',
  'Streaming (Netflix, etc.)',
  'Limpeza do quarto',
  'Alimentação',
]

const PRICE_GROUPS = [
  {
    price: 1100,
    label: 'Econômico',
    description: 'Quarto individual mobiliado completo.',
    highlight: false,
  },
  {
    price: 1200,
    label: 'Essencial',
    description: 'Quarto com escrivaninha e mais amplo.',
    highlight: false,
  },
  {
    price: 1300,
    label: 'Conforto',
    description: 'Quarto reformado com móveis planejados.',
    highlight: true,
  },
  {
    price: 1400,
    label: 'Superior',
    description: 'Suíte espaçosa com excelente acabamento.',
    highlight: false,
  },
  {
    price: 1500,
    label: 'Premium',
    description: 'Máximo espaço, armários e conforto.',
    highlight: false,
  },
]

export default function Valores() {
  return (
    <section id="valores" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Valores Transparentes
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Sem surpresas — tudo incluso no valor mensal.
          </p>
        </div>

        {/* Price cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-14 max-w-6xl mx-auto">
          {PRICE_GROUPS.map((group) => (
            <div
              key={group.price}
              className={`rounded-2xl p-6 border flex flex-col justify-between ${
                group.highlight
                  ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 animate-pulse'
                  : 'bg-white text-gray-900 border-gray-200 shadow-sm'
              }`}
              style={{ animationDuration: '4s' }}
            >
              <div>
                <p className={`text-sm font-semibold mb-1 ${group.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                  {group.label}
                </p>
                <p className="text-3xl font-bold mb-1">
                  R${group.price.toLocaleString('pt-BR')}
                  <span className={`text-sm font-normal ml-1 ${group.highlight ? 'text-white/70' : 'text-gray-400'}`}>
                    /mês
                  </span>
                </p>
              </div>
              <p className={`text-sm mt-3 ${group.highlight ? 'text-white/80' : 'text-gray-500'}`}>
                {group.description}
              </p>
            </div>
          ))}
        </div>

        {/* Includes table */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
            {/* Includes */}
            <div className="p-6">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 inline-flex items-center gap-1.5">
                <IconCheck size={14} className="text-green-600" />
                O que inclui
              </h3>
              <ul className="space-y-2.5">
                {INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <span className="mt-0.5 flex-shrink-0 w-2.5 h-2.5 rounded-full" style={{ backgroundColor: '#1B4D2E' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Not includes */}
            <div className="p-6 bg-gray-50/60">
              <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4 inline-flex items-center gap-1.5">
                <IconX size={14} className="text-red-500" />
                O que não inclui
              </h3>
              <ul className="space-y-2.5">
                {NOT_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-gray-500">
                    <span className="mt-0.5 flex-shrink-0 w-2.5 h-2.5 rounded-full bg-red-300" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Deposit note */}
          <div className="px-6 py-4 bg-amber-50 border-t border-amber-100 flex items-start gap-2">
            <IconWarning size={16} className="text-amber-500 mt-0.5" />
            <p className="text-xs text-amber-800 leading-relaxed">
              <span className="font-semibold">Caução:</span> equivalente a 1 mês de aluguel, devolvido ao final do contrato.
              Contas individuais (gás) são pagas diretamente pelo inquilino.
            </p>
          </div>
        </div>

        {/* Parking and contracting details card */}
        <div className="max-w-3xl mx-auto mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden p-6 sm:p-8">
          <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-6 flex items-center gap-2">
            <IconCar size={16} className="text-primary" /> Custos e Condições Adicionais
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
            <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 mb-3 flex items-center gap-1.5">
                <IconCar size={16} className="text-primary" /> Estacionamento
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center justify-between">
                  <span>Vaga para Carro:</span>
                  <span className="font-semibold text-gray-900">R$ 150 / mês</span>
                </li>
                <li className="flex items-center justify-between">
                  <span>Vaga para Moto:</span>
                  <span className="font-semibold text-gray-900">R$ 80 / mês</span>
                </li>
              </ul>
              <p className="text-[11px] text-gray-400 mt-3 italic">
                * Sujeito à verificação de disponibilidade de vagas no pátio.
              </p>
            </div>
            <div className="bg-gray-50/50 p-5 rounded-xl border border-gray-100">
              <p className="font-bold text-gray-900 mb-3 flex items-center gap-1.5">
                <IconClipboard size={16} className="text-primary" /> Condições Gerais
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><span className="font-semibold text-gray-800">Taxa Única de Ingresso:</span> R$ 150 pagos na assinatura para despesas de adesão/vistoria.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><span className="font-semibold text-gray-800">Reserva para início do mês:</span> possibilidade de reservar o quarto pagando taxa de reserva proporcional.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span><span className="font-semibold text-gray-800">Permanência Mínima:</span> contrato mínimo de 1 mês.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
