import * as stylex from "@stylexjs/stylex";
import { uiStyles } from "./primitives.stylex";
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(stylex.props(uiStyles.badge).className, {
  variants: {
    variant: {
      default: "",
      outline: stylex.props(uiStyles.border).className,
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
