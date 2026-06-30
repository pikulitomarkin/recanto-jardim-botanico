const DRIVE_ID_REGEX = /^[A-Za-z0-9_-]{25,}$/

export function extractDriveId(input: string): string | null {
  if (!input) return null

  // Raw ID: alphanumeric + _ + -, 25+ chars, no slashes or dots
  if (DRIVE_ID_REGEX.test(input)) return input

  try {
    const url = new URL(input)
    // https://drive.google.com/file/d/{ID}/view
    const fileMatch = url.pathname.match(/\/file\/d\/([A-Za-z0-9_-]+)/)
    if (fileMatch) return fileMatch[1]

    // https://drive.google.com/open?id={ID}
    // https://drive.google.com/uc?id={ID}
    const idParam = url.searchParams.get('id')
    if (idParam && DRIVE_ID_REGEX.test(idParam)) return idParam
  } catch {
    // not a URL
  }

  return null
}

export function getDriveImageUrl(idOrLink: string): string {
  const id = extractDriveId(idOrLink) ?? idOrLink
  return `https://lh3.googleusercontent.com/d/${id}`
}

export function getDriveImageUrlFallback(id: string): string {
  return `https://drive.google.com/uc?export=view&id=${id}`
}

export function getDriveEmbedUrl(idOrLink: string): string {
  const id = extractDriveId(idOrLink) ?? idOrLink
  return `https://drive.google.com/file/d/${id}/preview`
}

export function getDriveThumbnailUrl(idOrLink: string, size = 400): string {
  const id = extractDriveId(idOrLink) ?? idOrLink
  return `https://drive.google.com/thumbnail?id=${id}&sz=w${size}`
}
