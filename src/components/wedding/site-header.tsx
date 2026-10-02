import { useEffect, useState } from "react"
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from "motion/react"
import { X } from "lucide-react"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Monogram, OliveBranch } from "@/components/wedding/ornaments"
import { WeddingLink } from "@/components/wedding/wedding-button"
import { couple, event, nav } from "@/data/wedding"
import { cn } from "@/lib/utils"

const daysLeft = Math.max(
  0,
  Math.floor((new Date(event.iso).getTime() - Date.now()) / 86_400_000),
)

function useActiveSection() {
  const [active, setActive] = useState<string>("")

  useEffect(() => {
    const ids = nav.map((item) => item.href.slice(1))
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`)
        }
      },
      { rootMargin: "-45% 0px -50% 0px" },
    )
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return active
}

export function SiteHeader() {
  const [solid, setSolid] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [open, setOpen] = useState(false)
  const active = useActiveSection()

  const { scrollY, scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30 })

  useMotionValueEvent(scrollY, "change", (y) => {
    const delta = y - (scrollY.getPrevious() ?? 0)
    setSolid(y > 40)
    if (y < 640) setHidden(false)
    else if (delta > 4) setHidden(true)
    else if (delta < -4) setHidden(false)
  })

  const light = !solid

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-40"
      animate={{ y: hidden && !open ? "-100%" : "0%" }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={cn(
          "absolute inset-0 -z-10 transition-all duration-500 ease-soft",
          solid
            ? "border-b border-border/70 bg-background/85 shadow-[0_10px_40px_-30px_rgba(36,48,38,0.6)] backdrop-blur-md"
            : "bg-gradient-to-b from-forest/45 to-transparent",
        )}
        aria-hidden
      />

      <div
        className={cn(
          "mx-auto flex max-w-6xl items-center justify-between px-5 transition-[height] duration-500 ease-soft md:px-8",
          solid ? "h-16" : "h-20 md:h-24",
        )}
      >
        <a
          href="#inicio"
          className="group flex items-center gap-3"
          aria-label={`${couple.bride} e ${couple.groom} — voltar ao início`}
        >
          <Monogram
            tone={light ? "light" : "dark"}
            className="transition-transform duration-700 ease-soft group-hover:rotate-[8deg]"
          />
          <span
            className={cn(
              "hidden font-display text-lg tracking-wide transition-colors duration-500 sm:block",
              light ? "text-cream" : "text-forest",
            )}
          >
            {couple.bride}
            <span className="mx-1.5 text-gold-soft italic">&</span>
            {couple.groom}
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Seções">
          {nav.map((item) => {
            const isActive = active === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "group relative px-3.5 py-2 text-[0.72rem] tracking-[0.2em] uppercase transition-colors duration-300",
                  light
                    ? "text-cream/85 hover:text-cream"
                    : isActive
                      ? "text-forest"
                      : "text-ink-muted hover:text-forest",
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 transition-transform duration-500 ease-soft group-hover:scale-x-100",
                    light ? "bg-cream/70" : "bg-gold-soft/70",
                  )}
                  aria-hidden
                />
                {isActive && !light && (
                  <motion.span
                    layoutId="nav-active"
                    className="absolute inset-x-3.5 bottom-1 h-px bg-gold"
                    transition={{ type: "spring", stiffness: 380, damping: 34 }}
                    aria-hidden
                  />
                )}
              </a>
            )
          })}
          <WeddingLink
            href="#rsvp"
            size="sm"
            variant={light ? "light" : "solid"}
            className="ml-4"
          >
            Confirmar
          </WeddingLink>
        </nav>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className={cn(
              "group relative inline-flex h-11 items-center gap-3 pl-3 text-[0.7rem] tracking-[0.24em] uppercase lg:hidden",
              light ? "text-cream" : "text-forest",
            )}
            aria-label="Abrir menu"
          >
            <span className="hidden sm:inline">Menu</span>
            <span className="flex w-7 flex-col items-end gap-[6px]" aria-hidden>
              <span className="h-px w-7 bg-current transition-all duration-500 ease-soft group-hover:w-5" />
              <span className="h-px w-5 bg-current transition-all duration-500 ease-soft group-hover:w-7" />
            </span>
          </SheetTrigger>

          <SheetContent
            side="right"
            showCloseButton={false}
            className="overflow-hidden border-l-0 bg-background p-0 data-[side=right]:w-full data-[side=right]:sm:max-w-md"
          >
            <OliveBranch
              className="pointer-events-none absolute -right-16 bottom-24 w-[22rem] rotate-[-18deg] text-sage/30"
              strokeWidth={0.6}
              delay={0.2}
            />

            <div className="flex h-20 items-center justify-between border-b border-border px-6">
              <div className="flex items-center gap-3">
                <Monogram />
                <div>
                  <SheetTitle className="font-display text-xl font-medium text-forest">
                    {couple.bride} & {couple.groom}
                  </SheetTitle>
                  <SheetDescription className="text-[0.68rem] tracking-[0.2em] text-muted-foreground uppercase">
                    {event.date}
                  </SheetDescription>
                </div>
              </div>
              <SheetClose
                className="inline-flex size-11 items-center justify-center rounded-full border border-border text-forest transition-colors hover:border-gold-soft hover:text-gold"
                aria-label="Fechar menu"
              >
                <X className="size-4" strokeWidth={1.5} />
              </SheetClose>
            </div>

            <nav className="relative flex-1 overflow-y-auto px-6 pt-6" aria-label="Seções">
              <AnimatePresence>
                {open &&
                  nav.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 32 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{
                        delay: 0.12 + index * 0.06,
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <SheetClose asChild>
                        <a
                          href={item.href}
                          className="group flex items-baseline gap-5 border-b border-border/80 py-5"
                        >
                          <span className="w-6 font-display text-sm text-gold italic">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="font-display text-[2rem] leading-none text-forest transition-transform duration-500 ease-soft group-hover:translate-x-2">
                            {item.label}
                          </span>
                          <span
                            className={cn(
                              "ml-auto size-1.5 rounded-full transition-colors",
                              active === item.href ? "bg-gold" : "bg-transparent",
                            )}
                            aria-hidden
                          />
                        </a>
                      </SheetClose>
                    </motion.div>
                  ))}
              </AnimatePresence>
            </nav>

            <motion.div
              className="relative border-t border-border bg-muted/60 px-6 py-6"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-display text-lg text-forest italic">
                Faltam {daysLeft} dias · {event.city}
              </p>
              <SheetClose asChild>
                <WeddingLink href="#rsvp" className="mt-4 w-full">
                  Confirmar presença
                </WeddingLink>
              </SheetClose>
            </motion.div>
          </SheetContent>
        </Sheet>
      </div>

      <motion.div
        className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-gradient-to-r from-sage via-gold-soft to-gold"
        style={{ scaleX: progress, opacity: solid ? 1 : 0 }}
        aria-hidden
      />
    </motion.header>
  )
}
