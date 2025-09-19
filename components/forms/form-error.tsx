type FormErrorProps = {
  message?: string;
};

export function FormError({ message }: FormErrorProps) {
  if (!message) {
    return null;
  }

  return (
    <div
      role="alert"
      className="flex items-center gap-x-2 rounded-md bg-red-100 p-3 text-sm text-red-800"
    >
      <p>{message}</p>
    </div>
  );
}
