const ETAPAS = [
  {
    numero: '01',
    titulo: 'Contato',
    desc: 'Envie uma mensagem pelo WhatsApp. Apresentamos os quartos disponíveis, fotos e tiramos todas as suas dúvidas.',
  },
  {
    numero: '02',
    titulo: 'Visita',
    desc: 'Agendamos uma visita presencial para você conhecer o Recanto, ver o quarto e sentir o ambiente.',
  },
  {
    numero: '03',
    titulo: 'Documentação',
    desc: 'Após a visita, coletamos a documentação necessária e assinamos o contrato de locação.',
  },
  {
    numero: '04',
    titulo: 'Entrada',
    desc: 'Com tudo certo, você entra no seu novo quarto e começa a fazer parte do Recanto.',
  },
]

const WA_VISITA = 'https://wa.me/5541999999999?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Recanto%20Jardim%20Bot%C3%A2nico.'

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Processo
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Simples, rápido e transparente. Do primeiro contato até a sua entrada.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {ETAPAS.map((etapa, idx) => (
            <div key={etapa.numero} className="relative flex flex-col items-center text-center">
              {/* Connector line */}
              {idx < ETAPAS.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-gray-200" />
              )}
              {/* Number circle */}
              <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl mb-4 shadow-lg shadow-primary/20 relative z-10">
                {etapa.numero}
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-2">{etapa.titulo}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{etapa.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <a
            href={WA_VISITA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-green-900/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Iniciar pelo WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
