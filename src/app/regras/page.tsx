import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

const RULES = [
  {
    category: 'Silêncio e Convivência',
    rules: [
      { text: 'Horário de silêncio absoluto das 22h às 8h para garantir o descanso de todos.', allowed: true },
      { text: 'Proibido som alto em qualquer horário nas áreas comuns ou privativas.', allowed: true },
      { text: 'Festas e reuniões barulhentas não são permitidas.', allowed: true },
      { text: 'Uso de fones de ouvido para reuniões ou entretenimento nas áreas comuns.', allowed: true },
    ]
  },
  {
    category: 'Organização e Limpeza',
    rules: [
      { text: 'Lavar e guardar toda a louça e utensílios imediatamente após o uso.', allowed: true },
      { text: 'Manter a geladeira organizada e descartar alimentos vencidos.', allowed: true },
      { text: 'Manter banheiros e lavanderias limpos após a sua utilização.', allowed: true },
      { text: 'Separar o lixo reciclável e orgânico conforme as lixeiras sinalizadas.', allowed: true },
    ]
  },
  {
    category: 'Segurança e Visitas',
    rules: [
      { text: 'Manter o portão de entrada sempre fechado e trancado.', allowed: true },
      { text: 'Visitas diurnas são permitidas mediante aviso prévio e concordância dos demais.', allowed: true },
      { text: 'Proibido a pernoite de visitantes nos quartos individuais.', allowed: false },
      { text: 'Proibido fazer cópias de chaves sem autorização da administração.', allowed: false },
    ]
  },
  {
    category: 'Normas Gerais',
    rules: [
      { text: 'É estritamente proibido fumar nas áreas internas e quartos.', allowed: false },
      { text: 'Não é permitida a permanência de animais de estimação sem autorização.', allowed: false },
      { text: 'O pagamento mensal deve ser quitado pontualmente até o dia 5.', allowed: true },
      { text: 'A permanência mínima estipulada em contrato é de 3 meses.', allowed: true },
    ]
  }
]

export default function RegrasPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col justify-between pt-16">
      <Header />
      
      <section className="py-20 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-widest mb-4 px-3.5 py-1.5 rounded-full bg-green-50 text-green-700 border border-green-200">
              Normas de Convivência
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Regras da Residência
            </h1>
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              Nosso objetivo é proporcionar um ambiente tranquilo, seguro, higiênico e harmonioso para todos os moradores.
            </p>
          </div>

          <div className="space-y-12">
            {RULES.map((group) => (
              <div key={group.category} className="bg-gray-50/50 rounded-2xl p-6 sm:p-8 border border-gray-100">
                <h2 className="text-lg font-bold text-primary mb-6 border-b border-gray-100 pb-3">
                  {group.category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {group.rules.map((rule, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
                      <span className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                        rule.allowed ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
                      }`}>
                        {rule.allowed ? '✓' : '✗'}
                      </span>
                      <p className="text-sm text-gray-700 leading-relaxed">{rule.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center max-w-xl mx-auto bg-primary rounded-2xl p-8 shadow-xl shadow-primary/10 text-white">
            <h3 className="text-lg font-bold mb-2">Aceita as Normas de Convivência?</h3>
            <p className="text-white/70 text-sm mb-6">
              Se você concorda com nossas regras e procura um local organizado e tranquilo para morar, clique abaixo.
            </p>
            <a
              href="https://wa.me/5541999999999?text=Olá!%20Li%20e%20concordo%20com%20as%20regras.%20Tenho%20interesse%20nos%20quartos!"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-8 py-3.5 rounded-full transition-colors shadow-lg shadow-green-900/30 text-sm"
            >
              Iniciar Contato pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
