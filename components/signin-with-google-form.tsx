"use client";

import { useState } from "react";

import { signInWithGoogle } from "@/app/actions";

import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";

export function SignInWithGoogleForm({ next }: { next?: string }) {
  const [isPending, setIsPending] = useState(false);

  async function handleSignInWithGoogle() {
    try {
      setIsPending(true);
      await signInWithGoogle(next);
    } catch (error) {
      console.error("Sign in error:", error);
      setIsPending(false);
    }
  }

  return (
    <Button
      variant="ghost"
      size="lg"
      onClick={handleSignInWithGoogle}
      disabled={isPending}
      className="focus-ring hover:bg-accent h-12 w-full border text-neutral-700 hover:text-neutral-900"
    >
      {isPending ? (
        <Icons.spinner className="mr-2 size-6 animate-spin" />
      ) : (
        <Icons.google className="mr-2 size-6" />
      )}
      Sign in with Google
    </Button>
  );
}
