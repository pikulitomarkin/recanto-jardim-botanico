import React from 'react'

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
    category: 'Turismo & Lazer',
    title: 'Jardim Botânico de Curitiba',
    desc: 'O cartão postal mais famoso de Curitiba e principal área verde da cidade a poucos minutos.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Estufa_principal_do_Jardim_Bot%C3%A2nico_de_Curitiba_02.jpg/500px-Estufa_principal_do_Jardim_Bot%C3%A2nico_de_Curitiba_02.jpg',
    walkTime: '6 min',
    walkDist: '500m',
    carTime: '2 min',
    carDist: '0,6 km',
  },
  {
    category: 'Educação',
    title: 'UFPR — Campus Politécnico',
    desc: 'Excelente facilidade de deslocamento e acesso para estudantes e pesquisadores da Federal.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Universidade_Federal_do_Parana_4_Curitiba_Parana.jpg/500px-Universidade_Federal_do_Parana_4_Curitiba_Parana.jpg',
    walkTime: '15 min',
    walkDist: '1,2 km',
    carTime: '4 min',
    carDist: '1,5 km',
  },
  {
    category: 'Educação',
    title: 'PUCPR',
    desc: 'Localização estratégica e trajeto rápido para o maior campus universitário privado da região.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Arquibancada_do_velho_prado_velho.JPG/500px-Arquibancada_do_velho_prado_velho.JPG',
    walkTime: '22 min',
    walkDist: '1,8 km',
    carTime: '5 min',
    carDist: '2,1 km',
  },
  {
    category: 'Saúde',
    title: 'Hospitais de Referência',
    desc: 'Proximidade aos hospitais Universitário Cajuru, Marcelino Champagnat e Hospital da Polícia Militar.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Hospital_de_Cl%C3%ADnicas.jpg/500px-Hospital_de_Cl%C3%ADnicas.jpg',
    walkTime: '12 min',
    walkDist: '900m',
    carTime: '3 min',
    carDist: '1,1 km',
  },
  {
    category: 'Comércio & Serviços',
    title: 'Supermercado, Padaria e Farmácia',
    desc: 'Praticidade com o Supermercado Super G, Panificadora Sensação e Farmácia Nissei ao redor.',
    img: 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=500',
    walkTime: '2 min',
    walkDist: '150m',
    carTime: '1 min',
    carDist: '150m',
  },
  {
    category: 'Gastronomia',
    title: 'Restaurantes & Lanches',
    desc: 'Próximo a ótimas opções como o Restaurante Di Paolo, Lanchonete Kharina e Habib\'s.',
    img: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=500',
    walkTime: '4 min',
    walkDist: '300m',
    carTime: '1 min',
    carDist: '300m',
  },
  {
    category: 'Mobilidade',
    title: 'Rodoferroviária de Curitiba',
    desc: 'Acesso facilitado para quem viaja constantemente ou vem de outras regiões do estado.',
    img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/20042017_-_Rodoferrovi%C3%A1ria_de_Curitiba.jpg/500px-20042017_-_Rodoferrovi%C3%A1ria_de_Curitiba.jpg',
    walkTime: '18 min',
    walkDist: '1,5 km',
    carTime: '4 min',
    carDist: '1,8 km',
  },
  {
    category: 'Centro',
    title: 'Centro de Curitiba',
    desc: 'Deslocamento direto e rápido para a região comercial e financeira no coração da capital.',
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
              className="flex-shrink-0 w-[280px] sm:w-auto bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between group snap-start hover:shadow-md transition-shadow"
            >
              <div>
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
                </div>
                
                {/* Info */}
                <div className="p-5 pb-0">
                  <h3 className="font-bold text-gray-900 text-sm mb-1.5 leading-snug group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Distances/Times Footer */}
              <div className="p-5 pt-4 mt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500 font-medium">
                {/* Walk Info */}
                <div className="flex items-center gap-1.5" title="Tempo a pé">
                  <svg className="w-3.5 h-3.5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 5a1 1 0 100-2 1 1 0 000 2zM9 20h6M12 14V8M12 14l-2 4M12 8L9 6M12 8l4-2m-4 8l3 4" />
                  </svg>
                  <span>{item.walkTime} <span className="text-gray-300 font-normal">({item.walkDist})</span></span>
                </div>

                {/* Car Info */}
                <div className="flex items-center gap-1.5" title="Tempo de carro">
                  <svg className="w-3.5 h-3.5 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.25}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.5 9h-13c-.8 0-1.5.7-1.5 1.5V15c0 .8.7 1.5 1.5 1.5h13c.8 0 1.5-.7 1.5-1.5v-4.5c0-.8-.7-1.5-1.5-1.5z" />
                    <circle cx="7" cy="16.5" r="1.5" />
                    <circle cx="17" cy="16.5" r="1.5" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l2-4h8l2 4" />
                  </svg>
                  <span>{item.carTime} <span className="text-gray-300 font-normal">({item.carDist})</span></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
