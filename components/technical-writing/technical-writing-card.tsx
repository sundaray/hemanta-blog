"use client";

import Image from "next/image";

import type { KodeKloudPost } from "@/types";

import { cn } from "@/lib/utils";

import { Icons } from "@/components/icons";

type TechnicalWritingCardProps = {
  post: KodeKloudPost;
  className?: string;
};

export function TechnicalWritingCard({
  post,
  className,
}: TechnicalWritingCardProps) {
  return (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg",
        "bg-gradient-to-bl from-neutral-100 to-neutral-50",
        "shadow-[inset_-2px_2px_#fff,_-4px_4px_10px_rgb(0_0_0_/_0.1)]",
        "has-[a:focus-visible]:ring-ring has-[a:focus-visible]:ring-2",
        "has-[a:focus-visible]:[&_a]:outline-none",
        "has-[a:focus-visible]:-translate-y-1",
        "hover:-translate-y-1",
        className,
      )}
    >
      <div className="relative aspect-[1.91/1] w-full">
        <Image
          src={`/images/kodekloud/${post.image}`}
          alt={post.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className={cn("object-cover")}
        />
      </div>

      <div className="flex flex-1 flex-col p-4">
        <h3 className="text-pretty font-semibold transition-colors group-hover:text-sky-700">
          <a
            href={post.href}
            target="_blank"
            rel="noopener noreferrer"
            className="before:absolute before:inset-0 before:z-10 before:rounded-lg before:content-['']"
          >
            {post.title}
          </a>
        </h3>

        <div className="mt-auto flex items-end justify-between pt-4">
          <p className="text-muted-foreground text-sm">
            {new Date(post.publishedAt).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <div
            aria-hidden="true"
            className="relative inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-600 transition-colors group-hover:text-sky-700"
          >
            Read More
            <Icons.arrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </div>
  );
}
