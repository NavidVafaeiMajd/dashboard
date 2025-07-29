import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
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
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import DatePicker from "react-multi-date-picker";

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
    <div className={`accordion  ${accordion ? " mb-10 show" : "h-0 hidden"}`}>
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
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-2">
                        <FormLabel className="text-base">
                          موضوع ابلاغیه <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="موضوع ابلاغیه"
                            className="min-h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div className="flex gap-5">
                  <FormField
                    control={form.control}
                    name="finishDate"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-2">
                        <FormLabel className="text-base">
                          تاریخ شروع
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <DatePicker
                            value={field.value ? new Date(field.value) : ""}
                            onChange={(date) =>
                              field.onChange(
                                date?.isValid ? date.toDate() : null
                              )
                            }
                            format="YYYY/MM/DD"
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-right"
                            placeholder="تاریخ شروع"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="startDate"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-2">
                        <FormLabel className="text-base">
                          تاریخ پایان
                          <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <DatePicker
                            value={field.value ? new Date(field.value) : ""}
                            onChange={(date) =>
                              field.onChange(
                                date?.isValid ? date.toDate() : null
                              )
                            }
                            format="YYYY/MM/DD"
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="bottom-right"
                            placeholder="تاریخ پایان "
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-2">
                        <FormLabel className="text-base">
                          واحد سازمانی  <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="واحد سازمانی "
                            className="min-h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem className="w-full space-y-2">
                        <FormLabel className="text-base">
                          اختصاری <span className="text-red-500">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            placeholder="اختصاری"
                            className="min-h-12"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
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
