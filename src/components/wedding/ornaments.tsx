import { motion } from "motion/react"

import { cn } from "@/lib/utils"

const leaves = [
  { cx: 25, cy: 22, r: -40 },
  { cx: 31, cy: 29, r: 30 },
  { cx: 49, cy: 17, r: -40 },
  { cx: 55, cy: 24, r: 30 },
  { cx: 78, cy: 11, r: -40 },
  { cx: 84, cy: 18, r: 28 },
  { cx: 104, cy: 6.5, r: -38 },
  { cx: 109, cy: 13, r: 24 },
  { cx: 118, cy: 7, r: -14 },
] as const

type OliveBranchProps = {
  className?: string
  flip?: boolean
  delay?: number
  strokeWidth?: number
}

export function OliveBranch({
  className,
  flip = false,
  delay = 0,
  strokeWidth = 0.9,
}: OliveBranchProps) {
  return (
    <motion.svg
      viewBox="0 0 126 36"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      className={cn("overflow-visible", flip && "-scale-x-100", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      aria-hidden
    >
      <motion.path
        d="M4 30 C 30 26, 60 18, 116 8"
        variants={{
          hidden: { pathLength: 0, opacity: 0 },
          visible: {
            pathLength: 1,
            opacity: 1,
            transition: { duration: 1.4, delay, ease: [0.22, 1, 0.36, 1] },
          },
        }}
      />
      {leaves.map((leaf, index) => (
        <g
          key={`${leaf.cx}-${leaf.cy}`}
          transform={`translate(${leaf.cx} ${leaf.cy}) rotate(${leaf.r})`}
        >
          <motion.path
            d="M-7.5 0 Q-1 -3.6 7.5 0 Q-1 3.6 -7.5 0 Z M-5 0 L5.5 0"
            variants={{
              hidden: { opacity: 0, scale: 0.3 },
              visible: {
                opacity: 1,
                scale: 1,
                transition: {
                  duration: 0.6,
                  delay: delay + 0.35 + index * 0.08,
                  ease: [0.22, 1, 0.36, 1],
                },
              },
            }}
            style={{ transformBox: "fill-box", transformOrigin: "center" }}
          />
        </g>
      ))}
    </motion.svg>
  )
}

export function LeafMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth={1}
      className={cn("size-3.5", className)}
      aria-hidden
    >
      <path d="M2 14 C 6 10, 10 6, 14 2" strokeLinecap="round" />
      <path d="M-3.8 0 Q-0.5 -1.9 3.8 0 Q-0.5 1.9 -3.8 0 Z" transform="translate(6.6 6.4) rotate(-70)" />
      <path d="M-3.8 0 Q-0.5 -1.9 3.8 0 Q-0.5 1.9 -3.8 0 Z" transform="translate(10.4 9.6) rotate(15)" />
    </svg>
  )
}

export function Monogram({
  className,
  tone = "dark",
}: {
  className?: string
  tone?: "dark" | "light"
}) {
  return (
    <span
      className={cn(
        "relative inline-flex size-11 items-center justify-center rounded-full border font-display text-[0.95rem] leading-none tracking-wide",
        tone === "dark"
          ? "border-gold-soft/70 text-forest"
          : "border-cream/60 text-cream",
        className,
      )}
      aria-hidden
    >
      <span className="absolute inset-[3px] rounded-full border border-current opacity-20" />
      H<span className="mx-[1px] italic text-gold-soft">&</span>R
    </span>
  )
}

const line = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
} as const

export function Flourish({
  className,
  tone = "gold",
}: {
  className?: string
  tone?: "gold" | "light"
}) {
  return (
    <motion.div
      className={cn(
        "flex items-center justify-center gap-3",
        tone === "gold" ? "text-gold-soft" : "text-cream/70",
        className,
      )}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      aria-hidden
    >
      <motion.span
        className="h-px w-12 origin-right bg-current md:w-20"
        variants={line}
      />
      <LeafMark className="size-4" />
      <motion.span
        className="h-px w-12 origin-left bg-current md:w-20"
        variants={line}
      />
    </motion.div>
  )
}
