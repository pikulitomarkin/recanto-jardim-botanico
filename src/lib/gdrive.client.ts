'use client'

export { extractDriveId, getDriveImageUrl, getDriveImageUrlFallback, getDriveEmbedUrl, getDriveThumbnailUrl } from './gdrive'

export function testDriveUrl(url: string): Promise<boolean> {
  return new Promise((resolve) => {
    const img = new Image()
    img.onload = () => resolve(true)
    img.onerror = () => resolve(false)
    img.src = url
  })
}
