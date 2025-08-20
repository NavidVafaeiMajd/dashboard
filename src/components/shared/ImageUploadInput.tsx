// ImageUploadInput.tsx
import { useEffect, useState } from "react";
import { ImagePlus } from "lucide-react";
import type { ControllerRenderProps, FieldValues, Path } from "react-hook-form";
import { FormItem, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

interface ImageUploadInputProps<T extends FieldValues> {
  field: ControllerRenderProps<T, Path<T>>;
}

export function ImageUploadInput<T extends FieldValues>({
  field,
}: ImageUploadInputProps<T>) {
  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if ((field.value as unknown) instanceof File) {
      const objectUrl = URL.createObjectURL(field.value as File);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreview(null);
    }
  }, [field.value]);

  return (
    <FormItem>
      <FormControl>
        <div>
          <label
            htmlFor="image-upload"
            className="file-input cursor-pointer flex items-center gap-2 rounded-sm overflow-hidden border-1 border-border"
          >
            <ImagePlus className="w-4 h-4" />
            انتخاب تصویر
              </label>
              <span className="text-orange-400 text-sm">فقط فایل های تصویر قابل بارگزاری هستند</span>
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
