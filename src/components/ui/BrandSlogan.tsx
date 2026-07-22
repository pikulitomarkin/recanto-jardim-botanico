import { BRAND_SLOGAN } from '@/lib/brand'
import { IconAvailable, IconHandsHeart } from '@/components/ui/Icons'

interface BrandSloganProps {
  className?: string
  textClassName?: string
  size?: 'sm' | 'md' | 'lg'
  showDot?: boolean
}

const SIZE = {
  sm: { icon: 14, text: 'text-xs' },
  md: { icon: 16, text: 'text-sm' },
  lg: { icon: 20, text: 'text-base' },
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
      {showDot && <IconAvailable size={8} className="text-green-500" />}
      <IconHandsHeart size={s.icon} className="text-[#C9A227]" />
      <span className={`font-medium ${s.text} ${textClassName || 'text-gold'}`}>
        {BRAND_SLOGAN}
      </span>
    </span>
  )
}
