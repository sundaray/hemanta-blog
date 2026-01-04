"use server";

import { signIn, signOut } from "@/auth";
import { LucidAuthError } from "lucidauth/core/errors";

import { rethrowIfRedirect } from "@/lib/auth/next-redirect";

export async function signInWithGoogle(redirectTo: string = "/admin") {
  try {
    await signIn("google", { redirectTo: redirectTo });
  } catch (error) {
    rethrowIfRedirect(error);

    console.log("signInWithGoogle error: ", error);

    if (error instanceof LucidAuthError) {
      return { error: "Google sign-in failed. Please try again." };
    }
    return {
      error: "Something went wrong. Please try again.",
    };
  }
}

export async function signOutAction() {
  try {
    await signOut({ redirectTo: "/" });
  } catch (error) {
    rethrowIfRedirect(error);
    return { error: "Something went wrong during sign out." };
  }
}
