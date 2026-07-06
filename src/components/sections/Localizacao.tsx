import React from 'react'

interface Landmark {
  category: string
  title: string
  desc: string
  img: string
  distance: string
}

const LANDMARKS: Landmark[] = [
  {
    category: 'Turismo & Lazer',
    title: 'Jardim Botânico de Curitiba',
    desc: 'O cartão postal mais famoso de Curitiba e principal área verde da cidade a poucos minutos.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Estufa_principal_do_Jardim_Bot%C3%A2nico_de_Curitiba_02.jpg/500px-Estufa_principal_do_Jardim_Bot%C3%A2nico_de_Curitiba_02.jpg',
    distance: '3 min',
  },
  {
    category: 'Educação',
    title: 'UFPR — Campus Politécnico',
    desc: 'Excelente facilidade de deslocamento e acesso para estudantes e pesquisadores da Federal.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Universidade_Federal_do_Parana_4_Curitiba_Parana.jpg/500px-Universidade_Federal_do_Parana_4_Curitiba_Parana.jpg',
    distance: '5 min',
  },
  {
    category: 'Educação',
    title: 'PUCPR',
    desc: 'Localização estratégica e trajeto rápido para o maior campus universitário privado da região.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Arquibancada_do_velho_prado_velho.JPG/500px-Arquibancada_do_velho_prado_velho.JPG',
    distance: '8 min',
  },
  {
    category: 'Saúde',
    title: 'Hospitais de Referência',
    desc: 'Proximidade aos hospitais Universitário Cajuru, Marcelino Champagnat e Hospital da Polícia Militar.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Hospital_de_Cl%C3%ADnicas.jpg/500px-Hospital_de_Cl%C3%ADnicas.jpg',
    distance: '4 min',
  },
  {
    category: 'Comércio & Serviços',
    title: 'Supermercado, Padaria e Farmácia',
    desc: 'Praticidade com o Supermercado Super G, Panificadora Sensação e Farmácia Nissei ao redor.',
    img: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=500',
    distance: 'A pé',
  },
  {
    category: 'Gastronomia',
    title: 'Restaurantes & Lanches',
    desc: 'Próximo a ótimas opções como o Restaurante Di Paolo, Lanchonete Kharina e Habib\'s.',
    img: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=500',
    distance: '2 min',
  },
  {
    category: 'Mobilidade',
    title: 'Rodoferroviária de Curitiba',
    desc: 'Acesso facilitado para quem viaja constantemente ou vem de outras regiões do estado.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/20042017_-_Rodoferrovi%C3%A1ria_de_Curitiba.jpg/500px-20042017_-_Rodoferrovi%C3%A1ria_de_Curitiba.jpg',
    distance: '5 min',
  },
  {
    category: 'Centro',
    title: 'Centro de Curitiba',
    desc: 'Deslocamento direto e rápido para a região comercial e financeira no coração da capital.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Vista_Interna_da_Rua_24_Horas%2C_Curitiba_%28BRA%29.png/500px-Vista_Interna_da_Rua_24_Horas%2C_Curitiba_%28BRA%29.png',
    distance: '10 min',
  },
]

export default function Localizacao() {
  return (
    <section id="localizacao-destaque" className="py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-primary mb-3">
            Excelente Localização
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tudo o que você precisa ao seu redor
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Morar no Jardim Botânico significa ter transporte, universidades, saúde e conveniências a minutos de distância.
          </p>
        </div>

        {/* Horizontal scroll on mobile, clean grid on desktop */}
        <div className="flex overflow-x-auto pb-6 -mx-4 px-4 sm:mx-0 sm:px-0 sm:overflow-x-visible sm:pb-0 sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-6 scrollbar-none snap-x snap-mandatory">
          {LANDMARKS.map((item) => (
            <div
              key={item.title}
              className="flex-shrink-0 w-[280px] sm:w-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group snap-start hover:shadow-md transition-shadow"
            >
              {/* Image with zoom on hover */}
              <div className="h-40 bg-gray-100 overflow-hidden relative">
                <img
                  src={item.img}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {item.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-primary text-white text-[10px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1 shadow-sm">
                  <span>🚗</span> {item.distance}
                </div>
              </div>
              
              {/* Info */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
