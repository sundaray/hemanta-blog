"use client";

import { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useActionState } from "react";
import { z } from "zod";
import { addOssProject } from "@/lib/actions";
import { FormError } from "@/components/forms/form-error";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { AddOssProjectFormSchema } from "@/lib/schema";
import { AddOssProjectState } from "@/types";

type OssProjectFormValues = z.infer<typeof AddOssProjectFormSchema>;

export function AddOssProjectForm({ className }: { className?: string }) {
  const initialState: AddOssProjectState = {
    ok: false,
    formError: undefined,
    errors: {},
  };
  const [state, formAction, isPending] = useActionState(
    addOssProject,
    initialState,
  );

  const form = useForm<OssProjectFormValues>({
    resolver: zodResolver(AddOssProjectFormSchema),
    defaultValues: {
      url: "",
    },
  });

  useEffect(() => {
    if (state?.errors?.url?.length) {
      form.setError("url", {
        type: "server",
        message: state.errors.url[0],
      });
    }
  }, [state]);

  return (
    <Form {...form}>
      <form action={formAction} className={cn("space-y-8", className)}>
        <FormError message={state.formError} />
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
        <Button type="submit" disabled={isPending}>
          {isPending ? "Adding..." : "Add Project"}
        </Button>
      </form>
    </Form>
  );
}
