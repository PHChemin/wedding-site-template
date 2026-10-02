import { motion } from "motion/react"
import { Check, Minus } from "lucide-react"

import { BlurFade } from "@/components/ui/blur-fade"
import { ImageReveal } from "@/components/wedding/image-reveal"
import { SectionHeading } from "@/components/wedding/section-heading"
import { palette, photo } from "@/data/wedding"

const yes = ["Linho, seda e tecidos leves", "Tons de sálvia, areia e dourado", "Sapato que aguente grama"]
const avoid = ["Branco — fica com a noiva", "Preto da cabeça aos pés", "Salto fino"]

export function DressCode() {
  return (
    <section id="traje" className="scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-[1.1fr_1fr] md:gap-20">
        <div>
          <SectionHeading
            index="03"
            eyebrow="Dress code"
            title="Esporte fino, em tons de jardim"
            intro="O dia é ao ar livre e a paleta é a da festa. Venham confortáveis para dançar entre as oliveiras."
          />

          <ul className="mt-10 grid max-w-md grid-cols-4 gap-2 sm:gap-x-7">
            {palette.map((swatch, index) => (
              <motion.li
                key={swatch.name}
                className="group flex flex-col items-center gap-2"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 + index * 0.08, duration: 0.6 }}
              >
                <span
                  className="relative size-12 rounded-full shadow-[inset_0_0_0_1px_rgba(0,0,0,0.06)] transition-transform duration-500 ease-soft group-hover:-translate-y-1 group-hover:scale-110 sm:size-14"
                  style={{ backgroundColor: swatch.hex }}
                  aria-hidden
                >
                  <span className="absolute -inset-1.5 rounded-full border border-gold-soft/0 transition-colors duration-500 group-hover:border-gold-soft/70" />
                </span>
                <span className="text-[0.62rem] tracking-[0.12em] text-forest uppercase sm:text-xs sm:tracking-[0.18em]">
                  {swatch.name}
                </span>
              </motion.li>
            ))}
          </ul>

          <BlurFade inView delay={0.2}>
            <div className="mt-12 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <p className="font-display text-xl text-forest italic">Sim, por favor</p>
                <ul className="mt-3 space-y-2.5 text-muted-foreground">
                  {yes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check className="mt-1 size-3.5 shrink-0 text-sage" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="font-display text-xl text-forest italic">Melhor evitar</p>
                <ul className="mt-3 space-y-2.5 text-muted-foreground">
                  {avoid.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Minus className="mt-1 size-3.5 shrink-0 text-gold" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </BlurFade>
        </div>

        <div className="relative">
          <ImageReveal
            src={photo("table-detail.jpg")}
            alt="Mesa posta com linho creme, guardanapo sálvia e talheres dourados"
            frame="inset"
            className="aspect-[4/5]"
            imageClassName="aspect-[4/5]"
          />
          <BlurFade
            inView
            delay={0.4}
            className="absolute -bottom-8 -left-4 max-w-[15rem] bg-background px-6 py-5 shadow-[0_24px_60px_-30px_rgba(36,48,38,0.45)] md:-left-12"
          >
            <p className="font-display text-lg leading-snug text-forest italic">
              “Se estiver em dúvida, pense na cor das folhas de oliveira.”
            </p>
            <p className="mt-2 text-[0.65rem] tracking-[0.24em] text-gold uppercase">Helena</p>
          </BlurFade>
        </div>
      </div>
    </section>
  )
}
