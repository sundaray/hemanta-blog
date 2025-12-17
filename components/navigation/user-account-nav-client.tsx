"use client";

import { useState, useTransition } from "react";
import Link from "next/link";

import { signOutAction } from "@/app/actions";

import { navbarLinks } from "@/config/navbar";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type UserAccountNavClientProps = {
  email: string;
};

// You can also import this from a shared config file if you prefer
const ADMIN_EMAIL = "rawgrittt@gmail.com";

export function UserAccountNavClient({ email }: UserAccountNavClientProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const isAdmin = email === ADMIN_EMAIL;

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
      <DropdownMenuTrigger className="focus-ring flex items-center space-x-1 rounded-full px-4 py-2 outline-none hover:bg-neutral-100">
        <span className="text-sm font-medium text-neutral-900">My Account</span>
        <Icons.chevronDown className="inline-block size-4 text-neutral-500" />
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="z-200 w-60">
        <div className="flex flex-col gap-2 p-2">
          <div className="flex flex-col space-y-1">
            <p className="text-xs text-neutral-500">Signed in as</p>
            <p className="truncate text-sm font-medium text-neutral-600">
              {email}
            </p>
          </div>
        </div>

        {isAdmin && (
          <>
            <DropdownMenuSeparator />
            {navbarLinks.admin.map((link) => (
              <DropdownMenuItem key={link.href} asChild>
                <Link
                  href={link.href}
                  className="flex cursor-pointer items-center gap-2 text-neutral-700 focus:bg-neutral-100 focus:text-neutral-900"
                >
                  <Icons.admin className="size-4" />
                  <span className="font-medium">{link.title}</span>
                </Link>
              </DropdownMenuItem>
            ))}
            <DropdownMenuSeparator />
          </>
        )}

        {!isAdmin && <DropdownMenuSeparator />}

        <div className="p-2">
          <Button
            onClick={handleSignOut}
            disabled={isPending}
            className="w-full"
            variant="default"
          >
            {isPending ? (
              <>
                <Icons.spinner className="mr-2 size-4 animate-spin" />
                <span className="text-sm">Sign out</span>
              </>
            ) : (
              <>
                <Icons.logOut className="mr-2 size-4" />
                <span className="text-sm">Sign out</span>
              </>
            )}
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
