import { BlurFade } from "@/components/ui/blur-fade"
import { Particles } from "@/components/ui/particles"
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { Flourish, OliveBranch } from "@/components/wedding/ornaments"
import { SectionHeading } from "@/components/wedding/section-heading"
import { WeddingLink } from "@/components/wedding/wedding-button"
import { contact, couple, event, whatsappHref } from "@/data/wedding"

export function Rsvp() {
  return (
    <section
      id="rsvp"
      className="relative scroll-mt-20 overflow-hidden bg-primary py-28 text-primary-foreground md:py-40"
    >
      <Particles
        className="absolute inset-0"
        quantity={40}
        size={0.5}
        color="#e8d6ae"
        staticity={70}
        ease={90}
      />
      <OliveBranch
        className="pointer-events-none absolute top-16 -left-24 w-[26rem] rotate-[30deg] text-cream/15 md:-left-10"
        strokeWidth={0.6}
      />
      <OliveBranch
        flip
        className="pointer-events-none absolute -right-24 bottom-16 w-[26rem] rotate-[30deg] text-cream/15 md:-right-10"
        strokeWidth={0.6}
        delay={0.3}
      />
      <div
        className="pointer-events-none absolute inset-4 border border-cream/10 md:inset-8"
        aria-hidden
      />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <SectionHeading
          index="06"
          eyebrow="Confirmação"
          title="Nos encontrem em Tiradentes"
          align="center"
          tone="light"
          intro={
            <>
              Respondam até <span className="text-cream">{event.rsvpBy}</span>. Uma
              mensagem já confirma — digam os nomes e se vão ficar para o jantar.
            </>
          }
        />

        <BlurFade inView delay={0.35}>
          <div className="mt-12 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <ShimmerButton
              onClick={() => window.open(whatsappHref(), "_blank", "noopener,noreferrer")}
              background="#f7f4ee"
              shimmerColor="#c4a36a"
              shimmerDuration="2.8s"
              borderRadius="0px"
              className="min-h-14 border-cream px-9 text-[0.76rem] font-medium tracking-[0.22em] text-primary uppercase"
            >
              Confirmar pelo WhatsApp
            </ShimmerButton>
            <WeddingLink
              href={`mailto:${contact.email}?subject=${encodeURIComponent(`Presença — ${couple.bride} e ${couple.groom}`)}`}
              variant="outline-light"
              className="min-h-14"
            >
              Ou por e-mail
            </WeddingLink>
          </div>
        </BlurFade>

        <BlurFade inView delay={0.5}>
          <Flourish tone="light" className="mt-14" />
          <p className="mt-5 text-sm text-cream/60">
            Número e e-mail fictícios, neste convite de demonstração.
          </p>
        </BlurFade>
      </div>
    </section>
  )
}
