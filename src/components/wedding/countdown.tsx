import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "motion/react"

import { BlurFade } from "@/components/ui/blur-fade"
import { OliveBranch } from "@/components/wedding/ornaments"
import { event } from "@/data/wedding"

const target = new Date(event.iso).getTime()

function parts(now: number) {
  const diff = Math.max(0, target - now)
  return {
    done: diff === 0,
    dias: Math.floor(diff / 86_400_000),
    horas: Math.floor((diff % 86_400_000) / 3_600_000),
    minutos: Math.floor((diff % 3_600_000) / 60_000),
    segundos: Math.floor((diff % 60_000) / 1000),
  }
}

function RollingDigit({ char }: { char: string }) {
  return (
    <span className="relative inline-block h-[1.1em] w-[0.56em] overflow-hidden align-top">
      <AnimatePresence initial={false} mode="popLayout">
        <motion.span
          key={char}
          className="absolute inset-0 text-center"
          initial={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
          animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
          exit={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          {char}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export function Countdown() {
  const [now, setNow] = useState(() => Date.now())

  useEffect(() => {
    const id = window.setInterval(() => setNow(Date.now()), 1000)
    return () => window.clearInterval(id)
  }, [])

  const time = parts(now)
  const units = [
    ["dias", String(time.dias)],
    ["horas", String(time.horas).padStart(2, "0")],
    ["minutos", String(time.minutos).padStart(2, "0")],
    ["segundos", String(time.segundos).padStart(2, "0")],
  ] as const

  return (
    <section
      id="contagem"
      aria-label={`Contagem regressiva para ${event.date}`}
      className="relative overflow-hidden border-b border-border"
    >
      <OliveBranch
        className="pointer-events-none absolute top-1/2 -left-10 hidden w-64 -translate-y-1/2 text-sage/35 md:block"
        strokeWidth={0.7}
      />
      <OliveBranch
        flip
        className="pointer-events-none absolute top-1/2 -right-10 hidden w-64 -translate-y-1/2 text-sage/35 md:block"
        strokeWidth={0.7}
        delay={0.2}
      />

      <div className="relative mx-auto max-w-4xl px-4 py-14 md:py-20">
        <BlurFade inView>
          <p className="text-center font-display text-lg text-gold italic md:text-xl">
            Faltam
          </p>
        </BlurFade>

        {time.done ? (
          <p className="mt-4 text-center font-display text-5xl italic">É hoje.</p>
        ) : (
          <div className="mt-5 grid grid-cols-4" aria-live="off">
            {units.map(([label, value], index) => (
              <BlurFade
                key={label}
                inView
                delay={0.08 * index}
                className={
                  index > 0 ? "border-l border-gold-soft/30 text-center" : "text-center"
                }
              >
                <p className="font-display text-[2.6rem] leading-none text-forest [font-variant-numeric:lining-nums_tabular-nums] md:text-7xl">
                  <span className="sr-only">{Number(value)}</span>
                  <span aria-hidden>
                  {value
                    .split("")
                    .map((char, i) => (
                      <RollingDigit key={`${label}-${i}`} char={char} />
                    ))}
                  </span>
                </p>
                <p className="mt-3 text-[0.62rem] tracking-[0.28em] text-muted-foreground uppercase md:text-[0.68rem]">
                  {label}
                </p>
              </BlurFade>
            ))}
          </div>
        )}

        <BlurFade inView delay={0.3}>
          <p className="mt-8 text-center text-sm tracking-wide text-muted-foreground">
            {event.weekday}, {event.date} · {event.ceremonyTime} · {event.city}
          </p>
        </BlurFade>
      </div>
    </section>
  )
}
