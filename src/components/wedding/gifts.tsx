import { useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Check, Copy } from "lucide-react"

import { BlurFade } from "@/components/ui/blur-fade"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { OliveBranch } from "@/components/wedding/ornaments"
import { SectionHeading } from "@/components/wedding/section-heading"
import { contact, giftIdeas } from "@/data/wedding"

export function Gifts() {
  const [copied, setCopied] = useState(false)

  async function copyPix() {
    let ok = false
    try {
      await navigator.clipboard.writeText(contact.pix)
      ok = true
    } catch {
      const area = document.createElement("textarea")
      area.value = contact.pix
      area.setAttribute("readonly", "")
      area.style.position = "fixed"
      area.style.left = "-999px"
      document.body.append(area)
      area.select()
      ok = document.execCommand("copy")
      area.remove()
    }
    setCopied(ok)
    if (ok) window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <section id="presentes" className="scroll-mt-20 py-24 md:py-36">
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          index="05"
          eyebrow="Presentes"
          title="A presença já basta"
          align="center"
          intro="Se quiserem nos presentear, a lua de mel nos leva de volta a Ouro Preto e segue até o litoral. Qualquer valor vira memória."
        />

        <div className="mt-16 grid gap-12 md:grid-cols-[1.15fr_1fr] md:items-center">
          <BlurFade inView>
            <div className="relative border border-gold-soft/60 p-2">
              <div className="relative overflow-hidden border border-gold-soft/40 bg-surface px-6 py-10 text-center md:px-10 md:py-12">
                <OliveBranch
                  className="pointer-events-none absolute -top-2 -left-6 w-40 rotate-[24deg] text-sage/30"
                  strokeWidth={0.7}
                />
                <OliveBranch
                  flip
                  className="pointer-events-none absolute -right-6 -bottom-2 w-40 rotate-[24deg] text-sage/30"
                  strokeWidth={0.7}
                  delay={0.2}
                />
                <p className="text-[0.66rem] tracking-[0.32em] text-gold uppercase">Chave PIX</p>
                <p className="mt-4 font-display text-[1.6rem] break-all text-forest md:text-3xl">
                  {contact.pix}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Helena Duarte · chave fictícia de demonstração
                </p>

                <ShimmerButton
                  onClick={copyPix}
                  background="var(--color-brand)"
                  shimmerColor="#e8d6ae"
                  shimmerDuration="3.2s"
                  borderRadius="0px"
                  className="mx-auto mt-8 min-h-12 gap-3 px-8 text-[0.74rem] font-medium tracking-[0.22em] uppercase"
                  aria-live="polite"
                >
                  <AnimatePresence mode="wait" initial={false}>
                    <motion.span
                      key={copied ? "ok" : "idle"}
                      className="flex items-center gap-3"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {copied ? (
                        <Check className="size-4" strokeWidth={1.8} />
                      ) : (
                        <Copy className="size-4" strokeWidth={1.5} />
                      )}
                      {copied ? "Chave copiada" : "Copiar chave"}
                    </motion.span>
                  </AnimatePresence>
                </ShimmerButton>
              </div>
            </div>
          </BlurFade>

          <div>
            <BlurFade inView delay={0.1}>
              <p className="font-display text-2xl text-forest italic">Ideias para a viagem</p>
            </BlurFade>
            <ul className="mt-5">
              {giftIdeas.map((idea, index) => (
                <motion.li
                  key={idea.label}
                  className="group flex items-baseline gap-4 border-b border-border py-5"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + index * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="text-forest transition-transform duration-500 ease-soft group-hover:translate-x-1.5">
                    {idea.label}
                  </span>
                  <span className="mb-1 flex-1 border-b border-dotted border-gold-soft/60" aria-hidden />
                  <span className="font-display text-xl text-gold [font-variant-numeric:lining-nums_tabular-nums]">
                    {idea.value}
                  </span>
                </motion.li>
              ))}
            </ul>
            <BlurFade inView delay={0.4}>
              <p className="mt-5 text-sm text-muted-foreground">
                É só enviar pelo PIX e, se quiserem, contar no WhatsApp qual foi.
              </p>
            </BlurFade>
          </div>
        </div>
      </div>
    </section>
  )
}
