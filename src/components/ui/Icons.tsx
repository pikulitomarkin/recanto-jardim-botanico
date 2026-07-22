import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & { size?: number }

function base({ size = 16, className, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: `inline-block flex-shrink-0 ${className ?? ''}`,
    'aria-hidden': true as const,
    ...props,
  }
}

export function IconWhatsApp({ size = 18, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`inline-block flex-shrink-0 ${className ?? ''}`}
      aria-hidden
      {...props}
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

/** Mãos formando coração — símbolo do slogan. */
export function IconHandsHeart({ size = 18, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`inline-block flex-shrink-0 ${className ?? ''}`}
      aria-hidden
      {...props}
    >
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  )
}

export function IconCheck({ size = 16, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function IconCar({ size = 16, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <path d="M5 17h14v-5l-1.5-4.5A2 2 0 0015.6 6H8.4a2 2 0 00-1.9 1.5L5 12v5z" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
      <path d="M5 12h14" />
    </svg>
  )
}

export function IconMotorcycle({ size = 16, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <circle cx="5.5" cy="17.5" r="2.5" />
      <circle cx="18.5" cy="17.5" r="2.5" />
      <path d="M12 17l-3-6h4l3 3h2.5" />
      <path d="M9 11H6.5L5 14" />
    </svg>
  )
}

export function IconBike({ size = 16, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <circle cx="5.5" cy="17.5" r="2.5" />
      <circle cx="18.5" cy="17.5" r="2.5" />
      <path d="M12 17.5V9l4-3M12 12l4 5.5M12 12H8.5" />
    </svg>
  )
}

export function IconHome({ size = 16, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <path d="M3 10.5L12 3l9 7.5" />
      <path d="M5 9.5V20h14V9.5" />
      <path d="M10 20v-6h4v6" />
    </svg>
  )
}

export function IconMapPin({ size = 16, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

export function IconDocument({ size = 16, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <path d="M7 3h7l5 5v13a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M14 3v5h5M9 13h6M9 17h6" />
    </svg>
  )
}

export function IconTree({ size = 14, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <path d="M12 22v-6" />
      <path d="M8 22h8" />
      <path d="M12 3l5 7H7l5-7z" />
      <path d="M12 8l6 8H6l6-8z" />
    </svg>
  )
}

export function IconGraduation({ size = 14, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <path d="M2 9l10-5 10 5-10 5L2 9z" />
      <path d="M6 11.5V16c0 1.5 2.7 3 6 3s6-1.5 6-3v-4.5" />
      <path d="M22 9v6" />
    </svg>
  )
}

export function IconHospital({ size = 14, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  )
}

export function IconCart({ size = 14, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <circle cx="9" cy="20" r="1" />
      <circle cx="18" cy="20" r="1" />
      <path d="M3 4h2l2.4 11.2a2 2 0 002 1.6h8.8a2 2 0 001.95-1.55L21 8H7" />
    </svg>
  )
}

export function IconUtensils({ size = 14, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <path d="M8 3v8M6 3v5a2 2 0 004 0V3M8 11v10M16 3v7a2 2 0 002 2h0a2 2 0 002-2V3M18 12v9" />
    </svg>
  )
}

export function IconBus({ size = 14, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <rect x="4" y="3" width="16" height="14" rx="2" />
      <path d="M4 11h16M8 17v2M16 17v2M8 7h2M14 7h2" />
    </svg>
  )
}

export function IconCity({ size = 14, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <path d="M3 21h18" />
      <path d="M5 21V8l5-3v16M14 21V5l5 3v13" />
      <path d="M8 11h1M8 14h1M16 11h1M16 14h1" />
    </svg>
  )
}

export function IconWalk({ size = 16, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <circle cx="13" cy="5" r="2" />
      <path d="M10 22l2-6 2 2 2 4M13 9l-2 4-4 1M13 9l4 2 2 5" />
    </svg>
  )
}

export function IconAvailable({ size = 10, className, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      className={`inline-block flex-shrink-0 ${className ?? ''}`}
      aria-hidden
      {...props}
    >
      <circle cx="5" cy="5" r="5" fill="currentColor" />
    </svg>
  )
}

export function IconWarning({ size = 16, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <path d="M10.3 3.9L2.4 17.5A2 2 0 004.1 20.5h15.8a2 2 0 001.7-3L13.7 3.9a2 2 0 00-3.4 0z" />
      <path d="M12 9v4M12 17h.01" />
    </svg>
  )
}

export function IconX({ size = 16, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function IconClipboard({ size = 16, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <rect x="6" y="4" width="12" height="17" rx="2" />
      <path d="M9 4V3h6v1" />
      <path d="M9 10h6M9 14h6M9 18h4" />
    </svg>
  )
}

export function IconGear({ size = 16, className, ...props }: IconProps) {
  return (
    <svg {...base({ size, className, ...props })}>
      <circle cx="12" cy="12" r="3" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  )
}

export const CATEGORY_ICONS = {
  tree: IconTree,
  graduation: IconGraduation,
  hospital: IconHospital,
  cart: IconCart,
  utensils: IconUtensils,
  bus: IconBus,
  city: IconCity,
} as const

export const PARKING_ICONS = {
  car: IconCar,
  motorcycle: IconMotorcycle,
  bike: IconBike,
} as const
