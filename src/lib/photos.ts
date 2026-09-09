/**
 * Índice oficial de fotos do Briefing V7 (posições 1–49).
 * Fotos 35 e 42–49 aguardam entrega; localização usa fallback em /public/localizacao.
 */

const AVAILABLE = new Set([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26,
  27, 28, 29, 30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41,
])

/** Caminho público da foto oficial, ou null se ainda não disponível. */
export function briefingPhoto(index: number): string | null {
  if (!AVAILABLE.has(index)) return null
  return `/briefing/${String(index).padStart(2, '0')}.jpg`
}

export function briefingPhotos(indexes: number[]): string[] {
  return indexes.map(briefingPhoto).filter((p): p is string => Boolean(p))
}

export const HERO_PHOTO = briefingPhoto(1)!

export const ESTRUTURA_GALLERIES = [
  {
    id: 'piscina',
    title: 'Piscina',
    subtitle: 'Área de lazer para relaxar',
    indexes: [22, 23, 24, 25, 26],
  },
  {
    id: 'cozinhas',
    title: 'Cozinha 1 e Cozinha 2',
    subtitle: 'Duas cozinhas completas e organizadas',
    indexes: [27, 28, 29, 30, 31],
  },
  {
    id: 'servico',
    title: 'Área de serviço',
    subtitle: 'Lavanderias preparadas para o dia a dia',
    // Foto 35 aguardando
    indexes: [32, 33, 34, 36],
  },
  {
    id: 'banheiros',
    title: 'Banheiros',
    subtitle: '8 banheiros compartilhados + 1 exclusivo feminino',
    indexes: [37, 38, 39, 40, 41],
  },
] as const
