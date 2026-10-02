import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { Particles } from "@/components/ui/particles"
import { Flourish } from "@/components/wedding/ornaments"
import { WeddingLink } from "@/components/wedding/wedding-button"
import { couple, event, photo } from "@/data/wedding"

const ease = [0.22, 1, 0.36, 1] as const

function ScriptName({ name, delay }: { name: string; delay: number }) {
  return (
    <motion.span
      className="block px-4 font-script text-[length:min(5.4rem,11svh)] leading-[1.2] md:inline-block md:px-2 md:text-[length:min(8rem,9vw,15svh)]"
      initial={{ clipPath: "inset(-20% 100% -20% -10%)", opacity: 0.4 }}
      animate={{ clipPath: "inset(-20% -10% -20% -10%)", opacity: 1 }}
      transition={{ duration: 1.6, delay, ease }}
    >
      {name}
    </motion.span>
  )
}

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"])
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-22%"])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="inicio"
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden bg-forest text-cream"
    >
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <motion.img
          src={photo("hero-couple.jpg")}
          alt="Helena e Rafael no jardim de oliveiras, no dia do ensaio"
          className="size-full object-cover object-[center_28%]"
          fetchPriority="high"
          initial={{ scale: 1.14, filter: "blur(6px)" }}
          animate={{ scale: 1.02, filter: "blur(0px)" }}
          transition={{ duration: 2.6, ease }}
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-[linear-gradient(to_top,rgba(28,38,28,0.82)_0%,rgba(28,38,28,0.45)_36%,rgba(28,38,28,0.06)_62%,rgba(28,38,28,0.32)_100%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(20,28,18,0.35)_100%)]"
        aria-hidden
      />

      <Particles
        className="absolute inset-0"
        quantity={34}
        ease={80}
        size={0.5}
        color="#e8d6ae"
        staticity={60}
        vy={-0.05}
      />

      <div
        className="pointer-events-none absolute inset-4 border border-cream/15 md:inset-6"
        aria-hidden
      />

      <motion.div
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col items-center justify-end px-6 pt-28 pb-[max(5rem,11svh)] text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.p
          className="flex items-center gap-4 text-[0.68rem] tracking-[0.42em] text-cream/90 uppercase"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease }}
        >
          <span>{event.weekday}</span>
          <span className="size-1 rounded-full bg-gold-soft" aria-hidden />
          <span>{event.date}</span>
        </motion.p>

        <h1 className="mt-3 font-normal [text-shadow:0_2px_24px_rgba(20,28,18,0.5)]">
          <span className="sr-only">
            {couple.bride} e {couple.groom}
          </span>
          <span aria-hidden className="block md:flex md:items-center md:justify-center">
            <ScriptName name={couple.bride} delay={0.8} />
            <motion.span
              className="-my-3 block font-display text-3xl text-gold-soft italic md:mx-1 md:my-0 md:inline-block md:text-5xl"
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 1.7, ease }}
            >
              &
            </motion.span>
            <ScriptName name={couple.groom} delay={1.9} />
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2.6 }}
          className="mt-2"
        >
          <Flourish tone="light" />
          <p className="mt-4 font-display text-xl text-cream/90 italic md:text-2xl">
            Entre oliveiras, em {event.city}
          </p>
        </motion.div>

        <motion.div
          className="mt-[min(2.25rem,4svh)] flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.9, ease }}
        >
          <WeddingLink href="#rsvp" variant="light" className="flex-1">
            Confirmar presença
          </WeddingLink>
          <WeddingLink
            href="#o-dia"
            variant="outline-light"
            className="flex-1"
            icon={false}
          >
            Ver o dia
          </WeddingLink>
        </motion.div>
      </motion.div>

      <motion.a
        href="#contagem"
        className="absolute bottom-7 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-[0.6rem] tracking-[0.36em] text-cream/70 uppercase md:bottom-9"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.4, duration: 1 }}
        aria-label="Rolar para a contagem regressiva"
      >
        <span className="relative block h-9 w-px overflow-hidden bg-cream/20">
          <span className="absolute inset-0 animate-scroll-cue bg-cream" />
        </span>
      </motion.a>
    </section>
  )
}
