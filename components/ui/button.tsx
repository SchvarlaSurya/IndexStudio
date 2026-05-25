"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[100px] font-bold text-base transition-all duration-300 ease-out disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-orange-500 to-amber-400 text-white shadow-[0_6px_0_0_#CC6D00] hover:shadow-[0_10px_0_0_#CC6D00] hover:translate-y-[-4px] active:shadow-[0_2px_0_0_#CC6D00] active:translate-y-[2px]",
        secondary:
          "bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-[0_6px_0_0_#5C3A96] hover:shadow-[0_10px_0_0_#5C3A96] hover:translate-y-[-4px] active:shadow-[0_2px_0_0_#5C3A96] active:translate-y-[2px]",
        tertiary:
          "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-[0_6px_0_0_#2D6FD9] hover:shadow-[0_10px_0_0_#2D6FD9] hover:translate-y-[-4px] active:shadow-[0_2px_0_0_#2D6FD9] active:translate-y-[2px]",
        accent:
          "bg-gradient-to-r from-coral-500 to-peach-400 text-white shadow-[0_6px_0_0_#CC4444] hover:shadow-[0_10px_0_0_#CC4444] hover:translate-y-[-4px] active:shadow-[0_2px_0_0_#CC4444] active:translate-y-[2px]",
        outline:
          "border-4 border-orange-500 bg-transparent text-orange-600 hover:bg-orange-50 hover:border-orange-600 active:bg-orange-100",
        ghost:
          "bg-white/80 text-purple-600 hover:bg-white hover:text-purple-700 hover:shadow-lg",
        link: "text-orange-600 underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-10 px-5 py-2 text-sm shadow-[0_4px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_6px_0_0_rgba(0,0,0,0.15)] hover:translate-y-[-2px]",
        default: "h-14 px-8 py-3 text-base",
        lg: "h-16 px-10 py-4 text-lg shadow-[0_8px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_12px_0_0_rgba(0,0,0,0.15)] hover:translate-y-[-4px]",
        xl: "h-20 px-12 py-5 text-xl shadow-[0_10px_0_0_rgba(0,0,0,0.15)] hover:shadow-[0_16px_0_0_rgba(0,0,0,0.15)] hover:translate-y-[-6px]",
        icon: "h-14 w-14 rounded-full shadow-[0_4px_0_0_rgba(0,0,0,0.15)]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
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
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };