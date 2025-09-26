import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Result } from "neverthrow";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const unwrapResult = async <T, E extends Error>(
  resultPromise: Promise<Result<T, E>>,
): Promise<T> => {
  const result = await resultPromise;
  return result._unsafeUnwrap();
};
