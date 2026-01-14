import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-tyse-turquoise focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-tyse-turquoise text-white hover:bg-tyse-cyan shadow-md hover:shadow-turquoise",
        secondary:
          "bg-tyse-teal text-white hover:bg-tyse-dark-teal shadow-md",
        outline:
          "border-2 border-tyse-turquoise text-tyse-turquoise bg-transparent hover:bg-tyse-turquoise hover:text-white",
        outlineLight:
          "border-2 border-white text-white bg-transparent hover:bg-white hover:text-tyse-dark-teal",
        ghost:
          "text-tyse-teal hover:bg-tyse-light-gray",
        link:
          "text-tyse-turquoise underline-offset-4 hover:underline",
        accent:
          "bg-tyse-orange text-white hover:opacity-90 shadow-md",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 py-2 text-sm",
        lg: "h-14 px-8 py-4 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
