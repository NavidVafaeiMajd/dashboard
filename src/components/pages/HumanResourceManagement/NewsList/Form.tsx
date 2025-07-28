import { useEffect } from "react";
import { useForm } from "react-hook-form";
import type z from "zod";
import { validation } from "./validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaMinus } from "react-icons/fa6";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { ImageUploadInput } from "@/components/shared/ImageUploadInput";

interface Props {
  accordion: boolean;
  setAccordion: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormCM = ({ accordion, setAccordion }: Props) => {
  useEffect(() => {
    document.title = "خط مشی ها";
  }, []);

  const form = useForm<z.infer<typeof validation>>({
    resolver: zodResolver(validation),
    defaultValues: {
      name: "",
      description: "",
      image: null,
    },
  });

  const onSubmit = (data: z.infer<typeof validation>) => {
    console.log(data);
  };

  return (
    <div  className={`accordion  ${accordion ? " mb-10 show" : "h-0 hidden"}`}>
      <div className="flex flex-col w-full rounded-md overflow-hidden shadow-md h-full">
        <div className="flex bg-bgBack justify-between p-2 px-5 border-b-2 border-red-500 items-center">
          <h2>ثبت جدید خط مشی</h2>
          <button
            onClick={(e) => {
              setAccordion(!accordion);
              e.preventDefault();
            }}
            className="cart-header-btn flex bg-greenDark text-white items-center py-1 px-2 gap-2 rounded-sm cursor-pointer"
          >
            <FaMinus className="w-5 h-5" />
            مخفی
          </button>
        </div>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="flex flex-col"
          >
            <div className="bg-bgBack space-y-4 p-5">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className="w-full space-y-2">
                    <FormLabel className="text-base">
                      عنوان <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="عنوان"
                        className="min-h-12"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-base">
                      شرح <span className="text-red-500">*</span>
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        placeholder="شرح"
                        className="placeholder:text-lg min-h-20!"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="image"
                render={({ field }) => <ImageUploadInput field={field} />}
              />
            </div>
            <div className="w-full bg-white p-5">
              <Button className="min-h-12 w-30 text-lg">ذخیره</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
export default FormCM;
