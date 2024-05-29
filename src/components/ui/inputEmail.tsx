"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const FormSchema = z.object({
  email: z.string().email({
    message: "Email is invalid.",
  }),
});

export function InputEmail() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  return (
    <Form {...form}>
      <form className="">
        <div className="flex w-full max-w-sm items-center space-x-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="correo" {...field} />
                </FormControl>
              </FormItem>
            )}
          />
          <Link to="/movie">Entrar</Link>
        </div>
      </form>
    </Form>
  );
}
