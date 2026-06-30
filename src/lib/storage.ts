import { SiteConfig, Room } from '@/types'

const DEFAULT_ROOMS: Room[] = [
  { id: 'r1', name: 'Quarto 101', price: 1100, priceGroup: '1100', status: 'available', driveId: '', driveUrl: '', whatsappMsg: 'Olá! Tenho interesse no Quarto 101 (R$1.100/mês). Poderia me dar mais informações?' },
  { id: 'r2', name: 'Quarto 102', price: 1100, priceGroup: '1100', status: 'available', driveId: '', driveUrl: '', whatsappMsg: 'Olá! Tenho interesse no Quarto 102 (R$1.100/mês). Poderia me dar mais informações?' },
  { id: 'r3', name: 'Quarto 103', price: 1100, priceGroup: '1100', status: 'occupied', driveId: '', driveUrl: '', whatsappMsg: 'Olá! Tenho interesse no Quarto 103 (R$1.100/mês). Poderia me dar mais informações?' },
  { id: 'r4', name: 'Quarto 201', price: 1200, priceGroup: '1200', status: 'available', driveId: '', driveUrl: '', whatsappMsg: 'Olá! Tenho interesse no Quarto 201 (R$1.200/mês). Poderia me dar mais informações?' },
  { id: 'r5', name: 'Quarto 202', price: 1200, priceGroup: '1200', status: 'reserved', driveId: '', driveUrl: '', whatsappMsg: 'Olá! Tenho interesse no Quarto 202 (R$1.200/mês). Poderia me dar mais informações?' },
]

const DEFAULT_CONFIG: SiteConfig = {
  logo: { driveId: '', driveUrl: '' },
  rooms: DEFAULT_ROOMS,
  facilities: [
    { id: 'f1', label: 'Wi-Fi Fibra', subtitle: 'Internet de alta velocidade em todos os quartos', driveId: '', driveUrl: '' },
    { id: 'f2', label: 'Cozinha Equipada', subtitle: 'Geladeira, fogão, micro-ondas e utensílios', driveId: '', driveUrl: '' },
    { id: 'f3', label: 'Área de Lazer', subtitle: 'Jardim e espaço para relaxar', driveId: '', driveUrl: '' },
    { id: 'f4', label: 'Segurança 24h', subtitle: 'Portão eletrônico e câmeras de segurança', driveId: '', driveUrl: '' },
    { id: 'f5', label: 'Lavanderia', subtitle: 'Máquina de lavar e área de serviço', driveId: '', driveUrl: '' },
    { id: 'f6', label: 'Localização', subtitle: 'Próximo ao Jardim Botânico de Brasília', driveId: '', driveUrl: '' },
  ],
  faq: [
    { question: 'Qual o valor do aluguel?', answer: 'Temos quartos a partir de R$1.100/mês, incluindo água, luz e internet.' },
    { question: 'O condomínio é incluso?', answer: 'Sim, água, luz e internet já estão inclusos no valor mensal.' },
    { question: 'Qual o período mínimo de locação?', answer: 'O período mínimo é de 3 meses.' },
    { question: 'Aceita pets?', answer: 'Analisamos caso a caso. Entre em contato para mais informações.' },
  ],
  whatsappDefault: '5561999999999',
  adminPasswordHash: process.env.ADMIN_PASSWORD_HASH || '',
}

export async function getSiteConfig(): Promise<SiteConfig> {
  if (process.env.VERCEL_KV_URL) {
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
  if (process.env.VERCEL_KV_URL) {
    const { kv } = await import('@vercel/kv')
    const config = await getSiteConfig()
    await kv.set('rjb:config', { ...config, rooms })
  }
}

export async function updateConfig(partial: Partial<SiteConfig>): Promise<void> {
  if (process.env.VERCEL_KV_URL) {
    const { kv } = await import('@vercel/kv')
    const config = await getSiteConfig()
    await kv.set('rjb:config', { ...config, ...partial })
  }
}
