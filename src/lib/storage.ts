import { SiteConfig, Room } from '@/types'

const DEFAULT_ROOMS: Room[] = [
  // Econômico - R$ 1.100,00
  {
    id: 'r9',
    name: 'Quarto 09',
    price: 1100,
    priceGroup: '1100',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 09 (R$1.100/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto individual mobiliado completo com cama de solteiro, guarda-roupa e escrivaninha.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r11',
    name: 'Quarto 11',
    price: 1100,
    priceGroup: '1100',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 11 (R$1.100/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto individual mobiliado completo com cama de solteiro, guarda-roupa e escrivaninha.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r12',
    name: 'Quarto 12',
    price: 1100,
    priceGroup: '1100',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 12 (R$1.100/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto individual mobiliado completo com cama de solteiro, guarda-roupa e escrivaninha.',
    videoUrl: '',
    highlight: ''
  },

  // Essencial - R$ 1.200,00
  {
    id: 'r13',
    name: 'Quarto 13',
    price: 1200,
    priceGroup: '1200',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 13 (R$1.200/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto com escrivaninha e mais amplo, ótima iluminação natural.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r4',
    name: 'Quarto 14',
    price: 1200,
    priceGroup: '1200',
    status: 'occupied',
    images: [
      'https://drive.google.com/file/d/1zZc2NkpSCoIn6rYc0ukuJVhIrVUHIcDj/view?usp=drive_link',
      'https://drive.google.com/file/d/1P2vUX6jg2Yacs4OlTNcFES5CoPS_sWLD/view?usp=drive_link',
      'https://drive.google.com/file/d/15ZU7tyBm7qi9oW4mhnEMm3uSNxKhswz3/view?usp=drive_link',
      'https://drive.google.com/file/d/13cqO9w3yuh64gKRQRJfNErrrIy69CcMH/view?usp=drive_link'
    ],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 14 (R$1.200/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto reformado, com pintura nova, piso laminado e móveis de alto padrão.',
    videoUrl: '',
    highlight: 'reformado'
  },
  {
    id: 'r19',
    name: 'Quarto 19',
    price: 1200,
    priceGroup: '1200',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 19 (R$1.200/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto com escrivaninha e mais amplo, ótima iluminação natural.',
    videoUrl: '',
    highlight: ''
  },

  // Conforto - R$ 1.300,00
  {
    id: 'r04',
    name: 'Quarto 04',
    price: 1300,
    priceGroup: '1300',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 04 (R$1.300/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto confortável com móveis planejados, ideal para tranquilidade.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r05',
    name: 'Quarto 05',
    price: 1300,
    priceGroup: '1300',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 05 (R$1.300/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto confortável com móveis planejados, ideal para tranquilidade.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r06',
    name: 'Quarto 06',
    price: 1300,
    priceGroup: '1300',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 06 (R$1.300/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto confortável com móveis planejados, ideal para tranquilidade.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r07',
    name: 'Quarto 07',
    price: 1300,
    priceGroup: '1300',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 07 (R$1.300/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto confortável com móveis planejados, ideal para tranquilidade.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r15',
    name: 'Quarto 15',
    price: 1300,
    priceGroup: '1300',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 15 (R$1.300/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto confortável com móveis planejados, ideal para tranquilidade.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r3',
    name: 'Quarto 16',
    price: 1300,
    priceGroup: '1300',
    status: 'occupied',
    images: [
      'https://drive.google.com/file/d/1ZFE9HTNYVJQg60IGlnRF1mw4q4QA7y_2/view?usp=drive_link',
      'https://drive.google.com/file/d/1B1XGeWj7L5zlfgZ49l7FFSyJZSNmp8v3/view?usp=drive_link',
      'https://drive.google.com/file/d/1189-A0oauLGy_dkpkDYBggd6hrR1c3zi/view?usp=drive_link',
      'https://drive.google.com/file/d/1P8vq23hnCVzCT5LW2Zb5JxwCacjaL7u-/view?usp=drive_link'
    ],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 16 (R$1.300/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto individual mais espaçoso com armários planejados e vista externa.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r2',
    name: 'Quarto 22',
    price: 1300,
    priceGroup: '1300',
    status: 'occupied',
    images: [
      'https://drive.google.com/file/d/1cHvXsbm8ELv72JpWodb8xH8gT9DG8Rbv/view?usp=drive_link',
      'https://drive.google.com/file/d/1GPdHVhomQUD0FlvjHLh60bnrACVwXiDs/view?usp=drive_link',
      'https://drive.google.com/file/d/1FIdM5nauSyu0Koq_hbblGgboZW4fe2Ap/view?usp=drive_link',
      'https://drive.google.com/file/d/11b0cj7a2FpGf2I9Oh6Vcv-yE8JY4W2-N/view?usp=drive_link'
    ],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 22 (R$1.300/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto individual arejado, com ótima iluminação natural e totalmente mobiliado.',
    videoUrl: '',
    highlight: ''
  },

  // Superior - R$ 1.400,00
  {
    id: 'r1',
    name: 'Quarto 01',
    price: 1400,
    priceGroup: '1400',
    status: 'occupied',
    images: [
      'https://drive.google.com/file/d/1jaeAoeCWtJdNDlrV3aLgv394FGp122Uw/view?usp=drive_link',
      'https://drive.google.com/file/d/1kxb7QEKioCr53trjfj4dz6qdg4_XsioW/view?usp=drive_link',
      'https://drive.google.com/file/d/1DAD4MnsMasMvaODAp1amwRbeH__v1Hak/view?usp=drive_link',
      'https://drive.google.com/file/d/1SlwFY9Ag-r8dYBXpSn77m2rGrmlT6PLv/view?usp=drive_link'
    ],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 01 (R$1.400/mês) no Jardim Botânico de Curitiba.',
    description: 'Quarto individual mobiliado com cama de solteiro, guarda-roupa e escrivaninha. Ideal para estudantes.',
    videoUrl: '',
    highlight: 'novo'
  },
  {
    id: 'r02',
    name: 'Quarto 02',
    price: 1400,
    priceGroup: '1400',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 02 (R$1.400/mês) no Jardim Botânico de Curitiba.',
    description: 'Suíte espaçosa com excelente acabamento e iluminação natural.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r03',
    name: 'Quarto 03',
    price: 1400,
    priceGroup: '1400',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 03 (R$1.400/mês) no Jardim Botânico de Curitiba.',
    description: 'Suíte espaçosa com excelente acabamento e iluminação natural.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r08',
    name: 'Quarto 08',
    price: 1400,
    priceGroup: '1400',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 08 (R$1.400/mês) no Jardim Botânico de Curitiba.',
    description: 'Suíte espaçosa com excelente acabamento e iluminação natural.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r17',
    name: 'Quarto 17',
    price: 1400,
    priceGroup: '1400',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 17 (R$1.400/mês) no Jardim Botânico de Curitiba.',
    description: 'Suíte espaçosa com excelente acabamento e iluminação natural.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r18',
    name: 'Quarto 18',
    price: 1400,
    priceGroup: '1400',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 18 (R$1.400/mês) no Jardim Botânico de Curitiba.',
    description: 'Suíte espaçosa com excelente acabamento e iluminação natural.',
    videoUrl: '',
    highlight: ''
  },
  {
    id: 'r20',
    name: 'Quarto 20',
    price: 1400,
    priceGroup: '1400',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 20 (R$1.400/mês) no Jardim Botânico de Curitiba.',
    description: 'Suíte espaçosa com excelente acabamento e iluminação natural.',
    videoUrl: '',
    highlight: ''
  },

  // Premium - R$ 1.500,00
  {
    id: 'r5',
    name: 'Quarto 10 (Master)',
    price: 1500,
    priceGroup: '1500',
    status: 'occupied',
    images: [
      'https://drive.google.com/file/d/1u6AsiT7GA1kVsBbgQgqODjbqIcEd-M65/view?usp=drive_link',
      'https://drive.google.com/file/d/1F7AjOxndSymPRARNwjiRMia5cmQCYsjg/view?usp=drive_link',
      'https://drive.google.com/file/d/1wuijJVb9oL-Ds8TBOb8GM1PGRvqkR24e/view?usp=drive_link',
      'https://drive.google.com/file/d/1IWQn-uBaBzZgrUiBAYXNxtSj4o4g0agq/view?usp=drive_link',
      'https://drive.google.com/file/d/1774KY6cLa5bvEzH13U61auPGQdoP7Irq/view?usp=drive_link',
      'https://drive.google.com/file/d/116E7g3QWx55aJE6mf2wmEOj0tNLYjLqI/view?usp=drive_link'
    ],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 10 (R$1.500/mês) no Jardim Botânico de Curitiba.',
    description: 'Suíte master com banheiro privativo e decoração moderna. Máximo conforto.',
    videoUrl: '',
    highlight: 'novo'
  },
  {
    id: 'r21',
    name: 'Quarto 21',
    price: 1500,
    priceGroup: '1500',
    status: 'available',
    images: [],
    whatsappMsg: 'Olá! Gostaria de conhecer o Quarto 21 (R$1.500/mês) no Jardim Botânico de Curitiba.',
    description: 'O melhor quarto do Recanto, máximo espaço, armários e conforto.',
    videoUrl: '',
    highlight: ''
  }
]

const DEFAULT_CONFIG: SiteConfig = {
  logo: { driveId: '', driveUrl: '' },
  rooms: DEFAULT_ROOMS,
  facilities: [
    {
      id: 'f1',
      label: 'Piscina',
      subtitle:
        'Depois de um dia de trabalho ou estudos, nada melhor do que um ambiente agradável para descansar, relaxar e aproveitar momentos de tranquilidade.',
      images: [],
    },
    {
      id: 'f2',
      label: 'Cozinhas',
      subtitle:
        'O Recanto possui duas cozinhas compartilhadas, organizadas e equipadas para oferecer praticidade na preparação das refeições do dia a dia.',
      images: [],
    },
    {
      id: 'f3',
      label: 'Lavanderias',
      subtitle:
        'As lavanderias foram planejadas para proporcionar mais praticidade e conforto, permitindo que cada morador cuide de suas roupas sem precisar sair da residência.',
      images: [],
    },
    {
      id: 'f4',
      label: 'Banheiros',
      subtitle:
        'Os banheiros são compartilhados e recebem limpeza frequente, permanecendo organizados e preparados para proporcionar conforto e higiene aos moradores.',
      images: [],
    },
    {
      id: 'f5',
      label: 'Área Externa',
      subtitle:
        'Um espaço agradável para descansar, conversar, estudar ou simplesmente aproveitar um momento de tranquilidade ao ar livre.',
      images: [],
    },
    {
      id: 'f6',
      label: 'Estacionamento',
      subtitle:
        'Pensando na comodidade dos moradores, o Recanto oferece vagas para veículos e bicicletário.',
      images: [],
    },
  ],
  faq: [
    {
      question: 'O quarto possui banheiro privativo?',
      answer:
        'Não. Cada morador possui seu quarto individual, porém os banheiros são compartilhados e recebem limpeza frequente para manter o ambiente organizado e agradável.',
    },
    {
      question: 'O Recanto aceita casais?',
      answer: 'Não. A residência é destinada exclusivamente para ocupação individual.',
    },
    {
      question: 'É necessário pagar caução?',
      answer: 'Não. O Recanto Jardim Botânico não exige caução.',
    },
    {
      question: 'Existe período de adaptação?',
      answer:
        'Sim. O Recanto oferece um período de adaptação de 48 horas, conforme previsto em contrato.',
    },
    {
      question: 'Qual é a permanência mínima?',
      answer: 'A permanência mínima é de 1 mês.',
    },
    {
      question: 'Posso receber visitantes?',
      answer:
        'Não. Para garantir a segurança, privacidade e tranquilidade dos moradores, não é permitida a entrada de visitantes.',
    },
  ],
  whatsappDefault: '5541995016899',
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
