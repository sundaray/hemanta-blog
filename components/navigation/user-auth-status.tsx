import { getSession } from "@/lib/auth/session";

import { HireMeButton } from "@/components/navigation/hire-me-button";
import { UserAccountNavClient } from "@/components/navigation/user-account-nav-client";

export async function UserAuthStatus() {
  const { user } = await getSession();

  if (user?.email) {
    return <UserAccountNavClient email={user.email} />;
  }

  return <HireMeButton />;
}
