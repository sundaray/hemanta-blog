import { SignInWithGoogleForm } from "@/components/signin-with-google-form";

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const { next } = await searchParams;

  return (
    <div className="mx-auto max-w-[400px] space-y-6 px-4">
      <div className="flex flex-col space-y-2 text-center">
        <h1 className="text-2xl font-semibold tracking-tight text-neutral-900">
          Welcome Back
        </h1>
      </div>

      <SignInWithGoogleForm next={next} />
    </div>
  );
}
