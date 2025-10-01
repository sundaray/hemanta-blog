import { cn } from "@/lib/utils";
import { BiSolidLeftArrow, BiSolidRightArrow } from "react-icons/bi";

type AnimatedArrowIconProps = {
  direction: "left" | "right";
};

export function AnimatedArrowIcon({ direction }: AnimatedArrowIconProps) {
  const Icon = direction === "left" ? BiSolidLeftArrow : BiSolidRightArrow;

  return (
    <div className="relative size-2.5 shrink-0 overflow-hidden">
      <Icon
        className={cn(
          "duration-400 absolute left-0 top-0 size-2.5 scale-100 transition-all ease-out",
          "text-foreground/50",
          direction === "right"
            ? "group-hover:translate-x-2 group-hover:scale-95 group-hover:opacity-0"
            : "group-hover:-translate-x-2 group-hover:scale-95 group-hover:opacity-0",
        )}
        aria-hidden="true"
      />
      <Icon
        className={cn(
          "duration-400 absolute left-0 top-0 size-2.5 scale-95 opacity-0 transition-all ease-out",
          "text-foreground",
          direction === "right"
            ? "-translate-x-2 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100"
            : "translate-x-2 group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100",
        )}
        aria-hidden="true"
      />
    </div>
  );
}
