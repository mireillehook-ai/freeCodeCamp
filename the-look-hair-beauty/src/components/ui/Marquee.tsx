type MarqueeProps = {
  items: string[]
  className?: string
}

export function Marquee({ items, className = '' }: MarqueeProps) {
  const loop = [...items, ...items]

  return (
    <div className={`overflow-hidden border-y border-paper-line ${className}`}>
      <div className="animate-marquee flex w-max items-center gap-10 py-5">
        {loop.map((item, i) => (
          <span key={i} className="flex items-center gap-10 font-display text-xl italic text-ink/35 sm:text-2xl">
            {item}
            <span className="h-1.5 w-1.5 rounded-full bg-bronze/60" />
          </span>
        ))}
      </div>
    </div>
  )
}
