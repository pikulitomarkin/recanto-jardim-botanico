/** Identidade e contatos oficiais do Recanto Jardim Botânico — Briefing V7 */

export const BRAND_NAME = 'Recanto Jardim Botânico'
export const BRAND_SLOGAN = 'Qualidade que Acolhe!'

/** Número exclusivo dos CTAs do site (não usar o de marketing). */
export const WHATSAPP_NUMBER = '5541995016899'
export const WHATSAPP_DISPLAY = '(41) 99501-6899'

export const INSTAGRAM_HANDLE = '@recantojardimbotanico_'
export const INSTAGRAM_URL = 'https://instagram.com/recantojardimbotanico_'

export const ADDRESS_LINE1 = 'Av. Comendador Franco, 553'
export const ADDRESS_LINE2 = 'Jardim Botânico'
export const ADDRESS_CITY = 'Curitiba – PR'
export const ADDRESS_NOTE = 'Fácil acesso ao Jardim Botânico e às principais universidades da região.'

export const GOOGLE_MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=Av.+Comendador+Franco,+553,+Jardim+Bot%C3%A2nico,+Curitiba+-+PR'

/** Mensagem padrão identificando origem no site. */
export const DEFAULT_WA_MESSAGE =
  'Olá! Vim pelo site do Recanto Jardim Botânico e gostaria de mais informações.'

export function whatsappUrl(message: string = DEFAULT_WA_MESSAGE): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export const WA = {
  principal: whatsappUrl(DEFAULT_WA_MESSAGE),
  visita: whatsappUrl(
    'Olá! Vim pelo site do Recanto Jardim Botânico e gostaria de agendar uma visita.'
  ),
  conhecer: whatsappUrl(DEFAULT_WA_MESSAGE),
  estrutura: whatsappUrl(
    'Olá! Vim pelo site do Recanto Jardim Botânico e gostaria de conhecer a estrutura.'
  ),
  duvidas: whatsappUrl(
    'Olá! Vim pelo site do Recanto Jardim Botânico e tenho algumas dúvidas.'
  ),
  categoria: (categoryName: string, price: number) =>
    whatsappUrl(
      `Olá! Vim pelo site do Recanto Jardim Botânico e tenho interesse na categoria ${categoryName} (R$ ${price.toLocaleString('pt-BR')},00/mês).`
    ),
  quarto: (name: string, price: number) =>
    whatsappUrl(
      `Olá! Vim pelo site do Recanto Jardim Botânico e gostaria de conhecer o ${name} (R$ ${price.toLocaleString('pt-BR')},00/mês).`
    ),
}

/** Entrada oficial — sem caução de aluguel. */
export const ENTRADA = {
  higienizacao: 250,
  depositoChave: 100,
  total: 350,
  labelHigienizacao: 'Taxa Única de Higienização e Preparação',
  labelDeposito: 'Depósito de chave (reembolsável conforme condições)',
}

export type RoomCategoryId = 'economico' | 'essencial' | 'conforto' | 'superior' | 'premium'

export interface RoomCategory {
  id: RoomCategoryId
  name: string
  price: number
  description: string
  buttonLabel: string
  /** Índices oficiais do briefing (fotos 2–21). */
  photoIndexes: number[]
  roomNumbers: number[]
}

export const ROOM_CATEGORIES: RoomCategory[] = [
  {
    id: 'economico',
    name: 'ECONÔMICO',
    price: 1100,
    description:
      'Ideal para quem procura economia sem abrir mão da organização, conforto e praticidade.',
    buttonLabel: 'Fale pelo WhatsApp — Econômico',
    photoIndexes: [2, 3, 4, 5],
    roomNumbers: [9, 11, 12],
  },
  {
    id: 'essencial',
    name: 'ESSENCIAL',
    price: 1200,
    description: 'Excelente equilíbrio entre conforto, espaço e custo-benefício.',
    buttonLabel: 'Fale pelo WhatsApp — Essencial',
    photoIndexes: [6, 7, 8, 9],
    roomNumbers: [13, 14, 15, 19],
  },
  {
    id: 'conforto',
    name: 'CONFORTO',
    price: 1300,
    description: 'Ambientes mais amplos e modernos para quem busca ainda mais conforto.',
    buttonLabel: 'Fale pelo WhatsApp — Conforto',
    photoIndexes: [10, 11, 12, 13],
    roomNumbers: [4, 5, 6, 7, 16],
  },
  {
    id: 'superior',
    name: 'SUPERIOR',
    price: 1400,
    description: 'Quartos maiores, mais completos e com excelente padrão de acabamento.',
    buttonLabel: 'Fale pelo WhatsApp — Superior',
    photoIndexes: [14, 15, 16, 17],
    roomNumbers: [17, 18, 20, 22],
  },
  {
    id: 'premium',
    name: 'PREMIUM',
    price: 1500,
    description:
      'Os melhores quartos do Recanto Jardim Botânico, oferecendo o máximo de conforto e espaço.',
    buttonLabel: 'Fale pelo WhatsApp — Premium',
    photoIndexes: [18, 19, 20, 21],
    roomNumbers: [1, 2, 3, 8, 10, 21],
  },
]

export function categoryByPrice(price: number): RoomCategory | undefined {
  return ROOM_CATEGORIES.find((c) => c.price === price)
}

export function formatCurrency(value: number): string {
  return `R$ ${value.toLocaleString('pt-BR')},00`
}

export const PARKING = [
  { icon: 'car' as const, label: 'Carro (vaga descoberta)', price: 'R$ 250,00 por mês' },
  { icon: 'motorcycle' as const, label: 'Moto (vaga coberta)', price: 'R$ 150,00 por mês' },
  { icon: 'bike' as const, label: 'Bicicletário', price: 'Gratuito para todos os moradores' },
]

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Localização', href: '/#localizacao' },
  { label: 'Quartos', href: '/#quartos' },
  { label: 'Estrutura', href: '/#estrutura' },
  { label: 'Como Funciona', href: '/#como-funciona' },
  { label: 'Condições', href: '/#condicoes' },
  { label: 'Regras', href: '/#regras' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contato', href: '/#contato' },
]
