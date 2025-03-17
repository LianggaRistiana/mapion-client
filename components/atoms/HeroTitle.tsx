"use client";

import { cn } from "@/lib/utils";

interface HeroTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function HeroTitle(props: HeroTitleProps) {
  return (
    <div className={cn("hero-title", props.className)} {...props}>
      <h1 className={cn("font-bold")}>{props.title}</h1>
      {props.subtitle && <p className="text-lg">{props.subtitle}</p>}
    </div>
  );
}
