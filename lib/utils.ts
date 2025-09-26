import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Result, ResultAsync } from "neverthrow";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const unwrapResult = async <T, E extends Error>(
  resultAsync: ResultAsync<T, E>,
): Promise<T> => {
  const result = await resultAsync;
  return result._unsafeUnwrap();
};
