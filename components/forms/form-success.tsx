import { Icons } from "@/components/icons";

type FormSuccessProps = {
  message?: string;
};

export function FormSuccess({ message }: FormSuccessProps) {
  if (!message) {
    return null;
  }

  return (
    <div
      role="status"
      className="flex items-center gap-x-2 rounded-md bg-emerald-100 p-3 text-sm text-emerald-800"
    >
      <Icons.checkCircle className="size-4 shrink-0 text-emerald-800" />
      <p>{message}</p>
    </div>
  );
}
