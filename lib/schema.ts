import { z } from "zod";

export const AddOssProjectFormSchema = z.object({
  url: z
    .string()
    .min(1, { error: "GitHub Repository URL is required." })
    .pipe(
      z.string().refine(
        (value) => {
          try {
            const url = new URL(value);
            return url.protocol === "https:" && url.hostname === "github.com";
          } catch {
            return false;
          }
        },
        { error: "Please enter a valid GitHub repository URL." },
      ),
    ),
});
