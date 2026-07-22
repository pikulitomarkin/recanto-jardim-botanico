import WhatsAppButton from '@/components/ui/WhatsAppButton'
import { IconCheck } from '@/components/ui/Icons'
import { WA } from '@/lib/brand'

const ETAPAS = [
  {
    numero: '01',
    titulo: 'Fale conosco',
    desc: 'Entre em contato pelo WhatsApp. Apresentaremos as categorias de quartos disponíveis, valores atualizados, fotos da residência e responderemos todas as suas dúvidas.',
  },
  {
    numero: '02',
    titulo: 'Agende sua visita',
    desc: 'Escolha o melhor dia e horário para conhecer pessoalmente o Recanto Jardim Botânico. Durante a visita você poderá conhecer os ambientes, esclarecer dúvidas e verificar qual categoria de quarto melhor atende às suas necessidades.',
  },
  {
    numero: '03',
    titulo: 'Documentação',
    desc: 'Caso decida morar conosco, solicitaremos a documentação necessária para elaboração do contrato de locação. Todo o processo será realizado com transparência e segurança.',
  },
  {
    numero: '04',
    titulo: 'Bem-vindo ao Recanto',
    desc: 'Após a assinatura do contrato e confirmação da locação, basta trazer seus pertences e iniciar essa nova etapa com tranquilidade.',
  },
]

const IMPORTANTES = [
  'Permanência mínima de 1 mês.',
  'Não exigimos caução.',
  'Aluguel pago antecipadamente.',
  'Locação exclusivamente mensal.',
  'Não existe cobrança proporcional de aluguel durante o mês.',
]

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Processo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Como funciona sua entrada no Recanto Jardim Botânico
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Nosso processo foi desenvolvido para ser simples, transparente e sem burocracia
            desnecessária.
          </p>
          <p className="text-primary text-sm font-medium mt-3">
            Um processo simples, transparente e com a qualidade que acolhe desde o primeiro contato.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
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

        <div className="bg-gray-50 border border-gray-100 rounded-2xl p-6 sm:p-8 mb-8 max-w-3xl mx-auto">
          <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-4">
            Informações importantes
          </h3>
          <ul className="space-y-2.5 mb-6">
            {IMPORTANTES.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                <IconCheck size={16} className="text-green-600 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>

          <div className="bg-white border border-gray-100 rounded-xl p-4 mb-5">
            <p className="text-sm text-gray-700 leading-relaxed">
              <span className="font-semibold text-gray-900 inline-flex items-center gap-1.5">
                <IconCheck size={16} className="text-green-600" />
                Taxa de ingresso de R$ 350,00.
              </span>
              <br />
              Sendo:
            </p>
            <ul className="mt-2 space-y-2 text-sm text-gray-600 list-disc list-inside">
              <li>
                R$ 250,00 destinados à limpeza, higienização e manutenção do quarto após o término
                da locação.
              </li>
              <li>
                R$ 100,00 reembolsáveis mediante devolução das chaves e entrega do quarto nas
                condições previstas.
              </li>
            </ul>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
            <p className="text-sm text-amber-900 leading-relaxed">
              <span className="font-bold inline-flex items-center gap-1.5">
                <IconCheck size={16} className="text-amber-700" />
                Período de adaptação de 48 horas
              </span>
              , conforme
              previsto em contrato. Um dos maiores diferenciais do Recanto: mais segurança para o
              novo morador conhecer a rotina da residência.
            </p>
          </div>
        </div>

        <div className="text-center">
          <WhatsAppButton href={WA.visita} label="Agendar minha visita" />
        </div>
      </div>
    </section>
  )
}
