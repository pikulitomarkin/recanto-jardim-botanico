const WHATSAPP_URL = 'https://wa.me/5561999999999?text=Olá!%20Tenho%20interesse%20em%20alugar%20um%20quarto%20no%20Recanto%20Jardim%20Botânico.'

const STEPS = [
  {
    number: 1,
    title: 'Contato via WhatsApp',
    description: 'Fale conosco pelo WhatsApp e tire suas dúvidas com agilidade.',
  },
  {
    number: 2,
    title: 'Veja as Fotos',
    description: 'Enviamos fotos reais dos quartos disponíveis para você escolher.',
  },
  {
    number: 3,
    title: 'Agende a Visita',
    description: 'Venha conhecer o espaço pessoalmente e sentir o ambiente.',
  },
  {
    number: 4,
    title: 'Documentação',
    description: 'Assinamos o contrato e organizamos toda a documentação necessária.',
  },
  {
    number: 5,
    title: 'Entrada',
    description: 'Você já pode se mudar e aproveitar seu novo lar!',
  },
]

function ChevronRight() {
  return (
    <svg
      className="hidden lg:block w-6 h-6 text-gray-300 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  )
}

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Como Funciona
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Processo simples e transparente para você encontrar seu espaço ideal.
          </p>
        </div>

        {/* Desktop: horizontal row */}
        <div className="hidden lg:flex items-start justify-center gap-4">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="flex items-start gap-4">
              <div className="flex flex-col items-center text-center max-w-[140px]">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mb-4 flex-shrink-0 shadow-md shadow-primary/20">
                  {step.number}
                </div>
                <p className="font-semibold text-gray-900 text-sm leading-tight mb-2">
                  {step.title}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
              {idx < STEPS.length - 1 && (
                <div className="mt-5">
                  <ChevronRight />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile: vertical list */}
        <div className="flex lg:hidden flex-col items-start max-w-sm mx-auto">
          {STEPS.map((step, idx) => (
            <div key={step.number} className="flex items-start gap-4 w-full">
              {/* Number + vertical line */}
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-md shadow-primary/20">
                  {step.number}
                </div>
                {idx < STEPS.length - 1 && (
                  <div className="w-0.5 h-10 bg-gray-200 mt-1" />
                )}
              </div>

              {/* Content */}
              <div className={`pb-8 ${idx === STEPS.length - 1 ? 'pb-0' : ''}`}>
                <p className="font-semibold text-gray-900 text-sm leading-tight mb-1 mt-1.5">
                  {step.title}
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-green-900/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Iniciar Processo
          </a>
        </div>
      </div>
    </section>
  )
}
