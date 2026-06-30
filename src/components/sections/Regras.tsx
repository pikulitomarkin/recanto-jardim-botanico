const WHATSAPP_URL = 'https://wa.me/5561999999999?text=Olá!%20Li%20as%20regras%20e%20tenho%20interesse%20em%20alugar%20um%20quarto%20no%20Recanto%20Jardim%20Botânico.'

interface Rule {
  text: string
  allowed: boolean
}

const RULES: Rule[] = [
  { text: 'Silêncio após as 22h', allowed: true },
  { text: 'Limpar as áreas comuns após o uso', allowed: true },
  { text: 'Avisar com antecedência sobre visitantes', allowed: true },
  { text: 'Pagar o aluguel até o dia 5 do mês', allowed: true },
  { text: 'Fumar nas áreas internas', allowed: false },
  { text: 'Pets sem autorização prévia', allowed: false },
]

function CheckIcon() {
  return (
    <svg
      className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

function XIcon() {
  return (
    <svg
      className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function Regras() {
  return (
    <section id="regras" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            Regras da Residência
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">
            Para garantir uma convivência harmoniosa e respeitosa para todos.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
            {RULES.map((rule) => (
              <div
                key={rule.text}
                className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
              >
                {rule.allowed ? <CheckIcon /> : <XIcon />}
                <p className="text-sm text-gray-700 leading-relaxed">{rule.text}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-2xl p-8 text-center shadow-lg shadow-primary/20">
            <p className="text-white text-lg font-semibold mb-2">
              Aceita nossas regras?
            </p>
            <p className="text-white/70 text-sm mb-6">
              Fale com a gente e dê o primeiro passo para o seu novo lar!
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-green-900/30"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Fale com a gente!
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
