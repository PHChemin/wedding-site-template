import { ArrowUp } from "lucide-react"

import { BlurFade } from "@/components/ui/blur-fade"
import { Monogram, OliveBranch } from "@/components/wedding/ornaments"
import { couple, event, nav } from "@/data/wedding"

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden px-6 pt-24 pb-10">
      <div className="mx-auto max-w-5xl text-center">
        <BlurFade inView>
          <div className="flex items-center justify-center gap-5 text-gold-soft">
            <OliveBranch flip className="w-28 md:w-40" strokeWidth={0.8} />
            <Monogram className="size-16 text-xl" />
            <OliveBranch className="w-28 md:w-40" strokeWidth={0.8} delay={0.15} />
          </div>
        </BlurFade>

        <BlurFade inView delay={0.15}>
          <p className="mt-8 font-script text-6xl text-forest md:text-7xl">
            {couple.bride} & {couple.groom}
          </p>
          <p className="mt-3 text-[0.7rem] tracking-[0.32em] text-muted-foreground uppercase">
            {event.date} · {event.city}
          </p>
        </BlurFade>

        <nav
          className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-3"
          aria-label="Rodapé"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[0.7rem] tracking-[0.22em] text-forest/80 uppercase underline-offset-8 transition-colors hover:text-gold hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="mt-14 flex flex-col items-center justify-between gap-6 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs tracking-wide text-muted-foreground">
            Convite demonstrativo · casal fictício · {year}
          </p>
          <a
            href="#inicio"
            className="group inline-flex items-center gap-3 text-[0.7rem] tracking-[0.24em] text-forest uppercase"
          >
            Voltar ao topo
            <span className="flex size-10 items-center justify-center rounded-full border border-border transition-all duration-500 ease-soft group-hover:-translate-y-1 group-hover:border-gold-soft group-hover:text-gold">
              <ArrowUp className="size-4" strokeWidth={1.5} />
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
