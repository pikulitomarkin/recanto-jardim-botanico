import { WA } from '@/lib/brand'

interface WhatsAppButtonProps {
  href?: string
  label?: string
  variant?: 'primary' | 'dark' | 'outline'
  className?: string
  size?: 'md' | 'lg'
}

const VARIANTS = {
  primary:
    'bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-900/20',
  dark: 'bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20',
  outline:
    'border border-white/30 hover:border-white/60 text-white hover:bg-white/5',
}

const SIZES = {
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-3.5 text-base',
}

export default function WhatsAppButton({
  href = WA.visita,
  label = '📲 Agendar minha visita',
  variant = 'primary',
  className = '',
  size = 'lg',
}: WhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-colors ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
    >
      {label}
    </a>
  )
}
