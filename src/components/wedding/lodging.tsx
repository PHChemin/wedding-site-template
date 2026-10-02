import { motion } from "motion/react"
import { ArrowUpRight, Car, Sun } from "lucide-react"

import { BlurFade } from "@/components/ui/blur-fade"
import { ImageReveal } from "@/components/wedding/image-reveal"
import { SectionHeading } from "@/components/wedding/section-heading"
import { photo, stays, tips } from "@/data/wedding"

const tipIcons = { car: Car, sun: Sun } as const

export function Lodging() {
  return (
    <section id="hospedagem" className="scroll-mt-20 bg-muted/70 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-16 md:grid-cols-[1fr_1.15fr] md:gap-20">
          <ImageReveal
            src={photo("lodging.jpg")}
            alt="Pátio de pousada colonial com paredes brancas, janelas verdes e rosas"
            shape="arch"
            frame="offset"
            className="mx-auto aspect-[4/5] w-full max-w-sm md:max-w-none"
            imageClassName="aspect-[4/5]"
          />

          <div>
            <SectionHeading
              index="04"
              eyebrow="Hospedagem"
              title="Ficar em Tiradentes"
              intro="Abril enche a cidade. Reservar cedo deixa o sábado mais leve — e a sexta livre para passear pelas igrejas."
            />

            <ul className="mt-10 border-t border-border">
              {stays.map((stay, index) => (
                <motion.li
                  key={stay.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(stay.query)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex items-start gap-5 overflow-hidden border-b border-border py-7"
                  >
                    <span
                      className="absolute inset-0 -z-10 origin-bottom scale-y-0 bg-background transition-transform duration-500 ease-soft group-hover:scale-y-100"
                      aria-hidden
                    />
                    <span className="w-8 pt-1 font-display text-sm text-gold italic transition-transform duration-500 ease-soft group-hover:translate-x-3">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 transition-transform duration-500 ease-soft group-hover:translate-x-3">
                      <span className="block font-display text-2xl font-medium text-forest md:text-[1.75rem]">
                        {stay.name}
                      </span>
                      <span className="mt-2 block leading-relaxed text-muted-foreground">
                        {stay.detail}
                      </span>
                    </span>
                    <span className="mr-2 flex size-10 shrink-0 items-center justify-center rounded-full border border-border text-forest transition-all duration-500 ease-soft group-hover:rotate-45 group-hover:border-primary group-hover:bg-primary group-hover:text-cream">
                      <ArrowUpRight className="size-4" strokeWidth={1.5} />
                    </span>
                    <span className="sr-only">(abre o mapa)</span>
                  </a>
                </motion.li>
              ))}
            </ul>

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              {tips.map((tip, index) => {
                const Icon = tipIcons[tip.icon]
                return (
                  <BlurFade key={tip.title} inView delay={0.1 + index * 0.1}>
                    <div className="flex gap-4">
                      <Icon className="mt-1 size-5 shrink-0 text-gold" strokeWidth={1.4} />
                      <div>
                        <p className="font-display text-xl text-forest">{tip.title}</p>
                        <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tip.text}</p>
                      </div>
                    </div>
                  </BlurFade>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
