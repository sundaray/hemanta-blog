"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  url: z
    .string()
    .min(1, { error: "GitHub Repository URL is required." })
    .refine(
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
});

type OssProjectFormValues = z.infer<typeof formSchema>;

export function AddOssProjectForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Define the form using the useForm hook.
  const form = useForm<OssProjectFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      url: "",
    },
  });

  async function onSubmit(values: OssProjectFormValues) {
    setIsSubmitting(true);

    console.log("GitHub URL submitted:", values);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub Repository URL</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://github.com/shadcn-ui/ui"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? "Adding..." : "Add Project"}
        </Button>
      </form>
    </Form>
  );
}
