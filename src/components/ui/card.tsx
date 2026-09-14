import * as stylex from "@stylexjs/stylex";
import { uiStyles } from "./primitives.stylex";
import * as React from "react";
import { cn } from "@/lib/utils";

export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(stylex.props(uiStyles.card).className, className)} {...props} />;
}

export function CardHeader({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      data-card-header
      className={cn(stylex.props(uiStyles.cardHeader).className, className)}
      {...props}
    />
  );
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={cn(stylex.props(uiStyles.cardTitle).className, className)} {...props} />;
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn(stylex.props(uiStyles.cardDescription).className, className)} {...props} />
  );
}

export function CardContent({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(stylex.props(uiStyles.cardContent).className, className)} {...props} />;
}

export function CardFooter({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn(stylex.props(uiStyles.cardFooter).className, className)} {...props} />;
}
