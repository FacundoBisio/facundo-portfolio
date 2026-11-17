import { mergeProps } from "@base-ui/react/merge-props"
import { useRender } from "@base-ui/react/use-render"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

// DESIGN.md › Chips: transparent, line-strong border, mute mono text, 2px radius. Static.
const badgeVariants = cva(
  "group/badge inline-flex w-fit shrink-0 items-center justify-center gap-1 rounded-sm border px-2 py-[3px] text-label whitespace-nowrap [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
    variants: {
      variant: {
        default: "border-line-strong text-muted-foreground",
        secondary: "border-line-strong bg-secondary text-secondary-foreground",
        destructive: "border-destructive text-destructive",
        outline: "border-line-strong text-foreground",
        ghost: "border-transparent text-muted-foreground",
        link: "border-transparent px-0 text-muted-foreground underline underline-offset-4 hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  render,
  ...props
}: useRender.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return useRender({
    defaultTagName: "span",
    props: mergeProps<"span">(
      {
        className: cn(badgeVariants({ variant }), className),
      },
      props
    ),
    render,
    state: {
      slot: "badge",
      variant,
    },
  })
}

export { Badge, badgeVariants }
