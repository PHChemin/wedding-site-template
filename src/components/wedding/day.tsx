import { motion } from "motion/react"
import { CalendarPlus, Church, GlassWater, MapPin, Music, UtensilsCrossed } from "lucide-react"

import { BlurFade } from "@/components/ui/blur-fade"
import { ImageReveal } from "@/components/wedding/image-reveal"
import { SectionHeading } from "@/components/wedding/section-heading"
import { WeddingLink } from "@/components/wedding/wedding-button"
import { calendarUrl, event, photo, schedule } from "@/data/wedding"

const icons = {
  church: Church,
  glass: GlassWater,
  utensils: UtensilsCrossed,
  music: Music,
} as const

export function Day() {
  return (
    <section id="o-dia" className="relative scroll-mt-20 overflow-hidden bg-muted/70 py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 md:grid-cols-[1fr_1.1fr] md:gap-20">
        <div className="md:sticky md:top-28 md:self-start">
          <ImageReveal
            src={photo("venue-chapel.jpg")}
            alt="Capela branca da Fazenda Santa Clara, com porta verde e rosas brancas no caminho"
            shape="arch"
            frame="offset"
            className="mx-auto aspect-[4/5] max-w-sm md:max-w-none"
            imageClassName="aspect-[4/5] object-[60%_center]"
          />
          <BlurFade inView delay={0.2}>
            <p className="mt-8 flex items-center justify-center gap-2 text-sm text-muted-foreground md:justify-start">
              <MapPin className="size-4 text-gold" strokeWidth={1.5} />
              {event.address}
            </p>
          </BlurFade>
        </div>

        <div>
          <SectionHeading
            index="02"
            eyebrow="O dia"
            title="Sábado, 18 de abril"
            intro="Uma tarde inteira na Fazenda Santa Clara, em 2027 — da capela ao celeiro, tudo a poucos passos."
          />

          <ol className="relative mt-12">
            <span className="absolute top-3 bottom-3 left-[21px] w-px bg-gold-soft/40" aria-hidden />
            {schedule.map((moment, index) => {
              const Icon = icons[moment.icon]
              return (
                <motion.li
                  key={moment.title}
                  className="group relative flex gap-6 pb-9 last:pb-0"
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full border border-gold-soft/60 bg-background text-gold transition-colors duration-500 group-hover:border-primary group-hover:bg-primary group-hover:text-cream">
                    <Icon className="size-[18px]" strokeWidth={1.4} />
                  </span>
                  <div className="flex-1 border-b border-border pb-9 group-last:border-b-0 group-last:pb-0">
                    <div className="flex items-baseline justify-between gap-4">
                      <h3 className="font-display text-2xl font-medium text-forest md:text-[1.7rem]">
                        {moment.title}
                      </h3>
                      <span className="font-display text-2xl text-gold italic tabular-nums">
                        {moment.time}
                      </span>
                    </div>
                    <p className="mt-1 text-[0.7rem] tracking-[0.22em] text-sage uppercase">
                      {moment.place}
                    </p>
                    <p className="mt-3 leading-relaxed text-muted-foreground">{moment.note}</p>
                  </div>
                </motion.li>
              )
            })}
          </ol>

          <BlurFade inView delay={0.2}>
            <div className="mt-12 flex flex-col gap-3 sm:flex-row">
              <WeddingLink href={event.mapUrl} target="_blank" rel="noopener noreferrer">
                Abrir no mapa
              </WeddingLink>
              <WeddingLink
                href={calendarUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                icon={<CalendarPlus className="size-4" strokeWidth={1.5} />}
              >
                Salvar na agenda
              </WeddingLink>
            </div>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
