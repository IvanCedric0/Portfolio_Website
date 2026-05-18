import { cn } from "@/lib/utils";

interface TechBadgeProps {
  label: string;
  className?: string;
}

export default function TechBadge({ label, className }: TechBadgeProps) {
  return (
    <span className={cn("badge-tech", className)}>
      {label}
    </span>
  );
}
