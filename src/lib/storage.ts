import { SiteConfig, Room } from '@/types'

const DEFAULT_ROOMS: Room[] = [
  { 
    id: 'r1', 
    name: 'Quarto 101 (Standard)', 
    price: 1100, 
    priceGroup: '1100', 
    status: 'available', 
    images: [], 
    whatsappMsg: 'Olá! Tenho interesse no Quarto 101 Standard (R$1.100/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto individual mobiliado com cama de solteiro, guarda-roupa e escrivaninha. Ideal para estudantes.',
    videoUrl: '',
    highlight: 'novo'
  },
  { 
    id: 'r2', 
    name: 'Quarto 102 (Standard)', 
    price: 1100, 
    priceGroup: '1100', 
    status: 'available', 
    images: [], 
    whatsappMsg: 'Olá! Tenho interesse no Quarto 102 Standard (R$1.100/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto individual arejado, com ótima iluminação natural e totalmente mobiliado.',
    videoUrl: '',
    highlight: ''
  },
  { 
    id: 'r3', 
    name: 'Quarto 103 (Premium)', 
    price: 1200, 
    priceGroup: '1200', 
    status: 'occupied', 
    images: [], 
    whatsappMsg: 'Olá! Tenho interesse no Quarto 103 Premium (R$1.200/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto individual mais espaçoso com armários planejados e vista externa.',
    videoUrl: '',
    highlight: ''
  },
  { 
    id: 'r4', 
    name: 'Quarto 201 (Premium)', 
    price: 1300, 
    priceGroup: '1300', 
    status: 'available', 
    images: [], 
    whatsappMsg: 'Olá! Tenho interesse no Quarto 201 Premium (R$1.300/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto reformado, com pintura nova, piso laminado e móveis de alto padrão.',
    videoUrl: '',
    highlight: 'reformado'
  },
  { 
    id: 'r5', 
    name: 'Quarto 202 (Master)', 
    price: 1400, 
    priceGroup: '1400', 
    status: 'reserved', 
    images: [], 
    whatsappMsg: 'Olá! Tenho interesse no Quarto 202 Master (R$1.400/mês) no Jardim Botânico de Curitiba.',
    description: 'Suíte master com banheiro privativo e decoração moderna. Máximo conforto.',
    videoUrl: '',
    highlight: 'novo'
  },
]

const DEFAULT_CONFIG: SiteConfig = {
  logo: { driveId: '', driveUrl: '' },
  rooms: DEFAULT_ROOMS,
  facilities: [
    { id: 'f1', label: 'Piscina', subtitle: 'Piscina externa para momentos de lazer e descanso', images: [] },
    { id: 'f2', label: 'Cozinhas', subtitle: 'Duas cozinhas equipadas com geladeira, fogão e micro-ondas', images: [] },
    { id: 'f3', label: 'Lavanderias', subtitle: 'Duas lavanderias completas com máquina de lavar e área de secagem', images: [] },
    { id: 'f4', label: 'Banheiros', subtitle: 'Banheiros limpos e mantidos em perfeito estado', images: [] },
    { id: 'f5', label: 'Área Externa', subtitle: 'Jardim espaçoso e ambiente muito organizado', images: [] },
    { id: 'f6', label: 'Estacionamento', subtitle: 'Vagas seguras para carro e moto', images: [] },
  ],
  faq: [
    { question: 'Aceita casal?', answer: 'Não. Todos os quartos são estritamente para uso individual, com o objetivo de garantir a tranquilidade e privacidade de todos os moradores.' },
    { question: 'Aceita visitantes?', answer: 'Sim, visitas rápidas nas áreas comuns são permitidas, mas não é permitida a pernoite de visitantes para preservar a convivência.' },
    { question: 'Como funciona a taxa?', answer: 'Cobramos uma taxa única de ingresso (adesão/limpeza) no momento do fechamento do contrato. Não há taxa mensal de condomínio.' },
    { question: 'Como faço a reserva?', answer: 'A reserva é feita diretamente via WhatsApp, garantindo a sua moradia com o pagamento antecipado do valor correspondente.' },
    { question: 'Os banheiros são compartilhados?', answer: 'Sim, possuímos banheiros compartilhados na estrutura, todos mantidos rigorosamente limpos e higienizados.' },
    { question: 'O quarto é individual?', answer: 'Sim, todos os quartos são individuais, privativos e mobiliados com tudo o que você precisa para morar bem.' },
    { question: 'Existe garagem?', answer: 'Sim, dispomos de estacionamento para carros e motos. Consulte valores e disponibilidade adicionais.' },
    { question: 'Qual o tempo mínimo de permanência?', answer: 'O período mínimo de permanência em contrato é de 3 meses.' }
  ],
  whatsappDefault: '5541999999999',
  adminPasswordHash: process.env.ADMIN_PASSWORD_HASH || '',
}

const kvEnabled = () => Boolean(process.env.KV_REST_API_URL)

export async function getSiteConfig(): Promise<SiteConfig> {
  if (kvEnabled()) {
    try {
      const { kv } = await import('@vercel/kv')
      const stored = await kv.get<SiteConfig>('rjb:config')
      if (stored) return stored
    } catch {
      // fallback to defaults
    }
  }
  return DEFAULT_CONFIG
}

export async function getRooms(): Promise<Room[]> {
  const config = await getSiteConfig()
  return config.rooms
}

export async function updateRooms(rooms: Room[]): Promise<void> {
  if (kvEnabled()) {
    const { kv } = await import('@vercel/kv')
    const config = await getSiteConfig()
    await kv.set('rjb:config', { ...config, rooms })
  }
}

export async function updateConfig(partial: Partial<SiteConfig>): Promise<void> {
  if (kvEnabled()) {
    const { kv } = await import('@vercel/kv')
    const config = await getSiteConfig()
    await kv.set('rjb:config', { ...config, ...partial })
  }
}
