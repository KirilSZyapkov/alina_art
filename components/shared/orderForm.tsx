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
import { Input } from "../ui/input";

export const formSchema = z.object({
  senderName: z.string().min(3, { message: "Моля попълнете името си." }),
  senderEmail: z.string().email({ message: "Моля въведете валиден имейл адрес." }),
  message: z.string().min(10, { message: "Съобщението трябва да е поне 10 символа." }),
})

export default function OrderForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      senderName: "",
      senderEmail:"",
      message:""
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {

  
    form.reset();
  }

  return (

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
        {/* Product Name */}
        <FormField
          control={form.control}
          name="senderName"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold text-gray-900 dark:text-white">
                Вашето име
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Напишете вашето име"
                  {...field}
                  className="h-11 px-4 text-base border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="senderEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold text-gray-900 dark:text-white">
               Вашия имейл адрес
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Въведете вашия имейл адрес"
                  {...field}
                  className="h-11 px-4 text-base border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-base font-semibold text-gray-900 dark:text-white">
                Вашето съобщение
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Напишете вашето съобщение за поръчка"
                  {...field}
                  className="h-11 px-4 text-base border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Submit Button */}
        <div className="flex gap-3 pt-4 justify-end w-full">
          <Button
            type="submit"
            variant="secondary"
            className="mt-8 sm:mt-10 w-full sm:w-auto px-6 sm:px-8 py-3 text-base sm:text-lg font-semibold bg-blue-600 hover:bg-blue-400 rounded-lg transition-colors duration-200 cursor-pointer"
          >
            Направе вашата поръчка
          </Button>

        </div>
      </form>
    </Form>
  )
}