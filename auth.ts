import { lucidAuth } from "lucidauth/next-js";
import { Google } from "lucidauth/providers/google";

import { createGoogleUser } from "@/lib/auth/callbacks";

export const {
  signIn,
  signOut,
  getUserSession,
  extendUserSessionMiddleware,
  handler,
} = lucidAuth({
  baseUrl: process.env.BASE_URL!,
  session: {
    secret: process.env.SESSION_SECRET!,
    maxAge: 60 * 60 * 24 * 7, // 7 days
  },
  providers: [
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      prompt: "select_account",
      onAuthentication: {
        createGoogleUser,
        redirects: {
          error: "/signin/error",
        },
      },
    }),
  ],
});
