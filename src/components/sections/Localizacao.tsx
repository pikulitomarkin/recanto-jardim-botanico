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
    img: 'https://images.unsplash.com/photo-1626847037657-fd3622613ce3?w=600&auto=format&fit=crop&q=80',
    distance: '3 min',
  },
  {
    category: 'Educação',
    title: 'UFPR — Campus Politécnico',
    desc: 'Excelente facilidade de deslocamento e acesso para estudantes e pesquisadores da Federal.',
    img: 'https://images.unsplash.com/photo-1592280771190-3e2e4d571952?w=600&auto=format&fit=crop&q=80',
    distance: '5 min',
  },
  {
    category: 'Educação',
    title: 'PUCPR',
    desc: 'Localização estratégica e trajeto rápido para o maior campus universitário privado da região.',
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=600&auto=format&fit=crop&q=80',
    distance: '8 min',
  },
  {
    category: 'Saúde',
    title: 'Hospitais de Referência',
    desc: 'Proximidade aos hospitais Universitário Cajuru, Marcelino Champagnat e Hospital da Polícia Militar.',
    img: 'https://images.unsplash.com/photo-1586773860418-d3b3ac965664?w=600&auto=format&fit=crop&q=80',
    distance: '4 min',
  },
  {
    category: 'Comércio & Serviços',
    title: 'Supermercado, Padaria e Farmácia',
    desc: 'Praticidade com o Supermercado Super G, Panificadora Sensação e Farmácia Nissei ao redor.',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&auto=format&fit=crop&q=80',
    distance: 'A pé',
  },
  {
    category: 'Gastronomia',
    title: 'Restaurantes & Lanches',
    desc: 'Próximo a ótimas opções como o Restaurante Di Paolo, Lanchonete Kharina e Habib\'s.',
    img: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&auto=format&fit=crop&q=80',
    distance: '2 min',
  },
  {
    category: 'Mobilidade',
    title: 'Rodoferroviária de Curitiba',
    desc: 'Acesso facilitado para quem viaja constantemente ou vem de outras regiões do estado.',
    img: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&auto=format&fit=crop&q=80',
    distance: '5 min',
  },
  {
    category: 'Centro',
    title: 'Centro de Curitiba',
    desc: 'Deslocamento direto e rápido para a região comercial e financeira no coração da capital.',
    img: 'https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=600&auto=format&fit=crop&q=80',
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
