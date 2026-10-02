import { MotionConfig } from "motion/react"

import ClickEffects from "@/components/handmade/click-effects"
import { Countdown } from "@/components/wedding/countdown"
import { Day } from "@/components/wedding/day"
import { DressCode } from "@/components/wedding/dress-code"
import { Gifts } from "@/components/wedding/gifts"
import { Hero } from "@/components/wedding/hero"
import { Lodging } from "@/components/wedding/lodging"
import { MarqueeBand } from "@/components/wedding/marquee-band"
import { Rsvp } from "@/components/wedding/rsvp"
import { SiteFooter } from "@/components/wedding/site-footer"
import { SiteHeader } from "@/components/wedding/site-header"
import { Story } from "@/components/wedding/story"

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="bg-background text-foreground">
        <a
          href="#contagem"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:bg-primary focus:px-3 focus:py-2 focus:text-primary-foreground"
        >
          Ir para o conteúdo
        </a>
        <ClickEffects color="#c4a36a" effectSize={44} duration={0.5} />
        <SiteHeader />
        <main>
          <Hero />
          <Countdown />
          <Story />
          <MarqueeBand items={["Helena & Rafael", "18 · 04 · 2027", "Tiradentes", "Entre oliveiras"]} />
          <Day />
          <DressCode />
          <Lodging />
          <Gifts />
          <MarqueeBand
            reverse
            tone="sage"
            items={["Com amor", "Esperamos vocês", "Até o sim", "Helena & Rafael"]}
          />
          <Rsvp />
        </main>
        <SiteFooter />
      </div>
    </MotionConfig>
  )
}
