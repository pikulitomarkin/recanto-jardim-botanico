'use client'

interface VideoModalProps {
  videoUrl: string
  onClose: () => void
}

export default function VideoModal({ videoUrl, onClose }: VideoModalProps) {
  // Parse the video URL to generate the correct embed code
  let embedUrl = ''
  let isIframe = false

  if (videoUrl.includes('youtube.com') || videoUrl.includes('youtu.be')) {
    isIframe = true
    let videoId = ''
    if (videoUrl.includes('youtu.be/')) {
      videoId = videoUrl.split('youtu.be/')[1]?.split('?')[0] ?? ''
    } else {
      videoId = videoUrl.split('v=')[1]?.split('&')[0] ?? ''
    }
    embedUrl = `https://www.youtube.com/embed/${videoId}`
  } else if (videoUrl.includes('drive.google.com')) {
    isIframe = true
    // Parse Google Drive file id
    const match = videoUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)/)
    if (match && match[1]) {
      embedUrl = `https://drive.google.com/file/d/${match[1]}/preview`
    } else {
      embedUrl = videoUrl
    }
  } else {
    // Treat as raw video link
    embedUrl = videoUrl
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#061810] rounded-2xl overflow-hidden border border-[#C9A227]/30 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10"
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* Video Container */}
        <div className="relative aspect-video w-full bg-black">
          {isIframe ? (
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
              title="Apresentação do Quarto"
            />
          ) : (
            <video
              src={embedUrl}
              controls
              autoPlay
              className="w-full h-full"
            />
          )}
        </div>
      </div>
    </div>
  )
}
