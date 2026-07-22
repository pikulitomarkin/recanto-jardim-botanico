import { GOOGLE_MAPS_URL } from '@/lib/brand'

interface Landmark {
  category: string
  title: string
  desc: string
  img: string
  walkTime: string
  walkDist: string
  carTime: string
  carDist: string
}

const LANDMARKS: Landmark[] = [
  {
    category: '🌳 Turismo e Lazer',
    title: 'Jardim Botânico',
    desc: 'O principal cartão-postal de Curitiba, ideal para caminhadas, lazer e momentos de descanso.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Estufa_principal_do_Jardim_Bot%C3%A2nico_de_Curitiba_02.jpg/500px-Estufa_principal_do_Jardim_Bot%C3%A2nico_de_Curitiba_02.jpg',
    walkTime: '6 min',
    walkDist: '500m',
    carTime: '2 min',
    carDist: '0,6 km',
  },
  {
    category: '🎓 Educação',
    title: 'Universidade Federal do Paraná (UFPR)',
    desc: 'Facilidade de acesso ao Campus Politécnico da UFPR, ideal para estudantes, professores e pesquisadores.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Universidade_Federal_do_Parana_4_Curitiba_Parana.jpg/500px-Universidade_Federal_do_Parana_4_Curitiba_Parana.jpg',
    walkTime: '15 min',
    walkDist: '1,2 km',
    carTime: '4 min',
    carDist: '1,5 km',
  },
  {
    category: '🎓 Educação',
    title: 'Pontifícia Universidade Católica do Paraná (PUCPR)',
    desc: 'Localização estratégica para quem estuda ou trabalha na PUCPR.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Arquibancada_do_velho_prado_velho.JPG/500px-Arquibancada_do_velho_prado_velho.JPG',
    walkTime: '22 min',
    walkDist: '1,8 km',
    carTime: '5 min',
    carDist: '2,1 km',
  },
  {
    category: '🏥 Saúde',
    title: 'Hospitais de Referência',
    desc: 'Próximo ao Hospital Universitário Cajuru, Hospital Marcelino Champagnat e Hospital da Polícia Militar. Ideal para profissionais da saúde, estudantes e familiares.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Hospital_de_Cl%C3%ADnicas.jpg/500px-Hospital_de_Cl%C3%ADnicas.jpg',
    walkTime: '12 min',
    walkDist: '900m',
    carTime: '3 min',
    carDist: '1,1 km',
  },
  {
    category: '🛒 Comércio e Serviços',
    title: 'Supermercado, Padaria e Farmácia',
    desc: 'Supermercado Super G, Panificadora Sensação e Farmácia Nissei a poucos minutos da residência. Mais praticidade para o dia a dia.',
    img: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=500',
    walkTime: '2 min',
    walkDist: '150m',
    carTime: '1 min',
    carDist: '150m',
  },
  {
    category: '🍽 Gastronomia',
    title: 'Restaurantes e Lanches',
    desc: "Próximo ao Restaurante Di Paolo, Kharina e Habib's, oferecendo diversas opções para refeições e lanches.",
    img: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=500',
    walkTime: '4 min',
    walkDist: '300m',
    carTime: '1 min',
    carDist: '300m',
  },
  {
    category: '🚌 Mobilidade',
    title: 'Rodoferroviária de Curitiba',
    desc: 'Excelente opção para quem viaja com frequência ou recebe familiares de outras cidades.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/20042017_-_Rodoferrovi%C3%A1ria_de_Curitiba.jpg/500px-20042017_-_Rodoferrovi%C3%A1ria_de_Curitiba.jpg',
    walkTime: '18 min',
    walkDist: '1,5 km',
    carTime: '4 min',
    carDist: '1,8 km',
  },
  {
    category: '🏙 Centro',
    title: 'Centro de Curitiba',
    desc: 'Acesso rápido ao centro comercial e financeiro da cidade.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Vista_Interna_da_Rua_24_Horas%2C_Curitiba_%28BRA%29.png/500px-Vista_Interna_da_Rua_24_Horas%2C_Curitiba_%28BRA%29.png',
    walkTime: '35 min',
    walkDist: '2,8 km',
    carTime: '8 min',
    carDist: '3,2 km',
  },
]

export default function Localizacao() {
  return (
    <section id="localizacao-destaque" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Localização
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Excelente Localização
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            Morar no Recanto Jardim Botânico é estar próximo de universidades, hospitais,
            transporte, comércio, lazer e tudo o que facilita o dia a dia.
          </p>
        </div>

        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-x-visible sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 scrollbar-none snap-x snap-mandatory">
          {LANDMARKS.map((item) => (
            <div
              key={item.title}
              className="flex-shrink-0 w-[300px] sm:w-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between group snap-start hover:shadow-md transition-shadow"
            >
              <div>
                <div className="h-48 bg-gray-100 overflow-hidden relative">
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                    {item.category}
                  </div>
                </div>

                <div className="p-5 pb-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>

              <div className="p-5 pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                <div className="flex items-center gap-1.5" title="Tempo a pé">
                  <span aria-hidden>🚶</span>
                  <span>
                    {item.walkTime}{' '}
                    <span className="text-gray-300 font-normal">({item.walkDist})</span>
                  </span>
                </div>
                <div className="flex items-center gap-1.5" title="Tempo de carro">
                  <span aria-hidden>🚗</span>
                  <span>
                    {item.carTime}{' '}
                    <span className="text-gray-300 font-normal">({item.carDist})</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-lg font-semibold text-gray-900 mb-5">
            Você estará perto de tudo o que realmente importa.
          </p>
          <a
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-3.5 rounded-full transition-colors"
          >
            📍 Ver localização no Google Maps
          </a>
        </div>
      </div>
    </section>
  )
}
