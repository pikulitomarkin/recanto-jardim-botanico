import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { ENTRADA, WA, formatCurrency } from '@/lib/brand'

const ETAPAS = [
  {
    numero: '01',
    titulo: 'Fale conosco',
    desc: 'WhatsApp com fotos, categorias e valores atualizados.',
  },
  {
    numero: '02',
    titulo: 'Agende sua visita',
    desc: 'Conheça a residência e escolha a categoria ideal.',
  },
  {
    numero: '03',
    titulo: 'Documentação',
    desc: 'Contrato com transparência e segurança.',
  },
  {
    numero: '04',
    titulo: 'Bem-vindo ao Recanto',
    desc: 'Traga seus pertences e comece com tranquilidade.',
  },
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Processo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Como funciona
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Quatro etapas simples — do primeiro contato à sua chegada.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {ETAPAS.map((etapa, idx) => (
            <div key={etapa.numero} className="relative flex flex-col items-center text-center">
              {idx < ETAPAS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-gray-200" />
              )}
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-primary/20 relative z-10">
                {etapa.numero}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{etapa.titulo}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{etapa.desc}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-gray-50 border border-gray-100 rounded-2xl p-6 mb-6">
          <p className="text-sm text-gray-800 leading-relaxed">
            <strong>Na entrada:</strong> primeiro mês de aluguel +{' '}
            {ENTRADA.labelHigienizacao} {formatCurrency(ENTRADA.higienizacao)} +{' '}
            {ENTRADA.labelDeposito.toLowerCase()} {formatCurrency(ENTRADA.depositoChave)}. Sem
            caução de aluguel.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-amber-50 border border-amber-200 rounded-2xl p-5 mb-10 text-center">
          <p className="text-amber-950 font-semibold text-sm sm:text-base">
            Período de adaptação de 48 horas
          </p>
          <p className="text-amber-900/80 text-sm mt-1">
            Um dos maiores diferenciais do Recanto — mais segurança para o novo morador.
          </p>
        </div>

        <div className="text-center">
          <WhatsAppButton href={WA.principal} label="Fale pelo WhatsApp" />
        </div>
      </div>
    </section>
  )
}
