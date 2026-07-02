export type RoomStatus = 'available' | 'occupied' | 'reserved'

export interface Room {
  id: string
  name: string
  price: number
  priceGroup: string
  status: RoomStatus
  driveId: string
  driveUrl: string
  whatsappMsg: string
  description: string
  videoUrl: string
  highlight: 'novo' | 'reformado' | ''
}

export interface Facility {
  id: string
  label: string
  subtitle: string
  driveId: string
  driveUrl: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface SiteConfig {
  logo: {
    driveId: string
    driveUrl: string
  }
  rooms: Room[]
  facilities: Facility[]
  faq: FaqItem[]
  whatsappDefault: string
  adminPasswordHash: string
}
