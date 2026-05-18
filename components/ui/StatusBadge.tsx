import { cn } from "@/lib/utils";

type Status = "production" | "in-progress" | "completed";

const CONFIG: Record<Status, { label: string; dot: string; text: string; bg: string }> = {
  production: {
    label: "Live",
    dot: "bg-status-live",
    text: "text-status-live",
    bg: "bg-status-live/10 border-status-live/20",
  },
  "in-progress": {
    label: "In Progress",
    dot: "bg-status-wip",
    text: "text-status-wip",
    bg: "bg-status-wip/10 border-status-wip/20",
  },
  completed: {
    label: "Completed",
    dot: "bg-status-done",
    text: "text-status-done",
    bg: "bg-status-done/10 border-status-done/20",
  },
};

interface StatusBadgeProps {
  status: Status;
  className?: string;
}

export default function StatusBadge({ status, className }: StatusBadgeProps) {
  const c = CONFIG[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-semibold rounded-full border",
        c.bg,
        c.text,
        className
      )}
    >
      <span className={cn("w-1.5 h-1.5 rounded-full", status === "production" && "animate-pulse", c.dot)} />
      {c.label}
    </span>
  );
}
