"use client"

import * as React from "react"
import {useState} from "react"
import {motion, AnimatePresence} from "motion/react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

type Ripple = {
  key:number,
  x: number, 
  y: number
}

const buttonVariants = cva(
  "relative overflow-hidden inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {  
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  const [ripples, setRipples] = useState<Ripple[]>([])

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    props.onClick?.(e)

    const buttonBoundingBox = e.currentTarget.getBoundingClientRect()
    
    const newRipple = {
      key: Date.now(),
      x: e.clientX - buttonBoundingBox.left,
      y: e.clientY - buttonBoundingBox.top
    }

    setRipples(prev => [...prev, newRipple])
  }

  const handleAnimationComplete = (key: number) => {
    setRipples(prev => prev.filter(ripple => ripple.key !== key))
  }

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
      onClick={handleClick}
    >
      <AnimatePresence>
        {ripples.map(({ key, x, y }) => (
          <motion.div
            key={key}
            className="absolute rounded-full bg-current/20"
            style={{ left: x, top: y, x: "-50%", y: "-50%" }}
            initial={{ width: 0, height: 0, opacity: 0.5 }}
            animate={{ width: 400, height: 400, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            onAnimationComplete={() => handleAnimationComplete(key)}
          />
        ))}
      </AnimatePresence>
      {props.children}
      </Comp>
  )
}

export { Button, buttonVariants }
