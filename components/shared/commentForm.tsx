"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";


export const formSchema = z.object({
  content: z.string().min(3, { message: "Comment must be at least 3 characters." }),
})


export function NewCommentForm({ createNewComment, countComments }: { createNewComment: (content: string) => void, countComments: number }) {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      content: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {

    await createNewComment(values.content);
    form.reset();
  }

  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
        {/* Product Name */}
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold text-gray-900 dark:text-white">
               {countComments > 0 ?"Напишете отзив за продукта" : "Бъдете първият, който ще напише отзив за продукта!"}
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Напишете вашия отзив тук..."
                  {...field}
                  className="h-11 px-4 text-base border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit Button */}
        <div className="flex gap-3 pt-4">
          <Button
            type="submit"
            variant="secondary"
            className="cursor-pointer flex-1 h-12 text-base font-semibold rounded-lg transition-colors"
          >
            Добави отзив
          </Button>

        </div>
      </form>
    </Form>
  )
}