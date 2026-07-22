import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import BrandSlogan from '@/components/ui/BrandSlogan'
import { IconCheck, IconDocument } from '@/components/ui/Icons'
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

export default function RegrasPage() {
  return (
    <main className="bg-white min-h-screen flex flex-col justify-between pt-16">
      <Header />

      <section className="py-20 flex-grow">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Regras de Convivência
            </h1>
            <BrandSlogan className="justify-center mb-4" textClassName="text-primary" />
            <p className="text-gray-500 max-w-xl mx-auto text-base">
              As regras do Recanto Jardim Botânico existem para garantir um ambiente organizado,
              seguro, limpo e respeitoso para todos os moradores.
            </p>
            <p className="text-primary text-sm font-medium mt-3">
              As regras existem para preservar a Qualidade que Acolhe todos os moradores.
            </p>
          </div>

          <div className="space-y-6 mb-10">
            {BLOCKS.map((block) => (
              <div
                key={block.title}
                className="bg-gray-50/50 rounded-2xl p-6 sm:p-8 border border-gray-100"
              >
                <h2 className="text-lg font-bold text-primary mb-5">{block.title}</h2>
                <ul className="space-y-3">
                  {block.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <IconCheck size={16} className="text-green-600 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="bg-gray-50/50 rounded-2xl p-6 sm:p-8 border border-gray-100">
              <h2 className="text-lg font-bold text-primary mb-3">Monitoramento</h2>
              <p className="text-sm text-gray-700 leading-relaxed mb-3">
                A residência possui 48 câmeras de monitoramento distribuídas nas áreas comuns,
                contribuindo para a segurança e organização do ambiente.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed">
                Não existem câmeras nos quartos nem nos banheiros, preservando totalmente a
                privacidade dos moradores.
              </p>
            </div>

            <div className="bg-gray-50/50 rounded-2xl p-6 sm:p-8 border border-gray-100 text-center">
              <h2 className="text-lg font-bold text-primary mb-3">Regulamento completo</h2>
              <p className="text-sm text-gray-600 leading-relaxed mb-5">
                Estas são apenas as principais regras de convivência. O regulamento completo será
                apresentado durante o processo de locação.
              </p>
              <a
                href={WA.duvidas}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-primary text-primary hover:bg-primary hover:text-white font-semibold px-6 py-3 rounded-full transition-colors text-sm"
              >
                <IconDocument size={16} />
                Consultar Regulamento Completo
              </a>
            </div>
          </div>

          <p className="text-center text-gray-600 text-base leading-relaxed max-w-2xl mx-auto mb-12">
            Acreditamos que um ambiente limpo, organizado, seguro e respeitoso depende da
            colaboração de todos. Esse é um dos grandes diferenciais do Recanto Jardim Botânico.
          </p>

          <div className="text-center bg-primary rounded-2xl p-8 shadow-xl shadow-primary/10 text-white">
            <h3 className="text-lg font-bold mb-2">É exatamente esse tipo de ambiente que você procura?</h3>
            <p className="text-white/70 text-sm mb-6">
              Agende uma visita e conheça o Recanto pessoalmente.
            </p>
            <WhatsAppButton href={WA.visita} label="Agendar minha visita" />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
