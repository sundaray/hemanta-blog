"use client";

import { useState } from "react";

import { Check, Copy } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const iconVariants = {
  initial: {
    opacity: 0,
    filter: "blur(2px)",
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    scale: 1,
  },
  exit: {
    opacity: 0,
    filter: "blur(2px)",
    scale: 0.95,
  },
};

export function CopyButton({ text }: { text: string }) {
  const [isCopied, setIsCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 2500);
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <button
          disabled={isCopied}
          onClick={copy}
          className="focus-ring relative flex size-8 cursor-pointer items-center justify-center rounded-md text-neutral-700 transition hover:bg-neutral-200/60 active:scale-[0.97] dark:hover:bg-neutral-800"
        >
          <AnimatePresence initial={false} mode="wait">
            {isCopied ? (
              <motion.div
                key="check"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute"
              >
                <Check size={15} />
              </motion.div>
            ) : (
              <motion.div
                key="copy"
                variants={iconVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.15, ease: "easeOut" }}
                className="absolute"
              >
                <Copy size={15} />
              </motion.div>
            )}
          </AnimatePresence>
        </button>
      </TooltipTrigger>
      <TooltipContent>
        <p>{isCopied ? "Copied!" : "Copy code"}</p>
      </TooltipContent>
    </Tooltip>
  );
}
