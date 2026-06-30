import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-label font-semibold uppercase tracking-widest transition-all disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground hover:-translate-y-0.5 hover:shadow-xl",
        accent:
          "bg-vibrant-steel-blue text-white shadow-xl hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(45,90,136,0.6)]",
        outline:
          "border border-white/30 bg-white/10 text-white backdrop-blur-md hover:bg-white/20",
        ghost: "hover:bg-surface-container",
        link: "text-vibrant-steel-blue underline-offset-4 hover:underline",
      },
      size: {
        default: "px-8 py-3.5",
        sm: "px-6 py-3",
        lg: "px-10 py-4",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
