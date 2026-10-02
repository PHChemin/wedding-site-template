import { Marquee } from "@/components/ui/marquee"
import { LeafMark } from "@/components/wedding/ornaments"
import { cn } from "@/lib/utils"

type MarqueeBandProps = {
  items: readonly string[]
  reverse?: boolean
  tone?: "light" | "sage"
}

export function MarqueeBand({ items, reverse, tone = "light" }: MarqueeBandProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y py-5 md:py-7",
        tone === "light"
          ? "border-border bg-background text-forest/80"
          : "border-transparent bg-sage text-cream",
      )}
      aria-hidden
    >
      <Marquee
        reverse={reverse}
        className="p-0 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)] [--duration:55s] [--gap:2.5rem]"
        repeat={3}
      >
        {items.map((item) => (
          <span
            key={item}
            className="flex items-center gap-10 font-display text-3xl whitespace-nowrap italic md:text-5xl"
          >
            {item}
            <LeafMark
              className={cn(
                "size-5 md:size-6",
                tone === "light" ? "text-gold-soft" : "text-cream/70",
              )}
            />
          </span>
        ))}
      </Marquee>
    </div>
  )
}
