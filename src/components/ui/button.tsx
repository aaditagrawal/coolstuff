"use client";

import * as stylex from "@stylexjs/stylex";
import { uiStyles } from "./primitives.stylex";
import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import type { ClassValue } from "clsx";
import { cn } from "@/lib/utils";

interface ButtonVariantOptions {
  variant?: "default" | "secondary" | "outline" | "ghost" | "link" | null;
  size?: "default" | "sm" | "lg" | "icon" | null;
  className?: ClassValue;
  class?: ClassValue;
}

function buttonVariants(options: ButtonVariantOptions = {}) {
  const variant = options.variant === undefined ? "default" : options.variant;
  const size = options.size === undefined ? "default" : options.size;
  return cn(
    stylex.props(
      uiStyles.button,
      variant === "outline" && uiStyles.outline,
      variant === "link" && uiStyles.link,
      size === "default" && uiStyles.sizeDefault,
      size === "sm" && uiStyles.sizeSm,
      size === "lg" && uiStyles.sizeLg,
      size === "icon" && uiStyles.sizeIcon,
    ).className,
    options.className,
    options.class,
  );
}

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    Pick<ButtonVariantOptions, "variant" | "size"> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = (asChild ? Slot : "button") as React.ElementType;
    return (
      <Comp ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
