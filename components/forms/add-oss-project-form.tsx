"use client";

import { useActionState, useEffect } from "react";

import { AddOssProjectState } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useSpinDelay } from "spin-delay";
import { z } from "zod";

import { addOssProject } from "@/lib/actions";
import { AddOssProjectFormSchema } from "@/lib/schema";
import { cn } from "@/lib/utils";

import { FormError } from "@/components/forms/form-error";
import { FormSuccess } from "@/components/forms/form-success";
import { Icons } from "@/components/icons";
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
    // Handle server-side field errors
    if (state?.errors?.url?.length) {
      form.setError("url", {
        type: "server",
        message: state.errors.url[0],
      });
    }
    // On success, reset the form
    if (state.ok) {
      form.reset();
    }
  }, [state, form]);

  const showSpinner = useSpinDelay(isPending, {
    delay: 200, // wait 200ms before showing spinner
    minDuration: 400, // once shown, keep spinner visible at least 400ms
  });

  return (
    <Form {...form}>
      <form action={formAction} className={cn("space-y-8", className)}>
        <FormSuccess message={!isPending ? state.formSuccess : undefined} />
        <FormError message={!isPending ? state.formError : undefined} />
        <FormField
          control={form.control}
          name="url"
          render={({ field }) => (
            <FormItem>
              <FormLabel>GitHub Repository URL</FormLabel>
              <FormControl>
                <Input
                  className="h-10"
                  placeholder="https://github.com/yamadashy/repomix"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isPending}>
          {showSpinner ? (
            <>
              <Icons.spinner className="size-4 animate-spin" />
              Add Project
            </>
          ) : (
            "Add Project"
          )}
        </Button>
      </form>
    </Form>
  );
}
