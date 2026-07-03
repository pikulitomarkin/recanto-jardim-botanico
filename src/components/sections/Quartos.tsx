const WA_DISPONIBILIDADE = 'https://wa.me/5541999999999?text=Ol%C3%A1!%20Gostaria%20de%20saber%20sobre%20a%20disponibilidade%20de%20quartos%20no%20Recanto%20Jardim%20Bot%C3%A2nico.'

const FAIXAS = [
  { preco: 'R$ 1.100', label: 'Standard' },
  { preco: 'R$ 1.200', label: 'Standard Plus' },
  { preco: 'R$ 1.300', label: 'Premium' },
  { preco: 'R$ 1.400', label: 'Master' },
]

const INCLUSO = [
  'Água e luz inclusos',
  'Internet fibra óptica',
  'Quarto individual privativo',
  'Móveis inclusos',
  'TV 300+ canais',
  'Piscina e áreas comuns',
]

export default function Quartos() {
  return (
    <section id="quartos" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Quartos
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Quartos Individuais
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Todos os quartos são <strong className="text-gray-700">individuais, privativos e mobiliados</strong>.
            Os banheiros são compartilhados entre os moradores, mantidos limpos e higienizados diariamente.
          </p>
        </div>

        {/* Price bands */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {FAIXAS.map((f) => (
            <div key={f.preco} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 text-center hover:shadow-md hover:border-primary/20 transition-all">
              <p className="text-2xl font-bold text-primary mb-1">{f.preco}</p>
              <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{f.label}</p>
              <p className="text-xs text-gray-400 mt-1">por mês</p>
            </div>
          ))}
        </div>

        {/* Incluso */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 mb-10">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-5">Incluso em todos os quartos</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {INCLUSO.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-green-100 text-green-600 flex items-center justify-center flex-shrink-0 text-xs font-bold">✓</span>
                <span className="text-sm text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Transparency note */}
        <div className="bg-amber-50 border border-amber-100 rounded-xl px-6 py-4 mb-10 flex gap-3 items-start">
          <span className="text-amber-500 text-lg flex-shrink-0 mt-0.5">ℹ️</span>
          <p className="text-sm text-amber-800 leading-relaxed">
            <strong>Transparência:</strong> Nossos quartos são individuais e <strong>não possuem banheiro privativo</strong>.
            Os banheiros compartilhados são mantidos em excelente estado.
            Visitas são realizadas <strong>mediante agendamento</strong>.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-gray-500 text-sm mb-4">
            A disponibilidade é informada diretamente pelo WhatsApp.
          </p>
          <a
            href={WA_DISPONIBILIDADE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-green-900/20"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Consultar Disponibilidade
          </a>
        </div>
      </div>
    </section>
  )
}
