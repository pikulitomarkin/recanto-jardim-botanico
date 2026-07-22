import { BRAND_SLOGAN } from '@/lib/brand'

interface BrandSloganProps {
  className?: string
  textClassName?: string
  size?: 'sm' | 'md' | 'lg'
  showDot?: boolean
}

const SIZE = {
  sm: { icon: 'text-sm', text: 'text-xs' },
  md: { icon: 'text-base', text: 'text-sm' },
  lg: { icon: 'text-xl', text: 'text-base' },
}

/** Slogan oficial com símbolo das mãos em coração (amarelo/dourado). */
export default function BrandSlogan({
  className = '',
  textClassName = '',
  size = 'md',
  showDot = false,
}: BrandSloganProps) {
  const s = SIZE[size]
  return (
    <span className={`inline-flex items-center gap-1.5 ${className}`}>
      {showDot && <span className="text-green-500" aria-hidden>🟢</span>}
      <span className={`${s.icon} leading-none`} style={{ color: '#C9A227' }} aria-hidden>
        🤝
      </span>
      <span className={`font-medium ${s.text} ${textClassName || 'text-gold'}`}>
        {BRAND_SLOGAN}
      </span>
    </span>
  )
}
