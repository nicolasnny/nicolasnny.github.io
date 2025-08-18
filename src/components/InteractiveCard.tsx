import { useRef, useState, type CSSProperties, type ReactNode, type JSX } from 'react'

type InteractiveCardProps<T extends keyof JSX.IntrinsicElements = 'div'> = {
  as?: T
  className?: string
  children: ReactNode
} & JSX.IntrinsicElements[T]

export default function InteractiveCard<T extends keyof JSX.IntrinsicElements = 'div'>(
  props: InteractiveCardProps<T>
) {
  const { as, className = '', children, ...rest } = props as InteractiveCardProps
  const Tag = (as ?? 'div') as any

  const containerRef = useRef<HTMLDivElement | null>(null)
  const innerRef = useRef<HTMLDivElement | null>(null)
  const [glowStyle, setGlowStyle] = useState<CSSProperties | undefined>(undefined)

  const maxTiltDeg = 8

  function handleMouseMove(e: React.MouseEvent) {
    const container = containerRef.current
    const inner = innerRef.current
    if (!container || !inner) return

    const rect = container.getBoundingClientRect()
    const pointerX = e.clientX - rect.left
    const pointerY = e.clientY - rect.top
    const px = pointerX / rect.width
    const py = pointerY / rect.height

    const rotateY = (px - 0.5) * (maxTiltDeg * 2)
    const rotateX = -(py - 0.5) * (maxTiltDeg * 2)

    inner.style.transform = `rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg)`

    setGlowStyle({
      background: `radial-gradient(400px circle at ${px * 100}% ${py * 100}%, rgba(99,102,241,0.35), rgba(99,102,241,0) 45%)`,
      opacity: 1,
    })
  }

  function handleMouseLeave() {
    const inner = innerRef.current
    if (inner) {
      inner.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }
    setGlowStyle({ opacity: 0 })
  }

  return (
    <Tag
      ref={containerRef as any}
      className={`group relative [perspective:1000px] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...(rest as any)}
    >
      <div
        ref={innerRef}
        className="relative h-full w-full rounded-lg border border-neutral-800 bg-neutral-900/40 p-5 [transform-style:preserve-3d] transition-transform duration-150 ease-out will-change-transform"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-lg"
          style={{
            mixBlendMode: 'screen',
            filter: 'contrast(110%)',
            transition: 'opacity 150ms ease-out',
            ...glowStyle,
          }}
        />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </Tag>
  )
} 