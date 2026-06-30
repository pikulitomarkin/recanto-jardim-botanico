import { extractDriveId, getDriveImageUrl, getDriveEmbedUrl, getDriveImageUrlFallback } from './gdrive'

const SAMPLE_ID = '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74740x'

describe('extractDriveId', () => {
  it('extracts ID from /file/d/ URL', () => {
    expect(extractDriveId(`https://drive.google.com/file/d/${SAMPLE_ID}/view?usp=sharing`)).toBe(SAMPLE_ID)
  })

  it('extracts ID from open?id= URL', () => {
    expect(extractDriveId(`https://drive.google.com/open?id=${SAMPLE_ID}`)).toBe(SAMPLE_ID)
  })

  it('extracts ID from uc?id= URL', () => {
    expect(extractDriveId(`https://drive.google.com/uc?id=${SAMPLE_ID}`)).toBe(SAMPLE_ID)
  })

  it('returns raw ID directly', () => {
    expect(extractDriveId(SAMPLE_ID)).toBe(SAMPLE_ID)
  })

  it('returns null for invalid input', () => {
    expect(extractDriveId('not-a-valid-id')).toBeNull()
    expect(extractDriveId('')).toBeNull()
    expect(extractDriveId('https://example.com')).toBeNull()
  })
})

describe('getDriveImageUrl', () => {
  it('returns lh3 URL for raw ID', () => {
    expect(getDriveImageUrl(SAMPLE_ID)).toBe(`https://lh3.googleusercontent.com/d/${SAMPLE_ID}`)
  })

  it('returns lh3 URL for full Drive link', () => {
    const link = `https://drive.google.com/file/d/${SAMPLE_ID}/view?usp=sharing`
    expect(getDriveImageUrl(link)).toBe(`https://lh3.googleusercontent.com/d/${SAMPLE_ID}`)
  })
})

describe('getDriveImageUrlFallback', () => {
  it('returns uc?export=view URL', () => {
    expect(getDriveImageUrlFallback(SAMPLE_ID)).toBe(`https://drive.google.com/uc?export=view&id=${SAMPLE_ID}`)
  })
})

describe('getDriveEmbedUrl', () => {
  it('returns preview URL for raw ID', () => {
    expect(getDriveEmbedUrl(SAMPLE_ID)).toBe(`https://drive.google.com/file/d/${SAMPLE_ID}/preview`)
  })

  it('returns preview URL for full Drive link', () => {
    const link = `https://drive.google.com/open?id=${SAMPLE_ID}`
    expect(getDriveEmbedUrl(link)).toBe(`https://drive.google.com/file/d/${SAMPLE_ID}/preview`)
  })
})
