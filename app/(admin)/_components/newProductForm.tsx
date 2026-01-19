"use client"

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Upload, X } from "lucide-react";
import Image from "next/image";

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
import { Textarea } from "@/components/ui/textarea";
import { productCreateSchema } from "@/lib/product.zod_schema";


export const formSchema = z.object({
  title: z.string().min(2, { message: "Product name must be at least 5 characters." }),
  price: z.string().min(1, { message: "Price must be possitive value and not 0." }),
  description: z.string().min(10, { message: "Description must be at least 10 characters." }),
  images: z.array(z.instanceof(File)).min(1, { message: "Please upload at least one image." }),
})


export function NewProductForm({ createNewProduct }: { createNewProduct: (values: z.infer<typeof productCreateSchema>) => Promise<void> }) {
  const [previewUrls, setPreviewUrls] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      price: "",
      description: "",
      images: []
    },
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const currentImages = form.getValues("images");
      const newFiles = Array.from(files);
      const newUrls: string[] = [];

      newFiles.forEach(file => {
        const reader = new FileReader();
        reader.onloadend = () => {
          newUrls.push(reader.result as string);
          if (newUrls.length === newFiles.length) {
            const combined = [...currentImages, ...newFiles];
            const combinedUrls = [...previewUrls, ...newUrls];
            setPreviewUrls(combinedUrls);
            form.setValue("images", combined, { shouldValidate: true });
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removeImage = (index: number) => {
    const currentImages = form.getValues("images");
    const updated = currentImages.filter((_, i) => i !== index);
    const updatedUrls = previewUrls.filter((_, i) => i !== index);
    setPreviewUrls(updatedUrls);
    form.setValue("images", updated, { shouldValidate: true });
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const files = e.dataTransfer.files;
    if (files) {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;
      Object.defineProperty(input, 'files', { value: files });
      const event = new Event('change', { bubbles: true });
      Object.defineProperty(event, 'target', { value: input });
      handleImageChange(event as any);
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    const newProduct = { ...values, ownerId: "test_owner_id" };

    await createNewProduct(newProduct);
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Create New Product
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mt-2">
          Add a new product to your catalog
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 md:space-y-8">
          {/* Product Name */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold text-gray-900 dark:text-white">
                  Product Name
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter product name"
                    {...field}
                    className="h-11 px-4 text-base border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Price */}
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold text-gray-900 dark:text-white">
                  Price
                </FormLabel>
                <FormControl>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 dark:text-gray-400">
                      $
                    </span>
                    <Input
                      placeholder="0.00"
                      {...field}
                      type="number"
                      step="0.01"
                      className="h-11 px-4 pl-8 text-base border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-500 transition-colors"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Description */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold text-gray-900 dark:text-white">
                  Description
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Write a detailed description of your product..."
                    {...field}
                    className="min-h-32 px-4 py-3 text-base border-2 border-gray-200 dark:border-gray-700 rounded-lg focus:border-blue-500 dark:focus:border-blue-500 transition-colors resize-none"
                  />
                </FormControl>
                <FormDescription className="text-sm text-gray-500 dark:text-gray-400">
                  Minimum 10 characters
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Images */}
          <FormField
            control={form.control}
            name="images"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-base font-semibold text-gray-900 dark:text-white">
                  Product Images
                </FormLabel>
                <FormControl>
                  <div className="space-y-4">
                    {/* Upload Area */}
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      className={`relative border-2 border-dashed rounded-lg p-8 md:p-12 transition-all ${isDragging
                        ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : "border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500"
                        }`}
                    >
                      <input
                        id="images"
                        type="file"
                        multiple
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                      <label
                        htmlFor="images"
                        className="flex flex-col items-center justify-center cursor-pointer"
                      >
                        <Upload className="w-10 h-10 md:w-12 md:h-12 text-gray-400 dark:text-gray-500 mb-3" />
                        <p className="text-center">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            Click to upload
                          </span>
                          {" or drag and drop"}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          PNG, JPG, GIF up to 10MB each
                        </p>
                      </label>
                    </div>

                    {/* Image Preview Grid */}
                    {previewUrls.length > 0 && (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                          {previewUrls.length} image{previewUrls.length !== 1 ? "s" : ""} selected
                        </p>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                          {previewUrls.map((url, index) => (
                            <div
                              key={index}
                              className="relative aspect-square rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 group"
                            >
                              <Image
                                src={url}
                                alt={`Preview ${index + 1}`}
                                fill
                                className="object-cover group-hover:brightness-75 transition-all"
                              />
                              <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50"
                              >
                                <X className="w-6 h-6 text-white" />
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </FormControl>
                <FormDescription className="text-sm text-gray-500 dark:text-gray-400">
                  Upload one or multiple images. You can add, remove, and reorder them.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              className="cursor-pointer flex-1 h-12 text-base font-semibold bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              Create Product
            </Button>
            <Button
              type="reset"
              variant="outline"
              className="cursor-pointer flex-1 h-12 text-base font-semibold border-2 border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Clear
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}