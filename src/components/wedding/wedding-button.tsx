import type { ComponentPropsWithoutRef, ReactNode } from "react"
import { ArrowRight } from "lucide-react"

import { cn } from "@/lib/utils"

const variants = {
  solid: {
    base: "bg-primary text-primary-foreground",
    sweep: "bg-forest",
  },
  outline: {
    base: "border border-primary/70 text-primary hover:text-primary-foreground",
    sweep: "bg-primary",
  },
  light: {
    base: "bg-cream text-primary",
    sweep: "bg-sage-light",
  },
  "outline-light": {
    base: "border border-cream/70 text-cream hover:text-primary",
    sweep: "bg-cream",
  },
} as const

export type WeddingButtonVariant = keyof typeof variants

type Shared = {
  variant?: WeddingButtonVariant
  icon?: ReactNode | false
  size?: "md" | "sm"
  children: ReactNode
}

function classes(variant: WeddingButtonVariant, size: "md" | "sm", className?: string) {
  return cn(
    "group/wb relative isolate inline-flex items-center justify-center gap-3 overflow-hidden font-medium whitespace-nowrap uppercase transition-colors duration-500 ease-soft",
    size === "md"
      ? "min-h-12 px-7 text-[0.74rem] tracking-[0.22em]"
      : "min-h-10 px-5 text-[0.68rem] tracking-[0.2em]",
    variants[variant].base,
    className,
  )
}

function Inner({ variant, icon, children }: Required<Pick<Shared, "variant">> & Pick<Shared, "icon" | "children">) {
  return (
    <>
      <span
        className={cn(
          "absolute inset-0 -z-10 origin-left scale-x-0 transition-transform duration-500 ease-soft group-hover/wb:scale-x-100",
          variants[variant].sweep,
        )}
        aria-hidden
      />
      <span>{children}</span>
      {icon !== false && (
        <span
          className="inline-flex transition-transform duration-500 ease-soft group-hover/wb:translate-x-1"
          aria-hidden
        >
          {icon ?? <ArrowRight className="size-3.5" strokeWidth={1.5} />}
        </span>
      )}
    </>
  )
}

export function WeddingLink({
  variant = "solid",
  icon,
  size = "md",
  className,
  children,
  ...props
}: Shared & Omit<ComponentPropsWithoutRef<"a">, "children">) {
  return (
    <a className={classes(variant, size, className)} {...props}>
      <Inner variant={variant} icon={icon}>
        {children}
      </Inner>
    </a>
  )
}

export function WeddingButton({
  variant = "solid",
  icon,
  size = "md",
  className,
  children,
  type = "button",
  ...props
}: Shared & Omit<ComponentPropsWithoutRef<"button">, "children">) {
  return (
    <button type={type} className={classes(variant, size, className)} {...props}>
      <Inner variant={variant} icon={icon}>
        {children}
      </Inner>
    </button>
  )
}
