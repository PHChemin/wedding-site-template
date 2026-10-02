import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

type ImageRevealProps = {
  src: string
  alt: string
  className?: string
  imageClassName?: string
  shape?: "rect" | "arch"
  frame?: "none" | "offset" | "inset"
  parallax?: number
}

export function ImageReveal({
  src,
  alt,
  className,
  imageClassName,
  shape = "rect",
  frame = "none",
  parallax = 40,
}: ImageRevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  const y = useTransform(scrollYProgress, [0, 1], [-parallax, parallax])

  const radius = shape === "arch" ? "rounded-t-[999px]" : ""

  return (
    <motion.div
      ref={ref}
      className={cn("relative", className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {frame === "offset" && (
        <motion.span
          className={cn(
            "absolute inset-0 translate-x-3 translate-y-3 border border-gold-soft/60 md:translate-x-4 md:translate-y-4",
            radius,
          )}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { duration: 1, delay: 0.5 } },
          }}
          aria-hidden
        />
      )}
      <motion.div
        className={cn("relative overflow-hidden bg-muted", radius)}
        variants={{
          hidden: { clipPath: "inset(100% 0% 0% 0%)" },
          visible: {
            clipPath: "inset(0% 0% 0% 0%)",
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
          },
        }}
      >
        <motion.img
          src={src}
          alt={alt}
          loading="lazy"
          className={cn("size-full scale-[1.18] object-cover", imageClassName)}
          style={{ y }}
        />
        {frame === "inset" && (
          <span
            className={cn(
              "pointer-events-none absolute inset-3 border border-cream/60",
              radius,
            )}
            aria-hidden
          />
        )}
      </motion.div>
    </motion.div>
  )
}
