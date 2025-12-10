"use client";

import { useState, useTransition } from "react";

import { signOutAction } from "@/app/actions";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserAccountNavClientProps = {
  email: string;
};

export function UserAccountNavClient({ email }: UserAccountNavClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  function handleOpenChange(open: boolean) {
    if (isPending) return;
    setIsOpen(open);
  }

  function handleSignOut() {
    startTransition(async () => {
      try {
        await signOutAction();
      } catch (error) {
        console.error("Sign out failed: ", error);
      }
    });
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={handleOpenChange}>
      <DropdownMenuTrigger className="flex items-center space-x-1 rounded-full px-4 py-2">
        <span className="text-sm font-medium text-neutral-900">My Account</span>
        <Icons.chevronDown className="inline-block size-4 text-neutral-500" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[240px]">
        <div className="flex flex-col gap-2 p-2">
          <div className="flex flex-col space-y-1">
            <p className="text-xs text-neutral-500">Signed in as</p>
            <p className="truncate text-sm font-medium text-neutral-600">
              {email}
            </p>
          </div>
          <Button
            onClick={handleSignOut}
            disabled={isPending}
            className="w-full"
          >
            {isPending ? (
              <>
                <Icons.spinner className="size-4 animate-spin" />
                <span className="text-sm">Sign out</span>
              </>
            ) : (
              <>
                <Icons.logOut className="size-4" />
                <span className="text-sm">Sign out</span>
              </>
            )}
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
