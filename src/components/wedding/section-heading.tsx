import type { ReactNode } from "react"
import { motion } from "motion/react"

import { BlurFade } from "@/components/ui/blur-fade"
import { LeafMark } from "@/components/wedding/ornaments"
import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  index: string
  eyebrow: string
  title: string
  intro?: ReactNode
  align?: "left" | "center"
  tone?: "dark" | "light"
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  intro,
  align = "left",
  tone = "dark",
  className,
}: SectionHeadingProps) {
  const words = title.split(" ")

  return (
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        "max-w-2xl",
        className,
      )}
    >
      <BlurFade inView>
        <p
          className={cn(
            "flex items-center gap-3 text-[0.7rem] tracking-[0.34em] uppercase",
            align === "center" && "justify-center",
            tone === "dark" ? "text-gold" : "text-gold-soft",
          )}
        >
          <span className="font-display text-sm tracking-[0.2em] italic">
            {index}
          </span>
          <span
            className={cn(
              "h-px w-8",
              tone === "dark" ? "bg-gold/40" : "bg-gold-soft/50",
            )}
            aria-hidden
          />
          <LeafMark />
          {eyebrow}
        </p>
      </BlurFade>

      <motion.h2
        className={cn(
          "mt-5 font-display text-[2.6rem] leading-[1.05] font-medium md:text-6xl",
          tone === "light" && "text-cream",
        )}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
      >
        <span className="sr-only">{title}</span>
        <span aria-hidden>
          {words.map((word, i) => (
            <span
              key={`${word}-${i}`}
              className="-mt-[0.1em] inline-block overflow-hidden pt-[0.1em] pb-[0.12em] align-bottom"
            >
              <motion.span
                className="inline-block"
                variants={{
                  hidden: { y: "110%" },
                  visible: {
                    y: "0%",
                    transition: {
                      duration: 0.9,
                      delay: 0.08 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
              >
                {word}
              </motion.span>
              {i < words.length - 1 && "\u00a0"}
            </span>
          ))}
        </span>
      </motion.h2>

      {intro && (
        <BlurFade inView delay={0.25}>
          <div
            className={cn(
              "mt-5 text-base leading-relaxed md:text-lg",
              tone === "dark" ? "text-muted-foreground" : "text-cream/80",
            )}
          >
            {intro}
          </div>
        </BlurFade>
      )}
    </div>
  )
}
