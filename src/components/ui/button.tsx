import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// Each variant sets its own border colour: `buttonVariants` is also used without `cn`, so base and variant must not conflict.
// DESIGN.md › Buttons: 2px radius, 44px high, DM Mono label. Focus comes from the global :focus-visible outline.
// Press feedback: a slight scale on :active (an opacity dip under reduced motion).
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-sm border text-label whitespace-nowrap uppercase transition-[color,background-color,border-color,text-decoration-color,opacity,transform] duration-(--dur-fast) ease-(--ease-out) select-none motion-safe:not-aria-disabled:active:scale-[0.97] motion-reduce:not-aria-disabled:active:opacity-80 disabled:pointer-events-none disabled:opacity-50 aria-disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-lime-deep",
        outline:
          "border-line-strong bg-transparent text-foreground hover:bg-secondary aria-expanded:bg-secondary",
        secondary:
          "border-line-strong bg-secondary text-secondary-foreground hover:border-foreground",
        ghost:
          "border-transparent text-muted-foreground hover:text-foreground aria-expanded:text-foreground",
        destructive: "border-destructive bg-transparent text-destructive hover:bg-secondary",
        link: "h-auto! border-transparent px-0! normal-case text-muted-foreground underline decoration-line-strong underline-offset-4 hover:text-foreground hover:decoration-current",
      },
      size: {
        default: "h-11 px-[22px]",
        xs: "h-11 px-3",
        sm: "h-11 px-4",
        lg: "h-12 px-7",
        icon: "size-11",
        "icon-xs": "size-11",
        "icon-sm": "size-11",
        "icon-lg": "size-12",
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
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
