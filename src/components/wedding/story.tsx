import { useRef } from "react"
import { motion, useScroll, useSpring } from "motion/react"

import { BlurFade } from "@/components/ui/blur-fade"
import { TypingAnimation } from "@/components/ui/typing-animation"
import { ImageReveal } from "@/components/wedding/image-reveal"
import { SectionHeading } from "@/components/wedding/section-heading"
import { photo, story } from "@/data/wedding"
import { cn } from "@/lib/utils"

export function Story() {
  const timeline = useRef<HTMLOListElement>(null)
  const { scrollYProgress } = useScroll({
    target: timeline,
    offset: ["start 75%", "end 55%"],
  })
  const line = useSpring(scrollYProgress, { stiffness: 90, damping: 28 })

  return (
    <section id="historia" className="scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-[1.1fr_1fr] md:items-end">
          <SectionHeading
            index="01"
            eyebrow="Nossa história"
            title="Três capítulos até o sim"
          />
          <BlurFade inView delay={0.2} className="md:pb-3">
            <TypingAnimation
              as="p"
              className="font-display text-2xl text-sage italic md:text-3xl"
              typeSpeed={55}
              startOnView
              showCursor
              cursorStyle="line"
            >
              Uma livraria, uma viagem, um amanhecer.
            </TypingAnimation>
          </BlurFade>
        </div>

        <ol ref={timeline} className="relative mt-20 md:mt-28">
          <span
            className="absolute top-0 bottom-0 left-[7px] w-px bg-border md:left-1/2"
            aria-hidden
          />
          <motion.span
            className="absolute top-0 bottom-0 left-[7px] w-px origin-top bg-gradient-to-b from-gold-soft via-gold to-sage md:left-1/2"
            style={{ scaleY: line }}
            aria-hidden
          />

          {story.map((chapter, index) => {
            const right = index % 2 === 1
            return (
              <motion.li
                key={chapter.year}
                className="relative grid gap-8 pb-20 pl-10 last:pb-0 md:grid-cols-2 md:gap-24 md:pb-32 md:pl-0"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
              >
                <motion.span
                  className="absolute top-2 left-0 z-10 flex size-[15px] items-center justify-center rounded-full border border-gold bg-background md:left-1/2 md:-translate-x-1/2"
                  variants={{
                    hidden: { scale: 0 },
                    visible: {
                      scale: 1,
                      transition: { type: "spring", stiffness: 260, damping: 18 },
                    },
                  }}
                  aria-hidden
                >
                  <span className="size-[5px] rounded-full bg-gold" />
                </motion.span>

                <div className={cn(right && "md:order-2")}>
                  <ImageReveal
                    src={photo(chapter.image)}
                    alt={chapter.alt}
                    frame="offset"
                    className="aspect-[4/3]"
                    imageClassName="aspect-[4/3]"
                  />
                </div>

                <div
                  className={cn(
                    "relative md:pt-6",
                    right ? "md:order-1 md:text-right" : "",
                  )}
                >
                  <BlurFade inView>
                    <p
                      className="font-display text-7xl leading-none text-transparent md:text-[7.5rem]"
                      style={{ WebkitTextStroke: "1px var(--color-gold-soft)" }}
                      aria-hidden
                    >
                      {chapter.year}
                    </p>
                    <p className="sr-only">{chapter.year}</p>
                  </BlurFade>
                  <BlurFade inView delay={0.1}>
                    <h3 className="mt-4 font-display text-3xl font-medium text-forest md:text-4xl">
                      {chapter.title}
                    </h3>
                  </BlurFade>
                  <BlurFade inView delay={0.18}>
                    <p
                      className={cn(
                        "mt-4 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg",
                        right && "md:ml-auto",
                      )}
                    >
                      {chapter.text}
                    </p>
                  </BlurFade>
                </div>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
