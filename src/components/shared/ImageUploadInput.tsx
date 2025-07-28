import {
   FormControl,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import { ImagePlus } from "lucide-react";
import { useEffect, useState } from "react";

import type { ControllerRenderProps } from "react-hook-form";
import type z from "zod";
import type { validation } from "../pages/HumanResourceManagement/Policies/validation";
import { Input } from "@/components/ui/input";

interface ImageUploadInputProps {
   field: ControllerRenderProps<z.infer<typeof validation>, "image">;
}

export function ImageUploadInput({ field }: ImageUploadInputProps) {
   const [preview, setPreview] = useState<string | null>(null);

   useEffect(() => {
      if (field.value instanceof File) {
         const objectUrl = URL.createObjectURL(field.value);
         setPreview(objectUrl);

         return () => URL.revokeObjectURL(objectUrl);
      } else {
         setPreview(null);
      }
   }, [field.value]);

   return (
      <FormItem>
         <FormLabel className="text-right block mb-2 text-base ">
            تصویر محصول
            <span className="text-red-500">*</span>
         </FormLabel>
         <FormControl>
            <div className="flex flex-col items-start gap-3">
               <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex items-center gap-2 border-2 border-dashed border-gray-300 px-4 py-2 rounded-xl text-sm text-gray-600 hover:bg-gray-50 transition duration-200"
               >
                  <ImagePlus className="w-4 h-4" />
                  انتخاب تصویر
               </label>
               <Input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => field.onChange(e.target.files?.[0])}
               />
               {preview && (
                  <img
                     src={preview}
                     alt="پیش‌نمایش"
                     className="mt-2 w-40 h-40 object-cover rounded-xl border shadow"
                  />
               )}
            </div>
         </FormControl>
         <FormMessage />
      </FormItem>
   );
}
