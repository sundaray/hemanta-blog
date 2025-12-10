import type {
  CreateGoogleUserParams,
  CreateGoogleUserReturn,
} from "lucidauth/core/types";
import { db } from "@/db";
import { users, accounts } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function createGoogleUser(
  userClaims: CreateGoogleUserParams,
): Promise<CreateGoogleUserReturn> {
  const { email, name, picture, sub } = userClaims;

  const existingUser = await db.query.users.findFirst({
    where: eq(users.email, email),
    with: {
      accounts: {
        where: eq(accounts.provider, "google"),
      },
    },
  });

  // User exists with a Google account - return email
  if (existingUser && existingUser.accounts.length > 0) {
    return { email };
  }

  // User with Google account does not exist - create user and Google account
  await db.transaction(async (tx) => {
    const [newUser] = await tx
      .insert(users)
      .values({
        email,
        emailVerified: true,
        name,
        picture,
      })
      .returning();

    await tx.insert(accounts).values({
      userId: newUser.id,
      provider: "google",
      providerAccountId: sub,
    });
  });

  return { email };
}