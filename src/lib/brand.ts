/** Identidade e contatos oficiais do Recanto Jardim Botânico */

export const BRAND_NAME = 'Recanto Jardim Botânico'
export const BRAND_SLOGAN = 'Qualidade que Acolhe'

export const WHATSAPP_NUMBER = '5541996646670'
export const WHATSAPP_DISPLAY = '(41) 99664-6670'

export const INSTAGRAM_HANDLE = '@recantojardimbotanico_'
export const INSTAGRAM_URL = 'https://instagram.com/recantojardimbotanico_'

export const ADDRESS_LINE1 = 'Av. Comendador Franco, 553'
export const ADDRESS_LINE2 = 'Jardim Botânico'
export const ADDRESS_CITY = 'Curitiba – PR'
export const ADDRESS_NOTE = 'Fácil acesso ao Jardim Botânico e às principais universidades da região.'

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Comendador+Franco,+553,+Jardim+Bot%C3%A2nico,+Curitiba+-+PR'

export const DEFAULT_WA_MESSAGE =
  'Olá! Gostaria de conhecer o Recanto Jardim Botânico e agendar uma visita.'

export function whatsappUrl(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WA = {
  visita: whatsappUrl(DEFAULT_WA_MESSAGE),
  conhecer: whatsappUrl('Olá! Gostaria de conhecer o Recanto Jardim Botânico.'),
  estrutura: whatsappUrl('Olá! Gostaria de conhecer a estrutura do Recanto Jardim Botânico.'),
  duvidas: whatsappUrl('Olá! Tenho algumas dúvidas sobre o Recanto Jardim Botânico.'),
  quarto: (name: string, price: number) =>
    whatsappUrl(
      `Olá! Gostaria de conhecer o ${name} (R$ ${price.toLocaleString('pt-BR')},00/mês) e agendar uma visita.`
    ),
}

export type RoomCategoryId = 'economico' | 'essencial' | 'conforto' | 'superior' | 'premium'

export interface RoomCategory {
  id: RoomCategoryId
  name: string
  price: number
  description: string
  buttonLabel: string
}

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: 'economico',
    name: 'Econômico',
    price: 1100,
    description:
      'Ideal para quem procura economia sem abrir mão da organização, conforto e praticidade.',
    buttonLabel: 'Ver Quartos Econômicos',
  },
  {
    id: 'essencial',
    name: 'Essencial',
    price: 1200,
    description: 'Excelente equilíbrio entre conforto, espaço e custo-benefício.',
    buttonLabel: 'Ver Quartos Essenciais',
  },
  {
    id: 'conforto',
    name: 'Conforto',
    price: 1300,
    description: 'Ambientes mais amplos e modernos para quem busca ainda mais conforto.',
    buttonLabel: 'Ver Quartos Conforto',
  },
  {
    id: 'superior',
    name: 'Superior',
    price: 1400,
    description: 'Quartos maiores, mais completos e com excelente padrão de acabamento.',
    buttonLabel: 'Ver Quartos Superiores',
  },
  {
    id: 'premium',
    name: 'Premium',
    price: 1500,
    description:
      'Os melhores quartos do Recanto Jardim Botânico, oferecendo o máximo de conforto e espaço.',
    buttonLabel: 'Ver Quartos Premium',
  },
]

export function categoryByPrice(price: number): RoomCategory | undefined {
  return ROOM_CATEGORIES.find((c) => c.price === price)
}

export function formatCurrency(value: number): string {
  return `R$ ${value.toLocaleString('pt-BR')},00`
}

export const PARKING = [
  { icon: '🚗', label: 'Carro (vaga descoberta)', price: 'R$ 250,00 por mês' },
  { icon: '🏍', label: 'Moto (vaga coberta)', price: 'R$ 150,00 por mês' },
  { icon: '🚲', label: 'Bicicletário', price: 'Gratuito para todos os moradores' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Quartos', href: '/#quartos' },
  { label: 'Estrutura', href: '/#estrutura' },
  { label: 'Como Funciona', href: '/#como-funciona' },
  { label: 'Informações', href: '/informacoes' },
  { label: 'Regras', href: '/regras' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contato', href: '/#contato' },
]
