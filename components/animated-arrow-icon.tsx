import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";

type AnimatedArrowIconProps = {
  direction: "left" | "right";
};

export function AnimatedArrowIcon({ direction }: AnimatedArrowIconProps) {
  const Icon = direction === "left" ? Icons.chevronLeft : Icons.chevronRight;

  return (
    <div className="relative size-4 shrink-0 overflow-hidden">
      <Icon
        className={cn(
          "absolute top-0 left-0 size-4 scale-100 transition-all duration-400 ease-out",
          direction === "right"
            ? "group-hover:translate-x-2 group-hover:scale-90 group-hover:opacity-0"
            : "group-hover:-translate-x-2 group-hover:scale-90 group-hover:opacity-0",
        )}
        aria-hidden="true"
      />
      <Icon
        className={cn(
          "absolute top-0 left-0 size-4 scale-90 opacity-0 transition-all duration-400 ease-out",
          direction === "right"
            ? "-translate-x-2 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
            : "translate-x-2 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100",
        )}
        aria-hidden="true"
      />
    </div>
  );
}
